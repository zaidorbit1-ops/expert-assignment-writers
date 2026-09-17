import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Lock, Cookie, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Expert Assignment Writers UK</title>
        <meta name="description" content="Read Expert Assignment Writers privacy policy. Learn how we protect your data, handle payments securely, and respect your privacy. 100% confidential." />
        <meta name="keywords" content="privacy policy, data protection, confidentiality, secure payment, personal information" />
        <meta property="og:title" content="Privacy Policy | Expert Assignment Writers" />
        <meta property="og:description" content="Your privacy is our priority. Learn how we protect and handle your personal data." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <main className="bg-white text-primary-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white pt-40 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop">
          <h1 className="font-display text-headline-xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-body-lg text-primary-100 leading-relaxed max-w-3xl">
            Your privacy and data security are our top priority. Learn how Expert Assignment Writers collects, uses, and protects your information.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        {/* Introduction */}
        <div className="mb-16 bg-blue-50 border-l-4 border-secondary-600 p-6 rounded">
          <p className="text-body-lg text-primary-800 leading-relaxed">
            Expert Assignment Writers considers it our foremost responsibility to protect the data and information of all our clients. We have constructed this privacy policy as part of our commitment to fulfil our duties to the fullest. The sole purpose of this privacy policy is to inform you that your information will be stored by us for various purposes, but your data will be protected and encrypted at all costs.
          </p>
        </div>

        {/* Section 1: Cookie Policy */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="w-6 h-6 text-secondary-600" />
            <h2 className="font-display text-headline-md text-primary-900 font-bold">
              Cookie Policy
            </h2>
          </div>
          <div className="space-y-4 text-body-sm text-primary-700 leading-relaxed">
            <p>
              When you visit our website, a small chunk of your data is stored as part of cookies. If you don't wish to share this data, you can easily disable the setting from your browser.
            </p>
          </div>
        </div>

        {/* Section 2: How to Disable Cookies */}
        <div className="mb-16 bg-slate-50 p-8 rounded-lg">
          <h3 className="font-display text-headline-sm text-primary-900 font-bold mb-4">
            How to Disable Cookies from the Site?
          </h3>
          <p className="text-body-sm text-primary-700 leading-relaxed mb-4">
            If you don't want your information to be recorded in cookies, you have the option to disable it by following these steps:
          </p>
          <ol className="space-y-3 text-body-sm text-primary-700 leading-relaxed list-decimal list-inside">
            <li>Open the <strong>Settings</strong> in your browser</li>
            <li>Select the <strong>Privacy & Security</strong> option</li>
            <li>Choose <strong>Cookies and Other Site Data</strong></li>
            <li>Remove all cookies by clicking on <strong>Clear All</strong></li>
          </ol>
        </div>

        {/* Section 3: Data Disclosure */}
        <div className="mb-16 bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
          <p className="text-body-sm text-primary-700 leading-relaxed">
            <strong>Important Note:</strong> The information you provide may have to be disclosed to legal authorities in case you use the delivered assignment for illicit or commercial purposes.
          </p>
        </div>

        {/* Section 4: Initial Security Terms */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-secondary-600" />
            <h2 className="font-display text-headline-md text-primary-900 font-bold">
              Data Protection & Security
            </h2>
          </div>
          <p className="text-body-sm text-primary-700 leading-relaxed mb-6">
            The team of our expert assignment writing company is aware of your concerns regarding data confidentiality. We take rigorous measures to ensure complete data protection and security for you. It is our ethical responsibility to secure all information provided by you, and our privacy policy addresses all your concerns. Rest assured that your data is secured by all means and will be kept hidden from third parties.
          </p>

          <div className="bg-slate-50 p-8 rounded-lg space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-600 text-white flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <p className="text-body-sm text-primary-700">
                Expert Assignment Writers reserves the right to make changes to this privacy policy at any time. You are highly requested to review it thoroughly.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-600 text-white flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <p className="text-body-sm text-primary-700">
                You'll be requested to share your email address with us for the sole purpose of carrying out uninterrupted communication.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-600 text-white flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <p className="text-body-sm text-primary-700">
                Your email address will be kept confidential at all costs.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-600 text-white flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <p className="text-body-sm text-primary-700">
                Every email you receive from our end is intended to provide you with the utmost benefit.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Information Collection */}
        <div className="mb-16">
          <h2 className="font-display text-headline-md text-primary-900 font-bold mb-4">
            Information We Collect
          </h2>
          <p className="text-body-sm text-primary-700 leading-relaxed mb-6">
            When you place an order for your assignment, we take your information solely for order fulfillment. Along with that, we use your email ID for healthy communication and to keep you updated regarding changes in our services and discount codes.
          </p>

          <h3 className="font-semibold text-primary-800 mb-4 text-body-lg">Information Required:</h3>
          <div className="space-y-3 text-body-sm text-primary-700 leading-relaxed">
            <div className="flex gap-4">
              <span className="text-secondary-600 font-bold">•</span>
              <p>The information provided by you is strictly kept under consideration by our company</p>
            </div>
            <div className="flex gap-4">
              <span className="text-secondary-600 font-bold">•</span>
              <p>Initial requirements such as your assignment subject and word count are required for our complete understanding</p>
            </div>
            <div className="flex gap-4">
              <span className="text-secondary-600 font-bold">•</span>
              <p>The deadline within which your assignment needs to be submitted</p>
            </div>
            <div className="flex gap-4">
              <span className="text-secondary-600 font-bold">•</span>
              <p>The payment method you have chosen along with your payment details</p>
            </div>
          </div>
        </div>

        {/* Section 6: Payment Security */}
        <div className="mb-16 bg-slate-50 p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-secondary-600" />
            <h2 className="font-display text-headline-sm text-primary-900 font-bold">
              Payment Security
            </h2>
          </div>
          <p className="text-body-sm text-primary-700 leading-relaxed mb-6">
            To give our customers a safe experience, we ensure that all of our payment methods are secure for you.
          </p>

          <div className="space-y-3 text-body-sm text-primary-700 leading-relaxed">
            <div className="flex gap-4">
              <span className="text-secondary-600 font-bold">•</span>
              <p><strong>Multiple Payment Options:</strong> We accept PayPal, PayNote, direct payment through Debit and Credit cards, and bank transfers</p>
            </div>
            <div className="flex gap-4">
              <span className="text-secondary-600 font-bold">•</span>
              <p><strong>Order Tracking:</strong> Every order is allotted with a unique order code to keep your customer information portal updated</p>
            </div>
          </div>
        </div>

        {/* Section 7: Data Commitment */}
        <div className="mb-16">
          <h2 className="font-display text-headline-md text-primary-900 font-bold mb-4">
            Our Data Commitment
          </h2>
          <div className="space-y-4 text-body-sm text-primary-700 leading-relaxed">
            <p>
              We respect your privacy and are committed to protecting your personal information. We only use the data you provide to support your enquiries and improve our services.
            </p>
            <p>
              We do not sell your personal information to third parties. We retain information only as needed to fulfil your requests and comply with legal obligations.
            </p>
          </div>
        </div>

        {/* Section 8: Policy Updates */}
        <div className="mb-16 bg-blue-50 border-l-4 border-secondary-600 p-6 rounded">
          <h3 className="font-semibold text-primary-900 mb-2 text-body-lg">Policy & Alterations</h3>
          <p className="text-body-sm text-primary-700 leading-relaxed">
            Expert Assignment Writers holds all the rights to alter this policy. Any updates will be reflected on this page, so we encourage you to review this privacy policy periodically.
          </p>
        </div>

        {/* Section 9: Contact Section */}
        <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6" />
            <h2 className="font-display text-headline-sm font-bold">
              Have Questions?
            </h2>
          </div>
          <p className="text-body-sm text-secondary-100 leading-relaxed mb-6">
            For any further queries or concerns regarding this privacy policy, please contact our customer representatives right away. We're here to help!
          </p>
          <a 
            href="mailto:info@expertassignmentwriters.co.uk"
            className="inline-block bg-white text-secondary-700 font-semibold py-3 px-6 rounded-lg hover:bg-secondary-50 transition-colors"
          >
            📧 info@expertassignmentwriters.co.uk
          </a>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-16" />
    </main>
    </>
  );
};

export default PrivacyPolicy;
