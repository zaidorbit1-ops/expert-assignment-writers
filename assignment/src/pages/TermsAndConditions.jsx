import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileCheck, CreditCard, CheckCircle, AlertCircle, RefreshCw, Copyright, MessageSquare, Lock, Mail } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Expert Assignment Writers</title>
        <meta name="description" content="Read Expert Assignment Writers terms and conditions. Understand our policies on order placement, payment, refunds, revisions, and copyright." />
        <meta name="keywords" content="terms and conditions, service terms, refund policy, revision policy, copyright" />
        <meta property="og:title" content="Terms & Conditions | Expert Assignment Writers" />
        <meta property="og:description" content="Our terms and conditions outline all policies for using our assignment writing services." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <main className="bg-white text-primary-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white pt-40 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop">
          <h1 className="font-display text-headline-xl md:text-5xl font-bold mb-6">
            Terms and Conditions
          </h1>
          <p className="text-body-lg text-primary-100 leading-relaxed max-w-3xl">
            Please carefully review our terms and conditions. By using our services, you agree to be bound by all the terms outlined below.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        {/* Introduction */}
        <div className="mb-16 bg-red-50 border-l-4 border-red-600 p-6 rounded">
          <p className="text-body-lg text-primary-800 leading-relaxed font-semibold">
            Before using the services of Expert Assignment Writers, you are highly recommended to thoroughly go through the terms and conditions stated on this page. Once you are familiar with all the terms outlined here, only then should you place your order. Our clients must agree to all of our policies to be eligible to use our services. These terms and conditions apply to all potential clients or individuals who decide to use our services. Violation of the mentioned terms and conditions will result in instant termination of services.
          </p>
        </div>

        {/* Order Placement */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <FileCheck className="w-6 h-6 text-secondary-600" />
            <h2 className="font-display text-headline-md text-primary-900 font-bold">
              Order Placement
            </h2>
          </div>
          <div className="space-y-3 text-body-sm text-primary-700 leading-relaxed bg-slate-50 p-6 rounded-lg">
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">→</span>
              <p>To place an order, fill the online form provided by the site with accurate information</p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">→</span>
              <p>Once the order form is submitted, you will receive an order confirmation email from our team, along with the estimated price of your assignment project</p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">→</span>
              <p>Your order will only proceed to the next step once we receive full payment from your end</p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">→</span>
              <p>To be eligible for all our academic services, you need to agree 100% with our terms and conditions</p>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="w-6 h-6 text-secondary-600" />
            <h2 className="font-display text-headline-md text-primary-900 font-bold">
              Payment Details
            </h2>
          </div>
          <div className="space-y-3 text-body-sm text-primary-700 leading-relaxed bg-slate-50 p-6 rounded-lg">
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">•</span>
              <p>After we receive your order request, our accounts team calculates the estimate of your project. Following analytical evaluation, a payment bill will be sent to you</p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">•</span>
              <p>The charges communicated at the beginning of the project may vary during the order processing</p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">•</span>
              <p>Payment information obtained is secured and won't be shared with any third party at any cost. It will be removed from our database once the project is completed</p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">•</span>
              <p>Expert Assignment Writers is not responsible for any additional charges incurred by your bank during the transfer</p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">•</span>
              <p>We use reliable payment methods that eliminate all options of information leakage or theft to third parties</p>
            </div>
          </div>
        </div>

        {/* Order Fulfillment */}
        <div className="mb-16 bg-blue-50 p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-secondary-600" />
            <h2 className="font-display text-headline-sm text-primary-900 font-bold">
              Order Fulfillment
            </h2>
          </div>
          <div className="space-y-3 text-body-sm text-primary-700 leading-relaxed">
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">✓</span>
              <p>Once the order is completed from our end, you'll be sent the file for approval</p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">✓</span>
              <p>If you don't get back to us within a day or two, the deadline mutually decided by both parties initially will be extended</p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">✓</span>
              <p>No further activities will be done on your project once we receive approval from your end</p>
            </div>
          </div>
        </div>

        {/* Amendment Policy */}
        <div className="mb-16">
          <h2 className="font-display text-headline-md text-primary-900 font-bold mb-4">
            Amendment Policy
          </h2>
          <p className="text-body-sm text-primary-700 leading-relaxed bg-slate-50 p-6 rounded-lg">
            Expert Assignment Writers retains all the rights to amend the terms and conditions according to our discretion. You are advised to review these terms and conditions rigorously before placing your order to avoid any disputes later on.
          </p>
        </div>

        {/* Privacy Policy Link */}
        <div className="mb-16 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6" />
            <h2 className="font-display text-headline-sm font-bold">
              Privacy Policy
            </h2>
          </div>
          <p className="text-body-sm text-secondary-100 leading-relaxed">
            To ensure the utmost data protection and safety to our customers, we have devised a separate privacy policy. <a href="/privacy-policy" className="underline font-semibold hover:text-white transition">View our privacy policy page</a> for further information.
          </p>
        </div>

        {/* Refund Policy */}
        <div className="mb-16">
          <h2 className="font-display text-headline-md text-primary-900 font-bold mb-4">
            Refund Policy
          </h2>
          <div className="space-y-3 text-body-sm text-primary-700 leading-relaxed bg-slate-50 p-6 rounded-lg">
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">💰</span>
              <p>If you withdraw your order request within 24 hours of placing the order, refunds are applicable</p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">💰</span>
              <p>If the quality of your assignment isn't up to your satisfaction criteria, a refund can be considered</p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">💰</span>
              <p>If the assignment is delivered after your submission deadline, you are liable to ask for a refund</p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">💰</span>
              <p>If the assignment doesn't fulfill the requirements and information provided by you, a refund can be requested</p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">💰</span>
              <p>If you don't get the scores/grades we mutually agreed upon, indemnifying measures can be taken</p>
            </div>
          </div>
        </div>

        {/* Revision Policy */}
        <div className="mb-16 bg-blue-50 p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="w-6 h-6 text-secondary-600" />
            <h2 className="font-display text-headline-sm text-primary-900 font-bold">
              Revision Policy
            </h2>
          </div>
          <div className="space-y-3 text-body-sm text-primary-700 leading-relaxed">
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">⟲</span>
              <p>Our service offers unlimited revisions to our customers on every assignment</p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">⟲</span>
              <p>Revisions are limited to editions in the assignments, not additions. For any significant addition, a standard amount will be invoiced</p>
            </div>
          </div>
        </div>

        {/* Copyrights & Claim */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Copyright className="w-6 h-6 text-secondary-600" />
            <h2 className="font-display text-headline-md text-primary-900 font-bold">
              Copyrights & Claim
            </h2>
          </div>
          <p className="text-body-sm text-primary-700 leading-relaxed bg-slate-50 p-6 rounded-lg">
            Expert Assignment Writers is a ghostwriting company, which means the copyrights of the assignment work will be given to our customers. However, when a refund is made, the copyright of the assignment is transferred back to the name of the company.
          </p>
        </div>

        {/* Complaints & Queries */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-secondary-600" />
            <h2 className="font-display text-headline-md text-primary-900 font-bold">
              Complaints & Queries
            </h2>
          </div>
          <div className="space-y-3 text-body-sm text-primary-700 leading-relaxed bg-slate-50 p-6 rounded-lg">
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">→</span>
              <p>Any abnormal activity on our website should be reported to us either via our customer support panel or email</p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary-600 font-bold flex-shrink-0">→</span>
              <p>If you have any queries regarding our services or your assignment, you can reach out to our expert assignment writing company through our online consultants. They are available to assist you 24/7</p>
            </div>
          </div>
        </div>

        {/* Termination Policy */}
        <div className="mb-16 bg-red-50 border-l-4 border-red-600 p-6 rounded">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <h2 className="font-display text-headline-sm text-primary-900 font-bold">
              Termination Policy
            </h2>
          </div>
          <p className="text-body-sm text-primary-700 leading-relaxed mb-4">
            Expert Assignment Writers holds the authority to cancel the order/project of the client under these conditions:
          </p>
          <div className="space-y-2 text-body-sm text-primary-700 leading-relaxed">
            <div className="flex gap-3">
              <span className="text-red-600 font-bold flex-shrink-0">⚠</span>
              <p>The client has violated the mentioned Terms and Conditions</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-600 font-bold flex-shrink-0">⚠</span>
              <p>The customer is caught doing any fraud or scam towards the company</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6" />
            <h2 className="font-display text-headline-sm font-bold">
              Questions or Clarifications?
            </h2>
          </div>
          <p className="text-body-sm text-secondary-100 leading-relaxed mb-6">
            For further queries and information regarding these terms and conditions, reach out to our customer support panel right away. We're here to help clarify any concerns you may have.
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

export default TermsAndConditions;
