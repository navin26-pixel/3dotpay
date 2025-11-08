import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

// X (Twitter) Logo as SVG component
const XLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Virtual Card', href: '/virtual-card' },
        { name: 'Physical Card', href: '/physical-card' },
        { name: 'Multi-Currency Wallet', href: '/multi-currency-wallet' },
        { name: 'P2P Transfer', href: '/p2p-transfer' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Help Center', href: '/help-center' },
        { name: 'API Docs', href: '/api-docs' },
        { name: 'Community', href: '/community' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Cookie Policy', href: '/cookie-policy' },
        { name: 'Compliance', href: '/compliance' }
      ]
    }
  ];

  const socialLinks = [
    { icon: XLogo, href: 'https://x.com/3dotpay', label: 'X (Twitter)' },
    { icon: Facebook, href: 'https://facebook.com/3dotpay', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com/company/3dotpay', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/3dotpay', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@3dotpay', label: 'YouTube' }
  ];

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_payapp-three/artifacts/n72ih0mg_Untitled%20Project.png" 
                alt="3dotpay Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold">3dotpay</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering global payments with crypto. Spend your digital assets anywhere, anytime.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 3dotpay. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="#" className="text-gray-400 hover:text-red-400 transition-colors">
              Privacy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-red-400 transition-colors">
              Terms
            </Link>
            <Link to="#" className="text-gray-400 hover:text-red-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;