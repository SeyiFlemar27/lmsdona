"use client";

import { useState } from "react";

export default function AIHelpPage() {
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<{ type: 'user' | 'ai', text: string }[]>([]);
    const [isTyping, setIsTyping] = useState(false);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userMsg = { type: 'user' as const, text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI Response
        setTimeout(() => {
            const aiMsg = { type: 'ai' as const, text: "I'm a simulated AI response. I can help answer that question!" };
            setMessages(prev => [...prev, aiMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="flex flex-col gap-6 font-roboto animate-fade-in pb-10 min-h-[85vh]">
            {/* Custom Header (Matching design) */}
            <div className="bg-white rounded-[20px] p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 flex-1">
                    <span className="text-sm font-medium text-gray-400 absolute left-4">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                    </span>
                    <input type="text" placeholder="Search anything Here..." className="w-full max-w-sm bg-white border border-gray-200 rounded-full py-3 pl-12 pr-4 text-sm outline-none focus:border-orange-400 transition-all placeholder-gray-400 font-medium" />

                    <div className="h-6 w-px bg-gray-200 mx-2"></div>

                    <div className="flex items-center gap-2 text-gray-500">
                        <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                        </button>
                        <span className="text-sm font-medium">AI Assistant</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    </button>
                    <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Melanie" alt="User" className="w-10 h-10 rounded-full bg-gray-100" />
                        <div className="hidden md:block">
                            <h4 className="text-sm font-bold text-black leading-none">Melanie Hopkins</h4>
                            <span className="text-[10px] text-gray-400">Super Admin</span>
                        </div>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400"><path d="M6 9l6 6 6-6" /></svg>
                    </div>
                </div>
            </div>

            {/* Main AI Chat Interface area */}
            <div className="flex-1 bg-white rounded-[24px] shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center relative">

                {/* Top Title Left */}
                <div className="absolute top-8 left-8">
                    <h2 className="text-xl font-bold text-black flex items-center gap-2">
                        Doro EDU AI
                    </h2>
                </div>

                {/* Top Right Toggle */}
                <div className="absolute top-8 right-8">
                    <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 hover:shadow-sm transition-shadow">
                        <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                        Temporary
                    </button>
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="User" className="w-8 h-8 rounded-full bg-gray-100 absolute -right-12 top-1" />
                </div>

                {/* Center Content / Messages */}
                <div className="w-full max-w-3xl flex-1 overflow-y-auto space-y-6 mt-20 mb-32 px-4 custom-scrollbar">
                    {messages.length === 0 ? (
                        <div className="text-center space-y-8 mt-20">
                            <h1 className="text-3xl md:text-4xl font-bold text-black">What can I help with?</h1>
                        </div>
                    ) : (
                        messages.map((msg, i) => (
                            <div key={i} className={`flex gap-4 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.type === 'user' ? 'bg-gray-200' : 'bg-black text-white'}`}>
                                    {msg.type === 'user' ?
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="User" /> :
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                                    }
                                </div>
                                <div className={`p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed ${msg.type === 'user' ? 'bg-gray-100 text-gray-800 rounded-tr-none' : 'bg-transparent text-gray-800'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))
                    )}
                    {isTyping && (
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                            </div>
                            <div className="text-sm text-gray-400 flex items-center mt-2">Thinking...</div>
                        </div>
                    )}
                </div>

                {/* Input Container (Fixed Bottom) */}
                <div className="absolute bottom-32 w-full max-w-2xl transform -translate-x-1/2 left-1/2">
                    <div className="bg-gray-50 rounded-3xl p-2 md:p-3 relative group focus-within:ring-2 focus-within:ring-orange-100 transition-all shadow-sm border border-gray-100">
                        <textarea
                            placeholder="Ask anything..."
                            className="w-full bg-transparent border-none outline-none resize-none px-4 py-3 min-h-[60px] text-gray-700 text-sm placeholder-gray-400"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSendMessage();
                                }
                            }}
                        />

                        <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-2 mt-2">
                            <div className="flex flex-wrap items-center gap-2">
                                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors shadow-sm">
                                    <span className="text-lg leading-none font-light">+</span>
                                </button>
                                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors shadow-sm">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                    Search
                                </button>
                                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors shadow-sm">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                                    Reason
                                </button>
                                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors shadow-sm">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                    Deep Research
                                </button>
                                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors shadow-sm">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                    Create Image
                                </button>
                                <button className="flex items-center gap-1.5 px-2 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors shadow-sm">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                                </button>
                            </div>

                            <div className="flex gap-2">
                                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 border border-gray-200 shadow-sm text-black">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                                </button>
                                <button onClick={handleSendMessage} className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 shadow-sm transition-transform active:scale-95">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Warning */}
                <div className="absolute bottom-6 text-center w-full px-8 pointer-events-none">
                    <div className="bg-gray-50/90 rounded-xl p-3 inline-block max-w-lg border border-gray-100 backdrop-blur-sm">
                        <p className="text-[10px] font-bold text-black mb-0.5">
                            You've hit the free plan limit for Crawl-40. Subscribe to Pro to increase limits.
                        </p>
                        <p className="text-[10px] text-gray-400">
                            Responses will use another model until your limit resets after 6:35 PM.
                        </p>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-4">Ai can make mistakes. Please double-check responses.</p>
                </div>

            </div>
        </div>
    );
}
