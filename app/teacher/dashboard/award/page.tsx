"use client";

import { useState } from "react";

interface Student {
    id: number;
    name: string;
    course: string;
    avatar: string;
}

export default function AwardPage() {
    const [activeTab, setActiveTab] = useState("Issue");
    const [selectedStudent, setSelectedStudent] = useState<number | null>(null);
    const [selectedTemplate, setSelectedTemplate] = useState("Certificate of Excellence");
    const [message, setMessage] = useState("");
    const [showPreview, setShowPreview] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: string } | null>(null);

    const students: Student[] = [
        { id: 1, name: "Sahil Kumar", course: "Python Dev", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sahil" },
        { id: 2, name: "Priya Sharma", course: "React Basic", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" },
        { id: 3, name: "Rohan Gupta", course: "Data Science", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan" },
        { id: 4, name: "Ananya Singh", course: "Web Design", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya" },
    ];

    const templates = [
        { id: "excellence", title: "Certificate of Excellence", color: "from-yellow-400 to-orange-500" },
        { id: "appreciation", title: "Certificate of Appreciation", color: "from-blue-400 to-indigo-500" },
        { id: "achievement", title: "Certificate of Achievement", color: "from-green-400 to-emerald-500" },
    ];

    const showToast = (message: string, type: string = "success") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const handleIssueAward = () => {
        if (!selectedStudent || !message) {
            showToast("Please select a student and add a message", "error");
            return;
        }
        showToast("Award issued successfully!");
        setSelectedStudent(null);
        setMessage("");
        setShowPreview(false);
    };

    const currentStudent = students.find(s => s.id === selectedStudent);

    return (
        <div className="min-h-screen bg-white p-6 md:p-10 font-roboto">
            {/* Toast */}
            {toast && (
                <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-medium animate-slide-in ${toast.type === "success" ? "bg-green-500" : "bg-red-500"
                    }`}>
                    {toast.message}
                </div>
            )}

            <div className="mb-8">
                <h1 className="text-[32px] font-bold text-[#FDC832]">Student Awards</h1>
                <p className="text-[14px] text-[#9E9E9E]">Recognize and celebrate your students' achievements</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Left Column: Form */}
                <div className="xl:col-span-1 bg-white border border-[#E0E0E0] rounded-[20px] p-6 h-fit">
                    <h2 className="text-[20px] font-bold text-black mb-6">Issue New Award</h2>

                    <div className="space-y-6">
                        {/* 1. Select Student */}
                        <div>
                            <label className="block text-[14px] font-semibold mb-3">1. Select Student</label>
                            <div className="grid grid-cols-2 gap-3 max-h-[200px] overflow-y-auto pr-1">
                                {students.map((student) => (
                                    <div
                                        key={student.id}
                                        onClick={() => setSelectedStudent(student.id)}
                                        className={`p-3 border rounded-[12px] cursor-pointer flex items-center gap-3 transition-all ${selectedStudent === student.id
                                                ? "border-[#FDC832] bg-[#FFF9E6]"
                                                : "border-[#E0E0E0] hover:border-gray-400"
                                            }`}
                                    >
                                        <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden">
                                            <img src={student.avatar} alt={student.name} />
                                        </div>
                                        <div>
                                            <p className="text-[12px] font-bold text-black line-clamp-1">{student.name}</p>
                                            <p className="text-[10px] text-gray-500">{student.course}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. Select Template */}
                        <div>
                            <label className="block text-[14px] font-semibold mb-3">2. Select Template</label>
                            <select
                                value={selectedTemplate}
                                onChange={(e) => setSelectedTemplate(e.target.value)}
                                className="w-full p-3 border border-[#E0E0E0] rounded-[12px] text-sm focus:outline-none focus:border-[#FDC832]"
                            >
                                {templates.map(t => (
                                    <option key={t.id} value={t.title}>{t.title}</option>
                                ))}
                            </select>
                        </div>

                        {/* 3. Message */}
                        <div>
                            <label className="block text-[14px] font-semibold mb-3">3. Personal Message</label>
                            <textarea
                                rows={3}
                                className="w-full p-3 border border-[#E0E0E0] rounded-[12px] text-sm resize-none focus:outline-none focus:border-[#FDC832]"
                                placeholder="e.g. For outstanding performance in the final project..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <button
                            onClick={() => setShowPreview(true)}
                            disabled={!selectedStudent}
                            className={`w-full py-3 rounded-[12px] font-bold text-black transition-all ${!selectedStudent
                                    ? "bg-gray-200 cursor-not-allowed text-gray-400"
                                    : "bg-[#FDC832] hover:bg-[#fdd45c] shadow-lg"
                                }`}
                        >
                            Preview Award
                        </button>
                    </div>
                </div>

                {/* Right Column: Preview */}
                <div className="xl:col-span-2 space-y-8">
                    {/* Certificate Preview Card */}
                    <div className="bg-[#1a1a1a] rounded-[20px] p-8 flex items-center justify-center min-h-[500px] relative overflow-hidden shadow-2xl">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

                        {showPreview && currentStudent ? (
                            <div className="bg-white p-10 rounded-lg w-full max-w-[600px] aspect-[1.4/1] relative animate-scale-in text-center flex flex-col justify-between border-[12px] border-double border-[#FDC832]">

                                {/* Header */}
                                <div>
                                    <div className="flex justify-center mb-4">
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FDC832" strokeWidth="1.5">
                                            <circle cx="12" cy="8" r="7" />
                                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                                        </svg>
                                    </div>
                                    <h2 className="text-[32px] font-serif font-bold text-black tracking-wide uppercase">{selectedTemplate}</h2>
                                    <p className="text-[#969696] text-sm mt-2 uppercase tracking-widest">This certificate is proudly presented to</p>
                                </div>

                                {/* Student Name */}
                                <div className="py-4 border-b border-gray-200 w-3/4 mx-auto">
                                    <h3 className="text-[40px] font-signature text-[#FDC832]">{currentStudent.name}</h3>
                                </div>

                                {/* Message */}
                                <div className="px-10">
                                    <p className="text-gray-600 text-sm italic leading-relaxed">"{message || 'For demonstrating exceptional dedication and skill in their coursework.'}"</p>
                                </div>

                                {/* Footer */}
                                <div className="flex justify-between items-end mt-8 pt-4">
                                    <div className="text-left">
                                        <div className="w-32 border-b border-gray-400 mb-2"></div>
                                        <p className="text-[10px] font-bold text-gray-500 uppercase">Date</p>
                                        <p className="text-[12px] font-medium">{new Date().toLocaleDateString()}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="w-32 border-b border-gray-400 mb-2"></div>
                                        <p className="text-[10px] font-bold text-gray-500 uppercase">Signature</p>
                                        <p className="text-[12px] font-medium font-signature">Mehrab Bozorgi</p>
                                    </div>
                                </div>

                                {/* Decorative Corner */}
                                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#FDC832] m-2"></div>
                                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#FDC832] m-2"></div>
                            </div>
                        ) : (
                            <div className="text-center text-white/40">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto mb-4">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                                <p>Select a student and create an award to preview it here.</p>
                            </div>
                        )}
                    </div>

                    {showPreview && (
                        <div className="flex justify-end gap-4">
                            <button className="px-6 py-3 bg-white border border-[#E0E0E0] rounded-[12px] font-medium hover:bg-gray-50">
                                Download PDF
                            </button>
                            <button
                                onClick={handleIssueAward}
                                className="px-8 py-3 bg-[#FDC832] text-black font-bold rounded-[12px] hover:bg-[#fdd45c] shadow-lg hover:scale-105 transition-all"
                            >
                                Issue Award Now
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
