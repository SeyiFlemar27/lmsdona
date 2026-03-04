"use client";

import { useState } from "react";

export default function StudentProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [studentName, setStudentName] = useState("Ashwin");
    const [assignments, setAssignments] = useState([
        { no: '01', task: 'Read Chapters 1-3', subject: 'English', date: '12 May 2024', status: 'In Progress', color: 'bg-blue-50 text-blue-600' },
        { no: '02', task: 'Complete Problem Set #5', subject: 'Maths', date: '12 May 2024', status: 'Not Started', color: 'bg-red-50 text-red-600' },
        { no: '03', task: 'Write Lab Report', subject: 'Physics', date: '12 May 2024', status: 'In Progress', color: 'bg-blue-50 text-blue-600' },
        { no: '04', task: 'Prepare for Oral Presentation', subject: 'Chemistry', date: '12 May 2024', status: 'In Progress', color: 'bg-blue-50 text-blue-600' },
        { no: '05', task: 'Create Art Piece', subject: 'English', date: '12 May 2024', status: 'Completed', color: 'bg-green-50 text-green-600' },
    ]);

    const handleDeleteAssignment = (no: string) => {
        if (confirm("Delete this assignment?")) {
            setAssignments(assignments.filter(a => a.no !== no));
        }
    };

    return (
        <div className="flex flex-col gap-6 font-roboto animate-fade-in pb-10">
            {/* Top Bar / Breadcrumb (Visual only as per design) */}
            <div className="flex items-center gap-4 text-gray-500 mb-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                </button>
                <div className="flex-1 bg-white rounded-full px-4 py-2.5 flex items-center gap-2 shadow-sm border border-gray-100">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                    <input type="text" placeholder="Search" className="border-none outline-none text-sm w-full text-gray-600 placeholder-gray-400" />
                </div>
                <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 text-gray-500"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg></button>
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 text-gray-500"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></button>
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 text-gray-500"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg></button>
                    <div className="w-10 h-10 rounded-full border border-gray-200 overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ashwin" alt="User" />
                    </div>
                </div>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Left Column (8 cols) */}
                <div className="lg:col-span-8 flex flex-col gap-6">

                    {/* Welcome Card */}
                    <div className="bg-white rounded-[20px] p-8 relative overflow-hidden flex items-center min-h-[220px] shadow-sm group">
                        <div className="z-10 relative max-w-[60%]">
                            <h1 className="text-3xl font-bold text-black mb-2 flex items-center gap-2">
                                Hey,
                                {isEditing ?
                                    <input className="bg-gray-100 px-2 rounded outline-none border border-transparent focus:border-orange-200" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
                                    : studentName
                                }
                                <button onClick={() => setIsEditing(!isEditing)} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-orange-500">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                                </button>
                            </h1>
                            <p className="text-[#8F8F8F] text-sm leading-relaxed mb-4">
                                Welcome back! We're here to support you on your learning journey. Dive into your classes and keep progressing towards your goals
                            </p>
                        </div>
                        <div className="absolute right-0 bottom-0 h-full w-[45%] flex items-end justify-center pointer-events-none">
                            {/* Illustration Mock */}
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/student-studying-on-laptop-illustration-download-in-svg-png-gif-file-formats--online-study-education-learning-pack-school-illustrations-4547690.png" className="h-[90%] object-contain" alt="Student" />
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-1 group hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-1">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h3 className="text-xl font-bold">80%</h3>
                            <p className="text-[10px] text-gray-400">Attendance</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-1 group hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mb-1">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                            </div>
                            <h3 className="text-xl font-bold">258+</h3>
                            <p className="text-[10px] text-gray-400">Task Completed</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-1 group hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-1">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            </div>
                            <h3 className="text-xl font-bold">64%</h3>
                            <p className="text-[10px] text-gray-400">Task in Progress</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-1 group hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center mb-1">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </div>
                            <h3 className="text-xl font-bold">245</h3>
                            <p className="text-[10px] text-gray-400">Reward Points</p>
                        </div>
                    </div>

                    {/* Test Score & Grade Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Test Score Activity */}
                        <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-sm">Test Score activity</h3>
                                <button className="text-[10px] bg-gray-50 px-2 py-1 rounded border border-gray-100">Monthly ▼</button>
                            </div>
                            <div className="h-[200px] w-full relative">
                                {/* Mock Line Chart */}
                                <svg className="w-full h-full" preserveAspectRatio="none">
                                    <path d="M0,150 C50,120 100,180 150,100 S250,50 300,120 S400,100 500,80" fill="none" stroke="#FFD600" strokeWidth="3" />
                                    <path d="M0,150 C50,120 100,180 150,100 S250,50 300,120 S400,100 500,80 V200 H0 Z" fill="url(#gradient)" opacity="0.1" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#FFD600" />
                                            <stop offset="100%" stopColor="white" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="absolute top-[30%] left-[45%] bg-white p-2 rounded shadow border border-gray-100 flex flex-col items-center">
                                    <span className="text-xs font-bold text-yellow-500">70%</span>
                                </div>
                            </div>
                            <div className="flex justify-between text-[10px] text-gray-400 mt-2">
                                <span>Apr 10</span><span>Apr 11</span><span>Apr 12</span><span>Apr 13</span><span>Apr 14</span><span>Apr 15</span>
                            </div>
                        </div>

                        {/* Grade by Subject */}
                        <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-sm">Grade by Subject</h3>
                                <div className="flex gap-2">
                                    <button className="text-[10px] bg-gray-50 px-2 py-1 rounded border border-gray-100">Exam ▼</button>
                                    <button className="text-[10px] bg-gray-50 px-2 py-1 rounded border border-gray-100">Monthly ▼</button>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {['English', 'Tamil', 'Math', 'Chemistry', 'Physics'].map((subject, i) => (
                                    <div key={subject} className="flex items-center gap-3">
                                        <div className="w-24 h-6 bg-purple-100 rounded-full overflow-hidden relative">
                                            <div className="absolute top-0 left-0 h-full bg-purple-200" style={{ width: `${80 + (i % 2) * 10}%` }}></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-gray-600 w-16">{subject}</span>
                                        {/* Connecting Line mock */}
                                        <div className="flex-1 h-px bg-gray-100"></div>
                                        <span className="text-[10px] font-bold text-gray-600 w-16 text-right">{['Biology', 'History', 'Geography', 'Comp Sci', 'English'][i]}</span>
                                        <div className="w-24 h-6 bg-blue-100 rounded-full overflow-hidden relative">
                                            <div className="absolute top-0 right-0 h-full bg-blue-200" style={{ width: `${70 + (i * 5)}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Assignments */}
                    <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-sm">Assignments</h3>
                            <div className="flex gap-2 text-sm text-gray-400">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                <input placeholder="Search by Subject" className="outline-none text-xs w-32" />
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs text-gray-600">
                                <thead className="bg-gray-50 text-gray-400 uppercase font-bold">
                                    <tr>
                                        <th className="p-3 rounded-l-lg">No</th>
                                        <th className="p-3">Task</th>
                                        <th className="p-3">Subject</th>
                                        <th className="p-3">Due Date</th>
                                        <th className="p-3">Status</th>
                                        <th className="p-3 rounded-r-lg">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {assignments.map((item) => (
                                        <tr key={item.no} className="hover:bg-gray-50/50">
                                            <td className="p-3 font-medium">{item.no}</td>
                                            <td className="p-3 font-medium text-gray-800">{item.task}</td>
                                            <td className="p-3">{item.subject}</td>
                                            <td className="p-3">{item.date}</td>
                                            <td className="p-3">
                                                <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${item.color}`}>{item.status}</span>
                                            </td>
                                            <td className="p-3 flex gap-2 text-gray-400">
                                                <button className="hover:text-black"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg></button>
                                                <button onClick={() => handleDeleteAssignment(item.no)} className="hover:text-red-500"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Column (4 cols) */}
                <div className="lg:col-span-4 flex flex-col gap-6">

                    {/* Attendance Donut */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-sm">Attendance</h3>
                            <button className="text-gray-400 hover:text-black">...</button>
                        </div>
                        <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
                            <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                                <path className="text-gray-50" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                <path className="text-[#9C89FF]" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                            <div className="absolute flex flex-col items-center">
                                <span className="text-3xl font-bold text-black">80%</span>
                            </div>
                        </div>
                        <div className="flex justify-center gap-6 mt-4 text-[10px] text-gray-500 font-bold">
                            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#9C89FF]"></span> Present</div>
                            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-400"></span> Absent</div>
                        </div>
                    </div>

                    {/* Notice Board */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-sm">Notice Board</h3>
                            <button className="text-[10px] underline">view all</button>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-[#FFF8D8] p-3 rounded-xl border border-[#FFEBA2] flex items-start gap-3">
                                <span className="p-2 bg-[#F7961F] text-white rounded-lg"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg></span>
                                <div>
                                    <h4 className="text-xs font-bold mb-1">Sports Day Announcement</h4>
                                    <p className="text-[10px] text-gray-500">The school's Annual Sports Day will be held on May 12, 2024.</p>
                                </div>
                            </div>
                            <div className="bg-[#EBE6FF] p-3 rounded-xl border border-[#D5CDFF] flex items-start gap-3">
                                <span className="p-2 bg-[#7B61FF] text-white rounded-lg"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg></span>
                                <div>
                                    <h4 className="text-xs font-bold mb-1">Summer Break Start Date</h4>
                                    <p className="text-[10px] text-gray-500">Summer break begins on May 25, 2024.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-sm">Resources</h3>
                            <button className="text-[10px] underline">view all</button>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="bg-orange-50 p-2 rounded-xl border border-orange-100 cursor-pointer hover:bg-orange-100">
                                <div className="w-10 h-10 bg-white rounded-full mx-auto mb-2 flex items-center justify-center shadow-sm text-orange-500">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                                </div>
                                <span className="text-[10px] font-bold text-gray-600">Books</span>
                            </div>
                            <div className="bg-green-50 p-2 rounded-xl border border-green-100 cursor-pointer hover:bg-green-100">
                                <div className="w-10 h-10 bg-white rounded-full mx-auto mb-2 flex items-center justify-center shadow-sm text-green-500">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" /><line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="17" x2="22" y2="17" /><line x1="17" y1="7" x2="22" y2="7" /></svg>
                                </div>
                                <span className="text-[10px] font-bold text-gray-600">Videos</span>
                            </div>
                            <div className="bg-purple-50 p-2 rounded-xl border border-purple-100 cursor-pointer hover:bg-purple-100">
                                <div className="w-10 h-10 bg-white rounded-full mx-auto mb-2 flex items-center justify-center shadow-sm text-purple-500">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                </div>
                                <span className="text-[10px] font-bold text-gray-600">Papers</span>
                            </div>
                        </div>
                    </div>

                    {/* Monday Schedule */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <button className="text-gray-400">‹</button>
                            <h3 className="font-bold text-sm">Monday</h3>
                            <button className="text-gray-400">›</button>
                        </div>
                        <div className="space-y-2 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-100 -z-10"></div>

                            <div className="text-center bg-white border border-gray-100 rounded-lg py-1 text-xs font-bold text-gray-500 shadow-sm">Tamil</div>
                            <div className="text-center bg-white border border-gray-100 rounded-lg py-1 text-xs font-bold text-gray-500 shadow-sm mt-2">English</div>
                            <div className="text-center bg-blue-100 border border-blue-200 rounded-lg py-1 text-[10px] font-bold text-blue-600 shadow-sm mt-2">Break</div>
                            <div className="text-center bg-white border border-gray-100 rounded-lg py-1 text-xs font-bold text-gray-500 shadow-sm mt-2">Math</div>
                            <div className="text-center bg-white border border-gray-100 rounded-lg py-1 text-xs font-bold text-gray-500 shadow-sm mt-2">Science</div>
                            <div className="text-center bg-orange-100 border border-orange-200 rounded-lg py-1 text-[10px] font-bold text-orange-600 shadow-sm mt-2">Lunch</div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-sm font-bold text-black">Messages</h3>
                            <button className="text-gray-400 hover:text-black"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg></button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: "Jane Cooper", msg: "Don't forget the lab rep...", time: "12:34 pm" },
                                { name: "Kristin Watson", msg: "Do we have maths test...", time: "12:34 pm" },
                                { name: "Jenny Wilson", msg: "Wud?", time: "12:34 pm" },
                            ].map((m, i) => (
                                <div key={i} className="flex items-center gap-3 cursor-pointer group">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${m.name}`} alt={m.name} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h5 className="text-xs font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{m.name}</h5>
                                        <p className="text-[10px] text-gray-500 truncate">{m.msg}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="text-[9px] text-gray-400 whitespace-nowrap">{m.time}</span>
                                        {i === 0 && <span className="w-2 h-2 rounded-full bg-red-500"></span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
