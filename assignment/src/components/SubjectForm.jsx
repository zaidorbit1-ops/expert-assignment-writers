import React, { useState } from 'react';
import { User, Mail, Book, Calendar, FileText, MessageSquare } from 'lucide-react';

const SubjectForm = ({ defaultSubject = 'Business Management' }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: defaultSubject,
    deadline: '',
    wordCount: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const API_BASE = process.env.REACT_APP_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:4000' : '');
  const API_ENDPOINT = `${API_BASE}/api/forms/send`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'subject_form', ...form }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ ok: true, message: data.message || 'Request received.' });
        setForm({ name: '', email: '', subject: defaultSubject, deadline: '', wordCount: '', message: '' });
      } else {
        setStatus({ ok: false, message: data.message || 'Unable to send request.' });
      }
    } catch (err) {
      setStatus({ ok: false, message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-[2rem] bg-white border border-primary-100 shadow-soft overflow-hidden">
      <div className="bg-primary-900 p-8 text-white rounded-t-[2rem]">
        <p className="text-sm uppercase tracking-[0.2em] text-primary-100 mb-4">Secure Your Grade</p>
        <h2 className="font-display text-headline-lg">Get Free Quote Now</h2>
        <p className="mt-3 text-body-sm text-primary-100 leading-relaxed">
          Submit your brief and we’ll match you with a UK expert for a tailored management assignment.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5 p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-body-sm text-primary-700">
            Full Name
            <div className="relative">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-600" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full rounded-2xl border border-primary-200 bg-slate-50 pl-12 pr-4 py-3 text-body-sm text-primary-900 outline-none focus:border-secondary-700 focus:ring-2 focus:ring-secondary-100 transition-all"
              />
            </div>
          </label>
          <label className="space-y-2 text-body-sm text-primary-700">
            Email Address
            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-600" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@university.ac.uk"
                className="w-full rounded-2xl border border-primary-200 bg-slate-50 pl-12 pr-4 py-3 text-body-sm text-primary-900 outline-none focus:border-secondary-700 focus:ring-2 focus:ring-secondary-100 transition-all"
              />
            </div>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-body-sm text-primary-700">
            Subject
            <div className="relative">
              <Book size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-600" />
              <input
                type="text"
                name="subject"
                value={form.subject}
                readOnly
                className="w-full rounded-2xl border border-primary-200 bg-slate-50 pl-12 pr-4 py-3 text-body-sm text-primary-900 outline-none"
              />
            </div>
          </label>
          <label className="space-y-2 text-body-sm text-primary-700">
            Deadline
            <div className="relative">
              <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-600" />
              <input
                type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-primary-200 bg-slate-50 pl-12 pr-4 py-3 text-body-sm text-primary-900 outline-none focus:border-secondary-700 focus:ring-2 focus:ring-secondary-100 transition-all"
              />
            </div>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-body-sm text-primary-700">
            Word Count
            <div className="relative">
              <FileText size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-600" />
              <input
                type="number"
                name="wordCount"
                value={form.wordCount}
                onChange={handleChange}
                required
                placeholder="2500"
                className="w-full rounded-2xl border border-primary-200 bg-slate-50 pl-12 pr-4 py-3 text-body-sm text-primary-900 outline-none focus:border-secondary-700 focus:ring-2 focus:ring-secondary-100 transition-all"
              />
            </div>
          </label>
          <label className="space-y-2 text-body-sm text-primary-700">
            Your Message
            <div className="relative">
              <MessageSquare size={18} className="absolute left-4 top-4 text-primary-600" />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="E.g. case study instructions, referencing style, and specific module details"
                rows={4}
                className="w-full rounded-2xl border border-primary-200 bg-slate-50 pl-12 pr-4 py-3 text-body-sm text-primary-900 outline-none focus:border-secondary-700 focus:ring-2 focus:ring-secondary-100 transition-all resize-none"
              />
            </div>
          </label>
        </div>

        {status && (
          <div className={`py-3 px-4 rounded-md text-sm ${status.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full rounded-2xl px-6 py-4 text-body-md font-bold text-white transition-all ${loading ? 'opacity-60 cursor-wait bg-primary-900' : 'bg-primary-900 hover:bg-slate-950'}`}
        >
          {loading ? 'Sending…' : 'Get Free Quote Now'}
        </button>
      </form>
    </div>
  );
};

export default SubjectForm;
