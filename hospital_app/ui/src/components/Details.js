// FitnessData.jsx
import React, { useState } from 'react';

const FitnessData = () => {
  const [fitnessData, setFitnessData] = useState(null);
  const [error, setError] = useState(null);

  const fetchFitnessData = async () => {
    try {
      const response = await fetch('http://localhost:4000/fitness-data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data && Array.isArray(data) && data.length > 0) {
        setFitnessData(data[0]);
        setError(null);
      } else {
        throw new Error('No fitness data available');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="page">
      <h1 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-500 text-gray-800">
        Your Fitness Data
      </h1>
      
      <button 
        onClick={fetchFitnessData}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Refresh Data
      </button>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        {error ? (
          <p className="text-red-500">Error: {error}. Please try again.</p>
        ) : fitnessData ? (
          <>
            <div className="grid gap-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-semibold text-gray-700">Phone:</span>
                <span>{fitnessData.phone || 'N/A'}</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-semibold text-gray-700">Blood Pressure:</span>
                <span className="text-blue-600">
                  {fitnessData.bloodPressure?.systolic || 'N/A'}/{fitnessData.bloodPressure?.diastolic || 'N/A'}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-semibold text-gray-700">Heart Rate:</span>
                <span className="text-blue-600">
                  {fitnessData.heartRate ? `${fitnessData.heartRate} bpm` : 'N/A'}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-semibold text-gray-700">Oxygen Level:</span>
                <span className="text-blue-600">
                  {fitnessData.oxygenLevel ? `${fitnessData.oxygenLevel}%` : 'N/A'}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-semibold text-gray-700">Physical Activity:</span>
                <span className="text-blue-600">
                  {fitnessData.physicalActivity?.activity || 'N/A'} 
                  {fitnessData.physicalActivity?.duration ? ` for ${fitnessData.physicalActivity.duration}` : ''}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-semibold text-gray-700">Stress Level:</span>
                <span className="text-blue-600">
                  {fitnessData.stressLevel ? `${fitnessData.stressLevel}/10` : 'N/A'}
                </span>
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Click refresh to load fitness data.</p>
        )}
      </div>
    </div>
  );
};

export default FitnessData;