import React, { useState, useEffect } from 'react';
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
import logo from '../images/logo-with-text.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background appears after slight scroll
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/show navbar on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Changes color based on scroll */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="3dotpay Logo" 
              className={`object-contain transition-all duration-500 ${
                isScrolled 
                  ? 'h-10 lg:h-12' 
                  : 'h-10 lg:h-12'
              }`}
              style={{
                filter: isScrolled ? 'none' : 'brightness(0) invert(1) drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))'
              }}
            />
          </Link>

          {/* Desktop Navigation - Revolut Style */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isScrolled
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-white hover:text-white/90'
                }`}>
                  <span className="text-sm font-normal">{item.name}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                    isScrolled ? 'text-gray-400' : 'text-white/70'
                  }`} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-100 mt-4 rounded-xl shadow-xl py-2">
                  {item.items.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link 
                        to={subItem.href} 
                        className="cursor-pointer px-4 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Right Side Actions - Revolut Style */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`rounded-lg transition-all duration-300 text-sm font-normal ${
                isScrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:text-white/90 hover:bg-white/10'
              }`}
            >
              <Globe className="h-4 w-4 mr-2" />
              EN
            </Button>
            <Button className={`rounded-lg px-6 py-2 transition-all duration-300 text-sm font-medium ${
              isScrolled
                ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm'
                : 'bg-white text-gray-900 hover:bg-gray-100 shadow-sm'
            }`}>
              Get App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'text-gray-600 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-t ${
          isScrolled 
            ? 'bg-white border-gray-200' 
            : 'bg-gray-900/95 backdrop-blur-md border-white/20'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-6">
            {navigation.map((item) => (
              <div key={item.name} className="space-y-4">
                <div className={`font-medium text-base px-2 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>{item.name}</div>
                <div className="pl-4 space-y-3 border-l-2 border-gray-200">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className={`block transition-colors py-2 px-3 rounded-lg text-sm ${
                        isScrolled 
                          ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' 
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-6 space-y-4 border-t border-gray-200">
              <Button variant="ghost" className={`w-full justify-start rounded-lg py-3 text-sm ${
                isScrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  : 'text-white hover:bg-white/10'
              }`}>
                <Globe className="h-4 w-4 mr-3" />
                English
              </Button>
              <Button className={`w-full rounded-lg py-3 text-sm font-medium ${
                isScrolled
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}>
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