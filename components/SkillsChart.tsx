import React, { useState } from 'react';

const SkillsChart: React.FC = () => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  // Skills organized like a keyboard layout - Advanced/Complex Skills
  const keyboardRows = [
    // Row 1 - Top row (Advanced Frameworks & AI)
    [
      { key: 'Next.js 15', level: 92 },
      { key: 'Laravel', level: 88 },
      { key: 'RAG', level: 85 },
      { key: 'Vector DB', level: 82 },
      { key: 'Gemini AI', level: 90 },
      { key: 'WebSocket', level: 87 },
      { key: 'JWT Auth', level: 91 },
    ],
    // Row 2 - Home row (Advanced Tech)
    [
      { key: 'Elastic Search', level: 80 },
      { key: 'Socket.IO', level: 88 },
      { key: 'Mongoose', level: 90 },
      { key: 'Jitsi Meet', level: 75 },
      { key: 'SMOTE', level: 78 },
      { key: 'RxNorm API', level: 76 },
    ],
    // Row 3 - Bottom row (Cloud & Advanced)
    [
      { key: 'Google Cloud', level: 82 },
      { key: 'Random Forest', level: 84 },
      { key: 'shadcn/ui', level: 93 },
      { key: 'D3.js', level: 80 },
      { key: 'Vite', level: 95 },
    ],
  ];

  return (
    <div className="w-full perspective-1000">
      <div className="space-y-3 transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
        {keyboardRows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="flex gap-2 justify-center"
            style={{ 
              paddingLeft: `${rowIndex * 30}px`,
            }}
          >
            {row.map((skill, keyIndex) => (
              <div
                key={skill.key}
                onMouseEnter={() => setHoveredKey(skill.key)}
                onMouseLeave={() => setHoveredKey(null)}
                className="group relative"
                style={{
                  animation: `float ${2 + keyIndex * 0.2}s ease-in-out infinite`,
                  animationDelay: `${keyIndex * 0.1}s`,
                }}
              >
                {/* Key Button */}
                <div
                  className={`
                    relative px-4 py-3 min-w-[80px] 
                    bg-gradient-to-br from-zinc-800 to-zinc-900
                    border border-zinc-700
                    rounded-lg
                    transition-all duration-300
                    cursor-pointer
                    ${hoveredKey === skill.key ? 'scale-110 -translate-y-2 shadow-2xl shadow-emerald-500/30 border-emerald-500' : 'hover:scale-105 hover:-translate-y-1'}
                  `}
                  style={{
                    transform: hoveredKey === skill.key 
                      ? 'translateZ(20px) rotateX(-5deg)' 
                      : 'translateZ(0px)',
                    boxShadow: hoveredKey === skill.key 
                      ? '0 10px 40px rgba(16, 185, 129, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)' 
                      : '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
                  }}
                >
                  {/* Skill Name */}
                  <div className="font-mono text-xs text-white font-semibold text-center relative z-10">
                    {skill.key}
                  </div>
                  
                  {/* Level Indicator */}
                  <div className="mt-2 h-1 bg-zinc-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500"
                      style={{ width: hoveredKey === skill.key ? `${skill.level}%` : '0%' }}
                    />
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
                </div>

                {/* Tooltip */}
                {hoveredKey === skill.key && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-mono text-emerald-400 whitespace-nowrap z-20 animate-in fade-in slide-in-from-bottom-2">
                    {skill.level}% Proficiency
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] border-t border-zinc-800 pt-4">
        <span>AI & Automation</span>
        <span>Full Stack</span>
        <span>Cloud & ML</span>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotateX(0deg);
          }
          50% { 
            transform: translateY(-5px) rotateX(2deg);
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default SkillsChart;