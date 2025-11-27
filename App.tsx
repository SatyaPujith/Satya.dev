import React, { useState, useEffect, MouseEvent } from 'react';
import Sidebar from './components/Sidebar';
import SkillsChart from './components/SkillsChart';
import ChatInterface from './components/ChatInterface';
import { ViewState, Project } from './types';
import { PROFILE, PROJECTS, EXPERIENCE, EDUCATION, ACHIEVEMENTS } from './constants';
import { Github, Download, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

// --- COMPONENTS ---

// Contact Form Component
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/mdkgaaej', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center animate-in fade-in duration-1000 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-8xl font-serif italic text-white mb-4">Let's Build.</h2>
        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
          Available for global commissions
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        {/* Name Field */}
        <div className="group">
          <label className="block font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border border-zinc-800 rounded-lg px-6 py-4 text-white font-light focus:border-white focus:outline-none transition-colors duration-300"
            placeholder="John Doe"
          />
        </div>

        {/* Email Field */}
        <div className="group">
          <label className="block font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border border-zinc-800 rounded-lg px-6 py-4 text-white font-light focus:border-white focus:outline-none transition-colors duration-300"
            placeholder="john@example.com"
          />
        </div>

        {/* Message Field */}
        <div className="group">
          <label className="block font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full bg-transparent border border-zinc-800 rounded-lg px-6 py-4 text-white font-light focus:border-white focus:outline-none transition-colors duration-300 resize-none"
            placeholder="Tell me about your project..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group relative w-full inline-flex items-center justify-center px-12 py-4 overflow-hidden border border-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="absolute inset-0 bg-white transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
          <span className="relative font-mono text-sm uppercase tracking-widest text-white transition-colors duration-500 group-hover:text-black">
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </span>
        </button>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="text-center p-4 border border-white rounded-lg animate-in fade-in slide-in-from-bottom-4">
            <p className="font-mono text-sm text-white">
              ✓ Message sent successfully! I'll get back to you soon.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="text-center p-4 border border-red-500 rounded-lg animate-in fade-in slide-in-from-bottom-4">
            <p className="font-mono text-sm text-red-500">
              ✗ Failed to send message. Please try again or email me directly.
            </p>
          </div>
        )}
      </form>

      {/* Alternative Contact */}
      <div className="mt-12 text-center">
        <p className="font-mono text-xs text-zinc-600 mb-4">Or reach me directly at</p>
        <a 
          href={`mailto:${PROFILE.email}`}
          className="font-mono text-sm text-white hover:underline"
        >
          {PROFILE.email}
        </a>
      </div>
    </div>
  );
};

