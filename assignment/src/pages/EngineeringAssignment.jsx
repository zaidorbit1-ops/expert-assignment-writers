import React from 'react';
import UnifiedOrderForm from '../components/UnifiedOrderForm';
import PageCTA from '../components/PageCTA';
import { Sun, GitBranch, Sliders, HardDrive, Wind, Wrench, CheckCircle, Users } from 'lucide-react';

const specialties = [
  { title: 'Mechanical Engineering', desc: 'Thermodynamics, solid mechanics, and manufacturing process reports.', icon: <Wrench size={20} /> },
  { title: 'Civil & Structural', desc: 'Structural analysis, material specifications and design calculations.', icon: <HardDrive size={20} /> },
  { title: 'Electrical & Electronics', desc: 'Circuits, control systems and power systems modelling and reports.', icon: <Sun size={20} /> },
  { title: 'Aerospace Engineering', desc: 'Aerodynamics, propulsion and flight dynamics assignments.', icon: <Wind size={20} /> },
  { title: 'Chemical Engineering', desc: 'Process design, reaction engineering and safety case write-ups.', icon: <Sliders size={20} /> },
  { title: 'Sustainable Engineering', desc: 'Lifecycle assessment, environmental impact and energy modelling.', icon: <GitBranch size={20} /> },
];

const faqs = [
  { q: 'Can you provide simulation files for FEA/CFD?', a: 'We include model files and simulation settings (ANSYS, Abaqus, Fluent) where required.' },
  { q: 'Do you follow UK engineering standards?', a: 'Yes — our engineers reference BS, Eurocodes and industry best-practice in reports.' },
  { q: 'Can you validate calculation accuracy?', a: 'We provide calculation verification and source spreadsheets for transparency.' },
];

const EngineeringAssignment = () => {
  return (
    <main className="bg-slate-50 text-primary-900">
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-700">
              <CheckCircle size={14} /> UK Engineering Standards
            </div>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary-900 leading-tight max-w-3xl">
              Master Complex Engineering Challenges with Elite UK Experts
            </h1>
            <p className="text-body-lg text-primary-700 max-w-2xl leading-relaxed">
              From stress-strain analysis to complex thermodynamic simulations, our PhD-qualified engineers bridge the gap between theory and technical distinction.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <Users size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">FEA/CFD Specialists</p>
                <p className="mt-2 text-body-sm text-primary-700">Simulation-ready reports and validated models for submission.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <CheckCircle size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">Calculation Verification</p>
                <p className="mt-2 text-body-sm text-primary-700">Step-by-step checks and spreadsheets included.</p>
              </div>
            </div>
          </div>

          <UnifiedOrderForm defaultSubject="Engineering" variant="inline" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-secondary-700 mb-8">Precision-Driven Engineering Specialties</p>
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
            quote: 'Our simulation results matched experimental data and helped secure my viva.',
            name: 'A. Student',
            subtitle: 'Imperial College London',
          },{
            quote: 'Detailed FEA and well-documented procedures — exactly what I needed.',
            name: 'R. Kumar',
            subtitle: 'University of Cambridge',
          },{
            quote: 'Provided validated spreadsheets and a clear step-by-step calculation guide.',
            name: 'E. Green',
            subtitle: 'University of Leeds',
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
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">Engineering Help FAQs</p>
            <h2 className="font-display text-headline-lg text-primary-900 mt-4">Common technical inquiries</h2>
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

export default EngineeringAssignment;
