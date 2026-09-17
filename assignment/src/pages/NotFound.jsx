import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Expert Assignment Writers</title>
        <meta name="description" content="Sorry, the page you're looking for doesn't exist. Let's get you back on track." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="min-h-[calc(100vh-200px)] bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full pt-20">
          {/* Error Container */}
          <div className="text-center space-y-8">
            {/* Large 404 Text */}
            <div className="relative">
              <h1 className="text-9xl md:text-[150px] font-display font-bold text-primary-900/20 select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Search size={80} className="text-secondary-600 mx-auto mb-4" />
                </div>
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <h2 className="font-display text-display-sm md:text-display-md text-primary-900">
                Oops! Page Not Found
              </h2>
              <p className="text-body-lg text-primary-700 max-w-lg mx-auto leading-relaxed">
                The page you're looking for seems to have wandered off. Don't worry, our team of expert academic writers is here to help you find what you need.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                to="/"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-900 to-primary-800 text-white rounded-xl font-semibold text-body-sm hover:shadow-lg hover:from-primary-800 hover:to-primary-700 transition-all"
              >
                <Home size={18} />
                Back to Home
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-900 text-primary-900 rounded-xl font-semibold text-body-sm hover:bg-primary-50 transition-all"
              >
                <ArrowLeft size={18} />
                Contact Support
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="pt-8 border-t border-primary-200">
              <p className="text-body-sm text-primary-700 mb-6 font-semibold">Popular Pages</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link
                  to="/services"
                  className="p-4 rounded-lg bg-white border border-primary-100 hover:border-secondary-600 hover:shadow-md transition-all text-primary-700 font-medium text-body-sm"
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="p-4 rounded-lg bg-white border border-primary-100 hover:border-secondary-600 hover:shadow-md transition-all text-primary-700 font-medium text-body-sm"
                >
                  About Us
                </Link>
                <Link
                  to="/blog"
                  className="p-4 rounded-lg bg-white border border-primary-100 hover:border-secondary-600 hover:shadow-md transition-all text-primary-700 font-medium text-body-sm"
                >
                  Blog
                </Link>
                <Link
                  to="/accounting-assignments"
                  className="p-4 rounded-lg bg-white border border-primary-100 hover:border-secondary-600 hover:shadow-md transition-all text-primary-700 font-medium text-body-sm"
                >
                  Accounting
                </Link>
                <Link
                  to="/law-assignments"
                  className="p-4 rounded-lg bg-white border border-primary-100 hover:border-secondary-600 hover:shadow-md transition-all text-primary-700 font-medium text-body-sm"
                >
                  Law
                </Link>
                <Link
                  to="/contact"
                  className="p-4 rounded-lg bg-white border border-primary-100 hover:border-secondary-600 hover:shadow-md transition-all text-primary-700 font-medium text-body-sm"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Support Message */}
            <div className="bg-secondary-50 border border-secondary-200 rounded-2xl p-6 space-y-4">
              <p className="font-semibold text-primary-900">Need Direct Help?</p>
              <p className="text-body-sm text-primary-700">
                Our support team is available 24/7 to assist you. Reach out via WhatsApp or email us anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href="https://wa.me/447476950970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold text-body-sm hover:shadow-lg hover:from-green-600 hover:to-green-700 transition-all"
                >
                  <FaWhatsapp size={16} />
                  WhatsApp: +44 7476 950 970
                </a>
                <a
                  href="mailto:info@expertassignmentwriters.co.uk"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold text-body-sm hover:shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all"
                >
                  <FaEnvelope size={16} />
                  Email: info@expertassignmentwriters.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
