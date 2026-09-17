import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';
import { FaWhatsapp, FaHome, FaBriefcase, FaInfoCircle, FaBlog, FaBook, FaPhone } from 'react-icons/fa';

const services = [
  { title: 'Business Management', route: '/business-management' },
  { title: 'Accounting', route: '/accounting-assignments' },
  { title: 'Finance', route: '/finance-assignments' },
  { title: 'Law', route: '/law-assignments' },
  { title: 'Nursing', route: '/nursing-assignments' },
  { title: 'Psychology', route: '/psychology-assignments' },
  { title: 'Computer Science', route: '/computer-science-assignments' },
  { title: 'Engineering', route: '/engineering-assignments' },
  { title: 'Economics', route: '/economics-assignments' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setSubjectsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg bg-white' : 'bg-white'}`}>
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <nav ref={containerRef}>
            <div className="flex items-center justify-between w-full py-4">
              {/* Logo */}
              <div className="flex items-center gap-4">
                <Link to="/" className="flex items-center">
                  <img src="/logo.png" alt="Expert Assignments" className="h-16 md:h-12 object-contain" />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-slate-700 font-medium hover:text-blue-600 transition text-sm">Home</Link>
                <Link to="/services" className="text-slate-700 font-medium hover:text-blue-600 transition text-sm">Services</Link>
                <Link to="/about" className="text-slate-700 font-medium hover:text-blue-600 transition text-sm">About</Link>
                <Link to="/blog" className="text-slate-700 font-medium hover:text-blue-600 transition text-sm">Blog</Link>
                
                {/* Subjects Dropdown */}
                <div className="relative group" onMouseEnter={() => setSubjectsOpen(true)} onMouseLeave={() => setSubjectsOpen(false)}>
                  <button className="text-slate-700 font-medium hover:text-blue-600 transition text-sm flex items-center gap-2">
                    Subjects <ChevronDown size={14} />
                  </button>
                  <div className={`absolute left-0 top-full pt-4 w-[700px] bg-white rounded-xl border border-slate-200 shadow-xl p-6 transition-all ${subjectsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="grid grid-cols-3 gap-4">
                      {services.map((s) => (
                        <Link key={s.title} to={s.route} className="rounded-lg p-4 hover:bg-blue-50 transition flex items-start gap-3 group/item" onClick={() => setSubjectsOpen(false)}>
                          <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-slate-900 group-hover/item:text-blue-600">{s.title}</div>
                            <div className="text-xs text-slate-600">Expert help for {s.title.toLowerCase()}.</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Link to="/contact" className="text-slate-700 font-medium hover:text-blue-600 transition text-sm">Contact Us</Link>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-2 md:gap-3">
                <a 
                  href="https://wa.me/447476950970"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:from-green-600 hover:to-green-700 transition"
                >
                  <FaWhatsapp size={14} /> Chat on WhatsApp
                </a>

                <button
                  onClick={() => {
                    if (window.Tawk_API) {
                      window.Tawk_API.toggle();
                    }
                  }}
                  className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:from-purple-600 hover:to-purple-700 transition"
                >
                  <MessageCircle size={14} /> Live Chat
                </button>
                
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openPopup'))}
                  className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition"
                >
                  Order Now
                  <ArrowRight size={14} />
                </button>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition" onClick={() => setMobileOpen(!mobileOpen)}>
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white overflow-y-auto transition-transform duration-300 ${mobileOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col min-h-screen">
          {/* Header with Logo & Close */}
          <div className="sticky top-0 bg-white border-b border-slate-200">
            <div className="flex items-center justify-between px-4 py-4">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img src="/logo.png" alt="Expert Assignments" className="h-12 object-contain" />
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-2 hover:bg-slate-100 rounded-lg transition">
                <X size={24} className="text-slate-700" />
              </button>
            </div>
          </div>

          {/* Menu Content */}
          <div className="flex-1 px-4 py-6 space-y-1">
            {/* Main Navigation */}
            <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-900 font-medium hover:bg-blue-50 transition" onClick={() => setMobileOpen(false)}>
              <FaHome size={18} className="text-blue-600" />
              Home
            </Link>
            <Link to="/services" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-900 font-medium hover:bg-blue-50 transition" onClick={() => setMobileOpen(false)}>
              <FaBriefcase size={18} className="text-blue-600" />
              Services
            </Link>
            <Link to="/about" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-900 font-medium hover:bg-blue-50 transition" onClick={() => setMobileOpen(false)}>
              <FaInfoCircle size={18} className="text-blue-600" />
              About Us
            </Link>
            <Link to="/blog" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-900 font-medium hover:bg-blue-50 transition" onClick={() => setMobileOpen(false)}>
              <FaBlog size={18} className="text-blue-600" />
              Blog
            </Link>

            {/* Divider */}
            <div className="my-4 border-t border-slate-200" />

            {/* Subjects Section */}
            <div className="mb-6">
              <div className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 uppercase tracking-wider">
                <FaBook size={16} className="text-blue-600" />
                Subject Help
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3">
                {services.map((s) => (
                  <Link 
                    key={s.title} 
                    to={s.route} 
                    className="block px-3 py-2 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-xs font-medium text-slate-700 transition border border-slate-200 text-center" 
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200" />

            {/* Contact Section */}
            <Link to="/contact" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-900 font-medium hover:bg-blue-50 transition mt-4" onClick={() => setMobileOpen(false)}>
              <FaPhone size={18} className="text-blue-600" />
              Contact Us
            </Link>

            {/* WhatsApp Contact */}
            <a 
              href="https://wa.me/447476950970"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-50 text-green-700 font-medium hover:bg-green-100 transition"
            >
              <FaWhatsapp size={18} className="text-green-600" />
              Chat on WhatsApp
            </a>

            {/* Live Chat */}
            <button 
              onClick={() => { 
                if (window.Tawk_API) {
                  window.Tawk_API.toggle();
                }
                setMobileOpen(false); 
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-50 text-purple-700 font-medium hover:bg-purple-100 transition"
            >
              <MessageCircle size={18} className="text-purple-600" />
              Live Chat Support
            </button>
          </div>

          {/* CTA Button at Bottom */}
          <div className="sticky bottom-0 bg-white border-t border-slate-200 px-4 py-3 flex gap-2">
            <a 
              href="https://wa.me/447476950970"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-lg font-bold text-sm text-center hover:shadow-lg transition"
            >
              WhatsApp
            </a>
            <button
              onClick={() => { 
                if (window.Tawk_API) {
                  window.Tawk_API.toggle();
                }
                setMobileOpen(false); 
              }}
              className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2.5 rounded-lg font-bold text-sm hover:shadow-lg transition"
            >
              Live Chat
            </button>
            <button 
              onClick={() => { window.dispatchEvent(new CustomEvent('openPopup')); setMobileOpen(false); }} 
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg font-bold text-sm hover:shadow-lg transition"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
