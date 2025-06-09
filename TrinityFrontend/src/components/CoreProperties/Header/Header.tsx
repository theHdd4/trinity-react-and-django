
import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryMenu from '@/components/PrimaryMenu';
import MyAccountBar from '@/components/MyAccount';

const Header = () => {

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-10">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-[#FFBD59] to-[#41C185] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <h1 className="text-2xl font-light text-gray-900">Trinity</h1>
        </Link>
        
        <PrimaryMenu />
      </div>
      <MyAccountBar />
    </header>
  );
};

export default Header;
