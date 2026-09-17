import React from 'react';
import UnifiedOrderForm from '../components/UnifiedOrderForm';
import PageCTA from '../components/PageCTA';
import { Users, CheckCircle, ClipboardList, HeartHandshake, Stethoscope, Moon } from 'lucide-react';

const specialties = [
  { title: 'Adult Nursing', desc: 'Acute care, chronic disease management and patient-centred care plans.', icon: <Stethoscope size={20} /> },
  { title: 'Mental Health Nursing', desc: 'Therapeutic interventions, care planning and reflective practice essays.', icon: <Users size={20} /> },
  { title: 'Paediatric Nursing', desc: 'Developmental assessments, family-centred care and clinical case studies.', icon: <ClipboardList size={20} /> },
  { title: 'Midwifery', desc: 'Maternity care modules, antenatal care and labour-management reports.', icon: <HeartHandshake size={20} /> },
  { title: 'Pharmacology', desc: 'Drug dosage calculations, administration protocols and pharmacotherapy essays.', icon: <CheckCircle size={20} /> },
  { title: 'Community Health', desc: 'Population health, public health initiatives and community-based nursing projects.', icon: <Moon size={20} /> },
];

const faqs = [
  { q: 'Is the service NMC-aligned?', a: 'Yes — our nursing writers follow NMC guidance and UK clinical standards when preparing assignments.' },
  { q: 'Are writers clinically experienced?', a: 'Our team includes registered nurses and midwives with UK practice experience and academic qualifications.' },
  { q: 'Can you provide case study calculations and care plans?', a: 'Yes — we deliver evidence-based care plans, calculations and citation-ready references as needed.' },
];

const NursingAssignment = () => {
  return (
    <main className="bg-slate-50 text-primary-900">
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-700">
              <CheckCircle size={14} /> NMC & RCN Compliant Support
            </div>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary-900 leading-tight max-w-3xl">
              Master Nursing Excellence with UK’s Elite Healthcare Writers
            </h1>
            <p className="text-body-lg text-primary-700 max-w-2xl leading-relaxed">
              Our specialist nursing writers create evidence-based assignments aligned with the latest NMC standards and clinical practice.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <Users size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">4.9/5 Nursing Students</p>
                <p className="mt-2 text-body-sm text-primary-700">Trusted by thousands of UK nursing students.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <CheckCircle size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">NMC-Linked Methodology</p>
                <p className="mt-2 text-body-sm text-primary-700">Clinical reasoning and evidence-based practice built in.</p>
              </div>
            </div>
          </div>

          <UnifiedOrderForm defaultSubject="Nursing" variant="inline" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-secondary-700 mb-8">Specialized Nursing Disciplines</p>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {specialties.map((item) => (
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

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {[{
            quote: 'The reflective essay was spot on and my clinical placements feedback improved.',
            name: 'Sarah J.',
            subtitle: 'King’s College London | 1st Year',
          },{
            quote: 'Excellent clinical calculation sections and care plan structure.',
            name: 'Mark T.',
            subtitle: 'University of Manchester | 3rd Year',
          },{
            quote: 'Professional and evidence-focused. Helped with my dissertation.',
            name: 'Nina P.',
            subtitle: 'University of Leeds | MSc Nursing',
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
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">Nursing Help FAQs</p>
            <h2 className="font-display text-headline-lg text-primary-900 mt-4">Everything nursing students ask</h2>
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

export default NursingAssignment;
