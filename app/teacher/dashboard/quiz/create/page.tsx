"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
}

export default function CreateQuizPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("basic");
    const [toast, setToast] = useState<{ message: string; type: string } | null>(null);

    // Basic Info
    const [quizTitle, setQuizTitle] = useState("");
    const [description, setDescription] = useState("");
    const [quizType, setQuizType] = useState("MCQ");
    const [course, setCourse] = useState("Python devop");
    const [dueDate, setDueDate] = useState("");
    const [timeLimit, setTimeLimit] = useState("");

    // Questions
    const [questions, setQuestions] = useState<Question[]>([
        { id: 1, question: "", options: ["", "", "", ""], correctAnswer: 0 }
    ]);

    // Settings
    const [settings, setSettings] = useState({
        shuffleQuestions: false,
        shuffleOptions: false,
        showResults: true,
        allowRetake: false,
        passingScore: 70
    });

    const showToast = (message: string, type: string = "success") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const addQuestion = () => {
        setQuestions([...questions, {
            id: Date.now(),
            question: "",
            options: ["", "", "", ""],
            correctAnswer: 0
        }]);
        showToast("Question added", "success");
    };

    const removeQuestion = (id: number) => {
        if (questions.length > 1) {
            setQuestions(questions.filter(q => q.id !== id));
            showToast("Question removed", "success");
        }
    };

    const updateQuestion = (id: number, field: string, value: any) => {
        setQuestions(questions.map(q =>
            q.id === id ? { ...q, [field]: value } : q
        ));
    };

    const updateOption = (questionId: number, optionIndex: number, value: string) => {
        setQuestions(questions.map(q => {
            if (q.id === questionId) {
                const newOptions = [...q.options];
                newOptions[optionIndex] = value;
                return { ...q, options: newOptions };
            }
            return q;
        }));
    };

    const handleSave = () => {
        if (!quizTitle.trim()) {
            showToast("Please enter a quiz title", "error");
            setActiveTab("basic");
            return;
        }
        showToast("Quiz saved as draft", "success");
        setTimeout(() => router.push("/teacher/dashboard/quiz"), 1500);
    };

    const handlePublish = () => {
        if (!quizTitle.trim()) {
            showToast("Please enter a quiz title", "error");
            setActiveTab("basic");
            return;
        }
        if (questions.some(q => !q.question.trim())) {
            showToast("Please fill all questions", "error");
            setActiveTab("questions");
            return;
        }
        showToast("Quiz published successfully", "success");
        setTimeout(() => router.push("/teacher/dashboard/quiz"), 1500);
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
                <h1 className="text-[32px] font-bold text-[#FDC832]">Create New Quiz</h1>
                <p className="text-[14px] text-[#9E9E9E] mt-1">Design an engaging quiz for your students</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-8 mb-8 border-b border-[#E0E0E0]">
                <button
                    onClick={() => setActiveTab("basic")}
                    className={`pb-4 px-2 font-semibold text-[16px] relative transition-colors ${activeTab === "basic" ? "text-black" : "text-[#9E9E9E] hover:text-black"
                        }`}
                >
                    <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeTab === "basic" ? "bg-[#FDC832] text-black" : "bg-[#E0E0E0] text-white"
                            }`}>
                            1
                        </div>
                        Basic Info
                    </div>
                    {activeTab === "basic" && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FDC832]"></div>
                    )}
                </button>
                <button
                    onClick={() => setActiveTab("questions")}
                    className={`pb-4 px-2 font-semibold text-[16px] relative transition-colors ${activeTab === "questions" ? "text-black" : "text-[#9E9E9E] hover:text-black"
                        }`}
                >
                    <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeTab === "questions" ? "bg-[#FDC832] text-black" : "bg-[#E0E0E0] text-white"
                            }`}>
                            2
                        </div>
                        Questions ({questions.length})
                    </div>
                    {activeTab === "questions" && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FDC832]"></div>
                    )}
                </button>
                <button
                    onClick={() => setActiveTab("settings")}
                    className={`pb-4 px-2 font-semibold text-[16px] relative transition-colors ${activeTab === "settings" ? "text-black" : "text-[#9E9E9E] hover:text-black"
                        }`}
                >
                    <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeTab === "settings" ? "bg-[#FDC832] text-black" : "bg-[#E0E0E0] text-white"
                            }`}>
                            3
                        </div>
                        Settings
                    </div>
                    {activeTab === "settings" && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FDC832]"></div>
                    )}
                </button>
            </div>

            {/* Basic Info Tab */}
            {activeTab === "basic" && (
                <div className="max-w-4xl space-y-6 animate-fade-in">
                    <div className="space-y-3">
                        <label className="text-[16px] font-semibold text-black">Quiz Title *</label>
                        <input
                            type="text"
                            placeholder="Enter Quiz Title"
                            value={quizTitle}
                            onChange={(e) => setQuizTitle(e.target.value)}
                            className="w-full h-[56px] px-5 border border-[#E0E0E0] rounded-[8px] text-[14px] placeholder-[#9E9E9E] focus:outline-none focus:border-[#FDC832] transition-colors"
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-[16px] font-semibold text-black">Description</label>
                        <textarea
                            placeholder="Describe your quiz..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                            className="w-full px-5 py-4 border border-[#E0E0E0] rounded-[8px] text-[14px] placeholder-[#9E9E9E] focus:outline-none focus:border-[#FDC832] resize-none transition-colors"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <label className="text-[16px] font-semibold text-black">Quiz Type</label>
                            <select
                                value={quizType}
                                onChange={(e) => setQuizType(e.target.value)}
                                className="w-full h-[56px] px-5 border border-[#E0E0E0] rounded-[8px] text-[14px] bg-white focus:outline-none focus:border-[#FDC832] cursor-pointer transition-colors"
                            >
                                <option>MCQ</option>
                                <option>True/False</option>
                                <option>Essay</option>
                            </select>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[16px] font-semibold text-black">Course</label>
                            <input
                                type="text"
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                                className="w-full h-[56px] px-5 border border-[#E0E0E0] rounded-[8px] text-[14px] focus:outline-none focus:border-[#FDC832] transition-colors"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <label className="text-[16px] font-semibold text-black">Due Date</label>
                            <input
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                className="w-full h-[56px] px-5 border border-[#E0E0E0] rounded-[8px] text-[14px] focus:outline-none focus:border-[#FDC832] transition-colors"
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-[16px] font-semibold text-black">Time Limit (minutes)</label>
                            <input
                                type="number"
                                placeholder="e.g., 30"
                                value={timeLimit}
                                onChange={(e) => setTimeLimit(e.target.value)}
                                className="w-full h-[56px] px-5 border border-[#E0E0E0] rounded-[8px] text-[14px] placeholder-[#9E9E9E] focus:outline-none focus:border-[#FDC832] transition-colors"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <img
                            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=300&fit=crop"
                            alt="Quiz Banner"
                            className="w-full h-[300px] object-cover rounded-[16px]"
                        />
                    </div>
                </div>
            )}

            {/* Questions Tab */}
            {activeTab === "questions" && (
                <div className="max-w-4xl space-y-6 animate-fade-in">
                    <div className="flex justify-between items-center">
                        <h3 className="text-[18px] font-semibold text-black">Quiz Questions</h3>
                        <button
                            onClick={addQuestion}
                            className="px-6 py-2.5 bg-[#FDC832] text-black font-medium rounded-[8px] hover:bg-[#fdd45c] transition-all flex items-center gap-2"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            Add Question
                        </button>
                    </div>

                    {questions.map((q, index) => (
                        <div key={q.id} className="border border-[#E0E0E0] rounded-[12px] p-6 space-y-4 animate-slide-up">
                            <div className="flex justify-between items-start">
                                <h4 className="text-[16px] font-semibold text-black">Question {index + 1}</h4>
                                {questions.length > 1 && (
                                    <button
                                        onClick={() => removeQuestion(q.id)}
                                        className="p-2 hover:bg-red-50 rounded transition-colors group"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:stroke-red-500">
                                            <polyline points="3 6 5 6 21 6" />
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        </svg>
                                    </button>
                                )}
                            </div>

                            <textarea
                                placeholder="Enter your question here..."
                                value={q.question}
                                onChange={(e) => updateQuestion(q.id, "question", e.target.value)}
                                rows={3}
                                className="w-full px-4 py-3 border border-[#E0E0E0] rounded-[8px] text-[14px] placeholder-[#9E9E9E] focus:outline-none focus:border-[#FDC832] resize-none transition-colors"
                            />

                            <div className="space-y-3">
                                <label className="text-[14px] font-semibold text-black">Options</label>
                                {q.options.map((option, optIndex) => (
                                    <div key={optIndex} className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name={`correct-${q.id}`}
                                            checked={q.correctAnswer === optIndex}
                                            onChange={() => updateQuestion(q.id, "correctAnswer", optIndex)}
                                            className="w-5 h-5 accent-[#FDC832] cursor-pointer"
                                        />
                                        <input
                                            type="text"
                                            placeholder={`Option ${optIndex + 1}`}
                                            value={option}
                                            onChange={(e) => updateOption(q.id, optIndex, e.target.value)}
                                            className="flex-1 h-[48px] px-4 border border-[#E0E0E0] rounded-[8px] text-[14px] placeholder-[#9E9E9E] focus:outline-none focus:border-[#FDC832] transition-colors"
                                        />
                                    </div>
                                ))}
                                <p className="text-[12px] text-[#9E9E9E]">Select the correct answer by clicking the radio button</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
                <div className="max-w-2xl space-y-6 animate-fade-in">
                    <h3 className="text-[18px] font-semibold text-black mb-4">Quiz Settings</h3>

                    <div className="space-y-4">
                        {[
                            { key: "shuffleQuestions", label: "Shuffle Questions", desc: "Randomize question order for each student" },
                            { key: "shuffleOptions", label: "Shuffle Options", desc: "Randomize answer options for each question" },
                            { key: "showResults", label: "Show Results Immediately", desc: "Display score and answers after submission" },
                            { key: "allowRetake", label: "Allow Retake", desc: "Students can retake the quiz multiple times" }
                        ].map((setting) => (
                            <div key={setting.key} className="flex items-start justify-between p-4 border border-[#E0E0E0] rounded-[8px] hover:border-[#FDC832] transition-colors">
                                <div className="flex-1">
                                    <h4 className="text-[14px] font-semibold text-black">{setting.label}</h4>
                                    <p className="text-[12px] text-[#9E9E9E] mt-1">{setting.desc}</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={settings[setting.key as keyof typeof settings] as boolean}
                                        onChange={(e) => setSettings({ ...settings, [setting.key]: e.target.checked })}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FDC832]"></div>
                                </label>
                            </div>
                        ))}

                        <div className="p-4 border border-[#E0E0E0] rounded-[8px]">
                            <label className="text-[14px] font-semibold text-black mb-3 block">Passing Score (%)</label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={settings.passingScore}
                                onChange={(e) => setSettings({ ...settings, passingScore: parseInt(e.target.value) })}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDC832]"
                            />
                            <div className="flex justify-between mt-2">
                                <span className="text-[12px] text-[#9E9E9E]">0%</span>
                                <span className="text-[14px] font-semibold text-[#FDC832]">{settings.passingScore}%</span>
                                <span className="text-[12px] text-[#9E9E9E]">100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Actions */}
            <div className="flex justify-center gap-4 pt-8 mt-8 border-t border-[#E0E0E0]">
                <button
                    onClick={() => router.back()}
                    className="px-8 py-3 bg-white border border-[#E0E0E0] text-black font-medium rounded-full hover:bg-gray-50 transition-colors"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSave}
                    className="px-8 py-3 bg-white border-2 border-[#FDC832] text-[#FDC832] font-semibold rounded-full hover:bg-[#FFF9E6] transition-all"
                >
                    Save as Draft
                </button>
                <button
                    onClick={handlePublish}
                    className="px-8 py-3 bg-[#FDC832] text-black font-semibold rounded-full hover:bg-[#fdd45c] transition-all hover:scale-105"
                >
                    Publish Quiz
                </button>
            </div>
        </div>
    );
}
