"use client";

import { useState } from "react";

export default function DiscussPage() {
    const [selectedChat, setSelectedChat] = useState("Freeborn Frank");
    const [inputValue, setInputValue] = useState("");

    // Mock initial messages for demonstration
    const initialMessages = [
        { type: 'in', msg: "Hello! Do you need any help with your homework?", time: "01:27 PM" },
        { type: 'out', msg: "let me explain that part for you", time: "01:30 PM" },
        { type: 'out', msg: "Yes, I'm stuck on question 2.", time: "01:27 PM", read: true },
        { type: 'in-voice', time: "01:34 PM" },
        { type: 'in-link', time: "01:37 PM" },
        { type: 'out', msg: "Thank You! very much Sir", time: "01:40 PM", read: true },
        { type: 'in', msg: "Okay... 😉", time: "01:41 PM" },
    ];

    const [messages, setMessages] = useState(initialMessages);

    // Function to handle sending a message
    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const newMessage = {
            type: 'out',
            msg: inputValue,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            read: false
        };

        setMessages([...messages, newMessage]);
        setInputValue("");

        // Simulate auto-reply after 1s
        setTimeout(() => {
            setMessages(prev => [...prev, {
                type: 'in',
                msg: "Thanks for your message! I'll get back to you shortly.",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
        }, 1000);
    };

    const handleChatSelect = (contactName: string) => {
        setSelectedChat(contactName);
        // In a real app, you would fetch messages here. For now we just reset/shuffle mostly
        if (contactName !== selectedChat) {
            setMessages([
                { type: 'in', msg: `Hey ${contactName} here!`, time: "09:00 AM" },
                { type: 'out', msg: "Hi there!", time: "09:05 AM", read: true }
            ]);
        }
    };

    const contacts = [
        { name: "Freeborn Frank", msg: "Com and open the gate for me please", time: "12:30 PM", unread: 2, avatar: "Frank" },
        { name: "Princess Jaylon", msg: "Typing...", time: "10:40 AM", unread: 3, avatar: "Princess" },
        { name: "Peace Diana", msg: "Come and open the gate for me please I want ...", time: "11:00 AM", unread: 0, avatar: "Diana" },
        { name: "Keyboardist", msg: "Recording voicenote...", time: "12:30 PM", unread: 1, avatar: "Key" },
        { name: "My boy", msg: "Com and open the gate for me please", time: "12:30 PM", unread: 0, avatar: "Boy" },
        { name: "Dr Olaye fortune", msg: "Good evening sir, I'm having serious back pain..", time: "01:30 PM", unread: 0, avatar: "Dr" },
        { name: "Valentine Dinner", msg: "Collins; i nor the come make una free me!!", time: "09:30 AM", unread: 2, avatar: "Val" },
        { name: "Marry Janno", msg: "Typing ...", time: "09:30 AM", unread: 2, avatar: "Marry" },
    ];

    return (
        <div className="flex flex-col gap-6 font-roboto animate-fade-in pb-10">
            {/* Custom Header (Search Bar & AI) - Assuming layout.tsx handles sidebar/logo, we mimic specific top bars here if needed or rely on global layout. 
               The design shows a Search Bar and AI Assistant at the top. 
               I will add this top bar to the page content to match the specific screenshot layout exactly.
            */}
            <div className="bg-white rounded-[20px] p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 flex-1">
                    <div className="flex-1 max-w-md relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        </span>
                        <input type="text" placeholder="Search anything Here..." className="w-full bg-white border border-gray-200 rounded-full py-3 pl-12 pr-4 text-sm outline-none focus:border-orange-400 transition-all placeholder-gray-400 font-medium" />
                    </div>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-black">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                        <span className="text-sm font-medium">AI Assistant</span>
                    </button>
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

            {/* Continue Watch Section */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-black">Continue Watch</h3>
                    <button className="text-sm font-bold flex items-center gap-1 hover:text-orange-500">View all <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { part: "Part 4", time: "17:00", dur: "34:00", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2574&auto=format&fit=crop" },
                        { part: "Part 5", time: "15:00", dur: "44:00", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop" },
                        { part: "Part 6", time: "35:00", dur: "54:00", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" },
                        { part: "Part 7", time: "15:00", dur: "44:00", img: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=2683&auto=format&fit=crop" },
                    ].map((vid, i) => (
                        <div key={i} className="relative rounded-xl overflow-hidden h-32 group">
                            <img src={vid.img} alt={`Part${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-2 left-2 bg-black/40 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">{vid.part}</div>
                            <div className="absolute bottom-2 left-2 right-2">
                                <div className="flex justify-between text-[9px] text-white/90 mb-1 font-medium">
                                    <span>{vid.time}</span>
                                    <span>{vid.dur}</span>
                                </div>
                                <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                                    <div className="h-full bg-orange-500 w-[50%]"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[600px]">
                {/* Messages List - 4 Cols */}
                <div className="lg:col-span-4 bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-black">Messages</h3>
                        <div className="relative flex-1 mx-4">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                            </span>
                            <input type="text" placeholder="Search" className="w-full bg-gray-50 border-none rounded-full py-2 pl-9 pr-3 text-xs outline-none" />
                        </div>
                        <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100"><span className="text-lg leading-none">+</span></button>
                    </div>

                    <div className="flex-1 overflow-y-auto pr-1 space-y-4 custom-scrollbar">
                        <h4 className="text-xs font-bold text-gray-500 mb-2">Chat</h4>
                        {contacts.map((contact, i) => (
                            <div key={i} onClick={() => handleChatSelect(contact.name)} className={`flex items-start gap-3 p-3 rounded-2xl cursor-pointer transition-colors ${selectedChat === contact.name ? 'bg-orange-50' : 'hover:bg-gray-50'}`}>
                                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-gray-200">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${contact.avatar}`} alt={contact.name} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h5 className="text-sm font-bold text-gray-900 truncate">{contact.name}</h5>
                                        <span className="text-[10px] text-gray-400 shrink-0">{contact.time}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className={`text-xs truncate ${contact.unread > 0 ? 'text-black font-medium' : 'text-gray-500'}`}>{contact.msg}</p>
                                        {contact.unread > 0 && (
                                            <span className="w-4 h-4 rounded-full bg-orange-400 text-white text-[10px] flex items-center justify-center font-bold shrink-0">{contact.unread}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Window - 8 Cols */}
                <div className="lg:col-span-8 bg-white rounded-[20px] shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-gray-200 border-2 border-white shadow-sm">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Frank" alt="Frank" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-black">{selectedChat}</h4>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    <span className="text-xs text-gray-500">Online</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 hover:bg-gray-50 rounded-full text-gray-500"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg></button>
                            <button className="p-2 hover:bg-gray-50 rounded-full text-gray-500"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></button>
                            <button className="p-2 hover:bg-gray-50 rounded-full text-gray-500"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg></button>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 bg-white p-6 overflow-y-auto space-y-6">
                        <div className="flex justify-center">
                            <span className="text-[10px] text-gray-400 bg-gray-50 px-3 py-1 rounded-full">Today</span>
                        </div>

                        {/* Incoming */}
                        <div className="flex flex-col gap-1 max-w-[70%]">
                            <div className="bg-gray-100 p-4 rounded-t-2xl rounded-br-2xl text-sm text-gray-800">
                                Hello! Do you need any help with your homework?
                            </div>
                            <span className="text-[10px] text-gray-400 ml-1">01:27 PM</span>
                        </div>

                        {/* Outgoing */}
                        <div className="flex flex-col gap-1 max-w-[70%] self-end items-end">
                            <div className="bg-gray-100 text-gray-800 p-4 rounded-t-2xl rounded-bl-2xl text-sm">
                                let me explain that part for you
                            </div>
                            <span className="text-[10px] text-gray-400 mr-1">01:30 PM</span>
                        </div>

                        {/* Outgoing */}
                        <div className="flex flex-col gap-1 max-w-[70%] self-end items-end">
                            <div className="bg-gray-100 text-gray-800 p-4 rounded-t-2xl rounded-bl-2xl text-sm">
                                Yes, I'm stuck on question 2.
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-[10px] text-gray-400">01:27 PM</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="orange" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                        </div>

                        {/* Incoming Voice Note */}
                        <div className="flex flex-col gap-1 max-w-[70%]">
                            <div className="bg-gray-100 p-3 rounded-t-2xl rounded-br-2xl text-sm text-gray-800 flex items-center gap-3 min-w-[250px]">
                                <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                                </button>
                                <div className="flex-1 flex items-center gap-0.5 h-6">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <div key={i} className={`w-1 rounded-full bg-orange-300`} style={{ height: `${Math.random() * 80 + 20}%` }}></div>
                                    ))}
                                </div>
                                <span className="text-xs font-bold">00:25</span>
                            </div>
                            <span className="text-[10px] text-gray-400 ml-1">01:34 PM</span>
                        </div>

                        {/* Incoming Link Card */}
                        <div className="flex flex-col gap-1 max-w-[70%]">
                            <div className="bg-gray-100 p-3 rounded-t-2xl rounded-br-2xl text-sm text-gray-800 w-[280px]">
                                <div className="flex gap-3">
                                    <div className="w-16 h-16 bg-[#282c34] rounded-lg shrink-0 flex items-center justify-center">
                                        <span className="text-cyan-400 text-2xl font-bold">React</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-xs mb-1">How to Add react-page in...</h5>
                                        <p className="text-[10px] text-gray-500 line-clamp-2">Learn how to implement routing in your React applications step by step.</p>
                                    </div>
                                </div>
                            </div>
                            <span className="text-[10px] text-gray-400 ml-1">01:37 PM</span>
                        </div>

                        {/* Outgoing */}
                        <div className="flex flex-col gap-1 max-w-[70%] self-end items-end">
                            <div className="bg-gray-100 text-gray-800 p-4 rounded-t-2xl rounded-bl-2xl text-sm">
                                Thank You! very much Sir
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-[10px] text-gray-400">01:40 PM</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="orange" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                        </div>

                        {/* Incoming */}
                        <div className="flex flex-col gap-1 max-w-[70%]">
                            <div className="bg-gray-100 p-4 rounded-t-2xl rounded-br-2xl text-sm text-gray-800 flex items-center gap-2">
                                Okay... <span className="text-lg">😉</span>
                            </div>
                            <span className="text-[10px] text-gray-400 ml-1">01:41 PM</span>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-gray-100">
                        <div className="bg-gray-50 rounded-full p-2 flex items-center gap-2">
                            <button className="w-10 h-10 rounded-full bg-white text-gray-600 flex items-center justify-center hover:bg-gray-100 shadow-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                            </button>
                            <input type="text" placeholder="Type something..." className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 px-2" />
                            <button className="w-10 h-10 rounded-full bg-white text-gray-600 flex items-center justify-center hover:bg-gray-100 shadow-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                            </button>
                            <button className="w-12 h-12 rounded-full bg-[#FFBD3E] text-black flex items-center justify-center hover:bg-[#ffb01e] shadow-md transition-all active:scale-95">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
