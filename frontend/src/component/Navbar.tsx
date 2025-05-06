import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-black via-red-700 to-black shadow-lg px-4 py-4 fixed top-0 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Home Button */}
        <div className="text-2xl font-bold text-white drop-shadow-lg">TripPlanner</div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <Button variant="ghost" className="text-white hover:text-red-300">Home</Button>
          <Button variant="ghost" className="text-white hover:text-red-300">Login</Button>
          <Button variant="ghost" className="text-white hover:text-red-300">Sign Up</Button>
          <Button variant="ghost" className="text-white hover:text-red-300">Logout</Button>
          <Button className="bg-red-600 text-white hover:bg-red-700 shadow-md">Plan Trip</Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 flex flex-col items-start px-4">
          <Button variant="ghost" className="w-full text-white hover:text-red-300">Home</Button>
          <Button variant="ghost" className="w-full text-white hover:text-red-300">Login</Button>
          <Button variant="ghost" className="w-full text-white hover:text-red-300">Sign Up</Button>
          <Button variant="ghost" className="w-full text-white hover:text-red-300">Logout</Button>
          <Button className="bg-red-600 text-white w-full hover:bg-red-700 shadow-md">Plan Trip</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
