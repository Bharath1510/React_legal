import React from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Info, Eye, BarChart3, Archive, Briefcase, Clock, CheckCircle, AlertTriangle, FileText, Settings, Users, Calendar } from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const pieChartData = [
    { label: 'Contracts', value: 38, color: '#1e40af' },
    { label: "CO's", value: 24, color: '#f97316' },
    { label: 'Forms', value: 20, color: '#10b981' },
    { label: 'Misc', value: 10, color: '#8b5cf6' },
    { label: 'Need Review', value: 9, color: '#ef4444' }
  ];

  const cards = [
    {
      title: 'Needs Review',
      value: 28,
      icon: Eye,
      bgColor: 'bg-red-100',
      iconColor: 'text-red-500',
      iconBg: 'bg-red-500'
    },
    {
      title: 'AI Review',
      value: 24,
      icon: BarChart3,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-500',
      onClick: () => onNavigate('ai-review')
    },
    {
      title: 'Pending Experitec Legal Review',
      value: 7,
      icon: FileText,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-500'
    },
    {
      title: 'Pending Outside Counsel Review',
      value: 15,
      icon: Clock,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      iconBg: 'bg-yellow-500'
    },
    {
      title: 'Pending Customer Response',
      value: 15,
      icon: Settings,
      bgColor: 'bg-cyan-100',
      iconColor: 'text-cyan-500',
      iconBg: 'bg-cyan-500'
    },
    {
      title: 'Pending Internal Experitec Response',
      value: 11,
      icon: Users,
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-500',
      iconBg: 'bg-gray-500'
    },
    {
      title: 'Signed by Experitec',
      value: 8,
      icon: Calendar,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-500'
    },
    {
      title: 'Fully Executed',
      value: 32,
      icon: CheckCircle,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-500',
      iconBg: 'bg-green-500'
    }
  ];

  const createPieChart = () => {
    const total = pieChartData.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;
    const radius = 80;
    const centerX = 120;
    const centerY = 120;

    return pieChartData.map((item, index) => {
      const percentage = (item.value / total) * 100;
      const angle = (item.value / total) * 360;
      const largeArcFlag = angle > 180 ? 1 : 0;

      const x1 = centerX + radius * Math.cos((currentAngle * Math.PI) / 180);
      const y1 = centerY + radius * Math.sin((currentAngle * Math.PI) / 180);
      
      currentAngle += angle;
      
      const x2 = centerX + radius * Math.cos((currentAngle * Math.PI) / 180);
      const y2 = centerY + radius * Math.sin((currentAngle * Math.PI) / 180);

      const pathData = `
        M ${centerX} ${centerY}
        L ${x1} ${y1}
        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
        Z
      `;

      return (
        <path
          key={index}
          d={pathData}
          fill={item.color}
          className="hover:opacity-80 transition-opacity"
        />
      );
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Legal Requests Dashboard</h1>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2">
            <ChevronLeft className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-700">Apr 19, 2025</span>
            <span className="mx-2 text-gray-500">-</span>
            <span className="text-sm text-gray-700">May 19, 2025</span>
            <ChevronRight className="w-4 h-4 text-gray-500 ml-2" />
          </div>
          
          <div className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2">
            <span className="text-sm text-gray-700 mr-2">Last Month</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Request */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Total Request</h3>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">96</div>
              <div className="text-sm text-purple-600 font-medium">New: 68</div>
            </div>
          </div>
        </div>

        {/* Total Request Distribution */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Total Request Distribution</h3>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center">
            <div className="relative mr-6">
              <svg width="240" height="240" className="transform -rotate-90">
                {createPieChart()}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              {pieChartData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-sm" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* High Priority Items */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">High Priority Items</h3>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-5xl font-bold text-red-500 mb-4">12</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-red-500 text-white px-3 py-2 rounded">
              <span className="text-sm font-medium">Action Required</span>
              <span className="text-sm font-bold">7</span>
            </div>
            <div className="flex items-center justify-between bg-orange-500 text-white px-3 py-2 rounded">
              <span className="text-sm font-medium">Overdue</span>
              <span className="text-sm font-bold">5</span>
            </div>
            <div className="flex items-center justify-between bg-gray-500 text-white px-3 py-2 rounded">
              <span className="text-sm font-medium">Approaching Deadline</span>
              <span className="text-sm font-bold">9</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} rounded-lg p-6 cursor-pointer transition-transform hover:scale-105 ${
              card.onClick ? 'hover:shadow-lg' : ''
            }`}
            onClick={card.onClick}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 ${card.iconBg} rounded-full flex items-center justify-center`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">{card.value}</div>
            <div className="text-sm font-medium text-gray-700">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;