import React from 'react';
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="AI-PGF Logo" className="h-8 w-8" />
          <span className="font-bold text-xl">AI-PGF</span>
        </div>
        <nav>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;