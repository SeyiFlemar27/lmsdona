"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { label: "Dashboard", href: "/parents/dashboard" },
        { label: "Courses Management", href: "/parents/dashboard/courses" },
        { label: "Students", href: "/parents/dashboard/children" },
        { label: "Discuss", href: "/parents/dashboard/discuss" },
    ];

    return (
        <div className="min-h-screen bg-secondary/30 flex font-roboto text-slate-800">
            {/* Sidebar - Desktop */}
            <aside className="hidden md:flex flex-col w-[280px] bg-white h-screen fixed top-0 left-0 z-30 border-r border-gray-100 font-roboto">
                <div className="p-8 flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 relative flex items-center justify-center">
                            {/* Logo Image */}
                            <img src="/images/logo.png" alt="Famiglia Doro" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-[15px] text-black tracking-tight">Famiglia Doro CS</span>
                        </div>
                    </div>

                    {/* Yellow Back Button */}
                    <button className="w-6 h-6 bg-[#FFD600] rounded flex items-center justify-center text-white hover:bg-yellow-500 shadow-sm transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 py-4 px-6 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-4 px-5 py-4 rounded-full text-[14px] font-normal transition-all duration-200 group relative overflow-hidden ${isActive
                                    ? "bg-[#FFD600] text-black shadow-md shadow-yellow-100 font-medium"
                                    : "text-[#969696] hover:text-gray-600 hover:bg-gray-50"
                                    }`}
                            >
                                {/* Icon Selection */}
                                <span className={`text-lg relative z-10 flex items-center justify-center w-5 ${isActive ? 'text-black' : 'text-[#969696]'}`}>
                                    {item.label === 'Dashboard' && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                        </svg>
                                    )}
                                    {item.label === 'Courses Management' && (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                            <path d="M6 12v5c3 0 6-3 6-7" />
                                        </svg>
                                    )}
                                    {item.label === 'Students' && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    )}
                                    {item.label === 'Discuss' && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        </svg>
                                    )}
                                </span>

                                <span className="relative z-10">{item.label}</span>

                                {item.label !== 'Dashboard' && (
                                    <span className={`ml-auto text-lg leading-none ${isActive ? 'text-black' : 'text-[#969696]'}`}>›</span>
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Upcoming Events Section */}
                <div className="p-8 mt-auto mb-6">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="flex -space-x-3">
                            <div className="w-9 h-9 rounded-full bg-gray-200 border border-white flex items-center justify-center overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Event1" alt="Participant" />
                            </div>
                            <div className="w-9 h-9 rounded-full bg-gray-200 border border-white flex items-center justify-center overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Event2" alt="Participant" />
                            </div>
                            <div className="w-9 h-9 rounded-full bg-gray-200 border border-white flex items-center justify-center overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Event3" alt="Participant" />
                            </div>
                        </div>
                    </div>

                    <h3 className="font-medium text-black text-[20px] mb-1">Upcoming Events</h3>
                    <p className="text-[14px] text-[#5D6B82] mb-5 font-normal">16 Jun 2025, 7pm</p>
                    <button className="w-fit px-6 py-2.5 bg-[#FFD600] text-black rounded-full text-[14px] font-medium shadow-sm hover:shadow-md transition-all">
                        more update
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 md:ml-[280px] flex flex-col min-h-screen relative">
                {/* Header */}
                <header className="h-24 bg-transparent flex items-center justify-between px-10 sticky top-0 z-20">
                    {/* Mobile Menu Button */}
                    <div className="flex items-center w-full">
                        <button className="md:hidden mr-4 text-2xl" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>☰</button>

                        {/* Back & Search */}
                        <div className="hidden md:flex items-center gap-6 w-full">
                            <button className="text-gray-400 hover:text-foreground transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
                            </button>
                            <div className="relative group w-full max-w-lg">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-gray-500 transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="pl-12 pr-6 py-2.5 rounded-full bg-transparent border-none text-sm focus:outline-none w-full text-gray-600 placeholder-gray-300 font-normal"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3 md:gap-4 shrink-0">
                        {/* Notifications */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    const dropdown = document.getElementById('notifications-dropdown');
                                    if (dropdown) dropdown.classList.toggle('hidden');
                                }}
                                className="text-gray-400 hover:text-black relative p-2 transition-colors rounded-lg hover:bg-gray-50"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg>
                                {/* Notification Badge */}
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            {/* Notifications Dropdown */}
                            <div id="notifications-dropdown" className="hidden absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
                                <div className="p-4 border-b border-gray-100">
                                    <h3 className="font-semibold text-sm">Notifications</h3>
                                </div>
                                <div className="max-h-96 overflow-y-auto">
                                    {[
                                        { title: "New assignment posted", desc: "Math homework due tomorrow", time: "5 min ago", unread: true },
                                        { title: "Grade updated", desc: "Your English test score is available", time: "1 hour ago", unread: true },
                                        { title: "Event reminder", desc: "Parent-teacher meeting on Friday", time: "2 hours ago", unread: false },
                                    ].map((notif, i) => (
                                        <div key={i} className={`p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-50 ${notif.unread ? 'bg-blue-50/30' : ''}`}>
                                            <div className="flex gap-3">
                                                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${notif.unread ? 'bg-blue-500' : 'bg-transparent'}`}></div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium text-black">{notif.title}</p>
                                                    <p className="text-xs text-gray-500 mt-1">{notif.desc}</p>
                                                    <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-3 text-center border-t border-gray-100">
                                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View all notifications</button>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    const dropdown = document.getElementById('messages-dropdown');
                                    if (dropdown) dropdown.classList.toggle('hidden');
                                }}
                                className="text-gray-400 hover:text-black p-2 transition-colors rounded-lg hover:bg-gray-50"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                            </button>
                            {/* Messages Dropdown */}
                            <div id="messages-dropdown" className="hidden absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
                                <div className="p-4 border-b border-gray-100">
                                    <h3 className="font-semibold text-sm">Messages</h3>
                                </div>
                                <div className="max-h-96 overflow-y-auto">
                                    {[
                                        { name: "Mrs. Johnson", msg: "Great progress this week!", time: "10 min ago", avatar: "👩‍🏫" },
                                        { name: "Parent Group", msg: "Meeting scheduled for Friday", time: "1 hour ago", avatar: "👥" },
                                        { name: "Admin", msg: "School closure notice", time: "3 hours ago", avatar: "📢" },
                                    ].map((msg, i) => (
                                        <div key={i} className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-50">
                                            <div className="flex gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg shrink-0">
                                                    {msg.avatar}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-start">
                                                        <p className="text-sm font-medium text-black">{msg.name}</p>
                                                        <span className="text-xs text-gray-400">{msg.time}</span>
                                                    </div>
                                                    <p className="text-xs text-gray-500 mt-1 truncate">{msg.msg}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-3 text-center border-t border-gray-100">
                                    <Link href="/parents/dashboard/discuss" className="text-sm text-blue-600 hover:text-blue-700 font-medium">View all messages</Link>
                                </div>
                            </div>
                        </div>

                        {/* Settings */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    const dropdown = document.getElementById('settings-dropdown');
                                    if (dropdown) dropdown.classList.toggle('hidden');
                                }}
                                className="text-gray-400 hover:text-black p-2 transition-colors rounded-lg hover:bg-gray-50"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="3" />
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                </svg>
                            </button>
                            {/* Settings Dropdown */}
                            <div id="settings-dropdown" className="hidden absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 z-50 py-2">
                                <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center gap-3">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    Account Settings
                                </button>
                                <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center gap-3">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                                    </svg>
                                    Preferences
                                </button>
                                <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center gap-3">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                    Privacy & Security
                                </button>
                                <div className="border-t border-gray-100 my-2"></div>
                                <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center gap-3">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 16v-4M12 8h.01" />
                                    </svg>
                                    Help & Support
                                </button>
                            </div>
                        </div>

                        {/* Profile */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    const dropdown = document.getElementById('profile-dropdown');
                                    if (dropdown) dropdown.classList.toggle('hidden');
                                }}
                                className="w-10 h-10 rounded-full bg-blue-100 overflow-hidden border-2 border-white shadow-sm hover:scale-105 transition-transform cursor-pointer"
                            >
                                <img src="/images/avatar-female.png" alt="User" className="w-full h-full object-cover" />
                            </button>
                            {/* Profile Dropdown */}
                            <div id="profile-dropdown" className="hidden absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
                                <div className="p-4 border-b border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden">
                                            <img src="/images/avatar-female.png" alt="User" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">Jane Smith</p>
                                            <p className="text-xs text-gray-500">Teacher</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <Link href="/parents/dashboard" className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center gap-3 block">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        My Profile
                                    </Link>
                                    <Link href="/dashboard" className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center gap-3 block">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                        </svg>
                                        My Courses
                                    </Link>
                                    <Link href="/dashboard" className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center gap-3 block">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="3" />
                                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                        </svg>
                                        Settings
                                    </Link>
                                </div>
                                <div className="border-t border-gray-100 py-2">
                                    <Link href="/login" className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center gap-3 text-red-600 block">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                            <polyline points="16 17 21 12 16 7" />
                                            <line x1="21" y1="12" x2="9" y2="12" />
                                        </svg>
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 px-10 pb-10 overflow-y-auto">
                    {children}
                </main>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in" onClick={() => setIsSidebarOpen(false)} />
            )}

            {/* Mobile Sidebar */}
            <aside className={`fixed top-0 left-0 w-[280px] h-full bg-white z-50 transform transition-transform duration-300 md:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-8 flex items-center justify-between cursor-pointer group">
                    <span className="font-extrabold text-sm text-foreground tracking-tight">Famiglia Doro CS</span>
                    <button onClick={() => setIsSidebarOpen(false)} className="text-2xl">×</button>
                </div>
                <div className="flex-1 py-4 px-6 space-y-3 overflow-y-auto">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsSidebarOpen(false)}
                            className={`flex items-center gap-4 px-5 py-4 rounded-full text-sm font-bold transition-all duration-200 group relative overflow-hidden ${pathname === item.href
                                ? "bg-primary text-black shadow-lg shadow-yellow-200"
                                : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                                }`}
                        >
                            <span className="relative z-10">{item.label}</span>
                        </Link>
                    ))}
                </div>
            </aside>
        </div>
    );
}
