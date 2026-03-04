"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ConfirmModal from "@/components/ConfirmModal";

interface Student {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
    selected?: boolean;
}

export default function ManageStudentsPage() {
    // State Management
    const [searchQuery, setSearchQuery] = useState("");
    const [roleFilter, setRoleFilter] = useState("All Roles");
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [sortBy, setSortBy] = useState("name");
    const [currentPage, setCurrentPage] = useState(1);
    const [students, setStudents] = useState<Student[]>([
        { id: 1, name: "John Doe", email: "john1@example.com", role: "Student", status: "Active", selected: false },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Teacher", status: "Active", selected: false },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Teacher", status: "Active", selected: false },
        { id: 4, name: "Alice Williams", email: "alice@example.com", role: "Student", status: "Active", selected: false },
        { id: 5, name: "Charlie Brown", email: "charlie@example.com", role: "Student", status: "Inactive", selected: false },
        { id: 6, name: "Diana Prince", email: "diana@example.com", role: "Student", status: "Active", selected: false },
        { id: 7, name: "Eve Adams", email: "eve@example.com", role: "Teacher", status: "Active", selected: false },
        { id: 8, name: "Frank Castle", email: "frank@example.com", role: "Student", status: "Active", selected: false },
    ]);

    // Modal States
    const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; studentId?: number }>({ isOpen: false });
    const [bulkDeleteModal, setBulkDeleteModal] = useState(false);
    const [messageModal, setMessageModal] = useState(false);
    const [roleModal, setRoleModal] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: string } | null>(null);

    const itemsPerPage = 10;

    // Computed Values
    const selectedCount = students.filter(s => s.selected).length;
    const selectedAll = students.length > 0 && selectedCount === students.length;

    // Filtered and Sorted Students
    const filteredStudents = useMemo(() => {
        let filtered = students.filter(student => {
            const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                student.email.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesRole = roleFilter === "All Roles" || student.role === roleFilter;
            const matchesStatus = statusFilter === "All Status" || student.status === statusFilter;
            return matchesSearch && matchesRole && matchesStatus;
        });

        // Sorting
        filtered.sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name);
            if (sortBy === "role") return a.role.localeCompare(b.role);
            if (sortBy === "status") return a.status.localeCompare(b.status);
            return 0;
        });

        return filtered;
    }, [students, searchQuery, roleFilter, statusFilter, sortBy]);

    // Pagination
    const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
    const paginatedStudents = filteredStudents.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Handlers
    const showToast = (message: string, type: string = "success") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const toggleSelectAll = () => {
        setStudents(students.map(s => ({ ...s, selected: !selectedAll })));
    };

    const toggleSelect = (id: number) => {
        setStudents(students.map(s => s.id === id ? { ...s, selected: !s.selected } : s));
    };

    const handleDelete = (id: number) => {
        setStudents(students.filter(s => s.id !== id));
        showToast("Student removed successfully", "success");
    };

    const handleBulkDelete = () => {
        setStudents(students.filter(s => !s.selected));
        showToast(`${selectedCount} students removed successfully`, "success");
    };

    const handleExportCSV = () => {
        const csv = [
            ["ID", "Name", "Email", "Role", "Status"],
            ...filteredStudents.map(s => [s.id, s.name, s.email, s.role, s.status])
        ].map(row => row.join(",")).join("\n");

        const blob = new Blob([csv], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "students.csv";
        a.click();
        showToast("CSV exported successfully", "success");
    };

    const handleSendMessage = () => {
        showToast(`Message sent to ${selectedCount} students`, "success");
        setMessageModal(false);
    };

    const handleAssignRole = () => {
        showToast(`Role assigned to ${selectedCount} students`, "success");
        setRoleModal(false);
    };

    return (
        <div className="min-h-screen bg-white p-6 md:p-10 font-roboto">
            {/* Toast Notification */}
            {toast && (
                <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-medium animate-slide-in ${toast.type === "success" ? "bg-green-500" : "bg-red-500"
                    }`}>
                    {toast.message}
                </div>
            )}

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-[32px] font-bold text-[#FDC832]">Manage Students</h1>
                <p className="text-[16px] text-[#9E9E9E] mt-1">Python Course</p>
            </div>

            {/* Course Info Card */}
            <div className="bg-white border-2 border-[#FDC832] rounded-[16px] p-6 mb-8 flex justify-between items-center hover:shadow-lg transition-shadow">
                <div className="flex-1">
                    <h2 className="text-[24px] font-bold text-[#FDC832] mb-2">Python Course</h2>
                    <p className="text-[14px] text-[#9E9E9E] mb-4">Instructor : Professor Kelly</p>

                    <div className="flex gap-8">
                        <div className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <span className="text-[14px] text-[#9E9E9E]">{filteredStudents.length} Students</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <span className="text-[14px] text-[#9E9E9E]">8 weeks</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span className="text-[14px] text-[#9E9E9E]">Jan 15 - Sep 15</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <img
                        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=120&h=120&fit=crop"
                        alt="Python Course"
                        className="w-24 h-24 rounded-[12px] object-cover"
                    />
                    <button
                        onClick={handleExportCSV}
                        className="px-6 py-2 bg-white border border-[#E0E0E0] text-black font-medium rounded-[8px] hover:bg-gray-50 transition-colors flex items-center gap-2 text-[14px]"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Export CSV
                    </button>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search students..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full h-[48px] pl-12 pr-5 border border-[#E0E0E0] rounded-[8px] text-[14px] text-black placeholder-[#9E9E9E] focus:outline-none focus:border-[#FDC832] transition-colors"
                    />
                </div>

                <div className="relative">
                    <select
                        value={roleFilter}
                        onChange={(e) => {
                            setRoleFilter(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full h-[48px] px-5 pr-12 border border-[#E0E0E0] rounded-[8px] text-[14px] text-black bg-white focus:outline-none focus:border-[#FDC832] appearance-none cursor-pointer transition-colors"
                    >
                        <option>All Roles</option>
                        <option>Student</option>
                        <option>Teacher</option>
                    </select>
                    <svg className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>

                <div className="relative">
                    <select
                        value={statusFilter}
                        onChange={(e) => {
                            setStatusFilter(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full h-[48px] px-5 pr-12 border border-[#E0E0E0] rounded-[8px] text-[14px] text-black bg-white focus:outline-none focus:border-[#FDC832] appearance-none cursor-pointer transition-colors"
                    >
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                    <svg className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>

                <div className="relative">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full h-[48px] px-5 pr-12 border border-[#E0E0E0] rounded-[8px] text-[14px] text-black bg-white focus:outline-none focus:border-[#FDC832] appearance-none cursor-pointer transition-colors"
                    >
                        <option value="name">Sort by Name</option>
                        <option value="role">Sort by Role</option>
                        <option value="status">Sort by Status</option>
                    </select>
                    <svg className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
            </div>

            {/* Bulk Actions */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={selectedAll}
                        onChange={toggleSelectAll}
                        className="w-5 h-5 accent-[#FDC832] cursor-pointer"
                    />
                    <span className="text-[14px] text-black">
                        {selectedCount > 0 ? `${selectedCount} selected` : `Select All ${filteredStudents.length}`}
                    </span>
                </div>

                {selectedCount > 0 && (
                    <div className="flex gap-3 animate-slide-up">
                        <button
                            onClick={() => setRoleModal(true)}
                            className="px-6 py-2.5 bg-white border border-[#E0E0E0] text-black font-medium rounded-[8px] hover:bg-gray-50 transition-all flex items-center gap-2 text-[14px] hover:scale-105"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                            </svg>
                            Assign Role
                        </button>
                        <button
                            onClick={() => setMessageModal(true)}
                            className="px-6 py-2.5 bg-[#4ADE80] text-white font-medium rounded-[8px] hover:bg-[#3bc970] transition-all flex items-center gap-2 text-[14px] hover:scale-105"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            Send Message
                        </button>
                        <button
                            onClick={() => setBulkDeleteModal(true)}
                            className="px-6 py-2.5 bg-[#EF4444] text-white font-medium rounded-[8px] hover:bg-[#dc2626] transition-all flex items-center gap-2 text-[14px] hover:scale-105"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            </svg>
                            Remove ({selectedCount})
                        </button>
                    </div>
                )}
            </div>

            {/* Students Table */}
            <div className="overflow-x-auto mb-6 rounded-[12px] border border-[#E0E0E0]">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#FDC832]">
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">
                                <input
                                    type="checkbox"
                                    checked={selectedAll}
                                    onChange={toggleSelectAll}
                                    className="w-5 h-5 accent-black cursor-pointer"
                                />
                            </th>
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">ID</th>
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">NAME</th>
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">EMAIL</th>
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">ROLE</th>
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">STATUS</th>
                            <th className="text-left px-6 py-4 text-[14px] font-semibold text-black">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedStudents.map((student) => (
                            <tr key={student.id} className="border-b border-[#E0E0E0] hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <input
                                        type="checkbox"
                                        checked={student.selected}
                                        onChange={() => toggleSelect(student.id)}
                                        className="w-5 h-5 accent-[#FDC832] cursor-pointer"
                                    />
                                </td>
                                <td className="px-6 py-4 text-[14px] text-black">{student.id}</td>
                                <td className="px-6 py-4 text-[14px] text-black font-medium">{student.name}</td>
                                <td className="px-6 py-4 text-[14px] text-[#9E9E9E]">{student.email}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-[12px] font-medium ${student.role === "Teacher" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                                        }`}>
                                        {student.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-[12px] font-medium ${student.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                                        }`}>
                                        {student.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 hover:bg-blue-50 rounded transition-colors group" title="View">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:stroke-blue-600">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        </button>
                                        <button className="p-2 hover:bg-yellow-50 rounded transition-colors group" title="Edit">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:stroke-yellow-600">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => setDeleteModal({ isOpen: true, studentId: student.id })}
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
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center">
                <p className="text-[14px] text-[#9E9E9E]">
                    Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredStudents.length)} of {filteredStudents.length} students
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="w-10 h-10 flex items-center justify-center border border-[#E0E0E0] rounded-[8px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    {[...Array(totalPages)].map((_, i) => {
                        const page = i + 1;
                        if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                            return (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-10 h-10 flex items-center justify-center rounded-[8px] font-semibold transition-all ${currentPage === page
                                            ? "bg-[#FDC832] text-black"
                                            : "border border-[#E0E0E0] hover:bg-gray-50"
                                        }`}
                                >
                                    {page}
                                </button>
                            );
                        } else if (page === currentPage - 2 || page === currentPage + 2) {
                            return <span key={page} className="w-10 h-10 flex items-center justify-center">...</span>;
                        }
                        return null;
                    })}

                    <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 flex items-center justify-center border border-[#E0E0E0] rounded-[8px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Modals */}
            <ConfirmModal
                isOpen={deleteModal.isOpen}
                onClose={() => setDeleteModal({ isOpen: false })}
                onConfirm={() => deleteModal.studentId && handleDelete(deleteModal.studentId)}
                title="Remove Student"
                message="Are you sure you want to remove this student? This action cannot be undone."
                confirmText="Remove"
                type="danger"
            />

            <ConfirmModal
                isOpen={bulkDeleteModal}
                onClose={() => setBulkDeleteModal(false)}
                onConfirm={handleBulkDelete}
                title="Remove Students"
                message={`Are you sure you want to remove ${selectedCount} students? This action cannot be undone.`}
                confirmText="Remove All"
                type="danger"
            />

            {/* Message Modal */}
            {messageModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
                    <div className="bg-white rounded-[16px] p-8 max-w-md w-full mx-4 shadow-2xl animate-scale-in">
                        <h3 className="text-[20px] font-bold text-black mb-4">Send Message</h3>
                        <textarea
                            placeholder="Type your message here..."
                            rows={5}
                            className="w-full px-4 py-3 border border-[#E0E0E0] rounded-[8px] text-[14px] focus:outline-none focus:border-[#FDC832] resize-none"
                        />
                        <div className="flex gap-3 justify-end mt-4">
                            <button
                                onClick={() => setMessageModal(false)}
                                className="px-6 py-2.5 bg-white border border-[#E0E0E0] text-black font-medium rounded-[8px] hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSendMessage}
                                className="px-6 py-2.5 bg-[#4ADE80] text-white font-medium rounded-[8px] hover:bg-[#3bc970] transition-colors"
                            >
                                Send to {selectedCount} Students
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Role Assignment Modal */}
            {roleModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
                    <div className="bg-white rounded-[16px] p-8 max-w-md w-full mx-4 shadow-2xl animate-scale-in">
                        <h3 className="text-[20px] font-bold text-black mb-4">Assign Role</h3>
                        <select className="w-full h-[48px] px-5 border border-[#E0E0E0] rounded-[8px] text-[14px] focus:outline-none focus:border-[#FDC832]">
                            <option>Student</option>
                            <option>Teacher</option>
                            <option>Admin</option>
                        </select>
                        <div className="flex gap-3 justify-end mt-6">
                            <button
                                onClick={() => setRoleModal(false)}
                                className="px-6 py-2.5 bg-white border border-[#E0E0E0] text-black font-medium rounded-[8px] hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAssignRole}
                                className="px-6 py-2.5 bg-[#FDC832] text-black font-medium rounded-[8px] hover:bg-[#fdd45c] transition-colors"
                            >
                                Assign to {selectedCount} Students
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
