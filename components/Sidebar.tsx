import React, { useState } from 'react';
import { ViewState } from '../types';
import { Menu, X, Download } from 'lucide-react';
import { PROFILE } from '../constants';

interface SidebarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: ViewState.HOME, label: 'Index', sub: '01' },
    { id: ViewState.PROJECTS, label: 'Works', sub: '02' },
    { id: ViewState.RESUME, label: 'Profile', sub: '03' },
    { id: ViewState.AI_CHAT, label: 'Satya.AI', sub: '04' },
    { id: ViewState.CONTACT, label: 'Contact', sub: '05' },
  ];

  const handleNav = (id: ViewState) => {
    onChangeView(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger Button - Enhanced */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-[60] group"
      >
        <div className="relative">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-white rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            
            {/* Button Container */}
            <div className="relative flex items-center gap-3 bg-black/80 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-3 group-hover:border-white transition-all duration-300">
                <div className="flex flex-col gap-0.5">
                    <div className="w-5 h-0.5 bg-white transition-all duration-300 group-hover:w-6" />
                    <div className="w-5 h-0.5 bg-white transition-all duration-300 group-hover:w-4" />
                    <div className="w-5 h-0.5 bg-white transition-all duration-300 group-hover:w-6" />
                </div>
                <span className="hidden md:block font-mono text-xs text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 max-w-0 group-hover:max-w-xs overflow-hidden">
                    Menu
                </span>
            </div>
        </div>
      </button>

      {/* Full Screen Overlay - Enhanced */}
      <div className={`fixed inset-0 z-[55] bg-gradient-to-br from-black via-zinc-900 to-black transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative h-full w-full flex flex-col justify-between p-8 md:p-16">
            
            {/* Header inside Menu */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="font-serif italic text-2xl text-white">Satya.</span>
                </div>
                <button 
                    onClick={() => setIsOpen(false)} 
                    className="relative group/close"
                >
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover/close:opacity-100 transition-opacity" />
                    <div className="relative w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-white hover:border-white hover:rotate-90 transition-all duration-500">
                        <X className="w-6 h-6" />
                    </div>
                </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => handleNav(item.id)}
                        className="group/item flex items-baseline gap-8 text-left relative overflow-hidden py-2"
                        style={{
                            animation: isOpen ? `slideIn 0.5s ease-out ${index * 0.1}s both` : 'none'
                        }}
                    >
                        {/* Number Badge */}
                        <span className="font-mono text-xs text-zinc-600 group-hover/item:text-white transition-colors duration-500 min-w-[30px]">
                            {item.sub}
                        </span>
                        
                        {/* Menu Item Text */}
                        <div className="relative flex-1">
                            <span className={`
                                text-5xl md:text-8xl font-serif tracking-tighter transition-all duration-500
                                ${currentView === item.id 
                                    ? 'text-white italic translate-x-4' 
                                    : 'text-zinc-700 group-hover/item:text-white group-hover/item:translate-x-4'}
                            `}>
                                {item.label}
                            </span>
                            
                            {/* Underline Effect */}
                            <div className={`h-0.5 bg-white transition-all duration-500 ${
                                currentView === item.id ? 'w-full' : 'w-0 group-hover/item:w-full'
                            }`} />
                        </div>

                        {/* Active Indicator */}
                        {currentView === item.id && (
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white animate-pulse" />
                        )}
                    </button>
                ))}
            </div>

            {/* Footer */}
            <div className="flex flex-col md:flex-row justify-between items-end border-t border-zinc-800 pt-8 gap-4">
                <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-white" />
                        HYD, INDIA
                    </div>
                </div>
                
                {/* Quick Action */}
                <a 
                    href="/Satya Pujith Resume.pdf"
                    download="Satya_Pujith_Resume.pdf"
                    className="group/download flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded-full text-zinc-500 hover:text-white hover:border-white transition-all cursor-pointer"
                >
                    <Download className="w-4 h-4 group-hover/download:animate-bounce" />
                    <span className="font-mono text-xs uppercase tracking-widest">Download CV</span>
                </a>

                <div className="font-mono text-xs text-zinc-500 text-right uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                        EST. 2025
                        <div className="w-1 h-1 rounded-full bg-white" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Sidebar;