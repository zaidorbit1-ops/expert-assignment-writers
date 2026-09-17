import React from 'react';
import { X } from 'lucide-react';
import UnifiedOrderForm from './UnifiedOrderForm';

const PopupForm = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-primary-950/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 pointer-events-none">
        <div className="w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-[1.75rem] bg-white shadow-2xl pointer-events-auto" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between border-b border-primary-200 bg-gradient-to-r from-primary-50 via-white to-secondary-50 px-5 py-4 sm:px-7">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-secondary-800">Expert Assignment Writers</p>
              <h3 className="mt-1 font-display text-xl font-extrabold text-primary-950 sm:text-2xl">Tell us what you need</h3>
            </div>
            <button onClick={onClose} aria-label="Close quote form" className="rounded-full p-2 text-primary-700 transition hover:bg-primary-50 hover:text-primary-950"><X size={21} /></button>
          </div>
          <div className="max-h-[calc(92vh-82px)] overflow-y-auto"><UnifiedOrderForm variant="popup" /></div>
        </div>
      </div>
    </>
  );
};

export default PopupForm;
