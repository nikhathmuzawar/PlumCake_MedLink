import React, { useState } from 'react';
import { Activity, Heart, Brain, Phone, Activity as ActivityIcon } from 'lucide-react';
import Sidebar from './Sidebar';
const FitnessData = () => {
  const [fitnessData, setFitnessData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchFitnessData = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
    <Sidebar />
    <div className='main-content'>
      <div >
        <h1 className="text-3xl font-bold text-gray-800">
          Fitness Dashboard
        </h1>
        
        <button 
          onClick={fetchFitnessData}
          disabled={loading}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          <ActivityIcon size={20} />
          {loading ? 'Refreshing...' : 'Refresh Data'}
        </button>
      </div>

      {error ? (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
          <p className="text-red-700">Error: {error}. Please try again.</p>
        </div>
      ) : fitnessData ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
                <p className="text-gray-500 text-sm">Primary phone number</p>
              </div>
            </div>
            <p className="text-2xl font-semibold text-blue-600">{fitnessData.phone || 'N/A'}</p>
          </div>

          {/* Blood Pressure Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-red-50 rounded-lg">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Blood Pressure</h3>
                <p className="text-gray-500 text-sm">Systolic/Diastolic</p>
              </div>
            </div>
            <p className="text-2xl font-semibold text-red-600">
              {`${fitnessData.bloodPressure?.systolic || 'N/A'}/${fitnessData.bloodPressure?.diastolic || 'N/A'}`}
            </p>
          </div>

          {/* Heart Rate Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-50 rounded-lg">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Heart Rate</h3>
                <p className="text-gray-500 text-sm">Beats per minute</p>
              </div>
            </div>
            <p className="text-2xl font-semibold text-purple-600">
              {fitnessData.heartRate ? `${fitnessData.heartRate} bpm` : 'N/A'}
            </p>
          </div>

          {/* Oxygen Level Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-50 rounded-lg">

              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Oxygen Level</h3>
                <p className="text-gray-500 text-sm">Blood oxygen saturation</p>
              </div>
            </div>
            <p className="text-2xl font-semibold text-green-600">
              {fitnessData.oxygenLevel ? `${fitnessData.oxygenLevel}%` : 'N/A'}
            </p>
          </div>

          {/* Physical Activity Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-orange-50 rounded-lg">
                <Activity className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Physical Activity</h3>
                <p className="text-gray-500 text-sm">Latest activity details</p>
              </div>
            </div>
            <p className="text-2xl font-semibold text-orange-600">
              {fitnessData.physicalActivity?.activity || 'N/A'} 
              {fitnessData.physicalActivity?.duration ? ` (${fitnessData.physicalActivity.duration})` : ''}
            </p>
          </div>

          {/* Stress Level Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-indigo-50 rounded-lg">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Stress Level</h3>
                <p className="text-gray-500 text-sm">Current stress rating</p>
              </div>
            </div>
            <p className="text-2xl font-semibold text-indigo-600">
              {fitnessData.stressLevel ? `${fitnessData.stressLevel}/10` : 'N/A'}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl p-8 text-center shadow-sm">
          <ActivityIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">
            Click refresh to load your latest fitness data
          </p>
        </div>
      )}
      </div>
    </div>
  );
};

export default FitnessData;