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
import logo from '../images/3dotpay.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  // Scroll hide/show effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3">
            <img 
              src={logo} 
              alt="3dotpay Logo" 
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
            />
            <span className={`text-xl lg:text-2xl font-bold transition-colors ${
              isScrolled ? 'text-[rgba(0, 0, 0, 1)]' : 'text-white'
            }`}>3dotpay</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 mx-8">
            {navigation.map((item) => (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  isScrolled
                    ? 'text-slate-700 hover:text-[rgb(235,0,40)] hover:bg-gray-50'
                    : 'text-white hover:text-white/80 hover:bg-white/10'
                }`}>
                  <span>{item.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/95 backdrop-blur-md border border-gray-200 mt-2 rounded-xl shadow-lg">
                  {item.items.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link 
                        to={subItem.href} 
                        className="cursor-pointer px-4 py-2 text-slate-700 hover:text-[rgb(235,0,40)] hover:bg-gray-50 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`rounded-lg transition-all ${
                isScrolled
                  ? 'text-slate-700 hover:text-[rgb(235,0,40)] hover:bg-gray-50'
                  : 'text-white hover:text-white/80 hover:bg-white/10'
              }`}
            >
              <Globe className="h-4 w-4 mr-2" />
              EN
            </Button>
            <Button className={`rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-200 ${
              isScrolled
                ? 'bg-[rgb(235,0,40)] text-white hover:bg-[rgb(200,0,35)]'
                : 'bg-white text-slate-900 hover:bg-gray-100'
            }`}>
              Get App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-slate-700 hover:bg-gray-50'
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
        <div className={`lg:hidden border-t shadow-lg ${
          isScrolled 
            ? 'bg-white border-gray-200' 
            : 'bg-black/95 backdrop-blur-md border-white/20'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.name} className="space-y-3">
                <div className={`font-semibold text-lg px-2 ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>{item.name}</div>
                <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className={`block transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 ${
                        isScrolled 
                          ? 'text-gray-600 hover:text-[rgb(235,0,40)]' 
                          : 'text-white/80 hover:text-white'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <Button variant="ghost" className={`w-full justify-start rounded-lg py-3 ${
                isScrolled
                  ? 'text-slate-700 hover:text-[rgb(235,0,40)] hover:bg-gray-50'
                  : 'text-white hover:bg-white/10'
              }`}>
                <Globe className="h-4 w-4 mr-3" />
                English
              </Button>
              <Button className={`w-full rounded-full py-3 text-lg font-semibold ${
                isScrolled
                  ? 'bg-[rgb(235,0,40)] text-white hover:bg-[rgb(200,0,35)]'
                  : 'bg-white text-slate-900 hover:bg-gray-100'
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