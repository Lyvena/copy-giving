import React from 'react';
import { Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto py-4">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600">
        <div className="flex items-center justify-center space-x-1">
          <Copyright className="h-4 w-4" />
          <a 
            href="https://lyvena.xyz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Lyvena.
          </a>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;