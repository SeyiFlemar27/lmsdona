"use client";

import { useState } from "react";

// Dummy Data for Awards
const initialAwards = [
    { id: 1, student: "Samantha William", award: "Best Performer", date: "2024-05-15", description: "Outstanding academic performance" },
    { id: 2, student: "Tony Soap", award: "Sports Excellence", date: "2024-04-20", description: "Winner of inter-school tournament" },
    { id: 3, student: "Karen Hope", award: "Science Fair Winner", date: "2024-03-10", description: "First place in Physics category" },
    { id: 4, student: "Jordan Nico", award: "Art & Creativity", date: "2024-02-28", description: "Best creative project" },
];

export default function AwardPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [awards, setAwards] = useState(initialAwards);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newAward, setNewAward] = useState({ student: "", award: "", date: "", description: "" });

    const handleAddAward = () => {
        if (newAward.student && newAward.award) {
            setAwards([...awards, { ...newAward, id: Date.now() }]);
            setIsModalOpen(false);
            setNewAward({ student: "", award: "", date: "", description: "" });
        }
    };

    const handleDeleteAward = (id: number) => {
        if (confirm("Are you sure you want to delete this award?")) {
            setAwards(awards.filter(a => a.id !== id));
        }
    };

    // Filter Logic
    const filteredAwards = awards.filter(a =>
        a.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.award.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-8 font-roboto animate-fade-in">
            {/* Header Section */}
            <div className="bg-[#FFBD3E] rounded-[20px] p-8 shadow-sm flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-medium text-black tracking-tight">Student Awards</h1>
                    <button onClick={() => setIsModalOpen(true)} className="bg-white hover:bg-gray-50 text-black px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 shadow-sm transition-all active:scale-95">
                        <span className="text-xl leading-none">+</span> Grant Award
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative w-full">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Search awards..."
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-none focus:ring-0 text-gray-700 placeholder-gray-500 font-normal shadow-sm bg-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Awards Table */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#F7961F] text-black uppercase text-xs font-bold tracking-wider">
                            <th className="p-4 w-[25%] border-r border-[#E0891B]">STUDENT NAME</th>
                            <th className="p-4 w-[25%] border-r border-[#E0891B]">AWARD TITLE</th>
                            <th className="p-4 w-[15%] border-r border-[#E0891B]">DATE</th>
                            <th className="p-4 w-[25%] border-r border-[#E0891B]">DESCRIPTION</th>
                            <th className="p-4 w-[10%]">ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                        {filteredAwards.map((award) => (
                            <tr key={award.id} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                                <td className="p-4 border-r border-gray-200 font-medium flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${award.student}`} alt={award.student} />
                                    </div>
                                    {award.student}
                                </td>
                                <td className="p-4 border-r border-gray-200 font-bold text-yellow-600">{award.award}</td>
                                <td className="p-4 border-r border-gray-200">{award.date}</td>
                                <td className="p-4 border-r border-gray-200 text-gray-500">{award.description}</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-4">
                                        <button onClick={() => handleDeleteAward(award.id)} className="text-black hover:text-red-600 transition-colors">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredAwards.length === 0 && (
                    <div className="p-8 text-center text-gray-400">No awards found.</div>
                )}
            </div>


            {/* Modal */}
            {
                isModalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
                        <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl transform transition-all scale-100">
                            <h2 className="text-xl font-bold mb-4">Grant New Award</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-orange-500"
                                        value={newAward.student}
                                        onChange={(e) => setNewAward({ ...newAward, student: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Award Title</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-orange-500"
                                        value={newAward.award}
                                        onChange={(e) => setNewAward({ ...newAward, award: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-orange-500"
                                        value={newAward.date}
                                        onChange={(e) => setNewAward({ ...newAward, date: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea
                                        className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-orange-500 h-24 resize-none"
                                        value={newAward.description}
                                        onChange={(e) => setNewAward({ ...newAward, description: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg">Cancel</button>
                                <button onClick={handleAddAward} className="px-4 py-2 bg-orange-500 text-white font-medium hover:bg-orange-600 rounded-lg shadow-sm">Grant Award</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}
