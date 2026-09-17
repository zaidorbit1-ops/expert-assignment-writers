import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-white text-primary-900 border-t border-slate-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Socials */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="mb-3">
                <img alt="Logo" className="w-18 h-16" src="/logo.png" />
              </div>
              <p className="text-body-sm text-primary-700 leading-relaxed">
                Professional assignment writing services for UK students. Trusted by thousands since 2012.
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h5 className="font-semibold text-primary-900 mb-3 text-body-sm uppercase tracking-wide">Follow Us</h5>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61594345979675" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/expertassignmentwriters.co.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="font-display font-semibold text-primary-900 mb-4 text-headline-sm">Subject Help</h4>
            <ul className="space-y-2 text-body-sm">
              <li>
                <Link to="/accounting-assignments" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  Accounting
                </Link>
              </li>
              <li>
                <Link to="/business-management" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  Business Management
                </Link>
              </li>
              <li>
                <Link to="/finance-assignments" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link to="/law-assignments" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  Law
                </Link>
              </li>
              <li>
                <Link to="/nursing-assignments" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  Nursing
                </Link>
              </li>
            </ul>
          </div>

          {/* More Subjects */}
          <div>
            <h4 className="font-display font-semibold text-primary-900 mb-4 text-headline-sm">More Subjects</h4>
            <ul className="space-y-2 text-body-sm">
              <li>
                <Link to="/psychology-assignments" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  Psychology
                </Link>
              </li>
              <li>
                <Link to="/computer-science-assignments" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  Computer Science
                </Link>
              </li>
              <li>
                <Link to="/engineering-assignments" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  Engineering
                </Link>
              </li>
              <li>
                <Link to="/economics-assignments" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  Economics
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  All Subjects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-primary-900 mb-4 text-headline-sm">Company</h4>
            <ul className="space-y-2 text-body-sm">
              <li>
                <Link to="/about" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-primary-900 mb-4 text-headline-sm">Contact</h4>
            <ul className="space-y-3 text-body-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-secondary-600 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@expertassignmentwriters.co.uk" className="text-primary-700 hover:text-secondary-600 transition-colors break-all">
                  info@expertassignmentwriters.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <a href="https://wa.me/447476950970" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:text-secondary-600 transition-colors">
                  +44 7476 950 970
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary-600 flex-shrink-0 mt-0.5" />
                <span className="text-primary-700">
                  89 Guild Street<br />
                  London<br />
                  EC1P 1RP
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-slate-300" />

        {/* Bottom Section with Payment Icons */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
          {/* Copyright & Links */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 order-2 lg:order-1">
            <p className="text-body-sm text-primary-600">
              © 2026 Expert Assignment Writers. All rights reserved.
            </p>
            <div className="flex gap-6 text-body-sm flex-wrap">
              <Link to="/privacy-policy" className="text-primary-700 hover:text-secondary-600 transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-primary-700 hover:text-secondary-600 transition-colors font-medium">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="order-1 lg:order-2">
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/allicons.webp" 
                alt="Payment Methods: PayPal, Visa, Mastercard, Discover, JCB" 
                className="h-7 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Top Border Accent */}
      <div className="h-1 bg-gradient-to-r from-secondary-600 via-blue-500 to-secondary-600" />
    </footer>
  );
};

export default Footer;
