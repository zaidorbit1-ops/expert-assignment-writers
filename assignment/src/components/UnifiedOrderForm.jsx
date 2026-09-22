import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, BookOpen, Layers, CalendarDays, MessageSquare, Lock, FileCheck, Users, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import StyledSelect from './StyledSelect';

const ACADEMIC_LEVELS = [
  'High School',
  'Undergraduate',
  'Master\'s',
  'PhD',
  'Diploma',
  'Other',
];

const academicLevelOptions = ACADEMIC_LEVELS.map((level) => ({ value: level, label: level }));

const formatDate = (date) => date.toISOString().slice(0, 10);

const PopupField = ({ icon: Icon, label, children }) => (
  <label className="block">
    <span className="mb-2 flex items-center gap-2 text-sm font-bold text-primary-950"><Icon size={16} className="text-primary-600" />{label}</span>
    {children}
  </label>
);

const CalendarPicker = ({ value, onChange }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selected = value ? new Date(`${value}T00:00:00`) : null;
  const [month, setMonth] = useState(selected || today);
  const [open, setOpen] = useState(false);
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const days = Array.from({ length: firstDay + daysInMonth }, (_, index) => index < firstDay ? null : index - firstDay + 1);
  const monthName = month.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

  const chooseDate = (day) => {
    const picked = new Date(month.getFullYear(), month.getMonth(), day);
    onChange(formatDate(picked));
    setOpen(false);
  };

  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen((current) => !current)} className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-primary-200 ${value ? 'border-primary-300 text-primary-950' : 'border-primary-200 text-slate-400'}`}><span>{value ? new Date(`${value}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Choose a deadline'}</span><CalendarDays size={18} className="text-primary-600" /></button>
      {open && <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 rounded-2xl border border-primary-100 bg-white p-4 shadow-xl">
        <div className="mb-3 flex items-center justify-between"><button type="button" aria-label="Previous month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))} className="rounded-lg p-1.5 text-primary-700 hover:bg-primary-50"><ChevronLeft size={17} /></button><span className="text-sm font-bold text-primary-950">{monthName}</span><button type="button" aria-label="Next month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))} className="rounded-lg p-1.5 text-primary-700 hover:bg-primary-50"><ChevronRight size={17} /></button></div>
        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase text-slate-400">{['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => <span key={day} className="py-1">{day}</span>)}</div>
        <div className="grid grid-cols-7 gap-1 text-center">{days.map((day, index) => { const date = day ? new Date(month.getFullYear(), month.getMonth(), day) : null; const disabled = !date || date < today; const isSelected = value && date && formatDate(date) === value; return <button key={`${day}-${index}`} type="button" disabled={disabled} onClick={() => chooseDate(day)} className={`flex aspect-square items-center justify-center rounded-lg text-xs transition ${isSelected ? 'bg-primary-800 font-bold text-white' : disabled ? 'text-slate-200' : 'text-primary-900 hover:bg-secondary-100'}`}>{day}</button>; })}</div>
        {value && <div className="mt-3 flex items-center gap-1.5 border-t border-slate-100 pt-2 text-xs text-primary-700"><Check size={14} /> Deadline selected</div>}
      </div>}
    </div>
  );
};

