"use client";

import { useState } from "react";

export default function AdminDashboardPage() {
    const [notices, setNotices] = useState([
        { id: 1, title: 'Sports Day Announcement', content: "The school's Annual Sports Day will be held on May 12, 2024. Mark your calendars!", color: 'border-[#FFD600]', bg: 'hover:bg-yellow-50/50' },
        { id: 2, title: 'Summer Break Start Date', content: "Summer break begins on May 25, 2024. Have a wonderful holiday!", color: 'border-blue-400', bg: 'hover:bg-blue-50/50' },
    ]);
    const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
    const [newNotice, setNewNotice] = useState({ title: '', content: '' });

    const handleAddNotice = () => {
        if (newNotice.title && newNotice.content) {
            setNotices([...notices, {
                id: Date.now(),
                title: newNotice.title,
                content: newNotice.content,
                color: 'border-gray-400',
                bg: 'hover:bg-gray-50'
            }]);
            setIsNoticeModalOpen(false);
            setNewNotice({ title: '', content: '' });
        }
    };

    const handleDeleteNotice = () => {
        if (notices.length > 0 && confirm("Delete the top notice?")) {
            setNotices(notices.slice(1));
        }
    };
    return (
        <div className="flex flex-col gap-6 font-roboto text-slate-800 animate-fade-in pb-10">

            {/* Grid Layout: Main Left (8 cols) and Sidebar Right (4 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Left Column Section */}
                <div className="lg:col-span-8 flex flex-col gap-6">

                    {/* Welcome Card */}
                    <div className="bg-white rounded-[20px] p-8 relative overflow-hidden flex flex-col justify-center min-h-[200px] shadow-sm group hover:shadow-md transition-all">
                        <div className="z-10 relative max-w-[70%]">
                            <h1 className="text-[28px] font-bold text-black leading-tight mb-2">Welcome, Laurel Higher Secondary School Team!</h1>
                            <p className="text-[#8F8F8F] text-[14px] leading-relaxed mb-4">
                                Manage your school operations with ease. Stay updated on academics, attendance, finances, and more—all in one place. Let's keep shaping a brighter future together!
                            </p>
                        </div>
                        {/* Illustration */}
                        <div className="absolute right-0 top-0 h-full w-[40%] flex items-end justify-end pointer-events-none">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/school-building-illustration-download-in-svg-png-gif-file-formats--education-architecture-city-pack-buildings-illustrations-3327663.png" alt="School" className="h-[90%] object-contain opacity-90 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    {/* Quick Stats: Students & Notice Board Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Student Gender Stats (Donut Charts) */}
                        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 h-full">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold text-black">Students</h3>
                                <button className="text-gray-400 hover:text-black">...</button>
                            </div>
                            <div className="flex items-center justify-around h-[160px]">
                                {/* Boys Chart Mock */}
                                <div className="relative w-32 h-32 flex items-center justify-center">
                                    <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                                        <path className="text-purple-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                        <path className="text-[#C3EBFA]" strokeDasharray="53, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute flex flex-col items-center">
                                        <span className="text-2xl font-bold text-black">53<span className="text-sm">%</span></span>
                                    </div>
                                    <span className="absolute -bottom-8 text-xs font-bold text-gray-500 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#C3EBFA]"></span> 3,178 (boys)</span>
                                </div>

                                {/* Girls Chart Mock */}
                                <div className="relative w-32 h-32 flex items-center justify-center">
                                    <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                                        <path className="text-yellow-50" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                        <path className="text-[#FFEBA2]" strokeDasharray="47, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute flex flex-col items-center">
                                        <span className="text-2xl font-bold text-black">47<span className="text-sm">%</span></span>
                                    </div>
                                    <span className="absolute -bottom-8 text-xs font-bold text-gray-500 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#FFEBA2]"></span> 2,731 (girls)</span>
                                </div>
                            </div>
                        </div>

                        {/* Notice Board */}
                        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 h-full flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold text-black">Notice Board</h3>
                                <button className="text-[10px] text-gray-400 hover:text-black underline">view all</button>
                            </div>
                            <div className="flex-1 space-y-4 overflow-y-auto pr-1 custom-scrollbar max-h-[180px]">
                                {notices.map(notice => (
                                    <div key={notice.id} className={`bg-white border-l-4 ${notice.color} pl-3 py-1 flex flex-col gap-1 ${notice.bg} transition-colors p-2 rounded-r-lg`}>
                                        <h4 className="text-sm font-bold text-gray-800">{notice.title}</h4>
                                        <p className="text-[10px] text-gray-500 line-clamp-2">{notice.content}</p>
                                    </div>
                                ))}
                                {notices.length === 0 && <div className="text-xs text-gray-400 text-center py-4">No notices.</div>}
                            </div>
                            <div className="mt-4 flex gap-2">
                                <button onClick={() => setIsNoticeModalOpen(true)} className="px-3 py-1.5 bg-gray-100 rounded text-[10px] font-bold text-gray-600 hover:bg-gray-200">Add New</button>
                                <button className="p-1.5 bg-gray-100 rounded text-gray-600 hover:bg-gray-200"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg></button>
                                <button onClick={handleDeleteNotice} className="p-1.5 bg-gray-100 rounded text-gray-600 hover:bg-gray-200"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg></button>
                            </div>
                        </div>
                    </div>

                    {/* Earnings Chart Section */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 min-h-[300px]">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-black">Earnings</h3>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#C3EBFA]"></span>
                                    <span className="text-xs font-medium text-gray-600">Income</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#E2D8FC]"></span>
                                    <span className="text-xs font-medium text-gray-600">Expense</span>
                                </div>
                                <button className="text-gray-400 hover:text-black">...</button>
                            </div>
                        </div>
                        {/* Chart Area Mock */}
                        <div className="relative h-[220px] w-full mt-4">
                            {/* Y-Axis Labels */}
                            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-gray-400">
                                <span>1000K</span>
                                <span>750K</span>
                                <span>500K</span>
                                <span>250K</span>
                                <span>0</span>
                            </div>
                            {/* Chart Content Area */}
                            <div className="ml-10 h-full border-l border-b border-gray-100 relative">
                                {/* Mock Lines */}
                                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                    {/* Income Line (Blue) */}
                                    <path d="M0,200 C50,150 100,50 200,80 S350,150 500,100 S650,50 800,80" fill="none" stroke="#C3EBFA" strokeWidth="4" />
                                    {/* Expense Line (Purple) */}
                                    <path d="M0,200 C60,180 120,120 220,140 S380,180 520,120 S680,140 800,100" fill="none" stroke="#E2D8FC" strokeWidth="4" />
                                </svg>
                                {/* Floating Tooltip Mock */}
                                <div className="absolute left-[60%] top-[30%] bg-white shadow-lg p-3 rounded-xl border border-gray-50 z-10 hidden md:block">
                                    <p className="text-xs text-gray-400 mb-1">Sep 14, 2030</p>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="w-2 h-2 rounded-full bg-[#C3EBFA]"></span>
                                        <span className="text-xs font-bold">$837,000</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#E2D8FC]"></span>
                                        <span className="text-xs font-bold text-gray-400">$500,000</span>
                                    </div>
                                </div>
                            </div>
                            {/* X-Axis Labels */}
                            <div className="ml-10 mt-2 flex justify-between text-[10px] text-gray-400 w-full px-2">
                                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
                                    <span key={m}>{m}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column Section (Widgets) */}
                <div className="lg:col-span-4 flex flex-col gap-6">

                    {/* Top Stats Cards Group */}
                    <div className="flex flex-col gap-4">
                        {/* Students Widget */}
                        <div className="bg-[#FFEBA2] rounded-[20px] p-5 relative overflow-hidden group hover:scale-[1.02] transition-transform">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-sm font-medium text-[#4A4A4A]">Students</span>
                                <button className="p-1 hover:bg-black/5 rounded-full"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg></button>
                            </div>
                            <h3 className="text-[32px] font-bold text-black mb-1">5,909</h3>
                        </div>
                        {/* Teachers Widget */}
                        <div className="bg-[#E2D8FC] rounded-[20px] p-5 relative overflow-hidden group hover:scale-[1.02] transition-transform">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-sm font-medium text-[#4A4A4A]">Teachers</span>
                                <button className="p-1 hover:bg-black/5 rounded-full"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg></button>
                            </div>
                            <h3 className="text-[32px] font-bold text-black mb-1">60</h3>
                        </div>
                        {/* Employee Widget */}
                        <div className="bg-[#FFEBA2] rounded-[20px] p-5 relative overflow-hidden group hover:scale-[1.02] transition-transform">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-sm font-medium text-[#4A4A4A]">Employee</span>
                                <button className="p-1 hover:bg-black/5 rounded-full"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg></button>
                            </div>
                            <h3 className="text-[32px] font-bold text-black mb-1">100</h3>
                        </div>
                    </div>

                    {/* Calendar Widget */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <button className="text-gray-400 hover:text-black">‹</button>
                            <h4 className="font-bold text-sm">September 2021</h4>
                            <button className="text-gray-400 hover:text-black">›</button>
                        </div>
                        {/* Simple Date Grid Mock */}
                        <div className="grid grid-cols-7 gap-2 text-center text-[10px] text-gray-500 mb-2 font-medium">
                            <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-gray-700">
                            {/* Mock Dates */}
                            <span className="p-1 text-gray-300">29</span><span className="p-1 text-gray-300">30</span><span className="p-1 text-gray-300">31</span>
                            <span className="p-1 hover:bg-gray-100 rounded-full cursor-pointer">1</span>
                            <span className="p-1 hover:bg-gray-100 rounded-full cursor-pointer">2</span>
                            <span className="p-1 hover:bg-gray-100 rounded-full cursor-pointer">3</span>
                            <span className="p-1 hover:bg-gray-100 rounded-full cursor-pointer">4</span>
                            {Array.from({ length: 12 }, (_, i) => i + 5).map(d => <span key={d} className="p-1 hover:bg-gray-100 rounded-full cursor-pointer">{d}</span>)}
                            <span className="p-1 bg-[#FF5722] text-white rounded-full shadow-md">19</span>
                            {Array.from({ length: 11 }, (_, i) => i + 20).map(d => <span key={d} className="p-1 hover:bg-gray-100 rounded-full cursor-pointer">{d}</span>)}
                        </div>
                        <button className="w-full mt-4 py-2 border border-gray-100 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 group-hover:border-gray-300 transition-colors">Manage Calendar</button>
                    </div>

                    {/* Financial Overview (Small Cards) */}
                    <div>
                        <div className="flex justify-between items-center mb-3 px-1">
                            <h3 className="text-sm font-bold text-black">Financial Overview</h3>
                            <div className="flex gap-2">
                                <button className="bg-white px-2 py-1 rounded text-[10px] border border-gray-200">2023-2024</button>
                                <button className="bg-white px-2 py-1 rounded text-[10px] border border-gray-200">Annual</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-[#C3EBFA] rounded-2xl p-4 flex flex-col justify-between h-[100px]">
                                <div className="flex justify-between items-start">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 3v18h18" /></svg>
                                    <span className="bg-white/50 text-[#000] text-[10px] px-1.5 py-0.5 rounded font-bold">↑ 12%</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold opacity-80">₹29,545,000</h4>
                                    <p className="text-[10px] text-gray-600">Total Income</p>
                                </div>
                            </div>
                            <div className="bg-[#C3EBFA] rounded-2xl p-4 flex flex-col justify-between h-[100px]">
                                <div className="flex justify-between items-start">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 3v18h18" /></svg>
                                    <span className="bg-white/50 text-[#000] text-[10px] px-1.5 py-0.5 rounded font-bold">↑ 0.5%</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold opacity-80 min-w-0 truncate">₹19,291,266</h4>
                                    <p className="text-[10px] text-gray-600">Total Expenses</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fee Status & Messages Row for Sidebar Area? No, keep stacking vertically */}
                    {/* Fee Status */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-sm font-bold text-black">Fee Status</h3>
                            <button className="text-gray-400 hover:text-black">...</button>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center pb-2 border-b border-gray-50 last:border-0">
                                <span className="text-lg font-bold">1,335</span>
                                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold">● Paid</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-gray-50 last:border-0">
                                <span className="text-lg font-bold">4,366</span>
                                <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold">● Pending</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold">208</span>
                                <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-[10px] font-bold">● Overdue</span>
                            </div>
                            <button className="w-full mt-2 text-[10px] text-gray-400 border border-gray-100 rounded py-1 hover:bg-gray-50">Annual ▼</button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-sm font-bold text-black">Messages</h3>
                            <button className="text-gray-400 hover:text-black">...</button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: "Jane Cooper", msg: "Don't forget the lab rep...", time: "12:34 pm" },
                                { name: "Kristin Watson", msg: "Do we have maths test...", time: "12:34 pm" },
                                { name: "Jenny Wilson", msg: "Wud?", time: "12:34 pm" },
                                { name: "Brooklyn Sim", msg: "Did Sachin gave any ki...", time: "12:34 pm" },
                                { name: "Darrell Steward", msg: "Can we go for a movie ...", time: "12:34 pm" }
                            ].map((m, i) => (
                                <div key={i} className="flex items-center gap-3 cursor-pointer group">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${m.name}`} alt={m.name} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h5 className="text-xs font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{m.name}</h5>
                                        <p className="text-[10px] text-gray-500 truncate">{m.msg}</p>
                                    </div>
                                    <span className="text-[9px] text-gray-400 whitespace-nowrap">{m.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            {/* Notice Modal */}
            {isNoticeModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl transform transition-all scale-100">
                        <h2 className="text-lg font-bold mb-4">Add Notice</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Title</label>
                                <input className="w-full border border-gray-200 rounded p-2 text-sm outline-none focus:border-orange-500" value={newNotice.title} onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Content</label>
                                <textarea className="w-full border border-gray-200 rounded p-2 text-sm outline-none focus:border-orange-500 h-20" value={newNotice.content} onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })} />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <button onClick={() => setIsNoticeModalOpen(false)} className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 rounded">Cancel</button>
                            <button onClick={handleAddNotice} className="px-3 py-1.5 bg-orange-500 text-white text-xs font-medium hover:bg-orange-600 rounded">Add</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
