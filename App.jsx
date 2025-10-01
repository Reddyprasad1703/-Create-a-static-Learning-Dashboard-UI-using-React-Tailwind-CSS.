import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import StatsCard from './components/StatsCard';
import ProgressChart from './components/ProgressChart';
import CourseCard from './components/CourseCard';
import RecentActivity from './components/RecentActivity';
import { BookOpen, Target, Award, Clock } from 'lucide-react';

function App() {
  const stats = [
    {
      title: 'Enrolled Courses',
      value: '12',
      change: 20,
      icon: BookOpen,
      color: 'bg-blue-500'
    },
    {
      title: 'Completed Lessons',
      value: '45',
      change: 15,
      icon: Target,
      color: 'bg-green-500'
    },
    {
      title: 'Achievements',
      value: '8',
      change: 5,
      icon: Award,
      color: 'bg-yellow-500'
    },
    {
      title: 'Learning Hours',
      value: '36h',
      change: 25,
      icon: Clock,
      color: 'bg-purple-500'
    }
  ];

  const courses = [
    {
      id: 1,
      title: 'React Advanced Patterns',
      instructor: 'Sarah Johnson',
      description: 'Master advanced React patterns and best practices for building scalable applications.',
      duration: '8 weeks',
      students: '2.4k',
      lessons: 24,
      difficulty: 'Intermediate',
      progress: 75
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      instructor: 'Mike Chen',
      description: 'Learn the core concepts of JavaScript from scratch with hands-on projects.',
      duration: '6 weeks',
      students: '5.1k',
      lessons: 18,
      difficulty: 'Beginner',
      progress: 100
    },
    {
      id: 3,
      title: 'Node.js Backend Development',
      instructor: 'Emily Davis',
      description: 'Build robust backend services with Node.js, Express, and MongoDB.',
      duration: '10 weeks',
      students: '1.8k',
      lessons: 32,
      difficulty: 'Advanced',
      progress: 40
    },
    {
      id: 4,
      title: 'UI/UX Design Principles',
      instructor: 'Alex Thompson',
      description: 'Create beautiful and user-friendly interfaces with modern design principles.',
      duration: '4 weeks',
      students: '3.2k',
      lessons: 12,
      difficulty: 'Beginner',
      progress: 25
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, John! 👋</h1>
              <p className="text-gray-600 mt-2">Here's your learning progress for this week</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            {/* Charts and Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <ProgressChart />
              </div>
              <div className="lg:col-span-1">
                <RecentActivity />
              </div>
            </div>

            {/* My Courses */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  View All Courses
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;