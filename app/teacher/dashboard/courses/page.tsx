"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ConfirmModal from "@/components/ConfirmModal";
import { useToast } from "@/components/ToastProvider";

interface Course {
    id: number;
    title: string;
    category: string;
    students: number;
    rating: number;
    image: string;
    progress?: number;
    status: "Published" | "Draft";
    price: string;
}

export default function CoursesPage() {
    const router = useRouter();
    const { showToast } = useToast();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Delete handling
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [courseToDelete, setCourseToDelete] = useState<number | null>(null);

    // Mock Data
    const [courses, setCourses] = useState<Course[]>([
        { id: 1, title: "UI/UX Fundamentals", category: "Design", students: 1240, rating: 4.8, image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop", progress: 60, status: "Published", price: "$49" },
        { id: 2, title: "Advanced React Patterns", category: "Programming", students: 850, rating: 4.9, image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop", status: "Published", price: "$79" },
        { id: 3, title: "Digital Marketing 101", category: "Marketing", students: 2300, rating: 4.5, image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=250&fit=crop", status: "Draft", price: "$29" },
        { id: 4, title: "Python for Data Science", category: "Data Science", students: 1500, rating: 4.7, image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop", status: "Published", price: "$59" },
        { id: 5, title: "Figma Mastery", category: "Design", students: 600, rating: 4.6, image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop", status: "Draft", price: "$39" },
    ]);

    const categories = ["All", "Design", "Programming", "Marketing", "Data Science"];

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleDeleteClick = (id: number) => {
        setCourseToDelete(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (courseToDelete) {
            setCourses(courses.filter(c => c.id !== courseToDelete));
            showToast("Course deleted successfully", "success");
            setShowDeleteModal(false);
            setCourseToDelete(null);
        }
    };

    return (
        <div className="min-h-screen bg-white p-6 md:p-10 font-roboto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-[32px] font-bold text-[#FDC832]">My Courses</h1>
                    <p className="text-[14px] text-[#9E9E9E]">Manage your curriculum and student progress</p>
                </div>
                <Link href="/teacher/dashboard/add-course">
                    <button className="px-6 py-3 bg-[#FDC832] text-black font-semibold rounded-[12px] hover:bg-[#fdd45c] transition-all flex items-center gap-2 shadow-sm hover:shadow-md">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        Create New Course
                    </button>
                </Link>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-[16px] border border-[#E0E0E0] mb-8 gap-4">
                <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all whitespace-nowrap ${selectedCategory === cat
                                    ? "bg-black text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="relative w-full md:w-64">
                    <input
                        type="text"
                        placeholder="Search courses..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-[#E0E0E0] rounded-[10px] text-sm focus:outline-none focus:border-[#FDC832]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
            </div>

            {/* Course Grid */}
            {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredCourses.map((course) => (
                        <div key={course.id} className="bg-white border border-[#E0E0E0] rounded-[20px] overflow-hidden group hover:border-[#FDC832] transition-all hover:shadow-lg flex flex-col h-full">
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${course.status === "Published" ? "bg-green-500 text-white" : "bg-gray-500 text-white"
                                    }`}>
                                    {course.status}
                                </span>
                                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[12px] font-semibold text-[#FDC832] uppercase">{course.category}</span>
                                    <div className="flex items-center gap-1">
                                        <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <span className="text-[12px] font-bold">{course.rating}</span>
                                    </div>
                                </div>

                                <h3 className="text-[18px] font-bold text-black mb-1 line-clamp-1">{course.title}</h3>
                                <p className="text-[14px] text-[#9E9E9E] mb-4">{course.students.toLocaleString()} Students Enrolled</p>

                                {course.progress && (
                                    <div className="mb-4">
                                        <div className="flex justify-between text-[12px] mb-1">
                                            <span className="text-gray-500">Progress</span>
                                            <span className="font-bold">{course.progress}%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#FDC832]" style={{ width: `${course.progress}%` }}></div>
                                        </div>
                                    </div>
                                )}

                                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-[18px] font-bold text-black">{course.price}</span>
                                    <div className="flex gap-2">
                                        <Link href={`/teacher/dashboard/add-course?edit=${course.id}`}>
                                            <button className="px-3 py-1.5 text-[12px] font-medium text-gray-600 hover:bg-gray-100 rounded-lg">Edit</button>
                                        </Link>
                                        <button
                                            onClick={() => handleDeleteClick(course.id)}
                                            className="px-3 py-1.5 text-[12px] font-medium text-red-500 hover:bg-red-50 rounded-lg"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-10 h-10 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                    </div>
                    <h3 className="text-[18px] font-bold text-gray-900">No courses found</h3>
                    <p className="text-gray-500 mt-2 max-w-sm">Try adjusting your search or category filters, or create a new course to get started.</p>
                </div>
            )}

            <ConfirmModal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={confirmDelete}
                title="Delete Course?"
                message="Are you sure you want to delete this course? This action cannot be undone and all student progress will be lost."
                confirmText="Yes, Delete Course"
                cancelText="Cancel"
                type="danger"
            />
        </div>
    );
}
