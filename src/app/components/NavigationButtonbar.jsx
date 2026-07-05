import React from 'react';

export default function IconNav() {
  const icons = [
    { icon: 'ti-home', label: 'Home' },
    { icon: 'ti-box', label: 'Packages' },
    { icon: 'ti-share', label: 'Share' },
    { icon: 'ti-brand-github', label: 'GitHub' },
    { icon: 'ti-brand-x', label: 'Twitter' },
    { icon: 'ti-brand-devto', label: 'Dev' },
    { text: 'M', label: 'Medium' },
    { icon: 'ti-mail', label: 'Email' },
    { icon: 'ti-mood-smile', label: 'More' },
  ];

  return (
    <div className="flex items-center justify-center gap-6 
      px-8 py-5 bg-black/95 backdrop-blur-lg 
      rounded-2xl border border-white/10">
      {icons.map((item, i) => (
        <a key={i} href="#" 
          className="flex items-center justify-center 
          w-10 h-10 rounded-lg text-white 
          hover:bg-white/10 hover:scale-110 
          hover:-translate-y-0.5 transition-all 
          duration-300">
          {item.icon ? (
            <i className={`ti ${item.icon}`}></i>
          ) : (
            <span className="font-bold">{item.text}</span>
          )}
        </a>
      ))}
    </div>
  );
}