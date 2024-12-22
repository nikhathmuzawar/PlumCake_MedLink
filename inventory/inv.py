import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from flask import Flask, request, jsonify, render_template
import joblib
import matplotlib.pyplot as plt
import os
import matplotlib
matplotlib.use('Agg')  # Use a non-GUI backend

# Load the dataset
data_path = "inventory/hospital_inventory_large.csv"
data = pd.read_csv(data_path)

# Add a new feature: Reorder_Days
data['Reorder_Days'] = (data['Current_Stock'] - data['Safety_Stock']) / data['Daily_Use']
data['Reorder_Days'] = data['Reorder_Days'].apply(lambda x: max(x, 0))  # Ensure non-negative values

# Select features and target
features = ['Category', 'Item_Name', 'Current_Stock', 'Lead_Time', 'Safety_Stock', 'Daily_Use']
target = 'Reorder_Days'
X = data[features]
y = data[target]

# Preprocess categorical and numerical data
numerical_features = ['Current_Stock', 'Lead_Time', 'Safety_Stock', 'Daily_Use']
categorical_features = ['Category', 'Item_Name']

preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), numerical_features),
        ('cat', OneHotEncoder(), categorical_features)
    ])

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create regression pipeline
model = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('regressor', RandomForestRegressor(n_estimators=100, random_state=42))
])

# Train the model
model.fit(X_train, y_train)

# Save the trained model
joblib.dump(model, 'inventory_reorder_model.pkl')

# Flask app for API endpoints
app = Flask(__name__)

# Load the model
model = joblib.load('inventory_reorder_model.pkl')

@app.route('/')
def dashboard():
    """Render the dashboard page."""
    # Read the CSV file
    data = pd.read_csv(data_path)
    
    # Summarize stock levels by category
    category_summary = data.groupby('Category')[['Current_Stock', 'Safety_Stock']].sum()
    
    # Get items with low reorder days
    data['Reorder_Days'] = (data['Current_Stock'] - data['Safety_Stock']) / data['Daily_Use']
    data['Reorder_Days'] = data['Reorder_Days'].apply(lambda x: max(x, 0))  # Ensure non-negative values
    alerts = data[data['Reorder_Days'] <= 5][['Item_Name', 'Reorder_Days']]
    
    # Generate a bar graph for category summary
    fig, ax = plt.subplots(figsize=(10, 6))
    category_summary.plot(kind='bar', ax=ax)
    ax.set_title('Category Stock Summary')
    ax.set_ylabel('Stock Levels')
    ax.set_xlabel('Category')
    plt.tight_layout()

    # Save the graph as an image
    graph_path = os.path.join('static', 'category_summary.png')
    plt.savefig(graph_path)
    plt.close()
    
    return render_template('dashboard.html', graph_path=graph_path, alerts=alerts.to_dict(orient='records'))


@app.route('/update_stock', methods=['POST'])
def update_stock():
    """Update the Current_Stock of an item in the database."""
    req = request.get_json()
    item_name = req.get('Item_Name')
    new_stock = req.get('Current_Stock')

    if item_name not in data['Item_Name'].values:
        return jsonify({"error": "Item not found"}), 404

    data.loc[data['Item_Name'] == item_name, 'Current_Stock'] = new_stock
    data.to_csv(data_path, index=False)
    return jsonify({"message": "Stock updated successfully"}), 200

@app.route('/predict_reorder', methods=['POST'])
def predict_reorder():
    """Predict the number of days before reordering is necessary."""
    req = request.get_json()
    item_name = req.get('Item_Name')

    if item_name not in data['Item_Name'].values:
        return jsonify({"error": "Item not found"}), 404

    item_data = data[data['Item_Name'] == item_name]
    prediction = model.predict(item_data[features])

    return jsonify({"Item_Name": item_name, "Reorder_Days": prediction[0]}), 200

if __name__ == '__main__':
    app.run(debug=True)
