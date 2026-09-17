import React from 'react';
import UnifiedOrderForm from '../components/UnifiedOrderForm';
import PageCTA from '../components/PageCTA';
import { BookOpen, ShieldCheck, Users, Gavel, Scroll, Scale, Sparkles, CheckCircle } from 'lucide-react';

const lawAreas = [
  { title: 'Contract Law', desc: 'Drafting, case analysis and dispute resolution assignments focused on UK contract principles.', icon: <Gavel size={22} /> },
  { title: 'Criminal Law', desc: 'Case notes, offence analysis and sentencing reports with clear legal argumentation.', icon: <Scale size={22} /> },
  { title: 'Tort Law', desc: 'Negligence, duty of care and liability assignments with structured legal reasoning.', icon: <Scroll size={22} /> },
  { title: 'Equity & Trusts', desc: 'Trust instruments, equitable remedies and fiduciary duties explained and applied.', icon: <BookOpen size={22} /> },
  { title: 'Land Law', desc: 'Property interests, conveyancing and statutory interpretation for land assignments.', icon: <Scroll size={22} /> },
  { title: 'Public Law', desc: 'Judicial review, administrative law and constitutional analysis tailored to UK frameworks.', icon: <ShieldCheck size={22} /> },
];

const faqs = [
  { q: 'Is this service confidential?', a: 'Yes — we maintain strict confidentiality and secure handling for all legal briefs and supporting documents.' },
  { q: 'Do you provide Turnitin reports?', a: 'We include plagiarism checks and can provide Turnitin-style reports on request.' },
  { q: 'How do you handle urgent law deadlines?', a: 'Our law team can accept urgent briefs with rapid turnaround, subject to complexity and supporting materials.' },
];

const LawAssignment = () => {
  return (
    <main className="bg-slate-50 text-primary-900">
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid gap-12 lg:grid-cols-[1.25fr_0.85fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-700">
              <Sparkles size={14} /> OSCOLA Precision for UK Law
            </div>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary-900 leading-tight max-w-3xl">
              Master the Complexity of UK Law with Specialist Legal Writers
            </h1>
            <p className="text-body-lg text-primary-700 max-w-2xl leading-relaxed">
              Our law team produces OSCOLA-aligned essays, case notes and dissertation chapters that meet the highest academic standards.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <Users size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">Expert UK-qualified Writers</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <CheckCircle size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">OSCOLA & UK Citation Standards</p>
              </div>
            </div>
          </div>

          <UnifiedOrderForm defaultSubject="Law" variant="inline" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-secondary-700 mb-8">Specialized Legal Disciplines</p>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {lawAreas.map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-slate-50 border border-primary-100 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary-700/10 text-secondary-700 mb-5 transition-all duration-300 group-hover:bg-secondary-700 group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-primary-900 mb-3">{item.title}</h3>
                <p className="text-body-sm text-primary-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="rounded-[2rem] overflow-hidden shadow-soft border border-primary-100">
            <img src="https://www.lawentrance.com/img/TopLawCollege.webp" alt="law library" className="w-full h-full object-cover min-h-[420px]" />
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">IRAC Method Mastery</p>
            <h2 className="font-display text-headline-lg text-primary-900">IRAC-led legal analysis, executed with precision.</h2>
            <p className="text-body-lg text-primary-700 leading-relaxed max-w-xl">Our legal writers use the IRAC method to ensure every essay and case note offers a clear issue, rule, application and conclusion — perfect for UK law grading criteria.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-semibold text-primary-900">OSCOLA-Ready Referencing</h3>
                <p className="mt-2 text-body-sm text-primary-700">Footnotes, cases and statutes formatted to UK law school standards.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-semibold text-primary-900">Judgement-Level Analysis</h3>
                <p className="mt-2 text-body-sm text-primary-700">Critical reasoning and policy context woven into every submission.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {[{
            quote: 'Excellent IRAC structure and precise citations. I achieved a first.',
            name: 'James L.',
            subtitle: 'LLB, King’s College London',
          },{
            quote: 'The tort essay was thorough and the case law was applied well.',
            name: 'Amira H.',
            subtitle: 'LLB, University of Bristol',
          },{
            quote: 'Professional and timely. Highly recommend for law seminars.',
            name: 'Robert M.',
            subtitle: 'LLM, University of Edinburgh',
          }].map((t) => (
            <div key={t.name} className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-body-sm text-primary-700 leading-relaxed mb-6">“{t.quote}”</p>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-50 text-secondary-700"><Users size={20} /></span>
                <div>
                  <p className="font-semibold text-primary-900">{t.name}</p>
                  <p className="text-sm text-primary-700">{t.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="rounded-[2rem] bg-white p-10 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">Legal Help FAQs</p>
            <h2 className="font-display text-headline-lg text-primary-900 mt-4">Common law questions answered</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-3xl border border-primary-100 p-6 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <summary className="cursor-pointer list-none text-body-md font-semibold text-primary-900">{item.q}</summary>
                <p className="mt-4 text-body-sm text-primary-700 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
  );
};

export default LawAssignment;
