"use client";

export default function ChildrenPage() {
    return (
        <div className="animate-fade-in pb-10 font-sans">

            {/* Header Layout */}
            <div className="flex flex-col xl:flex-row gap-8">
                {/* Left Profile Section */}
                <div className="w-full xl:w-[302px] flex flex-col gap-6 shrink-0 bg-white border border-[#DBDBDB] rounded-2xl p-6">
                    {/* Profile Info */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-5 relative">
                            <img src="/images/avatar-male.png" alt="Student" className="w-full h-full object-cover" />
                        </div>
                        <h2 className="font-bold text-[15px] text-black">Akinbohun Ifedayo</h2>
                        <div className="bg-[#2584E9]/10 px-3 py-1 rounded-full mt-2">
                            <p className="text-[12px] font-semibold text-[#2584E9] uppercase tracking-wide">Student</p>
                        </div>
                    </div>

                    {/* Language Stats - A2 English */}
                    <div className="space-y-4 pt-2">
                        <div className="flex gap-3 items-center">
                            <div className="w-[82px] h-[75px] bg-[#2584E9]/10 rounded-xl flex flex-col items-center justify-center gap-1">
                                <span className="text-[13px] font-bold text-[#F83D00] mt-1">A2</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[16px] font-bold text-black">English</span>
                                <span className="text-[14px] font-medium text-[#2584E9]">Intermediate</span>
                                <div className="w-[88px] h-2 bg-[#0056E8]/30 rounded-full mt-1">
                                    <div className="w-[30%] h-full bg-[#2584E9] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Language Stats - B3 Yoruba */}
                        <div className="flex gap-3 items-center">
                            <div className="w-[82px] h-[75px] bg-[#2584E9]/10 rounded-xl flex flex-col items-center justify-center gap-1">
                                <span className="text-[13px] font-bold text-[#F83D00] mt-1">B3</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[16px] font-bold text-black">Yoruba</span>
                                <span className="text-[14px] font-medium text-[#2584E9]">Advance</span>
                                <div className="w-[88px] h-2 bg-[#0056E8]/30 rounded-full mt-1">
                                    <div className="w-[30%] h-full bg-[#2584E9] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reminders */}
                    <div className="space-y-4 pt-4">
                        <h3 className="font-bold text-[20px] text-black mb-2">Reminders</h3>
                        <div className="space-y-4">
                            {[
                                { time: "4pm", title: "Python test", sub: "Wednesday", color: "text-[#F83D00]" },
                                { time: "10am", title: "Bootstrap test", sub: "Thursday", color: "text-[#F83D00]" },
                                { time: "2pm", title: "React", sub: "Friday", color: "text-[#F83D00]" },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 items-start">
                                    <div className="w-[82px] h-[75px] bg-[#2584E9]/10 rounded-xl flex flex-col items-center justify-center shrink-0">
                                        <span className={`text-[13px] font-bold ${item.color}`}>{item.time}</span>
                                    </div>
                                    <div className="flex flex-col pt-2">
                                        <h4 className="text-[16px] font-bold text-black">{item.title}</h4>
                                        <p className="text-[14px] font-medium text-[#2584E9]">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 pt-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                            <span className="text-[14px] font-bold text-black">See More...</span>
                            <div className="border-2 border-black/40 rounded-full p-0.5">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Main Section */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-[24px] font-semibold text-[#F7961F]">Welcome To Your Dashboard</h2>

                    {/* Banner */}
                    <div className="bg-[#0E437E] rounded-[10px] p-8 text-white relative overflow-hidden h-[247px] flex items-center shadow-sm">
                        <div className="relative z-10 max-w-lg space-y-3 pl-8">
                            <h1 className="text-[32px] font-medium leading-tight">Good Morning</h1>
                            <p className="text-[16px] font-medium">
                                You've learned 70% of your goal this week!
                            </p>
                            <p className="text-[16px] font-medium opacity-90">Keep it up and improve your results!</p>
                        </div>
                        {/* Illustration */}
                        <div className="absolute right-10 bottom-0 h-full w-[250px] flex items-end">
                            <img src="/images/figma-graphic.svg" className="w-full h-full object-contain object-bottom scale-110" alt="Illustration" />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Latest Progress - White Card */}
                        <div className="flex-[1.5] bg-white border border-[#DBDBDB] rounded-[16px] p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-[16px] text-black">Latest Progress</h3>
                                <span className="text-[#000000] opacity-40 text-[10px]">More</span>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { label: "HTML", val: "18%", color: "bg-[#2584E9]" },
                                    { label: "CSS", val: "10%", color: "bg-[#F83D00]" },
                                    { label: "Javascript", val: "35%", color: "bg-[#2584E9]" },
                                    { label: "Python", val: "10%", color: "bg-[#F83D00]" },
                                    { label: "Bootstrap", val: "45%", color: "bg-[#2584E9]" },
                                    { label: "React", val: "45%", color: "bg-[#2584E9]" },
                                ].map((t, i) => (
                                    <div key={i} className="flex items-center justify-between gap-4">
                                        <span className="text-[14px] font-medium opacity-40 w-24">{t.label}</span>
                                        <div className="flex-1 h-2 bg-[#0056E8]/30 rounded-full overflow-hidden">
                                            <div className={`h-full ${t.color} rounded-full`} style={{ width: t.val }}></div>
                                        </div>
                                        <span className={`text-[13px] font-medium ${t.color === 'bg-[#F83D00]' ? 'text-[#F83D00]' : 'text-[#2584E9]'} w-8 text-right`}>{t.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Time spent on Studying & Courses */}
                        <div className="flex-1 space-y-6">
                            {/* Time Spent Chart */}
                            <div className="bg-white border border-[#DBDBDB] rounded-[16px] p-6 h-[330px] flex flex-col">
                                <h3 className="font-bold text-[16px] text-black mb-6">Time spent on studying</h3>
                                <div className="flex-1 flex items-end justify-between px-2 pb-2">
                                    {["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day, i) => {
                                        const heights = [40, 75, 30, 65, 45, 55, 45];
                                        const isOrange = i === 1 || i === 3 || i === 6;
                                        return (
                                            <div key={i} className="flex flex-col items-center gap-2 w-full group cursor-pointer">
                                                <div className="h-40 w-full flex items-end justify-center relative">
                                                    <div
                                                        className={`w-1.5 rounded-full transition-all duration-300 ${isOrange ? 'bg-[#F83D00]' : 'bg-[#2584E9]/30'} group-hover:bg-[#F7961F]`}
                                                        style={{ height: `${heights[i]}%` }}
                                                    />
                                                </div>
                                                <span className="text-[10px] text-gray-400 font-medium">{day}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Your Courses Grid */}
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-[18px] text-black">Your Courses</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Card 1 - HTML */}
                            <div className="bg-[#05D227] rounded-[14px] p-2 pr-4 flex gap-4 items-center h-[90px] relative overflow-hidden group hover:shadow-md transition-all cursor-pointer">
                                <div className="w-[100px] h-[72px] bg-[#97F2A6] rounded-[10px] flex items-center justify-center shrink-0 ml-1">
                                    <span className="text-[32px] font-bold text-white">C1</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="font-bold text-[15px] text-white leading-tight">HTML</h4>
                                    <p className="font-medium text-[13px] text-white/90">Anchor tags</p>
                                </div>
                            </div>

                            {/* Card 2 - CSS */}
                            <div className="bg-[#2B9AFF] rounded-[14px] p-2 pr-4 flex gap-4 items-center h-[90px] relative overflow-hidden group hover:shadow-md transition-all cursor-pointer">
                                <div className="w-[100px] h-[72px] bg-[#93CCFF] rounded-[10px] flex items-center justify-center shrink-0 ml-1">
                                    <span className="text-[32px] font-bold text-white">A1</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="font-bold text-[15px] text-white leading-tight">CSS</h4>
                                    <p className="font-medium text-[13px] text-white/90">Selectors</p>
                                </div>
                            </div>

                            {/* Card 3 - CSS Selectors */}
                            <div className="bg-[#FF4D00] rounded-[14px] p-2 pr-4 flex gap-4 items-center h-[90px] relative overflow-hidden group hover:shadow-md transition-all cursor-pointer">
                                <div className="w-[100px] h-[72px] bg-[#FFAB85] rounded-[10px] flex items-center justify-center shrink-0 ml-1">
                                    <span className="text-[32px] font-bold text-white">B6</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="font-bold text-[15px] text-white leading-tight">CSS</h4>
                                    <p className="font-medium text-[13px] text-white/90">Selectors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
