import React from 'react';
import { Button } from '@/components/ui/button';
import { Settings, User, Bell, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-10">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative w-12 h-12 rounded-lg bg-black shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden border border-gray-800">
            {/* Matrix digital rain effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-green-900/20"></div>
            
            {/* Animated matrix dots */}
            <div className="absolute top-1 left-2 w-0.5 h-0.5 bg-green-400 rounded-full animate-pulse opacity-70"></div>
            <div className="absolute top-3 right-2 w-0.5 h-0.5 bg-green-300 rounded-full animate-ping opacity-60"></div>
            <div className="absolute bottom-2 left-1 w-0.5 h-0.5 bg-green-500 rounded-full animate-pulse opacity-80"></div>
            <div className="absolute bottom-1 right-3 w-0.5 h-0.5 bg-green-400 rounded-full animate-ping opacity-50"></div>
            
            {/* Trinity symbol - Matrix-inspired geometric design */}
            <div className="relative z-10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-green-400">
                <defs>
                  <linearGradient id="matrixGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="1"/>
                    <stop offset="50%" stopColor="#059669" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#047857" stopOpacity="0.6"/>
                  </linearGradient>
                </defs>
                <g fill="url(#matrixGradient)">
                  {/* Three interconnected triangular nodes representing trinity */}
                  <polygon points="12,3 15,8 9,8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.9"/>
                  <polygon points="7,12 10,17 4,17" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.9"/>
                  <polygon points="17,12 20,17 14,17" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.9"/>
                  
                  {/* Central matrix core */}
                  <circle cx="12" cy="12" r="2" fill="currentColor" opacity="1"/>
                  
                  {/* Connection lines */}
                  <line x1="12" y1="8" x2="12" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
                  <line x1="9" y1="12" x2="10" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
                  <line x1="14" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
                </g>
              </svg>
            </div>
            
            {/* Subtle scan line effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent transform -skew-x-12 animate-pulse"></div>
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-black via-gray-800 to-green-600 bg-clip-text text-transparent tracking-tight leading-none font-mono">
              Trinity
            </h1>
            <span className="text-xs font-light text-gray-600 tracking-widest uppercase mt-0.5 font-mono">
              A Quant Matrix AI Product
            </span>
          </div>
        </Link>
        
        <nav className="flex items-center space-x-8">
          <Link 
            to="/workflow" 
            className={`font-light text-sm transition-colors ${
              location.pathname === '/workflow' 
                ? 'text-[#458EE2] border-b-2 border-[#458EE2] pb-1' 
                : 'text-gray-600 hover:text-[#458EE2]'
            }`}
          >
            Workflow
          </Link>
          <Link 
            to="/laboratory" 
            className={`font-light text-sm transition-colors ${
              location.pathname === '/laboratory' 
                ? 'text-[#458EE2] border-b-2 border-[#458EE2] pb-1' 
                : 'text-gray-600 hover:text-[#458EE2]'
            }`}
          >
            Laboratory
          </Link>
          <Link 
            to="/exhibition" 
            className={`font-light text-sm transition-colors ${
              location.pathname === '/exhibition' 
                ? 'text-[#458EE2] border-b-2 border-[#458EE2] pb-1' 
                : 'text-gray-600 hover:text-[#458EE2]'
            }`}
          >
            Exhibition
          </Link>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search atoms, workflows..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#458EE2] focus:border-transparent text-sm font-light"
          />
        </div>
        
        <Button variant="ghost" size="sm" className="p-2">
          <Bell className="w-4 h-4 text-gray-600" />
        </Button>
        
        <Button variant="ghost" size="sm" className="p-2">
          <Settings className="w-4 h-4 text-gray-600" />
        </Button>
        
        <Button variant="ghost" size="sm" className="p-2">
          <User className="w-4 h-4 text-gray-600" />
        </Button>
      </div>
    </header>
  );
};

export default Header;