// Image Carousel Component
const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array of image paths from profile folder
  const images = [
    '/profile/1.png',
    '/profile/2.png',
    '/profile/3.png',
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Image Display */}
      <div className="relative h-[600px] overflow-hidden rounded-lg border-2 border-zinc-800 bg-zinc-900">
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="min-w-full h-full">
              <img 
                src={img} 
                alt={`Award/Certificate ${idx + 1}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                style={{ imageRendering: 'auto' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600/18181b/71717a?text=Image+Not+Found';
                }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="font-mono text-xs text-white">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-zinc-700 hover:bg-zinc-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// 1. Project List Item with Click-based Preview
const ProjectRow: React.FC<{ 
  project: Project, 
  index: number, 
  onPreviewClick: (url: string | null) => void 
}> = ({ project, index, onPreviewClick }) => {
    const handleTitleClick = () => {
        if (project.links.live) {
            const url = project.links.live.startsWith('http') ? project.links.live : `https://${project.links.live}`;
            onPreviewClick(url);
        }
    };

    return (
        <div className="group relative border-t border-zinc-900 py-16 transition-colors hover:bg-zinc-900/10">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 relative z-10 mix-blend-difference px-2">
                <div>
                    <h3 
                        onClick={handleTitleClick}
                        className="text-4xl md:text-6xl font-serif italic text-white group-hover:translate-x-4 transition-transform duration-500 cursor-pointer hover:text-emerald-500"
                    >
                        {project.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2 md:hidden">
                        {/* Mobile Tech Stack */}
                        {project.tech.slice(0,3).map((t: string) => (
                             <span key={t} className="text-[10px] uppercase tracking-widest text-zinc-400 border border-zinc-800 px-2 py-1 rounded-full">{t}</span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:items-end gap-4">
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest hidden md:block">{project.tech.join(" / ")}</span>
                    <span className="text-zinc-500 text-sm md:text-right max-w-md leading-relaxed">{project.subtitle}</span>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-75">
                         {project.links.live && (
                            <a 
                                href={project.links.live.startsWith('http') ? project.links.live : `https://${project.links.live}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white border-b border-white pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-colors pointer-events-auto"
                            >
                                <ExternalLink className="w-3 h-3" /> Live Demo
                            </a>
                         )}
                         {project.links.github && (
                            <a 
                                href={project.links.github} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white border-b border-white pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-colors pointer-events-auto"
                            >
                                <Github className="w-3 h-3" /> Code
                            </a>
                         )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- MAIN APP ---

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [activePreviewUrl, setActivePreviewUrl] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Custom Cursor Logic
  useEffect(() => {
    const updateCursor = (e: globalThis.MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: globalThis.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
    }

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
        window.removeEventListener('mousemove', updateCursor);
        window.removeEventListener('mouseover', handleMouseOver);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden selection:bg-white selection:text-black">
      
      {/* Custom Cursor */}
      <div 
        className={`cursor-dot ${isHovering ? 'cursor-hover' : ''}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* Navigation */}
      <Sidebar currentView={view} onChangeView={setView} />
      
      {/* Fixed Live Preview for Projects (Click-based) */}
      {activePreviewUrl && view === ViewState.PROJECTS && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-8 animate-in fade-in duration-300">
          <div className="relative w-full max-w-6xl h-[85vh] border-2 border-zinc-700 rounded-lg overflow-hidden shadow-2xl bg-black">
            <div className="absolute top-0 left-0 right-0 bg-zinc-900 px-4 py-2 flex items-center justify-between z-10 border-b border-zinc-700">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="font-mono text-[10px] text-zinc-400 ml-2">Live Preview</span>
              </div>
              <button
                onClick={() => setActivePreviewUrl(null)}
                className="text-zinc-400 hover:text-white transition-colors p-1 hover:bg-zinc-800 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <iframe 
              src={activePreviewUrl}
              className="w-full h-full pt-10 bg-white"
              title="Project Preview"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      )}

      {/* Main Content Wrapper */}
      <main className="relative z-10 px-6 md:px-12 lg:px-24 pt-32 pb-20">
        
        {/* VIEW: HOME */}
        {view === ViewState.HOME && (
            <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
                {/* Hero Typography with Profile Image */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-32">
                    {/* Name and Title */}
                    <div className="flex flex-col gap-0 mix-blend-difference">
                        <h1 className="text-[14vw] leading-[0.8] font-serif italic text-white">Satya</h1>
                        <div className="flex flex-col md:flex-row md:items-center gap-4 ml-2">
                            <h1 className="text-[14vw] leading-[0.8] font-serif text-white">Pujith.</h1>
                            <span className="font-mono text-xs md:text-sm text-zinc-400 max-w-xs mt-4 md:mt-12 leading-relaxed uppercase tracking-widest border-l border-zinc-700 pl-4">
                                {PROFILE.role} <br/>
                                {PROFILE.location}
                            </span>
                        </div>
                    </div>

                    {/* Profile Image - Size matches name height */}
                    <div className="w-[28vw] h-[28vw] md:w-[22vw] md:h-[22vw] rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl shrink-0">
                        <img 
                            src="/image.png" 
                            alt="Satya Pujith" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>

                {/* Introduction */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 border-t border-zinc-900 pt-12">
                    <div className="col-span-12 md:col-span-4 font-mono text-xs text-zinc-500 uppercase tracking-widest">
                        ( Manifesto )
                    </div>
                    <div className="col-span-12 md:col-span-8">
                        <p className="text-2xl md:text-4xl font-light leading-tight text-zinc-300">
                            {PROFILE.about}
                        </p>
                    </div>
                </div>

                {/* Skills Visualizer */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-zinc-900 pt-12">
                    <div className="col-span-12 md:col-span-4 font-mono text-xs text-zinc-500 uppercase tracking-widest">
                        ( Capabilities )
                    </div>
                    <div className="col-span-12 md:col-span-8">
                        <SkillsChart />
                    </div>
                </div>
            </div>
        )}

        {/* VIEW: PROJECTS */}
        {view === ViewState.PROJECTS && (
            <div className="animate-in fade-in duration-1000">
                <div className="mb-24 flex items-baseline justify-between">
                    <div>
                        <h2 className="text-[8vw] font-serif italic text-zinc-800 leading-none">Selected</h2>
                        <h2 className="text-[8vw] font-serif text-white leading-none ml-12 md:ml-20">Works</h2>
                    </div>
                    <span className="hidden md:block font-mono text-xs text-zinc-600 uppercase tracking-widest">
                        Total {PROJECTS.length} Projects
                    </span>
                </div>

                <div className="w-full">
                    {PROJECTS.map((p, i) => (
                        <ProjectRow key={i} project={p} index={i} onPreviewClick={setActivePreviewUrl} />
                    ))}
                </div>
            </div>
        )}

        {/* VIEW: RESUME */}
        {view === ViewState.RESUME && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 max-w-5xl mx-auto">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-4 border-b border-white">
                    <div>
                        <h1 className="text-6xl md:text-8xl font-serif text-white">Index.</h1>
                        <p className="font-mono text-xs text-zinc-500 mt-2">RESUME & CREDENTIALS</p>
                    </div>
                    
                    {/* Download Button */}
                    <a 
                        href="/Satya Pujith Resume.pdf" 
                        download="Satya_Pujith_Resume.pdf"
                        className="group flex items-center gap-3 px-6 py-3 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-all duration-500 mt-8 md:mt-0"
                    >
                        <Download className="w-4 h-4" />
                        <span className="font-mono text-xs uppercase tracking-widest">Download PDF</span>
                    </a>
                 </div>

                 <div className="space-y-24">
                    {/* Experience */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-3 font-mono text-xs text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">01 / Experience</div>
                        <div className="md:col-span-9 space-y-16">
                            {EXPERIENCE.map((exp, i) => (
                                <div key={i} className="group">
                                    <h3 className="text-3xl font-serif text-white mb-2">{exp.role}</h3>
                                    <div className="flex justify-between font-mono text-xs text-zinc-400 mb-6 uppercase tracking-wider border-b border-zinc-900 pb-4">
                                        <span className="text-white">{exp.company}</span>
                                        <span>{exp.date}</span>
                                    </div>
                                    <ul className="space-y-4">
                                        {exp.points.map((pt, j) => (
                                            <li key={j} className="text-zinc-400 font-light leading-relaxed pl-4 border-l border-zinc-800 group-hover:border-white transition-colors duration-500">
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    {/* Achievements */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-3 font-mono text-xs text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">02 / Honors</div>
                        <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {ACHIEVEMENTS.map((ach, i) => (
                                <div key={i} className="border border-zinc-900 p-6 hover:border-zinc-700 transition-colors duration-500">
                                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">{ach.date}</span>
                                    <h4 className="text-xl font-serif text-white mt-2 mb-1">{ach.title}</h4>
                                    <div className="text-sm text-emerald-500 font-mono mb-4">{ach.event}</div>
                                    <p className="text-zinc-400 text-sm font-light leading-relaxed">{ach.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Gallery - Awards & Certificates */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-3 font-mono text-xs text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">03 / Gallery</div>
                        <div className="md:col-span-9">
                            <ImageCarousel />
                        </div>
                    </section>

                    {/* Education */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-3 font-mono text-xs text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">04 / Education</div>
                        <div className="md:col-span-9 space-y-8">
                            {EDUCATION.map((edu, i) => (
                                <div key={i} className="flex flex-col md:flex-row justify-between items-baseline border-b border-zinc-900 pb-6 hover:bg-zinc-900/20 transition-colors px-4 -mx-4 pt-4 rounded-lg">
                                    <div>
                                        <h3 className="text-xl font-serif text-white">{edu.institution}</h3>
                                        <p className="text-zinc-500 text-sm mt-1">{edu.degree}</p>
                                    </div>
                                    <div className="text-right mt-2 md:mt-0">
                                        <span className="block font-mono text-xs text-zinc-400">{edu.date}</span>
                                        <span className="block font-mono text-xs text-zinc-600 mt-1">{edu.score}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                 </div>
            </div>
        )}

        {/* VIEW: AI CHAT */}
        {view === ViewState.AI_CHAT && (
            <div className="h-[70vh] flex flex-col justify-center animate-in zoom-in duration-700">
                <div className="mb-8">
                    <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest animate-pulse">
                        ● AI Assistant Active
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif mt-4 text-white">Satya.AI</h1>
                    <p className="font-mono text-xs text-zinc-500 mt-2">Chat with me about my work and experience</p>
                </div>
                <div className="flex-1 border-t border-b border-zinc-800 py-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/5 to-transparent pointer-events-none" />
                    <ChatInterface />
                </div>
            </div>
        )}

        {/* VIEW: CONTACT */}
        {view === ViewState.CONTACT && <ContactForm />}

      </main>

      {/* Footer / Fixed Elements */}
      <div className="fixed bottom-8 left-8 hidden md:block z-40 mix-blend-difference">
         <span className="font-mono text-[10px] text-white uppercase tracking-widest">
            (C) 2025 SATYA.DEV
         </span>
      </div>
      
      <div className="fixed bottom-8 right-8 hidden md:block z-40 mix-blend-difference">
         <div className="flex gap-6">
             <a href={PROFILE.social.github} target="_blank" rel="noreferrer" className="font-mono text-[10px] text-white uppercase hover:line-through">GitHub</a>
             <a href={PROFILE.social.linkedin} target="_blank" rel="noreferrer" className="font-mono text-[10px] text-white uppercase hover:line-through">LinkedIn</a>
             <a href={PROFILE.social.leetcode} target="_blank" rel="noreferrer" className="font-mono text-[10px] text-white uppercase hover:line-through">LeetCode</a>
             <a href={PROFILE.social.geeksforgeeks} target="_blank" rel="noreferrer" className="font-mono text-[10px] text-white uppercase hover:line-through">GFG</a>
         </div>
      </div>

    </div>
  );
};

export default App;