const UnifiedOrderForm = ({ defaultSubject = '', variant = 'inline' }) => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: defaultSubject,
    level: '',
    deadline: '',
    requirements: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const handleCrmResult = (event) => {
      const detail = event.detail || {};
      if (detail.formId && detail.formId !== 'order-form') return;

      if (detail.success) {
        const name = detail.name || form.fullName || 'there';
        setStatus({
          ok: true,
          message: detail.message || `Hey ${name}, we have received your order. Our team will get back to you shortly.`,
        });
        setForm({
          fullName: '',
          email: '',
          phone: '',
          subject: defaultSubject,
          level: '',
          deadline: '',
          requirements: '',
        });
      } else {
        setStatus({
          ok: false,
          message: detail.message || 'Something went wrong. Please try again.',
        });
      }

      setLoading(false);
    };

    window.addEventListener('crm-form-result', handleCrmResult);
    return () => window.removeEventListener('crm-form-result', handleCrmResult);
  }, [defaultSubject, form.fullName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
  };

  const renderOrderState = () => {
    if (loading) {
      return (
        <div className="rounded-[1.5rem] border border-primary-100 bg-slate-50 p-8 text-center shadow-soft">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary-200 border-t-primary-900" aria-label="Loading" />
          <p className="text-lg font-bold text-primary-900">Sending your request...</p>
          <p className="mt-2 text-sm text-primary-600">Please wait while we prepare your quote.</p>
        </div>
      );
    }

    if (status?.ok) {
      return (
        <div className="rounded-[1.5rem] border border-green-200 bg-green-50 p-8 text-center shadow-soft">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 text-2xl text-green-700">✓</div>
          <h3 className="font-display text-2xl text-primary-900">Thank you</h3>
          <p className="mt-3 text-base text-primary-700">{status.message}</p>
        </div>
      );
    }

    if (status && !status.ok) {
      return (
        <div className="rounded-[1.5rem] border border-red-200 bg-red-50 p-8 text-center shadow-soft">
          <h3 className="font-display text-2xl text-primary-900">Something went wrong</h3>
          <p className="mt-3 text-base text-red-700">{status.message}</p>
          <button type="button" onClick={() => setStatus(null)} className="mt-5 rounded-full bg-primary-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-primary-800">Try again</button>
        </div>
      );
    }

    return (
      <form id="order-form" onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <PopupField icon={User} label="Name"><input name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Your full name" className="popup-input" /></PopupField>
          <PopupField icon={Mail} label="Email address"><input name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" type="email" className="popup-input" /></PopupField>
          <PopupField icon={Phone} label="Phone number"><input name="phone" value={form.phone} onChange={handleChange} required placeholder="+44 7700 900000" type="tel" className="popup-input" /></PopupField>
          <PopupField icon={BookOpen} label="Subject area"><input name="subject" value={form.subject} onChange={handleChange} required placeholder="e.g. Business Management" className="popup-input" /></PopupField>
          <PopupField icon={Layers} label="Academic level"><StyledSelect name="level" value={form.level} onChange={handleChange} options={academicLevelOptions} placeholder="Choose your level" /></PopupField>
          <PopupField icon={CalendarDays} label="Deadline"><CalendarPicker value={form.deadline} onChange={(deadline) => setForm((current) => ({ ...current, deadline }))} /></PopupField>
        </div>
        <PopupField icon={MessageSquare} label="Requirements"><textarea name="requirements" value={form.requirements} onChange={handleChange} placeholder="Tell us about your topic, word count, referencing style or anything else we should know..." className="popup-input min-h-[92px] resize-y" /></PopupField>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-primary-100 py-3 text-xs text-primary-700"><span className="flex items-center gap-1.5"><Lock size={14} className="text-secondary-800" /> Confidential</span><span className="flex items-center gap-1.5"><FileCheck size={14} className="text-secondary-800" /> Original work</span><span className="flex items-center gap-1.5"><Users size={14} className="text-secondary-800" /> UK experts</span></div>
        <button disabled={loading} type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-800 px-5 py-3.5 font-bold text-white shadow-lg transition hover:bg-primary-900 disabled:cursor-wait disabled:opacity-60">{loading ? 'Sending...' : 'Get my free quote'} <span aria-hidden="true">-&gt;</span></button>
      </form>
    );
  };

  // Popup variant (modal style)
  if (variant === 'popup') {
    return (
      <div className="grid grid-cols-1 bg-primary-50/40 lg:grid-cols-[220px_1fr]">
        <aside className="hidden bg-primary-950 p-7 text-white lg:block">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-700 text-primary-950"><BookOpen size={19} /></div>
          <h4 className="mt-8 font-display text-xl font-extrabold leading-tight">A better brief starts here.</h4>
          <p className="mt-3 text-sm leading-6 text-primary-100">Share a few details and our academic team will prepare a tailored quote.</p>
          <div className="mt-10 space-y-4 text-xs text-primary-100"><div className="flex gap-2"><Check size={15} className="mt-0.5 text-secondary-600" /> UK academic experts</div><div className="flex gap-2"><Check size={15} className="mt-0.5 text-secondary-600" /> Confidential consultation</div><div className="flex gap-2"><Check size={15} className="mt-0.5 text-secondary-600" /> Fast, clear response</div></div>
        </aside>
        <div className="p-5 sm:p-7">
          {renderOrderState()}
        </div>
      </div>
    );
  }

  // Inline variant (for hero sections)
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: 'easeOut' }} className="relative overflow-hidden rounded-[2rem] border border-primary-700/50 bg-primary-950 p-5 shadow-2xl shadow-primary-950/20 sm:p-7">
      <motion.div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-primary-500/30 blur-3xl" animate={{ x: [0, -28, 0], y: [0, 24, 0], scale: [1, 1.12, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div aria-hidden="true" className="pointer-events-none absolute -bottom-36 -left-20 h-80 w-80 rounded-full bg-secondary-700/20 blur-3xl" animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
      <div className="relative z-10 flex flex-wrap items-end justify-between gap-4 text-white">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary-500/40 bg-secondary-700/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-secondary-300"><span className="h-1.5 w-1.5 rounded-full bg-secondary-500" /> Build your brief</div>
          <h3 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">Get a free academic quote</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-primary-100">A few details help our subject specialists match you with the right academic expert.</p>
        </div>
        <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs text-primary-100 sm:flex"><Lock size={14} className="text-secondary-400" /> 100% confidential</div>
      </div>

      {loading || status ? (
        <div className="relative z-10 mt-6 rounded-[1.5rem] border border-white/60 bg-white/95 p-5 shadow-xl backdrop-blur sm:p-6">
          {renderOrderState()}
        </div>
      ) : (
        <motion.form id="order-form" onSubmit={handleSubmit} initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }} className="relative z-10 mt-6 rounded-[1.5rem] border border-white/60 bg-white/95 p-5 shadow-xl backdrop-blur sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}><PopupField icon={User} label="Name"><input name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Your full name" className="popup-input" /></PopupField></motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}><PopupField icon={Mail} label="Email address"><input name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" type="email" className="popup-input" /></PopupField></motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}><PopupField icon={Phone} label="Phone number"><input name="phone" value={form.phone} onChange={handleChange} required placeholder="+44 7700 900000" type="tel" className="popup-input" /></PopupField></motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}><PopupField icon={BookOpen} label="Subject area"><input name="subject" value={form.subject} onChange={handleChange} required placeholder="e.g. Business Management" className="popup-input" /></PopupField></motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}><PopupField icon={Layers} label="Academic level"><StyledSelect name="level" value={form.level} onChange={handleChange} options={academicLevelOptions} placeholder="Choose your level" /></PopupField></motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}><PopupField icon={CalendarDays} label="Deadline"><CalendarPicker value={form.deadline} onChange={(deadline) => setForm((current) => ({ ...current, deadline }))} /></PopupField></motion.div>
          </div>
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="mt-4"><PopupField icon={MessageSquare} label="Requirements"><textarea name="requirements" value={form.requirements} onChange={handleChange} placeholder="Tell us about your topic, word count, referencing style or anything else we should know..." className="popup-input min-h-[86px] resize-y" /></PopupField></motion.div>
          <div className="mt-5 flex flex-col gap-4 border-t border-primary-100 pt-4 sm:flex-row sm:items-center">
            <div className="flex flex-1 flex-wrap gap-x-4 gap-y-2 text-xs text-primary-700"><span className="flex items-center gap-1.5"><FileCheck size={14} className="text-secondary-800" /> Original work</span><span className="flex items-center gap-1.5"><Users size={14} className="text-secondary-800" /> UK experts</span></div>
            <button disabled={loading} type="submit" className="flex items-center justify-center gap-2 rounded-xl bg-secondary-700 px-6 py-3.5 font-bold text-primary-950 shadow-lg transition hover:bg-secondary-600 disabled:cursor-wait disabled:opacity-60">{loading ? 'Sending...' : 'Get my free quote'} <span aria-hidden="true">-&gt;</span></button>
          </div>
        </motion.form>
      )}
    </motion.div>
  );
};

export default UnifiedOrderForm;
