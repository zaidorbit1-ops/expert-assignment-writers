import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Users } from 'lucide-react';
import StyledSelect from '../components/StyledSelect';

const contactTopics = [
  { value: 'assignment-help', label: 'Assignment Help' },
  { value: 'dissertation-support', label: 'Dissertation Support' },
  { value: 'pricing-query', label: 'Pricing Query' },
  { value: 'other', label: 'Other' },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const API_BASE = process.env.REACT_APP_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:4000' : '');
      const API_ENDPOINT = `${API_BASE}/api/forms/send`;

      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', ...form }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ ok: true, message: data.message || 'Message received.' });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ ok: false, message: data.message || 'Unable to send message.' });
      }
    } catch (err) {
      setStatus({ ok: false, message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Expert Assignment Writers | Get Help Now</title>
        <meta name="description" content="Contact Expert Assignment Writers for assignment help. 24/7 support, WhatsApp assistance, and professional guidance. Reach out to our expert team today." />
        <meta name="keywords" content="contact assignment help, customer support, academic writing, assignment assistance" />
        <meta property="og:title" content="Contact Expert Assignment Writers" />
        <meta property="og:description" content="Get in touch with our expert academic writers. 24/7 customer support for all your assignment needs." />
      </Helmet>
      <main className="bg-slate-50 text-primary-900">
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="inline-flex rounded-full bg-secondary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-700 mb-6">
            Contact Our Team
          </span>
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary-900 leading-tight max-w-4xl mx-auto">
            Get in Touch for Fast, Reliable Academic Support
          </h1>
          <p className="mt-5 text-body-lg text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Whether you have a complex dissertation query or need urgent assignment support, our academic experts are standing by to ensure your success.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-[2rem] bg-white border border-primary-100 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-body-sm text-primary-700">
                  Full Name
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-primary-200 bg-slate-50 px-4 py-3 text-body-sm text-primary-900 outline-none transition focus:border-secondary-700 focus:ring-2 focus:ring-secondary-100"
                  />
                </label>
                <label className="space-y-2 text-body-sm text-primary-700">
                  Email Address
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@university.ac.uk"
                    className="w-full rounded-2xl border border-primary-200 bg-slate-50 px-4 py-3 text-body-sm text-primary-900 outline-none transition focus:border-secondary-700 focus:ring-2 focus:ring-secondary-100"
                  />
                </label>
              </div>

              <label className="space-y-2 text-body-sm text-primary-700">
                Subject
                <StyledSelect name="subject" value={form.subject} onChange={handleChange} options={contactTopics} placeholder="Select a topic" />
              </label>

              <label className="space-y-2 text-body-sm text-primary-700">
                Your Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="How can our academic experts help you today?"
                  rows={6}
                  className="w-full rounded-2xl border border-primary-200 bg-slate-50 px-4 py-3 text-body-sm text-primary-900 outline-none transition focus:border-secondary-700 focus:ring-2 focus:ring-secondary-100 resize-none"
                />
              </label>

              {status && (
                <div className={`py-3 px-4 rounded-md text-sm ${status.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {status.message}
                </div>
              )}
              <button disabled={loading} type="submit" className={`page-cta-button w-full justify-center py-4 ${loading ? 'opacity-60 cursor-wait' : ''}`}>
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white border border-primary-100 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="rounded-3xl bg-secondary-50 p-4 text-secondary-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-display text-headline-sm text-primary-900">London Office</p>
                  <p className="mt-2 text-body-sm text-primary-700">
                    89 Guild Street<br />London, EC1P 1RP<br />United Kingdom
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white border border-primary-100 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-3xl bg-primary-900/5 p-4 text-primary-900">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-body-sm text-primary-700 uppercase tracking-[0.18em]">Phone Support</p>
                    <p className="font-semibold text-primary-900">+44 7476 950 970</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-3xl bg-primary-900/5 p-4 text-primary-900">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-body-sm text-primary-700 uppercase tracking-[0.18em]">Email Support</p>
                    <p className="font-semibold text-primary-900">info@expertassignmentwriters.co.uk</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-primary-950 p-8 text-white shadow-soft border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-3xl bg-white/10 p-3 text-secondary-700">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-300">Support</p>
                    <p className="font-semibold">24/7 Availability</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-3xl bg-white/10 p-3 text-secondary-700">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-300">Guarantee</p>
                    <p className="font-semibold">100% Confidential</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-3xl bg-white/10 p-3 text-secondary-700">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-300">Assistance</p>
                    <p className="font-semibold">Dedicated Departments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Contact;
