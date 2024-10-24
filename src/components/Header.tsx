import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { UserPlus, Settings } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="AI-PGF Logo" className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">AI-PGF</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/">
            <Button variant="ghost" className={location.pathname === '/' ? 'bg-accent' : ''}>
              Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" className={location.pathname === '/contact' ? 'bg-accent' : ''}>
              Contact
            </Button>
          </Link>
          <Link to="/settings">
            <Button variant="ghost" className={location.pathname === '/settings' ? 'bg-accent' : ''}>
              <Settings className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/auth">
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Sign Up
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;