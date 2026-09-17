import React from 'react';
import { BookOpen, ShieldCheck, Users, Briefcase, TrendingUp, Award, ClipboardList, Eye, CheckCircle, MessageCircle } from 'lucide-react';
import UnifiedOrderForm from '../components/UnifiedOrderForm';
import PageCTA from '../components/PageCTA';

const BusinessManagement = () => {
  return (
    <main className="bg-slate-50 text-primary-900">
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid gap-12 lg:grid-cols-[1.25fr_0.85fr] items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-secondary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-700">
              Global Business Academic Support
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary-900 leading-tight max-w-3xl">
              Get Distinction-Grade Business Management Assignments
            </h1>
            <p className="text-body-lg text-primary-700 max-w-2xl leading-relaxed">
              Empowering students with meticulously researched, case-study-driven papers authored by PhD practitioners. Elevate your GPA with scholarly rigor and bespoke UK academic guidance.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 min-w-[240px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-semibold text-primary-900">PhD Experts</h3>
                <p className="mt-3 text-body-sm text-primary-700">UK-qualified writers with real business research and academic experience.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 min-w-[240px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-semibold text-primary-900">Plagiarism-Free</h3>
                <p className="mt-3 text-body-sm text-primary-700">Original, citation-ready work produced to match your module requirements.</p>
              </div>
            </div>
          </div>

          <UnifiedOrderForm defaultSubject="Business Management" variant="inline" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="rounded-[2rem] bg-primary-950 p-10 text-white shadow-soft">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="space-y-3 rounded-[1.5rem] bg-primary-950/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-secondary-700/10 text-secondary-700">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-semibold">Why Business Scholars Choose Us</h3>
                <p className="text-body-sm text-slate-300 leading-relaxed">Our writing team delivers accurate business research, strong argument structure and original analysis for every assignment.</p>
              </div>
              <div className="space-y-3 rounded-[1.5rem] bg-primary-950/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-secondary-700/10 text-secondary-700">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-semibold">Trusted Academic Standards</h3>
                <p className="text-body-sm text-slate-300 leading-relaxed">We write to UK business school conventions, with full referencing and evidence-based insight.</p>
              </div>
              <div className="space-y-3 rounded-[1.5rem] bg-primary-950/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-secondary-700/10 text-secondary-700">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold">Support Through Every Stage</h3>
                <p className="text-body-sm text-slate-300 leading-relaxed">Dedicated support keeps your project on schedule, from brief to final submission.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary-900/10 text-primary-900 mb-4">
              <Briefcase size={20} />
            </div>
            <h3 className="font-semibold text-primary-900">Strategic Management</h3>
            <p className="mt-3 text-body-sm text-primary-700 leading-relaxed">PESTLE analysis, SWOT, Porter’s Five Forces and strategy frameworks for dissertation and coursework projects.</p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary-900/10 text-primary-900 mb-4">
              <TrendingUp size={20} />
            </div>
            <h3 className="font-semibold text-primary-900">Business Finance</h3>
            <p className="mt-3 text-body-sm text-primary-700 leading-relaxed">Financial statement analysis, corporate finance, valuation and investment reports for UK modules.</p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary-900/10 text-primary-900 mb-4">
              <ClipboardList size={20} />
            </div>
            <h3 className="font-semibold text-primary-900">Operations</h3>
            <p className="mt-3 text-body-sm text-primary-700 leading-relaxed">Process improvement, supply chain management and operations strategy papers with practical insight.</p>
          </div>
        </div>
      </section>

      <section className="bg-primary-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="rounded-[2rem] bg-primary-900 p-8 text-center shadow-soft">
            <h2 className="font-display text-headline-lg">Comprehensive Management Coverage</h2>
            <p className="mt-3 text-body-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">From marketing and HRM to operations and business finance, our writers cover every business management assignment brief with precision.</p>
          </div>

          <div className="grid gap-6 mt-8 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-slate-900 p-8 shadow-soft border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs uppercase tracking-[0.25em] text-secondary-700 mb-4">Strategic Management</p>
              <h3 className="font-semibold text-white">Corporate strategy, competitive advantage and leadership analysis.</h3>
            </div>
            <div className="rounded-[2rem] bg-slate-900 p-8 shadow-soft border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs uppercase tracking-[0.25em] text-secondary-700 mb-4">HRM</p>
              <h3 className="font-semibold text-white">Organisational behaviour, recruitment strategy and employee relations.</h3>
            </div>
            <div className="rounded-[2rem] bg-slate-900 p-8 shadow-soft border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs uppercase tracking-[0.25em] text-secondary-700 mb-4">Operations</p>
              <h3 className="font-semibold text-white">Logistics, process planning and efficiency improvement assignments.</h3>
            </div>
          </div>

          <div className="grid gap-6 mt-6 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-slate-900 p-8 shadow-soft border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs uppercase tracking-[0.25em] text-secondary-700 mb-4">Marketing</p>
              <h3 className="font-semibold text-white">Market research, consumer analysis and brand strategy projects.</h3>
            </div>
            <div className="rounded-[2rem] bg-slate-900 p-8 shadow-soft border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs uppercase tracking-[0.25em] text-secondary-700 mb-4">Business Finance</p>
              <h3 className="font-semibold text-white">Investment appraisal, budgeting and corporate reporting papers.</h3>
            </div>
            <div className="rounded-[2rem] bg-secondary-700 p-8 shadow-soft border border-secondary-700/30 text-primary-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
              <p className="text-xs uppercase tracking-[0.25em] text-primary-700 mb-4">Custom Case Study Help</p>
              <h3 className="font-semibold">Custom case study support with tailored analysis and executive summary.</h3>
              <button className="mt-6 page-cta-button group-hover:bg-slate-950">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-20">
        <div className="rounded-[2rem] bg-white p-10 shadow-soft border border-primary-100">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">Your Path to an A+ Grade</p>
            <h2 className="font-display text-headline-lg text-primary-900 mt-4">A precision-engineered workflow designed for academic excellence.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="space-y-3 rounded-3xl border border-primary-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-50 text-secondary-700">1</div>
              <h3 className="font-semibold text-primary-900">Requirements</h3>
              <p className="text-sm text-primary-700">Submit your brief, rubric and study material so we can scope the assignment precisely.</p>
            </div>
            <div className="space-y-3 rounded-3xl border border-primary-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-50 text-secondary-700">2</div>
              <h3 className="font-semibold text-primary-900">Matching Expert</h3>
              <p className="text-sm text-primary-700">We assign a UK business specialist with the right academic background for your brief.</p>
            </div>
            <div className="space-y-3 rounded-3xl border border-primary-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-50 text-secondary-700">3</div>
              <h3 className="font-semibold text-primary-900">Drafting</h3>
              <p className="text-sm text-primary-700">Your writer builds the essay, report or case study with rigorous analysis and referencing.</p>
            </div>
            <div className="space-y-3 rounded-3xl border border-primary-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-50 text-secondary-700">4</div>
              <h3 className="font-semibold text-primary-900">Quality Check</h3>
              <p className="text-sm text-primary-700">Editing and academic review ensure structure, citations and language are submission-ready.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-400">Diverse Academic Expertise</p>
            <h2 className="font-display text-headline-lg mt-4">Our business writing services span every management vertical.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            <div className="rounded-[2rem] bg-slate-950 p-8 border border-white/10 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-secondary-500 mb-4">Strategic Case Studies</p>
              <h3 className="font-semibold text-white">In-depth analysis of global business scenarios.</h3>
            </div>
            <div className="rounded-[2rem] bg-slate-950 p-8 border border-white/10 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-secondary-500 mb-4">Literature Reviews</p>
              <h3 className="font-semibold text-white">Critical synthesis of academic and industry sources.</h3>
            </div>
            <div className="rounded-[2rem] bg-slate-950 p-8 border border-white/10 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-secondary-500 mb-4">Business Dissertations</p>
              <h3 className="font-semibold text-white">Full dissertations crafted with methodology and analysis.</h3>
            </div>
            <div className="rounded-[2rem] bg-slate-950 p-8 border border-white/10 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-secondary-500 mb-4">Reflective Essays</p>
              <h3 className="font-semibold text-white">Professional reflective writing aligned to UK marking criteria.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">Voices of Success</p>
          <h2 className="font-display text-headline-lg text-primary-900 mt-4">What our business students say</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-primary-900/10 p-3 text-primary-900"><CheckCircle size={20} /></span>
              <div>
                <p className="font-semibold text-primary-900">Sarah Jenkins</p>
                <p className="text-sm text-primary-700">MBA Student, Manchester</p>
              </div>
            </div>
            <p className="text-body-sm text-primary-700 leading-relaxed">"The strategic management paper was structured perfectly and the analysis of SWOT and Porter was spot on. I secured a first-class grade thanks to their expertise."</p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-primary-900/10 p-3 text-primary-900"><CheckCircle size={20} /></span>
              <div>
                <p className="font-semibold text-primary-900">Marcus Khan</p>
                <p className="text-sm text-primary-700">Finance Student, London</p>
              </div>
            </div>
            <p className="text-body-sm text-primary-700 leading-relaxed">"The finance assignment was delivered ahead of time and the modelling was excellent. The writer understood the UK grading rubric completely."</p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-primary-900/10 p-3 text-primary-900"><CheckCircle size={20} /></span>
              <div>
                <p className="font-semibold text-primary-900">Lucia Thompson</p>
                <p className="text-sm text-primary-700">Business Analytics, Essex</p>
              </div>
            </div>
            <p className="text-body-sm text-primary-700 leading-relaxed">"Excellent service. My report was highly academic with clear recommendations. I was impressed by the professional quality and the UK-level insight."</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-20">
        <div className="rounded-[2rem] bg-white p-10 shadow-soft border border-primary-100">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">Common Academic Queries</p>
            <h2 className="font-display text-headline-lg text-primary-900 mt-4">Questions business students ask most</h2>
          </div>
          <div className="space-y-4">
            {[
              'Are your writers familiar with UK-specific grading rubrics?',
              'Can I talk directly to my business management expert?',
              'How do you ensure zero plagiarism in management papers?',
              'What if my assignment requires specific software analysis?'
            ].map((question) => (
              <details key={question} className="rounded-3xl border border-primary-100 p-6 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <summary className="cursor-pointer list-none text-body-md font-semibold text-primary-900">{question}</summary>
                <p className="mt-4 text-body-sm text-primary-700 leading-relaxed">Our UK business experts write every paper to the required rubric, keep direct communication open, and make sure all analysis is original and properly referenced.</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
  );
};

export default BusinessManagement;
