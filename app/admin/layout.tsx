"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        {
            label: "Dashboard", href: "/admin", icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
            )
        },
        {
            label: "Teachers", href: "/admin/teachers", icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        },
        {
            label: "Courses", href: "/admin/courses", icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
            )
        },
        {
            label: "Discuss", href: "/admin/discuss", icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
            )
        },
        {
            label: "Classes", href: "/admin/classes", icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" />
                </svg>
            )
        },
        {
            label: "Doro EDU AI", href: "/admin/ai", icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            )
        },
        {
            label: "Award", href: "/admin/award", icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
            )
        },
        {
            label: "Project Management", href: "/admin/project-management", icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
            )
        },
        {
            label: "User Roles", href: "/admin/student-profile", icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
            )
        },
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
                        <div className="w-6 h-6 bg-[#FFBD3E] rounded flex items-center justify-center text-white ml-2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                        </div>
                    </div>
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
                                <span className={`text-lg relative z-10 flex items-center justify-center w-5 ${isActive ? 'text-black' : 'text-[#969696]'}`}>
                                    {item.icon}
                                </span>

                                <span className="relative z-10">{item.label}</span>

                                {!isActive && item.label !== 'Dashboard' && (
                                    <span className="ml-auto text-lg leading-none text-[#969696]">›</span>
                                )}
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-auto px-6 pb-6">
                    <div className="bg-[#F5F5F5] rounded-[20px] p-5">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-300">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" alt="Student" />
                                </div>
                                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-300">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" alt="Student" />
                                </div>
                                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-300">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=3" alt="Student" />
                                </div>
                            </div>
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-md shadow-blue-200">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
                            </div>
                        </div>

                        <h4 className="font-bold text-black text-[15px] mb-1">Upcoming Class</h4>
                        <p className="text-[11px] text-gray-400 mb-4">9:30 - 10:30 Am on Zoom</p>

                        <button className="w-full bg-[#FFBD3E] hover:bg-[#ffb01e] text-black text-xs font-bold py-3 rounded-full transition-colors shadow-sm">
                            Join now
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 md:ml-[280px] flex flex-col min-h-screen relative bg-[#FAFAFA]">
                {/* Header */}
                <header className="h-24 bg-transparent flex items-center justify-between px-10 sticky top-0 z-20">
                    <div className="flex items-center w-full">
                        <button className="md:hidden mr-4 text-2xl" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>☰</button>

                        {/* Search Bar - Optional for Global Admin Search */}
                        <div className="hidden md:flex items-center gap-6 w-full max-w-xl">
                            <div className="relative group w-full">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-gray-500 transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search anything here..."
                                    className="pl-12 pr-6 py-3 rounded-full bg-white border border-gray-100 text-sm focus:outline-none w-full text-gray-600 placeholder-gray-400 font-normal shadow-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                        <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 shadow-sm relative">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 shadow-sm">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 shadow-sm">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            </svg>
                        </button>
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
                    <span className="font-extrabold text-sm text-foreground tracking-tight">Famiglia Doro Admin</span>
                    <button onClick={() => setIsSidebarOpen(false)} className="text-2xl">×</button>
                </div>
                <div className="flex-1 py-4 px-6 space-y-3 overflow-y-auto">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsSidebarOpen(false)}
                            className={`flex items-center gap-4 px-5 py-4 rounded-full text-sm font-bold transition-all duration-200 group relative overflow-hidden ${pathname === item.href
                                ? "bg-[#FFD600] text-black shadow-lg shadow-yellow-200"
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
