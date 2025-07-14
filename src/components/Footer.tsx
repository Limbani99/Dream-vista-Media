
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Dream Vista Media
          </div>
          <p className="text-gray-400 mb-4">
            Crafting Digital Dreams into Reality
          </p>
          
          <p className="text-sm text-gray-500 mt-4">
            © 2024 Dream Vista Media. All rights reserved.
          </p >

          <p className="text-sm text-gray-500 mt-4">
                   <a href="https://www.linkedin.com/in/patel-man-13758b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Create By Mann Patel</a>
          </p>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
