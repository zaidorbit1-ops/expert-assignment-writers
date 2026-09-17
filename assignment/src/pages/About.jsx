import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ShieldCheck, Users, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Expert Assignment Writers | Professional Academic Service</title>
        <meta name="description" content="Learn about Expert Assignment Writers UK. Trusted by thousands of students with PhD-qualified writers, 100% original content, and guaranteed top grades." />
        <meta name="keywords" content="about assignment writing service, expert writers, academic excellence, PhD experts" />
        <meta property="og:title" content="About Expert Assignment Writers | Professional Academic Service" />
        <meta property="og:description" content="Discover why Expert Assignment Writers is UK's #1 academic writing service trusted by thousands of students." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <main className="bg-white text-primary-900">
      <section className="bg-hero-gradient overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-900/10 px-4 py-2 text-sm font-semibold text-primary-900">
                <span className="w-2 h-2 rounded-full bg-secondary-700 animate-pulse"></span>
                UK’s #1 Premium Academic Service
              </div>
              <h1 className="font-display text-display-lg-mobile md:text-display-lg leading-tight max-w-2xl">
                Redefining Academic Excellence for UK Students
              </h1>
              <p className="max-w-xl text-body-lg text-primary-700 leading-relaxed">
                Expert Assignment Writers UK supports students with custom-written, research-led assignments crafted by subject-matter experts. Our team helps you secure top grades with original work, fast turnaround and British academic standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/447476950970" target="_blank" rel="noopener noreferrer" className="page-cta-button">
                  Chat on Whatsapp
                </a>
                <button onClick={() => window.dispatchEvent(new CustomEvent('openPopup'))} className="page-secondary-button">
                  Order Now
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="page-card-soft">
                <span className="text-headline-md font-display font-bold text-primary-900">10k+</span>
                <p className="mt-3 text-body-sm text-primary-700">Assignments delivered for UK students</p>
              </div>
              <div className="page-card-soft">
                <span className="text-headline-md font-display font-bold text-secondary-700">500+</span>
                <p className="mt-3 text-body-sm text-primary-700">PhD experts across UK universities</p>
              </div>
              <div className="page-card-soft">
                <span className="text-headline-md font-display font-bold text-primary-900">4.9/5</span>
                <p className="mt-3 text-body-sm text-primary-700">Student rating from academic clients</p>
              </div>
              <div className="page-card-soft">
                <span className="text-headline-md font-display font-bold text-secondary-700">98%</span>
                <p className="mt-3 text-body-sm text-primary-700">Success rate for assignment submissions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="methods" className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="font-display text-headline-lg text-primary-900">Our Mission</h2>
            <p className="text-body-lg text-primary-700 leading-relaxed max-w-xl">
              Empowering UK students to achieve their highest academic potential through personalised assignment support, research-backed writing and expert advice. We make complex topics simple and deliver work that meets the strictest university standards.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-primary-900/5 p-6 border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <BookOpen size={20} />
                </div>
                <h3 className="font-semibold text-primary-900">Academic Integrity</h3>
                <p className="mt-2 text-body-sm text-primary-700">Research-driven writing with original references and custom structure.</p>
              </div>
              <div className="rounded-3xl bg-primary-900/5 p-6 border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-semibold text-primary-900">Trusted UK Experts</h3>
                <p className="mt-2 text-body-sm text-primary-700">Assignments completed by native-level writers with UK academic experience.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] overflow-hidden shadow-soft border border-primary-100">
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=900&h=700&fit=crop"
                alt="Academic library"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-soft border border-primary-100">
              <h3 className="font-display text-headline-sm text-primary-900">Our Vision</h3>
              <p className="mt-3 text-body-md text-primary-700 leading-relaxed">
                To be the global benchmark for UK academic writing support, helping students master their coursework with clarity, original insight and consistent excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="bg-primary-50 py-section-padding">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-headline-lg text-primary-900">Decades of Academic Heritage</h2>
              <p className="mt-3 text-body-lg text-primary-700 max-w-2xl leading-relaxed">
                Expert Assignment Writers UK began as a small academic consultancy and grew into a trusted provider for students at UK universities. We combine rigorous research with British academic conventions to deliver work that stands out.
              </p>
            </div>
            <a href="/" className="inline-flex items-center justify-center rounded-full border border-primary-900 bg-white px-6 py-3 text-primary-900 font-semibold hover:bg-primary-50 transition-all">
              Browse Full Directory
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-soft border border-primary-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                <Users size={20} />
              </div>
              <h3 className="font-semibold text-primary-900">Skilled Writing Team</h3>
              <p className="mt-3 text-body-sm text-primary-700">
                Every assignment is matched with a writer who has relevant subject expertise and UK academic experience.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-soft border border-primary-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                <CheckCircle size={20} />
              </div>
              <h3 className="font-semibold text-primary-900">Rigorous Quality Assurance</h3>
              <p className="mt-3 text-body-sm text-primary-700">
                Every order passes editorial review and compliance checks to ensure clarity, accuracy and academic quality.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-soft border border-primary-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-semibold text-primary-900">Trusted by Students</h3>
              <p className="mt-3 text-body-sm text-primary-700">
                Our UK student clients rely on us for dependable support, fast delivery, and assignments that meet marking criteria.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default About;
