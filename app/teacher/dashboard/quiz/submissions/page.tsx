"use client";

import { useState } from "react";
import Link from "next/link";

export default function QuizSubmissionPage() {
    const [selectedSubmission, setSelectedSubmission] = useState("All Submissions");

    const submissions = [
        { id: 1, name: "John Doe", score: 88, status: "Active" },
        { id: 2, name: "John Doe", score: 100, status: "Active" },
        { id: 3, name: "John Doe", score: 67, status: "Active" },
        { id: 4, name: "John Doe", score: 59, status: "Active" },
    ];

    const submissionDetails = [
        {
            question: "Lorem ipsum ac tincidunt non aliquet et amet scelerisque integer felis proin praesent maecenas scelerisque integer felis proin praesent maecenas . .",
            answer: "Lorem ipsum ac tincidunt non aliquet et amet scelerisque integer felis proin praesent maecenas .",
            result: "Correct",
            score: "5/5"
        },
        {
            question: "Lorem ipsum ac tincidunt non aliquet et amet scelerisque integer felis proin praesent maecenas scelerisque integer felis proin praesent maecenas . .",
            answer: "Lorem ipsum ac tincidunt non aliquet et amet scelerisque integer felis proin praesent maecenas .",
            result: "Wrong",
            score: "3/5"
        }
    ];

    return (
        <div className="min-h-screen bg-white p-6 md:p-10 font-roboto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-[32px] font-bold text-[#FDC832]">Quiz Submission</h1>
                <div className="flex gap-3">
                    <button className="px-6 py-3 bg-white border border-[#E0E0E0] text-black font-semibold rounded-[8px] hover:bg-gray-50 transition-colors flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Export
                    </button>
                    <button className="px-6 py-3 bg-[#FDC832] text-black font-semibold rounded-[8px] hover:bg-[#fdd45c] transition-colors flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        Send Reminder
                    </button>
                </div>
            </div>

            {/* Quiz Title */}
            <div className="mb-6">
                <h2 className="text-[20px] font-semibold text-black">Python Devop</h2>
            </div>

            {/* Filter Dropdown */}
            <div className="mb-6">
                <div className="relative max-w-xs">
                    <select
                        value={selectedSubmission}
                        onChange={(e) => setSelectedSubmission(e.target.value)}
                        className="w-full h-[48px] px-5 pr-12 border border-[#E0E0E0] rounded-[8px] text-[14px] text-black bg-white focus:outline-none focus:border-[#FDC832] appearance-none cursor-pointer"
                    >
                        <option>All Submissions</option>
                        <option>Completed</option>
                        <option>Pending</option>
                    </select>
                    <svg className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
            </div>

            {/* Submissions Table */}
            <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#FDC832]">
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">ID</th>
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">NAME</th>
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">SCORE</th>
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">STATUS</th>
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.map((submission) => (
                            <tr key={submission.id} className="border-b border-[#E0E0E0] hover:bg-gray-50">
                                <td className="px-6 py-4 text-[14px] text-black">{submission.id}</td>
                                <td className="px-6 py-4 text-[14px] text-black">{submission.name}</td>
                                <td className="px-6 py-4 text-[14px] text-black">{submission.score}</td>
                                <td className="px-6 py-4 text-[14px] text-black">{submission.status}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        {/* View */}
                                        <button className="p-2 hover:bg-gray-100 rounded transition-colors" title="View">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        </button>
                                        {/* Edit */}
                                        <button className="p-2 hover:bg-gray-100 rounded transition-colors" title="Edit">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                        </button>
                                        {/* Delete */}
                                        <button className="p-2 hover:bg-red-50 rounded transition-colors" title="Delete">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2">
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Submission Details */}
            <div className="max-w-4xl">
                <h2 className="text-[20px] font-semibold text-black mb-6">Submission Details - John Doe</h2>

                <div className="space-y-6">
                    {submissionDetails.map((detail, index) => (
                        <div key={index} className="bg-white border border-[#E0E0E0] rounded-[12px] p-6">
                            {/* Question */}
                            <div className="mb-4">
                                <p className="text-[14px] text-black mb-2">
                                    <span className="font-semibold">Question {index + 1} :</span> {detail.question}
                                </p>
                            </div>

                            {/* Student Answer */}
                            <div className="mb-4">
                                <p className="text-[14px] text-black">
                                    <span className="font-semibold">Student Answer :</span> {detail.answer}
                                </p>
                            </div>

                            {/* Result */}
                            <div>
                                <span className={`text-[14px] font-semibold ${detail.result === "Correct" ? "text-green-600" : "text-orange-500"
                                    }`}>
                                    {detail.result}( {detail.score} )
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
