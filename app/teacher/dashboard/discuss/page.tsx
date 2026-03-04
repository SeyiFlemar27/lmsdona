"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
    id: number;
    text: string;
    sender: "me" | "other";
    time: string;
}

interface Group {
    id: number;
    name: string;
    sub: string;
    time: string;
    img: string;
    badge: number;
    online: boolean;
}

export default function DiscussPage() {
    const [selectedGroup, setSelectedGroup] = useState<number>(0);
    const [showChatOnMobile, setShowChatOnMobile] = useState(false);
    const [inputText, setInputText] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Mock Groups
    const groups: Group[] = [
        { id: 1, name: "Teacher & Parent", sub: "Mrs. Smith: Thanks for the update!", time: "9:52pm", img: "TP", badge: 2, online: true },
        { id: 2, name: "English Dept", sub: "Meeting at 10 AM tomorrow", time: "12:31pm", img: "ED", badge: 0, online: false },
        { id: 3, name: "Science Fair", sub: "Project submissions due soon", time: "Wed", img: "SF", badge: 5, online: true },
        { id: 4, name: "Grade 10 Staff", sub: "Report cards generation", time: "Mon", img: "G10", badge: 0, online: false },
    ];

    // Mock Messages (keyed by group ID)
    const [allMessages, setAllMessages] = useState<Record<number, Message[]>>({
        1: [
            { id: 1, text: "Hello everyone! Just a reminder about the PTA meeting.", sender: "me", time: "8:30pm" },
            { id: 2, text: "Thanks for the update! Will be there.", sender: "other", time: "8:32pm" },
            { id: 3, text: "Can we discuss the agenda beforehand?", sender: "other", time: "8:35pm" },
        ],
        2: [
            { id: 1, text: "Has anyone seen the new curriculum draft?", sender: "other", time: "9:00am" },
            { id: 2, text: "Yes, I reviewed it. Looks good mostly.", sender: "me", time: "9:15am" },
        ],
        3: [],
        4: []
    });

    const activeMessages = allMessages[groups[selectedGroup].id] || [];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [activeMessages, selectedGroup]);

    const handleSendMessage = () => {
        if (!inputText.trim()) return;

        const groupId = groups[selectedGroup].id;
        const newMessage: Message = {
            id: Date.now(),
            text: inputText,
            sender: "me",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLowerCase()
        };

        setAllMessages(prev => ({
            ...prev,
            [groupId]: [...(prev[groupId] || []), newMessage]
        }));
        setInputText("");

        // Simulate reply
        setTimeout(() => {
            const reply: Message = {
                id: Date.now() + 1,
                text: "That sounds great! Let's proceed with that.",
                sender: "other",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLowerCase()
            };
            setAllMessages(prev => ({
                ...prev,
                [groupId]: [...(prev[groupId] || []), reply]
            }));
        }, 2000);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleGroupClick = (index: number) => {
        setSelectedGroup(index);
        setShowChatOnMobile(true);
    };

    const currentGroup = groups[selectedGroup];

    return (
        <div className="h-[calc(100vh-8rem)] flex gap-6 animate-fade-in font-roboto">
            {/* Left List - Groups */}
            <div className={`w-full md:w-80 bg-white flex flex-col pt-2 border-r border-[#E0E0E0] md:border-none ${showChatOnMobile ? 'hidden md:flex' : 'flex'}`}>
                <h2 className="text-[20px] font-bold text-black mb-6 px-2">Messages</h2>

                {/* Search Bar */}
                <div className="px-2 mb-4">
                    <div className="bg-gray-100 rounded-lg flex items-center px-3 py-2">
                        <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <input type="text" placeholder="Search chats..." className="bg-transparent text-sm w-full focus:outline-none" />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto space-y-1 pr-2">
                    {groups.map((group, i) => (
                        <div
                            key={group.id}
                            onClick={() => handleGroupClick(i)}
                            className={`flex items-start gap-3 p-4 rounded-[16px] cursor-pointer transition-colors relative ${selectedGroup === i ? 'bg-white shadow-md border border-gray-100' : 'hover:bg-gray-50 border border-transparent'}`}
                        >
                            <div className="w-[50px] h-[50px] rounded-full bg-gray-200 overflow-hidden relative shrink-0">
                                <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${group.img}`} alt={group.name} className="w-full h-full object-cover" />
                                {group.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>}
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                                <div className="flex justify-between items-start">
                                    <h4 className={`font-bold text-[14px] text-black truncate leading-tight ${selectedGroup === i ? 'text-[#FDC832]' : ''}`}>{group.name}</h4>
                                    <span className="text-[10px] text-[#9E9E9E] whitespace-nowrap ml-2">{group.time}</span>
                                </div>
                                <p className="text-[12px] text-[#9E9E9E] mt-1 truncate">{group.sub}</p>
                            </div>
                            {group.badge > 0 && (
                                <div className="min-w-[1.25rem] h-5 bg-[#F85C20] rounded-full flex items-center justify-center text-[10px] text-white font-bold px-1 absolute right-4 bottom-4">
                                    {group.badge}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Chat Area */}
            <div className={`flex-1 flex-col bg-white md:border border-[#E0E0E0] md:rounded-[20px] relative overflow-hidden ${showChatOnMobile ? 'flex' : 'hidden md:flex'}`}>
                {/* Header */}
                <div className="px-4 md:px-6 py-4 flex justify-between items-center border-b border-[#E0E0E0] bg-white z-10">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setShowChatOnMobile(false)} className="md:hidden text-gray-600 hover:text-black">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                        </button>
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                            <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${currentGroup.img}`} alt={currentGroup.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="font-bold text-[16px] text-black">{currentGroup.name}</h2>
                            <p className="text-[12px] text-green-500 font-medium">{currentGroup.online ? "Online" : "Offline"}</p>
                        </div>
                    </div>
                    <div className="flex gap-4 text-gray-400">
                        <button className="hover:text-[#FDC832]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></button>
                        <button className="hover:text-[#FDC832]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg></button>
                    </div>
                </div>

                {/* Messages List */}
                <div className="flex-1 overflow-y-auto px-4 md:px-6 py-6 space-y-6 bg-[#FAFAFA]">
                    {activeMessages.length === 0 ? (
                        <div className="text-center text-gray-400 py-10">
                            <p>No messages yet. Start the conversation!</p>
                        </div>
                    ) : (
                        activeMessages.map((msg) => (
                            <div key={msg.id} className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                                <div className={`px-5 py-3 rounded-[18px] max-w-[80%] md:max-w-[60%] text-[14px] shadow-sm leading-relaxed ${msg.sender === 'me'
                                        ? "bg-[#FDC832] text-black rounded-br-none"
                                        : "bg-white text-gray-800 border border-gray-100 rounded-bl-none"
                                    }`}>
                                    {msg.text}
                                </div>
                                <span className="text-[10px] text-[#9E9E9E] mt-1 px-1">{msg.time}</span>
                            </div>
                        ))
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-[#E0E0E0]">
                    <div className="flex items-center gap-3">
                        <button className="text-gray-400 hover:text-[#FDC832]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                        </button>
                        <div className="flex-1 bg-gray-50 rounded-full px-4 py-3 flex items-center border border-transparent focus-within:border-[#FDC832] transition-colors">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="flex-1 bg-transparent text-sm focus:outline-none"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                        <button
                            onClick={handleSendMessage}
                            disabled={!inputText.trim()}
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${inputText.trim()
                                    ? "bg-[#FDC832] text-black shadow-lg hover:shadow-xl hover:scale-105"
                                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                }`}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
