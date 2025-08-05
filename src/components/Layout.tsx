import React from 'react';
import { ChevronDown, User } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded mr-3 flex items-center justify-center">
              <div className="text-white font-bold text-sm">E</div>
            </div>
            <span className="text-xl font-bold text-blue-600">EXPERITEC</span>
          </div>

          {/* Center Dropdown */}
          <div className="flex items-center">
            <div className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 cursor-pointer">
              <span className="text-gray-700 mr-2">Legal Team</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center cursor-pointer">
            <div className="w-8 h-8 bg-blue-500 rounded-full mr-2 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">David Writer</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500 ml-2" />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-48 bg-white h-screen border-r border-gray-200 p-4">
          <div className="space-y-2">
            <button
              onClick={() => onNavigate('dashboard')}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                currentPage === 'dashboard'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </div>
              Dashboard
            </button>

            <button className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg text-left">
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              Analytics
            </button>

            <button className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg text-left">
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              Archived
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;