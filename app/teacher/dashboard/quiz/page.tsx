"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ConfirmModal from "@/components/ConfirmModal";

interface Quiz {
    id: number;
    title: string;
    type: string;
    questions: number;
    dueDate: string;
    status: string;
}

export default function QuizManagementPage() {
    const router = useRouter();
    const [selectedModule, setSelectedModule] = useState("Python Development - Module 1");
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [typeFilter, setTypeFilter] = useState("All Types");
    const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; quizId?: number }>({ isOpen: false });
    const [toast, setToast] = useState<{ message: string; type: string } | null>(null);

    const [quizzes, setQuizzes] = useState<Quiz[]>([
        { id: 1, title: "Python Basics Quiz", type: "MCQ", questions: 15, dueDate: "Dec 12, 2025", status: "Published" },
        { id: 2, title: "Python Advanced", type: "MCQ", questions: 20, dueDate: "Dec 15, 2025", status: "Published" },
        { id: 3, title: "Python Functions", type: "True/False", questions: 10, dueDate: "Dec 18, 2025", status: "Draft" },
        { id: 4, title: "OOP Concepts", type: "MCQ", questions: 25, dueDate: "Dec 20, 2025", status: "Published" },
        { id: 5, title: "Data Structures", type: "Essay", questions: 5, dueDate: "Dec 22, 2025", status: "Scheduled" },
    ]);

    const showToast = (message: string, type: string = "success") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    // Filtered quizzes
    const filteredQuizzes = useMemo(() => {
        return quizzes.filter(quiz => {
            const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStatus = statusFilter === "All Status" || quiz.status === statusFilter;
            const matchesType = typeFilter === "All Types" || quiz.type === typeFilter;
            return matchesSearch && matchesStatus && matchesType;
        });
    }, [quizzes, searchQuery, statusFilter, typeFilter]);

    const handleDelete = (id: number) => {
        setQuizzes(quizzes.filter(q => q.id !== id));
        showToast("Quiz deleted successfully", "success");
    };

    const handleCreateQuiz = () => {
        router.push("/teacher/dashboard/quiz/create");
    };

    const handleViewSubmissions = (quizId: number) => {
        router.push("/teacher/dashboard/quiz/submissions");
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Published": return "bg-green-100 text-green-700";
            case "Draft": return "bg-gray-100 text-gray-700";
            case "Scheduled": return "bg-blue-100 text-blue-700";
            default: return "bg-gray-100 text-gray-700";
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
                <h1 className="text-[32px] font-bold text-[#FDC832]">Quiz Management</h1>
                <button
                    onClick={handleCreateQuiz}
                    className="px-6 py-3 bg-[#FDC832] text-black font-semibold rounded-[8px] hover:bg-[#fdd45c] transition-all flex items-center gap-2 hover:scale-105"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Create New Quiz
                </button>
            </div>

            {/* Select Course Module */}
            <div className="mb-6">
                <h2 className="text-[18px] font-semibold text-black mb-4">Select Course Module</h2>
                <div className="relative">
                    <select
                        value={selectedModule}
                        onChange={(e) => setSelectedModule(e.target.value)}
                        className="w-full h-[56px] px-5 pr-12 border border-[#E0E0E0] rounded-[8px] text-[14px] text-black bg-white focus:outline-none focus:border-[#FDC832] appearance-none cursor-pointer transition-colors"
                    >
                        <option>Python Development - Module 1</option>
                        <option>Python Development - Module 2</option>
                        <option>JavaScript Fundamentals - Module 1</option>
                        <option>React Advanced - Module 1</option>
                    </select>
                    <svg className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="mb-6 space-y-4">
                {/* Search Bar */}
                <div className="relative">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search quizzes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-[48px] pl-12 pr-5 border border-[#E0E0E0] rounded-[8px] text-[14px] text-black placeholder-[#9E9E9E] focus:outline-none focus:border-[#FDC832] transition-colors"
                    />
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Status Filter */}
                    <div className="relative">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full h-[48px] px-5 pr-12 border border-[#E0E0E0] rounded-[8px] text-[14px] text-black bg-white focus:outline-none focus:border-[#FDC832] appearance-none cursor-pointer transition-colors"
                        >
                            <option>All Status</option>
                            <option>Published</option>
                            <option>Draft</option>
                            <option>Scheduled</option>
                        </select>
                        <svg className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>

                    {/* Type Filter */}
                    <div className="relative">
                        <select
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                            className="w-full h-[48px] px-5 pr-12 border border-[#E0E0E0] rounded-[8px] text-[14px] text-black bg-white focus:outline-none focus:border-[#FDC832] appearance-none cursor-pointer transition-colors"
                        >
                            <option>All Types</option>
                            <option>MCQ</option>
                            <option>True/False</option>
                            <option>Essay</option>
                        </select>
                        <svg className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Results Count */}
            <div className="mb-4">
                <p className="text-[14px] text-[#9E9E9E]">
                    Showing {filteredQuizzes.length} of {quizzes.length} quizzes
                </p>
            </div>

            {/* Quiz Table */}
            <div className="overflow-x-auto rounded-[12px] border border-[#E0E0E0]">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#FDC832]">
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">Quiz Title</th>
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">Type</th>
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">Questions</th>
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">Due Date</th>
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">Status</th>
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredQuizzes.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-[#9E9E9E]">
                                    No quizzes found. Try adjusting your filters or create a new quiz.
                                </td>
                            </tr>
                        ) : (
                            filteredQuizzes.map((quiz) => (
                                <tr key={quiz.id} className="border-b border-[#E0E0E0] hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-[14px] text-black font-medium">{quiz.title}</td>
                                    <td className="px-6 py-4 text-[14px] text-black">{quiz.type}</td>
                                    <td className="px-6 py-4 text-[14px] text-black">{quiz.questions}</td>
                                    <td className="px-6 py-4 text-[14px] text-black">{quiz.dueDate}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-[12px] font-medium ${getStatusColor(quiz.status)}`}>
                                            {quiz.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => handleViewSubmissions(quiz.id)}
                                                className="p-2 hover:bg-blue-50 rounded transition-colors group"
                                                title="View Submissions"
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:stroke-blue-600">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                    <circle cx="12" cy="12" r="3" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => router.push(`/teacher/dashboard/quiz/create`)}
                                                className="p-2 hover:bg-yellow-50 rounded transition-colors group"
                                                title="Edit"
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:stroke-yellow-600">
                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => setDeleteModal({ isOpen: true, quizId: quiz.id })}
                                                className="p-2 hover:bg-red-50 rounded transition-colors group"
                                                title="Delete"
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" className="group-hover:stroke-red-600">
                                                    <polyline points="3 6 5 6 21 6" />
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Delete Confirmation Modal */}
            <ConfirmModal
                isOpen={deleteModal.isOpen}
                onClose={() => setDeleteModal({ isOpen: false })}
                onConfirm={() => deleteModal.quizId && handleDelete(deleteModal.quizId)}
                title="Delete Quiz"
                message="Are you sure you want to delete this quiz? This action cannot be undone and all submissions will be lost."
                confirmText="Delete"
                type="danger"
            />
        </div>
    );
}
