import React from 'react';
import { Clock, Users, BookOpen } from 'lucide-react';

const CourseCard = ({ course }) => {
  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{course.instructor}</p>
          </div>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
            course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {course.difficulty}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4">{course.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen className="h-4 w-4" />
            <span>{course.lessons} lessons</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-2">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${getProgressColor(course.progress)} transition-all duration-300`}
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>

        <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg transition-colors font-medium">
          Continue Learning
        </button>
      </div>
    </div>
  );
};

export default CourseCard;