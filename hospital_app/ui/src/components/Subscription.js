import React, { useState } from 'react';

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-600">
          Choose Your Plan
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Basic Plan */}
          <div
            className={`bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer border-2 ${
              selectedPlan === 'basic' ? 'border-blue-500' : 'border-gray-200'
            }`}
            onClick={() => handlePlanSelect('basic')}
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Basic Plan</h2>
            <p className="text-3xl font-extrabold text-gray-800 mb-6">₹9,999.99/month</p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span> Basic fitness metrics
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span> Patient Management
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span> Medicine Delivery
              </li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div
            className={`bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer border-2 ${
              selectedPlan === 'premium' ? 'border-blue-500' : 'border-gray-200'
            }`}
            onClick={() => handlePlanSelect('premium')}
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Premium Plan</h2>
            <p className="text-3xl font-extrabold text-gray-800 mb-6">₹14,999.99/month</p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span> All Basic features
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span> Advanced Analytics
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span> Priority Support
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span> Inventory Management
              </li>
            </ul>
          </div>
        </div>

        {selectedPlan && (
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-gray-700">
              You selected the <span className="text-blue-600">{selectedPlan}</span> plan.
            </p>
            <button
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
