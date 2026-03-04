"use client";

import { useState } from "react";

export default function CourseDetailClient({ id }: { id?: string }) {
    const [activeTab, setActiveTab] = useState("Overview");

    return (
        <div className="flex flex-col gap-6 font-roboto animate-fade-in pb-10">
            {/* Custom Header (Matching the design) */}
            <div className="bg-white rounded-[20px] p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 flex-1">
                    {/* Search Bar */}
                    <div className="flex-1 max-w-md relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        </span>
                        <input type="text" placeholder="Search anything Here..." className="w-full bg-white border border-gray-200 rounded-full py-3 pl-12 pr-4 text-sm outline-none focus:border-orange-400 transition-all placeholder-gray-400 font-medium" />
                    </div>
                    {/* AI Assistant Mic */}
                    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                    </button>
                    <span className="text-sm font-medium text-gray-500">AI Assistant</span>
                </div>

                {/* Profile  */}
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

            {/* Course Header Info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <h1 className="text-2xl font-bold text-black">Figma from A to z (ID: {id})</h1>
                        <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded border border-gray-200">UI/UX Designer</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 pl-10">
                        <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> 38 lessons</span>
                        <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 4h 30min</span>
                        <span className="flex items-center gap-1"><svg width="12" height="12" fill="orange" stroke="none" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> 4.5 (126 reviews)</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="text-sm font-bold text-gray-600 hover:text-black">Share</button>
                    <button className="bg-[#FFBD3E] hover:bg-[#ffb01e] text-black px-6 py-2.5 rounded-full font-bold flex items-center gap-2 shadow-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
                        Enroll Now
                    </button>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column (Video & Info) - 8 cols */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                    {/* Video Player Placeholder */}
                    <div className="w-full h-[400px] bg-gray-200 rounded-[24px] relative overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" className="w-full h-full object-cover opacity-90" alt="Course Preview" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center pl-1 hover:scale-110 transition-transform shadow-lg">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="orange" stroke="none"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-2 border-b border-gray-100 pb-1 overflow-x-auto">
                        {['Overview', 'Author', 'FAQ', 'Announcements', 'Reviews'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 text-sm font-bold rounded-full transition-colors ${activeTab === tab ? 'bg-orange-100 text-orange-600' : 'text-gray-500 hover:text-gray-800'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content Section (Overview) */}
                    <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-black mb-4">About Course</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-8">
                            Unlock the power of Figma, the leading collaborative design tool, with our comprehensive online course. Whether you're a novice or looking to enhance your skills, this course will guide you through Figma's robust features and workflows.
                            <br /><br />
                            Perfect for UI/UX designers, product managers and anyone interested in modern design tools. Join us to elevate your design skills and boost your productivity with Figma!
                        </p>

                        <h3 className="text-lg font-bold text-black mb-4">What You'll Learn</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                            {[
                                "Setting up the environment", "Understand HTML Programming",
                                "Advanced HTML Pratice", "Code HTML",
                                "Build a portfolio website", "Start building Beautiful websites",
                                "Responsive designs"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <span className="text-green-500"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg></span>
                                    <span className="text-sm text-gray-600 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column (Sidebar) - 4 cols */}
                <div className="lg:col-span-4 flex flex-col gap-6">

                    {/* Course Content List (Modules) */}
                    <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-black mb-6">Course content</h3>
                        <div className="space-y-4">
                            {[
                                { id: '01', title: 'Intro', duration: '22min', expanded: true },
                                { id: '02', title: 'Intro', duration: '1h 20min', expanded: false },
                                { id: '03', title: 'Intro', duration: '36min', expanded: false },
                                { id: '04', title: 'Intro', duration: '40min', expanded: false },
                                { id: '05', title: 'Intro', duration: '1h 12min', expanded: false },
                                { id: '06', title: 'Intro', duration: '41min', expanded: false },
                                { id: '07', title: 'Intro', duration: '8min', expanded: false },
                            ].map((module, i) => (
                                <div key={i} className={`border-b border-gray-50 pb-2 last:border-0`}>
                                    <div className="flex justify-between items-center cursor-pointer group">
                                        <h4 className="text-sm font-bold text-black group-hover:text-orange-500 transition-colors">{module.id}: {module.title}</h4>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-gray-400">{module.duration}</span>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`text-gray-300 transition-transform ${module.expanded ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6" /></svg>
                                        </div>
                                    </div>
                                    {module.expanded && (
                                        <div className="mt-3 pl-2 space-y-3 text-xs text-gray-500">
                                            <div className="flex items-center gap-2 cursor-pointer hover:text-black">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                                                Introduction <span className="ml-auto text-gray-300">2 min</span>
                                            </div>
                                            <div className="flex items-center gap-2 cursor-pointer hover:text-black">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                                                What is Figma? <span className="ml-auto text-gray-300">5 min</span>
                                            </div>
                                            <div className="flex items-center gap-2 cursor-pointer hover:text-black">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                                                Understanding Sigma <span className="ml-auto text-gray-300">12 min</span>
                                            </div>
                                            <div className="flex items-center gap-2 cursor-pointer hover:text-black">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                                                UI Tour <span className="ml-auto text-gray-300">3 min</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contributing Instructor List (Course content title in design, implying Instructors) */}
                    <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-black mb-6">Course Instructors</h3>
                        <div className="space-y-4">
                            {[
                                { name: 'Crystal Lucas', role: 'UI/UX Specialist', rating: 4.8 },
                                { name: 'Dianne Russell', role: 'UI/UX Specialist', rating: 4.8 },
                                { name: 'Brooklyn Simmons', role: 'UI/UX Specialist', rating: 4.8 },
                                { name: 'Floyd Miles', role: 'UI/UX Specialist', rating: 4.8 },
                            ].map((person, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${person.name}`} alt={person.name} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-1">
                                            <h5 className="text-xs font-bold text-gray-900">{person.name}</h5>
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="#3B82F6" stroke="none"><circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="3" /></svg>
                                        </div>
                                        <p className="text-[10px] text-gray-400">{person.role}</p>
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] font-bold text-gray-600">
                                        <span className="text-orange-400">★</span> ({person.rating})
                                    </div>
                                </div>
                            ))}
                            <p className="text-[10px] text-gray-400 mt-2">Crystal is a seasoned UI/UX designer with over a...</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
