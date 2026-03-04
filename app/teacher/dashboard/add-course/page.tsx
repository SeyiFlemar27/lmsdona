"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Module {
    id: number;
    title: string;
}

export default function AddCoursePage() {
    const router = useRouter();
    const [courseTitle, setCourseTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("Beginner");
    const [coverImage, setCoverImage] = useState<string | null>(null);
    const [modules, setModules] = useState<Module[]>([
        { id: 1, title: "" },
        { id: 2, title: "" }
    ]);
    const [toast, setToast] = useState<{ message: string; type: string } | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const showToast = (message: string, type: string = "success") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!courseTitle.trim()) newErrors.courseTitle = "Course title is required";
        if (!description.trim()) newErrors.description = "Description is required";
        if (!category.trim()) newErrors.category = "Category is required";
        if (modules.some(m => !m.title.trim())) newErrors.modules = "All module titles are required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const addModule = () => {
        setModules([...modules, { id: Date.now(), title: "" }]);
    };

    const removeModule = (id: number) => {
        if (modules.length > 1) {
            setModules(modules.filter(m => m.id !== id));
        } else {
            showToast("At least one module is required", "error");
        }
    };

    const updateModule = (id: number, title: string) => {
        setModules(modules.map(m => m.id === id ? { ...m, title } : m));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCoverImage(reader.result as string);
                showToast("Image uploaded successfully", "success");
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        if (!validateForm()) {
            showToast("Please fill all required fields", "error");
            return;
        }

        // Simulate API call
        showToast("Course saved as draft", "success");
        setTimeout(() => router.push("/teacher/dashboard/courses"), 1500);
    };

    const handlePublish = () => {
        if (!validateForm()) {
            showToast("Please fill all required fields", "error");
            return;
        }

        // Simulate API call
        showToast("Course published successfully", "success");
        setTimeout(() => router.push("/teacher/dashboard/courses"), 1500);
    };

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this course?")) {
            showToast("Course deleted", "success");
            setTimeout(() => router.push("/teacher/dashboard/courses"), 1500);
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
            <div className="mb-8">
                <h1 className="text-[32px] font-bold text-[#FDC832] mb-2">Add Course</h1>
                <p className="text-[14px] text-[#9E9E9E]">Create a new course for your students</p>
            </div>

            {/* Form */}
            <div className="max-w-4xl space-y-8">
                {/* Course Title */}
                <div className="space-y-3">
                    <label className="text-[16px] font-semibold text-black">
                        Course Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Course Title"
                        value={courseTitle}
                        onChange={(e) => {
                            setCourseTitle(e.target.value);
                            if (errors.courseTitle) setErrors({ ...errors, courseTitle: "" });
                        }}
                        className={`w-full h-[56px] px-5 border rounded-[8px] text-[14px] placeholder-[#9E9E9E] focus:outline-none transition-colors ${errors.courseTitle ? "border-red-500" : "border-[#E0E0E0] focus:border-[#FDC832]"
                            }`}
                    />
                    {errors.courseTitle && <p className="text-red-500 text-[12px]">{errors.courseTitle}</p>}
                </div>

                {/* Description */}
                <div className="space-y-3">
                    <label className="text-[16px] font-semibold text-black">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        placeholder="Describe your course..."
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                            if (errors.description) setErrors({ ...errors, description: "" });
                        }}
                        rows={4}
                        className={`w-full px-5 py-4 border rounded-[8px] text-[14px] placeholder-[#9E9E9E] focus:outline-none resize-none transition-colors ${errors.description ? "border-red-500" : "border-[#E0E0E0] focus:border-[#FDC832]"
                            }`}
                    />
                    {errors.description && <p className="text-red-500 text-[12px]">{errors.description}</p>}
                </div>

                {/* Cover Image */}
                <div className="space-y-3">
                    <label className="text-[16px] font-semibold text-black">Cover Image</label>
                    <div className="border-2 border-dashed border-[#E0E0E0] rounded-[8px] p-8 flex flex-col items-center justify-center cursor-pointer hover:border-[#FDC832] transition-colors relative overflow-hidden group">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        {coverImage ? (
                            <div className="relative w-full">
                                <img src={coverImage} alt="Cover" className="w-full h-48 object-cover rounded-[8px]" />
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCoverImage(null);
                                    }}
                                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>
                        ) : (
                            <>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" className="group-hover:stroke-[#FDC832] transition-colors">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="17 8 12 3 7 8" />
                                    <line x1="12" y1="3" x2="12" y2="15" />
                                </svg>
                                <span className="text-[14px] text-[#9E9E9E] mt-2 group-hover:text-[#FDC832] transition-colors">Click to upload or drag and drop</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Category */}
                <div className="space-y-3">
                    <label className="text-[16px] font-semibold text-black">
                        Category <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="e.g., Programming, Design, Business"
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                            if (errors.category) setErrors({ ...errors, category: "" });
                        }}
                        className={`w-full h-[56px] px-5 border rounded-[8px] text-[14px] placeholder-[#9E9E9E] focus:outline-none transition-colors ${errors.category ? "border-red-500" : "border-[#E0E0E0] focus:border-[#FDC832]"
                            }`}
                    />
                    {errors.category && <p className="text-red-500 text-[12px]">{errors.category}</p>}
                </div>

                {/* Action Buttons Row */}
                <div className="flex justify-end gap-4">
                    <button
                        onClick={handleSave}
                        className="px-8 py-3 bg-[#FDC832] text-black font-semibold rounded-[8px] hover:bg-[#fdd45c] transition-all hover:scale-105 text-[14px]"
                    >
                        Save
                    </button>
                    <button
                        onClick={handleDelete}
                        className="px-8 py-3 bg-white border border-[#E0E0E0] text-black font-semibold rounded-[8px] hover:bg-red-50 hover:border-red-500 hover:text-red-500 transition-all text-[14px]"
                    >
                        Delete
                    </button>
                </div>

                {/* Course Difficulty */}
                <div className="space-y-3">
                    <label className="text-[16px] font-semibold text-black">Course Difficulty</label>
                    <div className="flex gap-4 flex-wrap">
                        {["Beginner", "Intermediate", "Advanced"].map((level) => (
                            <button
                                key={level}
                                onClick={() => setDifficulty(level)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-[8px] border-2 transition-all ${difficulty === level
                                        ? "border-[#FDC832] bg-[#FDC832]/10 scale-105"
                                        : "border-[#E0E0E0] hover:border-[#FDC832]"
                                    }`}
                            >
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${difficulty === level ? "border-[#FDC832]" : "border-[#E0E0E0]"
                                    }`}>
                                    {difficulty === level && (
                                        <div className="w-3 h-3 rounded-full bg-[#FDC832]"></div>
                                    )}
                                </div>
                                <span className={`text-[14px] font-medium ${difficulty === level ? "text-black" : "text-[#9E9E9E]"
                                    }`}>
                                    {level}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Course Modules */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-[16px] font-semibold text-black">
                            Course Modules <span className="text-red-500">*</span>
                        </label>
                        <button
                            onClick={addModule}
                            className="px-4 py-2 bg-[#FDC832] text-black font-medium rounded-[8px] hover:bg-[#fdd45c] transition-all text-[14px] flex items-center gap-2"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            Add Module
                        </button>
                    </div>
                    <div className="space-y-3">
                        {modules.map((module, index) => (
                            <div key={module.id} className="flex items-center gap-4 animate-slide-up">
                                <span className="text-[14px] text-[#9E9E9E] w-8">{index + 1}.</span>
                                <input
                                    type="text"
                                    placeholder="Module Title"
                                    value={module.title}
                                    onChange={(e) => updateModule(module.id, e.target.value)}
                                    className="flex-1 h-[56px] px-5 border border-[#E0E0E0] rounded-[8px] text-[14px] placeholder-[#9E9E9E] focus:outline-none focus:border-[#FDC832] transition-colors"
                                />
                                <button
                                    onClick={() => removeModule(module.id)}
                                    className="p-3 bg-white border border-[#E0E0E0] rounded-[8px] hover:bg-red-50 hover:border-red-500 transition-colors group"
                                    title="Remove Module"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:stroke-red-500">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                    {errors.modules && <p className="text-red-500 text-[12px]">{errors.modules}</p>}
                </div>

                {/* Bottom Action Buttons */}
                <div className="flex justify-between items-center pt-6 border-t border-[#E0E0E0]">
                    <button
                        onClick={() => router.back()}
                        className="px-8 py-3 bg-white border border-[#E0E0E0] text-black font-semibold rounded-[8px] hover:bg-gray-50 transition-colors text-[14px]"
                    >
                        Cancel
                    </button>
                    <div className="flex gap-4">
                        <button
                            onClick={handleSave}
                            className="px-8 py-3 bg-white border-2 border-[#FDC832] text-[#FDC832] font-semibold rounded-[8px] hover:bg-[#FFF9E6] transition-all text-[14px]"
                        >
                            Save as Draft
                        </button>
                        <button
                            onClick={handlePublish}
                            className="px-8 py-3 bg-[#FDC832] text-black font-semibold rounded-[8px] hover:bg-[#fdd45c] transition-all hover:scale-105 text-[14px]"
                        >
                            Publish Course
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
