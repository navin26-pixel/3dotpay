import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { navigation } from '../mockData';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <span className="text-2xl font-bold text-white">3dotpay</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center space-x-1 px-4 py-2 text-white hover:text-red-400 transition-colors">
                  <span>{item.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/95 backdrop-blur-md">
                  {item.items.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link to={subItem.href} className="cursor-pointer">
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-red-400">
              <Globe className="h-4 w-4 mr-2" />
              EN
            </Button>
            <Button className="bg-white text-slate-900 hover:bg-red-50 rounded-full px-6">
              Get App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.name} className="space-y-2">
                <div className="text-white font-semibold">{item.name}</div>
                <div className="pl-4 space-y-2">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className="block text-gray-300 hover:text-red-400 transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full text-white hover:text-red-400">
                <Globe className="h-4 w-4 mr-2" />
                EN
              </Button>
              <Button className="w-full bg-white text-slate-900 hover:bg-red-50 rounded-full">
                Get App
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;