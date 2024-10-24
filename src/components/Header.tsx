import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="AI-PGF Logo" className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">AI-PGF</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>
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