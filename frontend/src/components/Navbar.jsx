import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { navigation, languages } from '../mockData';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import logo from '../images/logoislogo-removebg-preview.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

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
          : 'bg-white/10 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="3dotpay Logo" 
              className="object-contain transition-all duration-500 h-10 lg:h-12"
            />
          </Link>

          {/* Desktop Navigation - Enhanced with Card Animations */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isScrolled
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-white hover:text-white/90'
                }`}>
                  <span className="text-[16px] font-semibold tracking-wide">{item.name}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                    isScrolled ? 'text-gray-500' : 'text-white/70'
                  } ${hoveredMenu === item.name ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Animated Dropdown Card */}
                {hoveredMenu === item.name && (
                  <div className="absolute top-full left-0 mt-3 w-80 bg-white border border-gray-200 rounded-2xl shadow-2xl py-4 z-50 animate-in fade-in-0 zoom-in-95 duration-300">
                    <div className="px-2">
                      {item.items.map((subItem) => (
                        <Link 
                          key={subItem.name}
                          to={subItem.href} 
                          className="flex items-center px-4 py-3 text-[15px] font-medium text-gray-700 hover:text-gray-900 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
                          onClick={() => setHoveredMenu(null)}
                        >
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {subItem.name}
                            </div>
                            {subItem.description && (
                              <div className="text-[13px] text-gray-500 mt-1 font-normal">
                                {subItem.description}
                              </div>
                            )}
                          </div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`rounded-lg transition-all duration-300 font-medium ${
                    isScrolled
                      ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                      : 'text-white hover:text-white/90 hover:bg-white/10'
                  }`}
                >
                  <Globe className="h-5 w-5 mr-2" />
                  <span className="text-[15px] font-semibold">Eng</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 rounded-2xl shadow-2xl py-3 w-48 animate-in fade-in-0 zoom-in-95 duration-300">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang.code)}
                    className={`cursor-pointer px-4 py-3 text-[14px] font-medium hover:bg-blue-50 transition-colors ${
                      selectedLanguage === lang.code ? 'text-blue-600 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className={`rounded-lg px-7 py-2.5 transition-all duration-300 font-semibold text-[15px] ${
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
                <div className={`font-semibold text-[17px] tracking-wide px-2 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>{item.name}</div>
                <div className="pl-4 space-y-3 border-l-2 border-gray-300">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className={`block transition-all duration-200 py-3 px-4 rounded-lg text-[15px] font-medium ${
                        isScrolled 
                          ? 'text-gray-700 hover:text-gray-900 hover:bg-blue-50' 
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
            <div className="pt-6 space-y-4 border-t border-gray-300">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className={`w-full justify-start rounded-lg py-3 text-[15px] font-semibold ${
                    isScrolled
                      ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      : 'text-white hover:bg-white/10'
                  }`}>
                    <Globe className="h-5 w-5 mr-3" />
                    Eng
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 rounded-2xl shadow-2xl py-3 w-48">
                  {languages.map((lang) => (
                    <DropdownMenuItem 
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className={`cursor-pointer px-4 py-3 text-[14px] font-medium hover:bg-blue-50 transition-colors ${
                        selectedLanguage === lang.code ? 'text-blue-600 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className={`w-full rounded-lg py-3.5 text-[15px] font-semibold ${
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