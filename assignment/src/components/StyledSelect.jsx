import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

const StyledSelect = ({ name, value, onChange, options, placeholder = 'Select an option', className = '' }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const closeMenu = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener('mousedown', closeMenu);
    return () => document.removeEventListener('mousedown', closeMenu);
  }, []);

  const selectOption = (option) => {
    onChange({ target: { name, value: option.value } });
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className={`flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left text-sm outline-none transition focus:border-primary-600 focus:ring-2 focus:ring-primary-100 ${open ? 'border-primary-600 ring-2 ring-primary-100' : 'border-primary-200'} ${selectedOption ? 'text-primary-950' : 'text-slate-400'}`}
      >
        <span className="truncate">{selectedOption?.label || placeholder}</span>
        <ChevronDown size={18} className={`ml-3 shrink-0 text-primary-600 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <input tabIndex="-1" aria-hidden="true" name={name} value={value} onChange={() => {}} required className="pointer-events-none absolute h-px w-px opacity-0" />

      {open && (
        <div role="listbox" aria-label={placeholder} className="absolute left-0 right-0 top-[calc(100%+8px)] z-40 max-h-60 overflow-y-auto rounded-2xl border border-primary-100 bg-white p-1.5 shadow-xl shadow-primary-950/10">
          {options.map((option) => {
            const selected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => selectOption(option)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${selected ? 'bg-primary-50 font-semibold text-primary-800' : 'text-primary-900 hover:bg-secondary-100'}`}
              >
                <span>{option.label}</span>
                {selected && <Check size={16} className="text-primary-700" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StyledSelect;
