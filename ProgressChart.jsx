import React from 'react';

const ProgressChart = () => {
  const progressData = [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 45 },
    { day: 'Wed', value: 80 },
    { day: 'Thu', value: 60 },
    { day: 'Fri', value: 90 },
    { day: 'Sat', value: 30 },
    { day: 'Sun', value: 75 },
  ];

  const maxValue = Math.max(...progressData.map(item => item.value));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Progress</h3>
      <div className="flex items-end justify-between h-40">
        {progressData.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div className="text-xs text-gray-500 mb-2">{item.day}</div>
            <div
              className="w-8 bg-primary-500 rounded-t-lg transition-all duration-300 hover:bg-primary-600"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            ></div>
            <div className="text-xs text-gray-700 mt-1">{item.value}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressChart;