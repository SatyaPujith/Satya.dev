import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hi! I'm Satya's AI assistant. Ask me anything about my projects, skills, or experience.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);

    const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-transparent font-mono text-sm">
      {/* Transcript Log */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-0 space-y-6 scrollbar-hide mb-8"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className="flex gap-4 group">
            <span className={`
                uppercase tracking-widest text-[10px] w-16 shrink-0 pt-1
                ${msg.role === 'user' ? 'text-zinc-500' : 'text-white'}
            `}>
                {msg.role === 'user' ? 'YOU' : 'SATYA.AI'}
            </span>
            <p className={`
                leading-relaxed max-w-2xl
                ${msg.role === 'user' ? 'text-zinc-400' : 'text-zinc-100'}
            `}>
                {msg.text}
            </p>
          </div>
        ))}
        {isLoading && (
           <div className="flex gap-4">
              <span className="uppercase tracking-widest text-[10px] w-16 shrink-0 pt-1 text-white">SATYA.AI</span>
              <span className="text-zinc-500 animate-pulse">Thinking...</span>
           </div>
        )}
      </div>

      {/* Input Line */}
      <div className="border-t border-zinc-900 pt-4">
        <div className="flex items-center gap-4">
            <span className="uppercase tracking-widest text-[10px] w-16 shrink-0 text-zinc-500">MESSAGE</span>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                autoFocus
                className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-zinc-800 focus:outline-none"
            />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;