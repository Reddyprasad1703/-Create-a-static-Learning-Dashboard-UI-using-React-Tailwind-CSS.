import React from 'react';
import { 
  Home, 
  BookOpen, 
  BarChart3, 
  Calendar, 
  Settings, 
  HelpCircle,
  Award
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BookOpen, label: 'My Courses', active: false },
    { icon: BarChart3, label: 'Progress', active: false },
    { icon: Calendar, label: 'Schedule', active: false },
    { icon: Award, label: 'Achievements', active: false },
    { icon: Settings, label: 'Settings', active: false },
    { icon: HelpCircle, label: 'Help & Support', active: false },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm border-r border-gray-200 h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-primary-600">LearnHub</h1>
        <p className="text-sm text-gray-500">Education Platform</p>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Quick Stats */}
      <div className="p-4 border-t border-gray-200 mt-4">
        <div className="bg-primary-50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-primary-900 mb-2">Weekly Goal</h3>
          <div className="w-full bg-primary-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full" 
              style={{ width: '75%' }}
            ></div>
          </div>
          <p className="text-xs text-primary-700 mt-2">6 of 8 hours completed</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;