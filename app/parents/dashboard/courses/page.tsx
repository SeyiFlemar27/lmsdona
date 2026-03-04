"use client";

import Image from "next/image";

export default function CoursesPage() {
    const courses = [
        {
            id: 1,
            title: "Learning strategy: how instead of what",
            description: "This course discusses the main units and principles of the human nervous system that underlie our language...",
            image: "https://placehold.co/145x103/FFD600/FFFFFF/png?text=Learning",
            rating: 5,
            ratingCount: "1.50",
            level: "All levels",
            selected: false,
        },
        {
            id: 2,
            title: "Learning strategy: how instead of what",
            description: "This course discusses the main units and principles of the human nervous system that underlie our language...",
            image: "https://placehold.co/145x103/FFD600/FFFFFF/png?text=Learning",
            rating: 5,
            ratingCount: "1.50",
            level: "All levels",
            selected: false,
        },
        {
            id: 3,
            title: "English for career development",
            description: "This course is designed for non-native English Speakers who are interste in advancing their..",
            image: "https://placehold.co/145x103/FFFBEB/000000/png?text=Career",
            rating: 5,
            ratingCount: "694",
            level: "Intermediate",
            selected: true, // Selected with yellow border
        },
        {
            id: 4,
            title: "First steps in Chinese",
            description: "This is an elementary-level korenan language course. consising of 5 lessons, and covers 4 skills . reading",
            image: "https://placehold.co/145x103/333333/FFFFFF/png?text=Chinese",
            rating: 5,
            ratingCount: "194",
            level: "Beginner",
            selected: false,
        },
        {
            id: 5,
            title: "First steps in Chinese",
            description: "This is an elementary-level korenan language course. consising of 5 lessons, and covers 4 skills . reading",
            image: "https://placehold.co/145x103/898989/FFFFFF/png?text=Chinese",
            rating: 5,
            ratingCount: "194",
            level: "Beginner",
            selected: false,
        },
        {
            id: 6,
            title: "English Teaching: managing the class",
            description: "The course will introduce students to important aspects of classroom management: class size and ..",
            image: "https://placehold.co/145x103/E0E7FF/000000/png?text=Teaching",
            rating: 5,
            ratingCount: "172",
            level: "All levels",
            selected: false,
        },
        {
            id: 7,
            title: "English Teaching: managing the class",
            description: "The course will introduce students to important aspects of classroom management: class size and ..",
            image: "https://placehold.co/145x103/E0E7FF/000000/png?text=Teaching",
            rating: 5,
            ratingCount: "172",
            level: "All levels",
            selected: false,
        },
        {
            id: 8,
            title: "Pronunciation of American English",
            description: "Learners will improve their pronunciation by paraticing realistic dialouges and other interactive exercises .",
            image: "https://placehold.co/145x103/ECFCCB/000000/png?text=English",
            rating: 5,
            ratingCount: "165",
            level: "Intermediate",
            selected: false,
        },
        {
            id: 9,
            title: "Pronunciation of American English",
            description: "Learners will improve their pronunciation by paraticing realistic dialouges and other interactive exercises .",
            image: "https://placehold.co/145x103/ECFCCB/000000/png?text=English",
            rating: 5,
            ratingCount: "165",
            level: "Intermediate",
            selected: false,
        },
        {
            id: 10,
            title: "Exam Prepartion Best things to do",
            description: "This course discusses the main units and principles of the human nervous system that underlie our language...",
            image: "https://placehold.co/145x103/fee2e2/000000/png?text=Exam",
            rating: 5,
            ratingCount: "97",
            level: "All levels",
            selected: false,
        },
    ];

    return (
        <div className="space-y-6 animate-fade-in pb-10 font-roboto">
            <h1 className="text-[24px] font-medium text-black mb-6">Courses</h1>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-6">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className={`flex gap-[16px] p-[13px] bg-white rounded-[16px] transition-all duration-200 cursor-pointer w-full max-w-[473px] ${course.selected
                            ? 'border border-[#FDC832] ring-0'
                            : 'border border-transparent hover:shadow-sm'
                            }`}
                        style={course.selected ? { boxShadow: '0 0 0 1px #FDC832' } : {}}
                    >
                        {/* Image */}
                        <div className="w-[146px] h-[103px] shrink-0 bg-gray-100 rounded-[16px] overflow-hidden relative">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col justify-between py-0.5 min-w-0">
                            <div>
                                <h3 className="text-[13px] font-medium text-[#020204] leading-[20px] truncate">{course.title}</h3>
                                <p className="text-[10px] text-[#6A6B6F] leading-[16px] mt-1.5 line-clamp-2">
                                    {course.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                                {/* Rating */}
                                <div className="flex items-center gap-1.5">
                                    <div className="flex gap-[1.5px]">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="w-[11px] h-[11px] bg-[#F8B41B] rounded-[0.5px]"></div>
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-medium text-[#302F32] font-general-sans">5({course.ratingCount})</span>
                                </div>

                                {/* Level Badge */}
                                <div className="bg-[#F8F8F8] px-2 py-[2px] rounded-[5px] flex items-center gap-1.5">
                                    {/* Check Icon */}
                                    <div className="w-[10px] h-[10px] flex items-center justify-center">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9C9C9C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] text-[#9C9C9C]">{course.level}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
