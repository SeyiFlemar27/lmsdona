"use client";

import { useState } from "react";

export default function ClassLivePage() {
    const [activeTab, setActiveTab] = useState("Class chat");
    const [messages, setMessages] = useState([
        { id: 1, user: "Alicia Padiock", time: "2:02 PM", text: "How about our problem last week?", isMe: false },
        { id: 2, user: "You", time: "2:03 PM", text: "It's all clear, no worries", isMe: true },
        { id: 3, user: "Sri Veronica", time: "2:03 PM", text: "Yes. it's been solved. Since we have daily meeting to dissciss everything", isMe: false },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isMicOn, setIsMicOn] = useState(false);
    const [isVideoOn, setIsVideoOn] = useState(false);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;
        const newMsg = {
            id: Date.now(),
            user: "You",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            text: inputValue,
            isMe: true
        };
        setMessages([...messages, newMsg]);
        setInputValue("");
    };

    return (
        <div className="flex flex-col gap-6 font-roboto animate-fade-in pb-10">
            {/* Custom Header */}
            <div className="bg-white rounded-[20px] p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 flex-1">
                    <div className="flex-1 max-w-md relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        </span>
                        <input type="text" placeholder="Search anything Here..." className="w-full bg-white border border-gray-200 rounded-full py-3 pl-12 pr-4 text-sm outline-none focus:border-orange-400 transition-all placeholder-gray-400 font-medium" />
                    </div>
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

            {/* Class Title & Join Request */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-[20px] p-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-black">Introduction to React</h1>
                        <p className="text-xs text-gray-500">George's Class Room</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-full mt-4 md:mt-0">
                    <span className="text-sm font-bold text-gray-700"><span className="font-extrabold text-black">Drew Bieber</span> wants to join the meeting</span>
                    <button className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Panel: Video Feed & Participants (8 cols) */}
                <div className="lg:col-span-8 flex flex-col gap-6">

                    {/* Main Video Feed */}
                    <div className="bg-gray-200 rounded-[24px] overflow-hidden relative aspect-video shadow-sm group">
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover" alt="Main Speaker" />

                        {/* Badges */}
                        <div className="absolute top-6 left-6 bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" className="w-6 h-6 rounded-full bg-white" />
                            <span className="text-sm font-bold text-black">You</span>
                        </div>
                        <div className="absolute top-6 right-6 bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            <span className="text-xs font-bold text-white">Recording in Progress...</span>
                            <div className="h-4 w-px bg-white/50 mx-1"></div>
                            <button className="text-white hover:text-gray-200"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg></button>
                            <button className="text-white hover:text-gray-200"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" /></svg></button>
                        </div>

                        {/* Bottom Controls Overlay */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
                            <button onClick={() => setIsMicOn(!isMicOn)} className={`w-12 h-12 rounded-full backdrop-blur flex items-center justify-center transition-all ${isMicOn ? 'bg-white/80 hover:bg-white text-gray-700' : 'bg-red-500 hover:bg-red-600 text-white border-2 border-red-500'}`}>
                                {isMicOn ?
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><line x1="12" y1="19" x2="12" y2="23" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /></svg>
                                    :
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="1" y1="1" x2="23" y2="23" /><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                                }
                            </button>
                            <button className="w-12 h-12 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-600 flex items-center justify-center transition-all border border-orange-200">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
                            </button>
                            <button onClick={() => setIsVideoOn(!isVideoOn)} className={`w-12 h-12 rounded-full backdrop-blur flex items-center justify-center transition-all ${isVideoOn ? 'bg-white/80 hover:bg-white text-gray-700' : 'bg-red-500 hover:bg-red-600 text-white border-2 border-red-500'}`}>
                                {isVideoOn ?
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    :
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                                }
                            </button>
                            <button className="w-12 h-12 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center transition-all">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                            </button>
                            <button className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-all shadow-lg shadow-red-500/30">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* Participants Strip */}
                    <div className="grid grid-cols-5 gap-4">
                        {['You', 'Usame', 'Sammer', 'Alyana'].map((name, i) => (
                            <div key={i} className="relative rounded-2xl overflow-hidden aspect-video bg-gray-100 group border border-transparent hover:border-orange-400 transition-colors">
                                <img src={`https://images.unsplash.com/photo-${1530000000000 + i}?q=80&w=200&auto=format&fit=crop`} className="w-full h-full object-cover" alt={name} />
                                <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold">
                                    {name}
                                </div>
                                <div className="absolute bottom-2 right-2 p-1 bg-white/80 rounded-full">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                                </div>
                            </div>
                        ))}
                        <div className="rounded-2xl bg-black flex items-center justify-center cursor-pointer hover:bg-gray-900 transition-colors text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                        </div>
                    </div>

                </div>

                {/* Right Panel: Sidebars (4 cols) */}
                <div className="lg:col-span-4 flex flex-col gap-6">

                    <div className="flex gap-4">
                        {/* Summary Card */}
                        <div className="flex-1 bg-green-100 p-4 rounded-[20px] text-green-900">
                            <h3 className="font-bold text-sm mb-2">Summary</h3>
                            <p className="text-[10px] leading-relaxed opacity-80">
                                During the class, we covered some topics and reported that we achieved several targets set during the previous class.
                            </p>
                        </div>
                        {/* Class Tasks Card */}
                        <div className="flex-1 bg-black p-4 rounded-[20px] text-white">
                            <h3 className="font-bold text-sm mb-2">Class Tasks</h3>
                            <ul className="space-y-2">
                                {['Team Discussion', 'Daily work Review at 1:00 PM', 'Weekly Report Stand UP more'].map((task, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[10px] opacity-80">
                                        <div className={`w-3 h-3 rounded-full border border-white mt-0.5 ${i === 0 ? 'bg-white text-black flex items-center justify-center' : ''}`}>
                                            {i === 0 && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg>}
                                        </div>
                                        {task}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Chat Sidebar */}
                    <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex-1 flex flex-col">
                        <div className="flex bg-gray-50 rounded-full p-1 mb-6">
                            <button
                                onClick={() => setActiveTab('Class chat')}
                                className={`flex-1 text-xs font-bold py-2 rounded-full transition-all ${activeTab === 'Class chat' ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:text-black'}`}
                            >Class chat</button>
                            <button
                                onClick={() => setActiveTab('Participant')}
                                className={`flex-1 text-xs font-bold py-2 rounded-full transition-all ${activeTab === 'Participant' ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:text-black'}`}
                            >Participant</button>
                        </div>

                        {activeTab === 'Class chat' ? (
                            <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
                                {messages.map(msg => (
                                    <div key={msg.id} className={`${msg.isMe ? 'flex flex-col items-end' : ''}`}>
                                        <div className={`flex justify-between items-baseline mb-1 ${msg.isMe ? 'gap-2' : ''}`}>
                                            <span className="text-[10px] font-bold text-gray-500">{msg.user}</span>
                                            <span className="text-[9px] text-gray-400">{msg.time}</span>
                                        </div>
                                        <div className={`${msg.isMe ? 'bg-white border border-gray-100 rounded-tr-none shadow-sm' : 'bg-gray-50 rounded-tl-none'} p-3 rounded-2xl text-xs text-gray-800 font-bold`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                                {['Alicia Padiock', 'Usame', 'Sammer', 'Alyana', 'Drew Bieber', 'George', 'You'].map((name, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-200">
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} className="w-full h-full rounded-full" />
                                            </div>
                                            <span className="text-sm font-bold text-gray-700">{name}</span>
                                        </div>
                                        <button className="text-gray-400 hover:text-red-500">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'Class chat' && (
                            <div className="mt-4 relative">
                                <input
                                    type="text"
                                    placeholder="Type something..."
                                    className="w-full bg-gray-50 border-none rounded-2xl py-3 pl-10 pr-10 text-xs outline-none font-bold text-gray-600 focus:ring-1 focus:ring-gray-200 transition-all"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                />
                                <button className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                                </button>
                                <button onClick={handleSendMessage} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
