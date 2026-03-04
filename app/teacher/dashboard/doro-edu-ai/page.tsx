"use client";

import { useState } from "react";

export default function DoroEduAIPage() {
    const [selectedTool, setSelectedTool] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    // Form Inputs
    const [topic, setTopic] = useState("");
    const [grade, setGrade] = useState("Grade 10");
    const [difficulty, setDifficulty] = useState("Intermediate");

    const tools = [
        {
            id: "quiz",
            title: "Quiz Generator",
            description: "Instantly generate multiple-choice quizzes on any topic.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-600">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            ),
            color: "bg-purple-100"
        },
        {
            id: "lesson",
            title: "Lesson Planner",
            description: "Create structured lesson plans with objectives and activities.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
            ),
            color: "bg-blue-100"
        },
        {
            id: "report",
            title: "Student Reports",
            description: "Draft personalized student performance comments.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            ),
            color: "bg-green-100"
        }
    ];

    const handleGenerate = () => {
        if (!topic) return;
        setLoading(true);
        setResult(null);

        // Simulate AI Delay
        setTimeout(() => {
            setLoading(false);
            if (selectedTool === "quiz") {
                setResult(`
### Generated Quiz: ${topic} (${grade})

**Q1. What is the primary function of...**
A) Option 1
B) Option 2
C) Option 3
D) Option 4 (Correct)

**Q2. Explain the significance of...**
A) Option A
B) Option B (Correct)
C) Option C
D) Option D

*(3 more questions generated...)*
                `);
            } else if (selectedTool === "lesson") {
                setResult(`
### Lesson Plan: ${topic}
**Duration:** 60 mins | **Grade:** ${grade}

**Learning Objectives:**
- Understand the core concepts of ${topic}
- Apply knowledge to solve basic problems

**Activity 1 (15 mins):** Introduction and Hook
**Activity 2 (30 mins):** Guided Practice & Group Work
**Activity 3 (15 mins):** Assessment & Wrap-up
                `);
            } else {
                setResult(`
### Student Report Comment:
"${topic} has shown remarkable improvement in class participation. They consistently demonstrate a strong understanding of ${difficulty} level concepts. I encourage them to continue..."
                `);
            }
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-white p-6 md:p-10 font-roboto">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-[32px] font-bold text-[#9333EA]">Doro EDU AI</h1>
                    <p className="text-[14px] text-[#9E9E9E] mt-2">Your AI-powered teaching assistant. What would you like to create today?</p>
                </div>

                {/* Tool Selection Grid */}
                {!selectedTool ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
                        {tools.map((tool) => (
                            <div
                                key={tool.id}
                                onClick={() => setSelectedTool(tool.id)}
                                className="border border-[#E0E0E0] rounded-[20px] p-8 cursor-pointer hover:shadow-xl hover:border-[#9333EA] transition-all group hover:-translate-y-1 bg-white"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${tool.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {tool.icon}
                                </div>
                                <h3 className="text-[20px] font-bold text-black mb-2">{tool.title}</h3>
                                <p className="text-[14px] text-[#9E9E9E] leading-relaxed">{tool.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8 animate-slide-up">
                        {/* Input Panel */}
                        <div className="lg:w-1/3 bg-white border border-[#E0E0E0] rounded-[20px] p-6 h-fit shadow-sm">
                            <button
                                onClick={() => { setSelectedTool(null); setResult(null); setTopic(""); }}
                                className="text-sm text-[#969696] hover:text-black mb-4 flex items-center gap-1"
                            >
                                ← Back to Tools
                            </button>
                            <h2 className="text-[20px] font-bold text-black mb-6 flex items-center gap-2">
                                {tools.find(t => t.id === selectedTool)?.title}
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[14px] font-semibold mb-2">Topic / Subject</label>
                                    <textarea
                                        rows={3}
                                        className="w-full p-3 border border-[#E0E0E0] rounded-[12px] focus:outline-none focus:border-[#9333EA] resize-none"
                                        placeholder="e.g. Current, Photosynthesis, Quadratic Equations..."
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value)}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[14px] font-semibold mb-2">Grade Level</label>
                                        <select
                                            value={grade}
                                            onChange={(e) => setGrade(e.target.value)}
                                            className="w-full p-3 border border-[#E0E0E0] rounded-[12px] focus:outline-none focus:border-[#9333EA]"
                                        >
                                            <option>Grade 8</option>
                                            <option>Grade 9</option>
                                            <option>Grade 10</option>
                                            <option>Grade 11</option>
                                            <option>Grade 12</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[14px] font-semibold mb-2">Difficulty</label>
                                        <select
                                            value={difficulty}
                                            onChange={(e) => setDifficulty(e.target.value)}
                                            className="w-full p-3 border border-[#E0E0E0] rounded-[12px] focus:outline-none focus:border-[#9333EA]"
                                        >
                                            <option>Easy</option>
                                            <option>Intermediate</option>
                                            <option>Hard</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    onClick={handleGenerate}
                                    disabled={loading || !topic}
                                    className={`w-full py-3 rounded-[12px] font-bold text-white transition-all flex items-center justify-center gap-2 ${loading || !topic ? "bg-gray-300 cursor-not-allowed" : "bg-[#9333EA] hover:bg-purple-700 hover:shadow-lg"
                                        }`}
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Generating...
                                        </>
                                    ) : "Generate Magic ✨"}
                                </button>
                            </div>
                        </div>

                        {/* Result Panel */}
                        <div className="lg:w-2/3 bg-gray-50 border border-[#E0E0E0] rounded-[20px] p-8 min-h-[500px]">
                            {result ? (
                                <div className="space-y-4 animate-fade-in">
                                    <h3 className="text-[18px] font-bold text-gray-800 border-b pb-2">AI Generated Result</h3>
                                    <div className="prose max-w-none text-gray-700 whitespace-pre-wrap font-roboto leading-relaxed">
                                        {result}
                                    </div>
                                    <div className="flex gap-4 pt-6 mt-6 border-t border-gray-200">
                                        <button className="px-6 py-2 bg-white border border-[#E0E0E0] rounded-lg hover:bg-gray-50 text-sm font-medium">Copy Text</button>
                                        <button className="px-6 py-2 bg-[#9333EA] text-white rounded-lg hover:bg-purple-700 text-sm font-medium">Save to Course</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-4">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    <p className="text-lg font-medium">Results will appear here</p>
                                    <p className="text-sm">Enter your topic and click Generate</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
