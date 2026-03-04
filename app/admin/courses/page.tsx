"use client";

import { useState } from "react";

export default function CoursesPage() {
    const [activeTab, setActiveTab] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("Latest");

    const handleAddCourse = () => {
        // Mock functionality
        alert("Add Course Modal would open here");
    };

    const coursesData = [
        { name: "Introduction to React", lessons: "8 Lessons", time: "4 Weeks", progress: 65, status: "In Progress", color: "bg-orange-100 text-orange-600", icon: "⚛️" },
        { name: "Advanced JavaScript co...", lessons: "12 Lessons", time: "4 Weeks", progress: 30, status: "In Progress", color: "bg-orange-100 text-orange-600", icon: "JS" },
        { name: "UI/UX Design Fundame...", lessons: "15 Lessons", time: "4 Weeks", progress: 65, status: "Completed", color: "bg-green-100 text-green-600", icon: "🎨" },
        { name: "English for career Devlo...", lessons: "4 Lessons", time: "4 Weeks", progress: 42, status: "Completed", color: "bg-green-100 text-green-600", icon: "📝" },
        { name: "Learning Strategy", lessons: "3 Lessons", time: "4 Weeks", progress: 40, status: "Completed", color: "bg-green-100 text-green-600", icon: "🧠" },
        { name: "First Steps in Chinese", lessons: "5 Lessons", time: "4 Weeks", progress: 50, status: "Completed", color: "bg-green-100 text-green-600", icon: "🇨🇳" },
    ];

    const filteredCourses = coursesData.filter(course => {
        const matchesTab = activeTab === "All" || course.status === activeTab || (activeTab === "On Progress" && course.status === "In Progress");
        const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesTab && matchesSearch;
    });

    return (
        <div className="flex flex-col gap-6 font-roboto animate-fade-in pb-10">
            {/* Custom Page Header (Simulating the design's specific top bar) */}
            <div className="bg-white rounded-[20px] p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 flex-1">
                    {/* Select Course Dropdown */}
                    <div className="relative">
                        <select
                            className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-xl px-4 py-2.5 pr-8 outline-none focus:border-blue-500 cursor-pointer min-w-[140px]"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="Latest">Latest</option>
                            <option value="Popular">Popular</option>
                            <option value="Oldest">Oldest</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                    </div>

                    <button onClick={handleAddCourse} className="bg-[#FFBD3E] hover:bg-[#ffb01e] text-black px-4 py-2.5 rounded-xl font-medium text-sm shadow-sm transition-all whitespace-nowrap">
                        + Add Course
                    </button>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-md relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search anything Here..."
                            className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 transition-all placeholder-gray-400"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* AI Assistant & User Profile (Right side) */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-500 cursor-pointer hover:text-blue-600 transition-colors">
                        <span className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /><line x1="8" y1="22" x2="16" y2="22" /></svg>
                        </span>
                        <span className="text-sm font-medium">AI Assistant</span>
                    </div>

                    <div className="h-8 w-px bg-gray-200 mx-2"></div>

                    <div className="flex items-center gap-3">
                        <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        </button>
                        <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Melanie" alt="User" className="w-9 h-9 rounded-full bg-gray-100" />
                            <div className="hidden md:block">
                                <h4 className="text-sm font-bold text-black leading-none">Melanie Hopkins</h4>
                                <span className="text-[10px] text-gray-400">Super Admin</span>
                            </div>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {/* Card 1: Active Courses */}
                <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-3xl font-bold text-black mb-1">03</h2>
                            <p className="text-xs text-gray-500 font-medium">Active Courses</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-500">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded text-[10px] font-bold">↗ 70%</span>
                        <span className="text-[10px] text-gray-400">last 3 mon</span>
                        {/* Radial Progress Mock */}
                        <div className="relative w-12 h-12 flex items-center justify-center -mb-4 -mr-2">
                            <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                                <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                <path className="text-teal-400" strokeDasharray="70, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Card 2: Upcoming Class */}
                <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-3xl font-bold text-black mb-1">03</h2>
                            <p className="text-xs text-gray-500 font-medium">Up coming Class</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-[10px] font-bold">↗ 72%</span>
                        <span className="text-[10px] text-gray-400">Last 3 mon</span>
                        {/* Bar Chart Mock */}
                        <div className="flex items-end gap-1 h-8 -mb-1">
                            <div className="w-1.5 bg-blue-100 h-[40%] rounded-t-sm"></div>
                            <div className="w-1.5 bg-blue-100 h-[60%] rounded-t-sm"></div>
                            <div className="w-1.5 bg-blue-100 h-[30%] rounded-t-sm"></div>
                            <div className="w-1.5 bg-blue-100 h-[70%] rounded-t-sm"></div>
                            <div className="w-1.5 bg-blue-500 h-[100%] rounded-t-sm"></div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Average Progress */}
                <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-3xl font-bold text-black mb-1">35%</h2>
                            <p className="text-xs text-gray-500 font-medium">Average Progress</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <span className="bg-yellow-50 text-yellow-600 px-2 py-1 rounded text-[10px] font-bold">↗ 44.2%</span>
                        <span className="text-[10px] text-gray-400">last 3 mon</span>
                        {/* Area Chart Icon Mock */}
                        <div className="flex items-end gap-0.5 h-8 -mr-2">
                            <div className="w-6 bg-yellow-400 h-[80%] rounded-t-md"></div>
                            <div className="w-6 bg-yellow-100 h-[40%] rounded-t-md"></div>
                        </div>
                    </div>
                </div>

                {/* Card 4: Pending Tasks */}
                <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-3xl font-bold text-black mb-1">02</h2>
                            <p className="text-xs text-gray-500 font-medium">Pending Tasks</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <span className="bg-orange-50 text-orange-600 px-2 py-1 rounded text-[10px] font-bold">↗ 20%</span>
                        <span className="text-[10px] text-gray-400">Last 3 mon</span>
                        {/* Bar Chart Mock */}
                        <div className="flex items-end gap-1 h-8 -mb-1">
                            <div className="w-1.5 bg-orange-100 h-[40%] rounded-t-sm"></div>
                            <div className="w-1.5 bg-orange-500 h-[60%] rounded-t-sm"></div>
                            <div className="w-1.5 bg-orange-100 h-[30%] rounded-t-sm"></div>
                            <div className="w-1.5 bg-orange-100 h-[50%] rounded-t-sm"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section: Courses List & Learning Schedule */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Courses List (8 cols) */}
                <div className="lg:col-span-8 bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
                    <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                        <h3 className="font-bold text-lg text-black">Courses</h3>
                        <div className="flex bg-gray-50 p-1 rounded-lg">
                            {['All', 'On Progress', 'Completed'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeTab === tab ? 'bg-white shadow text-black' : 'text-gray-500 hover:text-gray-800'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                            <button className="px-4 py-1.5 rounded-md text-xs font-bold text-gray-500 hover:text-gray-800 flex items-center gap-1">
                                View All
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-gray-400 text-xs border-b border-gray-50">
                                    <th className="pb-3 font-medium">Course Name</th>
                                    <th className="pb-3 font-medium">Progress</th>
                                    <th className="pb-3 font-medium">Status</th>
                                    <th className="pb-3 font-medium"></th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {filteredCourses.map((course, i) => (
                                    <tr key={i} className="group hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 pr-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-lg font-bold shadow-sm">{course.icon}</div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-sm mb-1">{course.name}</h4>
                                                    <div className="flex items-center gap-3 text-[10px] text-gray-500">
                                                        <span className="flex items-center gap-1"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> {course.lessons}</span>
                                                        <span className="flex items-center gap-1"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> {course.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 pr-4 w-1/3">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs font-bold text-gray-700 w-8">{course.progress}%</span>
                                                <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                                                    <div className="bg-black h-1.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 pr-4">
                                            <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold ${course.status === 'In Progress' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                                                {course.status === 'In Progress' ? '🕒 ' : '🏆 '} {course.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-right">
                                            <button className="text-gray-400 hover:text-black">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Learning Schedule (4 cols) */}
                <div className="lg:col-span-4 bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 border-t-[3px] border-t-blue-400 h-fit">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg text-black">Learning Schedule</h3>
                        <button className="flex items-center gap-1 text-[10px] font-bold bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 hover:bg-gray-100">
                            November <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                        </button>
                    </div>

                    <div className="space-y-4">
                        {[
                            { day: "15", month: "Apr", title: "Building a REST API with Node.js", type: "Advanced JavaScript Concepts", time: "15 Apr, 14:00 - 90 min", color: "bg-orange-100" },
                            { day: "16", month: "Apr", title: "React Component Patterns", type: "Introduction to React", time: "16 Apr, 10:00 - 60 min", color: "bg-yellow-100" },
                            { day: "17", month: "Apr", title: "Design Systems workshop", type: "UI/UX Design Fundamentals", time: "17 Apr, 10:00 - 60 min", color: "bg-yellow-100" },
                            { day: "18", month: "Apr", title: "React Component Patterns", type: "Introduction to React", time: "16 Apr, 15:00 - 120 min", color: "bg-yellow-100" },
                        ].map((item, i) => (
                            <div key={i} className={`p-4 rounded-2xl flex items-center justify-between gap-3 ${i === 0 ? 'bg-gray-50 border border-gray-100' : 'bg-gray-50 border border-transparent'}`}>
                                <div className={`flex flex-col items-center justify-center w-10 h-10 rounded-lg shrink-0 ${item.color} text-black`}>
                                    <span className="text-[8px] font-bold uppercase">{item.month}</span>
                                    <span className="text-xs font-bold leading-none">{item.day}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-xs font-bold text-gray-900 truncate">{item.title}</h4>
                                    <p className="text-[9px] text-gray-500 truncate">{item.type}</p>
                                    <p className="text-[9px] text-gray-400 mt-1">{item.time}</p>
                                </div>
                                <button className="px-3 py-1 rounded-full border border-orange-200 text-orange-600 text-[10px] font-bold hover:bg-orange-50 bg-white">
                                    Check
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section: Performance Insights */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg text-black">Performance Insights</h3>
                    <div className="flex gap-4 items-center">
                        <div className="flex gap-4 text-[10px] font-medium">
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-300"></span> Grammer</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-400"></span> Vocab</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span> Comprehension</span>
                        </div>
                        <button className="flex items-center gap-1 text-[10px] font-bold bg-blue-500 text-white px-3 py-1.5 rounded shadow-sm hover:bg-blue-600">
                            Feb 2025 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                        </button>
                    </div>
                </div>

                {/* Performance Chart Mock */}
                <div className="h-[250px] w-full relative">
                    {/* Floating tooltip simulation */}
                    <div className="absolute top-0 right-[20%] bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10">
                        557.96 x 469.42
                    </div>

                    <div className="flex h-full">
                        {/* Y Axis */}
                        <div className="flex flex-col justify-between text-[10px] text-gray-400 pr-4 pb-6">
                            {[100, 80, 60, 40, 20, 0].map(v => <span key={v}>{v}%</span>)}
                        </div>
                        {/* Chart Lines */}
                        <div className="flex-1 relative border-l border-b border-gray-100">
                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                {/* Grid Lines */}
                                {[0, 20, 40, 60, 80, 100].map((v, i) => (
                                    <line key={v} x1="0" y1={`${i * 20}%`} x2="100%" y2={`${i * 20}%`} stroke="#f3f4f6" strokeDasharray="4" />
                                ))}

                                {/* Line 1: Blue (Grammar) */}
                                <path d="M0,220 C100,180 200,190 300,185 S500,170 600,190 S800,180 1000,160" fill="none" stroke="#60A5FA" strokeWidth="2" />
                                {/* Line 2: Orange (Vocab) */}
                                <path d="M0,220 C100,200 200,180 300,195 S500,210 600,180 S800,200 1000,170" fill="none" stroke="#FB923C" strokeWidth="2" />
                                {/* Line 3: Green (Comprehension) */}
                                <path d="M0,220 C100,210 200,200 300,200 S500,180 600,170 S800,170 1000,150" fill="none" stroke="#4ADE80" strokeWidth="2" />
                            </svg>

                            {/* X Axis Labels */}
                            <div className="absolute bottom-[-25px] left-0 w-full flex justify-between text-[10px] text-gray-400 px-10">
                                <span>Week 1</span>
                                <span>Week 2</span>
                                <span>Week 3</span>
                                <span>Week 4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
