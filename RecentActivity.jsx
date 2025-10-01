import React from 'react';
import { CheckCircle, PlayCircle, Award, BookOpen } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'completion',
      icon: CheckCircle,
      title: 'Completed React Fundamentals',
      description: 'You finished the React Basics course',
      time: '2 hours ago',
      color: 'text-green-500'
    },
    {
      id: 2,
      type: 'started',
      icon: PlayCircle,
      title: 'Started Advanced JavaScript',
      description: 'You began the ES6+ Features module',
      time: '1 day ago',
      color: 'text-blue-500'
    },
    {
      id: 3,
      type: 'achievement',
      icon: Award,
      title: 'Earned Quick Learner Badge',
      description: 'Completed 5 courses in one week',
      time: '2 days ago',
      color: 'text-yellow-500'
    },
    {
      id: 4,
      type: 'progress',
      icon: BookOpen,
      title: 'Made progress in Node.js',
      description: 'Reached 75% in Backend Development',
      time: '3 days ago',
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className={`p-2 rounded-lg ${activity.color} bg-opacity-10`}>
              <activity.icon className={`h-5 w-5 ${activity.color}`} />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900">{activity.title}</h4>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-primary-600 hover:text-primary-700 text-sm font-medium py-2 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
        View All Activity
      </button>
    </div>
  );
};

export default RecentActivity;