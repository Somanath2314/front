import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu, LogOut, UserPlus, Workflow } from 'lucide-react';

const Header = () => {
  const email = useSelector((state) => state.user.email);
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const role = useSelector((state) => state.user.role);
  const name = useSelector((state) => state.user.name);
  
  return (
    <header className="relative z-50">
      <nav className="bg-base-300 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Left Section: Dropdown and Logo */}
            <div className="flex items-center">
              <div className="sm:hidden">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <Menu className="h-6 w-6" />
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-50 menu p-2 bg-gray-900 rounded-lg shadow-lg mt-2 w-56 border border-gray-700">
                    <li>
                      <Link to="/" className="text-gray-300 hover:text-white hover:bg-gray-800 py-2 px-4 rounded-md">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/docs" className="text-gray-300 hover:text-white hover:bg-gray-800 py-2 px-4 rounded-md">
                        Docs
                      </Link>
                    </li>
                    {isAuth && (
                      <li>
                        <Link to="/api-endpoints" className="text-gray-300 hover:text-white hover:bg-gray-800 py-2 px-4 rounded-md">
                          API Endpoints
                        </Link>
                      </li>
                    )}
                    {role === 'admin' && (
                      <li>
                        <Link to="/admin-section" className="text-gray-300 hover:text-white hover:bg-gray-800 py-2 px-4 rounded-md">
                          Admin Section
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="transition-transform hover:scale-95">
                  <div className="flex items-center">
                    <Workflow className="h-6 w-6 text-blue-400 mr-2" />
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                      FrontFlow
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Center Section: Navigation Links */}
            <div className="hidden sm:flex sm:items-center sm:ml-6 space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-95">
                Home
              </Link>
              <Link to="/docs" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-95">
                Docs
              </Link>
              {isAuth && (
                <Link to="/api-endpoints" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-95">
                  Api Endpoints
                </Link>
              )}
              {role === 'admin' && (
                <Link to="/admin-section" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-95">
                  Admin Section
                </Link>
              )}
            </div>

            {/* Right Section: Auth Button */}
            <div className="flex items-center">
              {isAuth ? (
                <Link
                  to="/logout"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <UserPlus className="h-4 w-4" />
                  Register
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;