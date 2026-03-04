"use client";

import { useState } from "react";
import ConfirmModal from "@/components/ConfirmModal";

interface ClassSession {
    id: number;
    title: string;
    subject: string;
    date: string;
    time: string;
    duration: string;
    students: number;
    status: "Upcoming" | "Live" | "Completed" | "Cancelled";
    topic: string;
}

export default function ClassesPage() {
    const [activeTab, setActiveTab] = useState("Upcoming");
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: string } | null>(null);

    // Mock Data
    const [classes, setClasses] = useState<ClassSession[]>([
        { id: 1, title: "Python Fundamentals", subject: "Programming", date: "Today", time: "10:00 AM", duration: "90 min", students: 32, status: "Live", topic: "Variables & Data Types" },
        { id: 2, title: "React Hooks Deep Dive", subject: "Web Dev", date: "Today", time: "02:00 PM", duration: "60 min", students: 25, status: "Upcoming", topic: "useEffect & custom hooks" },
        { id: 3, title: "System Design Basics", subject: "Computer Science", date: "Tomorrow", time: "11:00 AM", duration: "120 min", students: 45, status: "Upcoming", topic: "Load Balancing" },
        { id: 4, title: "JavaScript ES6+", subject: "Web Dev", date: "Yesterday", time: "04:00 PM", duration: "90 min", students: 28, status: "Completed", topic: "Arrow Functions" },
    ]);

    // New Class Form State
    const [newClass, setNewClass] = useState({
        title: "",
        subject: "",
        date: "",
        time: "",
        duration: "60",
        topic: ""
    });

    const showToast = (message: string, type: string = "success") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const handleCreateClass = () => {
        if (!newClass.title || !newClass.subject || !newClass.date || !newClass.time) {
            showToast("Please fill all required fields", "error");
            return;
        }

        const newSession: ClassSession = {
            id: Date.now(),
            ...newClass,
            duration: newClass.duration + " min",
            students: 0,
            status: "Upcoming"
        };

        setClasses([newSession, ...classes]);
        setShowCreateModal(false);
        setNewClass({ title: "", subject: "", date: "", time: "", duration: "60", topic: "" });
        showToast("Class scheduled successfully!");
    };

    const filteredClasses = classes.filter(c => {
        if (activeTab === "Upcoming") return c.status === "Upcoming" || c.status === "Live";
        if (activeTab === "Past") return c.status === "Completed" || c.status === "Cancelled";
        return true;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Live": return "bg-red-100 text-red-600 animate-pulse";
            case "Upcoming": return "bg-blue-100 text-blue-600";
            case "Completed": return "bg-green-100 text-green-600";
            default: return "bg-gray-100 text-gray-600";
        }
    };

    return (
        <div className="min-h-screen bg-white p-6 md:p-10 font-roboto">
            {/* Toast */}
            {toast && (
                <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-medium animate-slide-in ${toast.type === "success" ? "bg-green-500" : "bg-red-500"
                    }`}>
                    {toast.message}
                </div>
            )}

            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-[32px] font-bold text-[#FDC832]">My Classes</h1>
                    <p className="text-[14px] text-[#9E9E9E]">Manage your schedule and live sessions</p>
                </div>
                <button
                    onClick={() => setShowCreateModal(true)}
                    className="px-6 py-3 bg-[#FDC832] text-black font-semibold rounded-[12px] hover:bg-[#fdd45c] transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Schedule Class
                </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 mb-8 border-b border-[#E0E0E0]">
                {["Upcoming", "Past", "All"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-3 px-2 text-[16px] font-medium transition-all relative ${activeTab === tab ? "text-black" : "text-[#9E9E9E] hover:text-black"
                            }`}
                    >
                        {tab} Classes
                        {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FDC832]"></div>}
                    </button>
                ))}
            </div>

            {/* Class Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredClasses.length === 0 ? (
                    <div className="col-span-full text-center py-20 text-[#9E9E9E]">
                        <svg className="w-16 h-16 mx-auto mb-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <p>No classes found in this category.</p>
                    </div>
                ) : (
                    filteredClasses.map((cls) => (
                        <div key={cls.id} className="bg-white border border-[#E0E0E0] rounded-[16px] p-6 hover:shadow-lg transition-all hover:border-[#FDC832] group relative overflow-hidden">
                            {/* Status Badge */}
                            <div className="flex justify-between items-start mb-4">
                                <span className={`px-3 py-1 rounded-full text-[12px] font-bold ${getStatusColor(cls.status)}`}>
                                    {cls.status === "Live" ? "● LIVE NOW" : cls.status}
                                </span>
                                <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                                        <circle cx="12" cy="12" r="1" />
                                        <circle cx="19" cy="12" r="1" />
                                        <circle cx="5" cy="12" r="1" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-[20px] font-bold text-black mb-1">{cls.title}</h3>
                            <p className="text-[14px] text-[#FDC832] font-medium mb-4">{cls.subject}</p>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-[14px] text-gray-600">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                    {cls.date} • {cls.time}
                                </div>
                                <div className="flex items-center gap-3 text-[14px] text-gray-600">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                    {cls.duration}
                                </div>
                                <div className="flex items-center gap-3 text-[14px] text-gray-600">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    {cls.students} Enrolled
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100 flex gap-3">
                                <button className="flex-1 py-2.5 bg-[#FDC832] text-black font-semibold rounded-[8px] hover:bg-[#fdd45c] transition-colors">
                                    {cls.status === "Live" ? "Join Class" : "Start Class"}
                                </button>
                                <button className="px-4 py-2.5 border border-[#E0E0E0] text-black font-medium rounded-[8px] hover:bg-gray-50">
                                    Details
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Create Class Modal Overlay */}
            {showCreateModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
                    <div className="bg-white rounded-[20px] p-8 w-full max-w-lg animate-scale-in shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-[24px] font-bold text-black">Schedule New Class</h2>
                            <button
                                onClick={() => setShowCreateModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-[14px] font-semibold mb-2">Class Title</label>
                                <input
                                    className="w-full p-3 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:border-[#FDC832]"
                                    placeholder="e.g. Advanced Python Patterns"
                                    value={newClass.title}
                                    onChange={(e) => setNewClass({ ...newClass, title: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[14px] font-semibold mb-2">Subject</label>
                                    <input
                                        className="w-full p-3 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:border-[#FDC832]"
                                        placeholder="e.g. Computer Science"
                                        value={newClass.subject}
                                        onChange={(e) => setNewClass({ ...newClass, subject: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-semibold mb-2">Topic</label>
                                    <input
                                        className="w-full p-3 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:border-[#FDC832]"
                                        placeholder="Specific topic"
                                        value={newClass.topic}
                                        onChange={(e) => setNewClass({ ...newClass, topic: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[14px] font-semibold mb-2">Date</label>
                                    <input
                                        type="date"
                                        className="w-full p-3 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:border-[#FDC832]"
                                        value={newClass.date}
                                        onChange={(e) => setNewClass({ ...newClass, date: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-semibold mb-2">Time</label>
                                    <input
                                        type="time"
                                        className="w-full p-3 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:border-[#FDC832]"
                                        value={newClass.time}
                                        onChange={(e) => setNewClass({ ...newClass, time: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleCreateClass}
                                className="w-full py-4 bg-[#FDC832] text-black font-bold rounded-[12px] hover:bg-[#fdd45c] transition-all mt-4 hover:scale-[1.02]"
                            >
                                Schedule Class
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
