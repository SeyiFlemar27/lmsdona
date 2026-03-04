"use client";

import { useState } from "react";

export default function DiscussPage() {
    const [selectedGroup, setSelectedGroup] = useState<number | null>(1);
    const [showChatOnMobile, setShowChatOnMobile] = useState(false);

    const groups = [
        { name: "Teacher & Parent", sub: "Hahahaha!", time: "Today,\n9:52pm", img: "TP", badge: 4, active: false },
        { name: "English Teacher", sub: "Kyuuuuu", time: "Yesterday,\n12:31pm", img: "ET", badge: 0, active: true },
        { name: "history Teacher", sub: "It's not going to happen", time: "Wednesday,\n9:12am", img: "HT", badge: 0, active: false },
    ];

    const handleGroupClick = (index: number) => {
        setSelectedGroup(index);
        setShowChatOnMobile(true);
    };

    return (
        <div className="h-[calc(100vh-8rem)] flex gap-6 animate-fade-in font-roboto">
            {/* Left List - Groups */}
            <div className={`w-full md:w-80 bg-white flex flex-col pt-2 ${showChatOnMobile ? 'hidden md:flex' : 'flex'}`}>
                <h2 className="text-[20px] font-bold text-black mb-6 px-2">Groups</h2>
                <div className="flex-1 overflow-y-auto space-y-1 pr-2">
                    {groups.map((group, i) => (
                        <div
                            key={i}
                            onClick={() => handleGroupClick(i)}
                            className={`flex items-start gap-3 p-4 rounded-[20px] cursor-pointer transition-colors relative ${selectedGroup === i ? 'bg-white shadow-[0_4px_20px_0_rgba(0,0,0,0.05)]' : 'hover:bg-gray-50'}`}
                        >
                            <div className="w-[50px] h-[50px] rounded-full bg-gray-200 overflow-hidden relative shrink-0">
                                <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${group.img}`} alt={group.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-bold text-[14px] text-black truncate leading-tight">{group.name}</h4>
                                    <span className="text-[10px] text-[#9E9E9E] text-right leading-tight whitespace-pre-line ml-2">{group.time}</span>
                                </div>
                                <p className="text-[12px] text-[#9E9E9E] mt-1 truncate">{group.sub}</p>
                            </div>
                            {group.badge > 0 && (
                                <div className="absolute right-4 bottom-4 w-5 h-5 bg-[#F85C20] rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                                    {group.badge}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Chat Area */}
            <div className={`flex-1 flex-col bg-white rounded-none md:rounded-3xl relative ${showChatOnMobile ? 'flex' : 'hidden md:flex'}`}>
                {/* Header */}
                <div className="px-4 md:px-10 py-4 md:py-6 flex justify-between items-center border-b md:border-none">
                    {/* Back button for mobile */}
                    <button
                        onClick={() => setShowChatOnMobile(false)}
                        className="md:hidden mr-3 text-gray-600 hover:text-black"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="flex items-center gap-3 md:gap-4 flex-1">
                        <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-black overflow-hidden relative border border-gray-100">
                            <img src="/images/avatar-male.png" alt="English teacher" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="font-bold text-[16px] md:text-[18px] text-black">English teacher</h2>
                            <p className="text-[11px] md:text-[12px] text-[#9E9E9E] font-normal">Online - Last seen, 2.02pm</p>
                        </div>
                    </div>
                    <div className="flex gap-3 md:gap-6 items-center">
                        <button className="text-black hover:text-gray-600 transition-colors">
                            <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </button>
                        <button className="text-black hover:text-gray-600 transition-colors hidden md:block">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
                        </button>
                        <button className="text-black hover:text-gray-600 transition-colors">
                            <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 md:px-10 pb-4 space-y-5">

                    {/* Received Group */}
                    <div className="space-y-4">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[15px] md:text-[16px] text-[#333333] font-normal font-roboto">Hey There!</h3>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[15px] md:text-[16px] text-[#333333] font-normal font-roboto">How are you?</h3>
                            <span className="text-[10px] text-[#B5B5B5] mt-1">Today, 8.30pm</span>
                        </div>
                    </div>

                    {/* Sent Group */}
                    <div className="flex flex-col items-end space-y-1">
                        <div className="bg-[#FFD600] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-[24px] rounded-br-[4px] shadow-sm max-w-[85%] md:max-w-[70%] text-[14px] md:text-[15px] font-medium leading-relaxed">
                            Hello!
                        </div>
                        <span className="text-[10px] text-[#B5B5B5] text-right mt-1">Today, 8.33pm</span>
                    </div>

                    {/* Sent Group */}
                    <div className="flex-col items-end space-y-1">
                        <div className="bg-[#FFD600] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-[24px] rounded-br-[4px] shadow-sm max-w-[85%] md:max-w-[70%] text-[14px] md:text-[15px] font-medium leading-relaxed">
                            I am fine and how are you?
                        </div>
                        <span className="text-[10px] text-[#B5B5B5] text-right mt-1">Today, 8.34pm</span>
                    </div>

                    {/* Received Group */}
                    <div className="space-y-1">
                        <h3 className="text-[15px] md:text-[16px] text-[#333333] font-normal font-roboto max-w-[85%] md:max-w-[70%]">I am doing well, Can we meet tomorrow?</h3>
                        <span className="text-[10px] text-[#B5B5B5] mt-1 block">Today, 8.36pm</span>
                    </div>

                    {/* Sent Group */}
                    <div className="flex flex-col items-end space-y-1">
                        <div className="bg-[#FFD600] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-[24px] rounded-br-[4px] shadow-sm max-w-[85%] md:max-w-[70%] text-[14px] md:text-[15px] font-medium leading-relaxed">
                            Yes Sure!
                        </div>
                        <span className="text-[10px] text-[#B5B5B5] text-right mt-1">Today, 8.58pm</span>
                    </div>
                </div>

                {/* Input Area */}
                <div className="px-4 md:px-10 py-4 md:py-6 border-t md:border-none">
                    <div className="bg-transparent flex items-center gap-2 md:gap-4">
                        <button className="flex items-center justify-center text-[#555555] opacity-80 hover:opacity-100 transition-opacity">
                            <svg width="18" height="18" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                        </button>

                        <input
                            type="text"
                            placeholder="Type your message here..."
                            className="flex-1 bg-transparent border-none focus:outline-none text-[13px] md:text-[14px] px-2 text-[#9E9E9E] placeholder-[#9E9E9E]"
                        />

                        <button className="flex items-center justify-center text-[#555555] opacity-80 hover:opacity-100 transition-opacity">
                            <svg width="20" height="20" className="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                        </button>

                        <button className="hidden md:flex items-center justify-center text-[#555555] opacity-80 hover:opacity-100 transition-opacity mr-2">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                        </button>

                        <button className="w-11 h-11 md:w-12 md:h-12 bg-[#FFD600] rounded-[12px] md:rounded-[14px] flex items-center justify-center text-white shadow-lg shadow-yellow-200 hover:bg-[#ffdf33] transition-colors shrink-0">
                            <svg width="18" height="18" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
