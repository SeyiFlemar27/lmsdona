"use client";

import Image from "next/image";

export default function DashboardPage() {
    return (
        <div className="flex flex-col xl:flex-row gap-6 pb-10 font-roboto text-black animate-fade-in">

            {/* ---------------- LEFT SECTION (approx 63%) ---------------- */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">

                {/* 1. Welcome Banner */}
                <div className="bg-white border border-[#DBDBDB] rounded-[20px] p-8 relative overflow-hidden flex flex-col justify-center min-h-[200px]">
                    <div className="z-10 space-y-4 max-w-lg">
                        <h1 className="text-[24px] md:text-[32px] font-medium text-black leading-tight">Welcome, Jane Smith!</h1>
                        <p className="text-[#8F8F8F] text-[13px] font-light leading-[1.4]">
                            Manage your school operations with ease. Stay updated on academics, attendance, finances, and more—all in one place. Let's keep shaping a brighter future together!
                        </p>
                        <div className="bg-[#05D227]/10 w-fit px-4 py-1.5 rounded-full flex items-center gap-2">
                            <span className="text-[#05D227] text-[13px] font-normal">Approved</span>
                        </div>
                    </div>
                    {/* Illustration Placeholder */}
                    <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 w-[240px] h-[180px]">
                        <div className="w-full h-full opacity-60 bg-[url('/images/signup_illustration.png')] bg-contain bg-no-repeat bg-center mix-blend-multiply"></div>
                    </div>
                </div>

                {/* 2. Your Children (Pies) & Notice Board */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Your Children - Pie Charts */}
                    <div className="bg-white border border-[#DBDBDB] rounded-[20px] p-6 h-[230px] flex flex-col relative">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-base md:text-lg font-medium">Students</h3>
                            <button className="text-2xl text-black pb-2">...</button>
                        </div>
                        <div className="flex-1 flex items-center justify-center gap-6">
                            {/* Boy Chart */}
                            <div className="relative w-28 h-28 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="56" cy="56" r="46" stroke="#EDEDED" strokeWidth="8" fill="none" />
                                    <circle cx="56" cy="56" r="46" stroke="#CFCEFF" strokeWidth="8" fill="none" strokeDasharray="289" strokeDashoffset="135" strokeLinecap="round" />
                                </svg>
                                <span className="absolute text-[24px] font-semibold">53<span className="text-sm">%</span></span>
                                <span className="absolute -bottom-6 text-xs text-[#969696] font-medium">Detail</span>
                            </div>
                            {/* Girl Chart */}
                            <div className="relative w-28 h-28 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="56" cy="56" r="46" stroke="#EDEDED" strokeWidth="8" fill="none" />
                                    <circle cx="56" cy="56" r="46" stroke="#FFED9F" strokeWidth="8" fill="none" strokeDasharray="289" strokeDashoffset="153" strokeLinecap="round" />
                                </svg>
                                <span className="absolute text-[24px] font-semibold">47<span className="text-sm">%</span></span>
                                <span className="absolute -bottom-6 text-xs text-[#969696] font-medium">Detail</span>
                            </div>
                        </div>
                    </div>

                    {/* Notice Board */}
                    <div className="bg-white border border-[#DBDBDB] rounded-[20px] p-6 h-[230px] flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-base md:text-lg font-medium">Notice Board</h3>
                            <button className="text-2xl text-black pb-2">...</button>
                        </div>
                        <div className="flex-1 space-y-3 overflow-y-auto pr-1">
                            {/* Notice 1 */}
                            <div className="border border-[#C9C9C9] rounded-lg p-2.5 flex gap-3 items-start">
                                <div className="w-9 h-10 bg-[#FFED9F] rounded flex items-center justify-center shrink-0 text-lg">
                                    🔔
                                </div>
                                <div>
                                    <h4 className="text-[12px] font-normal text-black">Sports Day Announcement</h4>
                                    <p className="text-[8px] text-[#969696] leading-tight mt-1">The school's Annual Sports Day will be held on May 12, 2024. Mark your calendars!</p>
                                </div>
                            </div>
                            {/* Notice 2 */}
                            <div className="border border-[#C9C9C9] rounded-lg p-2.5 flex gap-3 items-start">
                                <div className="w-9 h-10 bg-[#D6DAFF] rounded flex items-center justify-center shrink-0 text-lg">
                                    🔔
                                </div>
                                <div>
                                    <h4 className="text-[12px] font-normal text-black">Summer Break Start Date</h4>
                                    <p className="text-[8px] text-[#969696] leading-tight mt-1">Summer break begins on May 25, 2024. Have a wonderful holiday!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Notifications & Earnings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Notifications */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-base md:text-lg font-bold">Notifications</h3>
                            <button className="text-2xl text-black pb-2">...</button>
                        </div>
                        <div className="space-y-6">
                            {[1, 2].map((i) => (
                                <div key={i} className="flex flex-col gap-2 border-b border-gray-100 pb-4 last:border-0">
                                    <span className="w-fit bg-gradient-to-r from-[#FED136] to-[#F7961F] text-black text-[10px] px-3 py-1 rounded-full font-medium">12 Jun 2025</span>
                                    <div>
                                        <p className="text-sm text-[#969696] font-light leading-relaxed">Great School management system features eleifend lectus sed maximus mi faucibusnting.</p>
                                        <span className="text-[10px] font-bold text-[#595959] mt-1 block">Jennyfar Lopez | 5 min ago</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Earnings / Graph Portion (Width 595 in dump, typically this would be wide) 
                        For the 2-col layout, we'll put the Graph here.
                    */}
                    <div className="md:col-span-1 bg-white border border-[#DBDBDB] rounded-[20px] p-6 min-h-[350px] flex flex-col justify-end">
                        {/* Graph Placeholder - mimicking 'Earnings' visual */}
                        <div className="w-full h-[250px] flex items-end justify-between px-2 gap-2 text-[10px] text-[#3C3C3C]">
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, idx) => (
                                <div key={m} className="flex flex-col items-center gap-2 flex-1 group">
                                    <div className={`w-full max-w-[20px] rounded-t-sm transition-all duration-300 ${idx === 8 ? 'bg-[#FFED9F] h-[180px]' : 'bg-[#F2F3F4] h-[60px] group-hover:bg-[#FFED9F] group-hover:h-[90px]'}`}></div>
                                    <span>{m}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* ---------------- RIGHT SECTION (approx 37%) ---------------- */}
            <div className="w-full xl:w-[420px] flex flex-col gap-6 shrink-0">

                {/* 1. Stats & Calendar Row */}
                <div className="grid grid-cols-[140px_1fr] gap-6">

                    {/* Stats Stack */}
                    <div className="flex flex-col gap-4">
                        {/* Courses */}
                        <div className="bg-[#F8E38D] rounded-2xl p-4 h-[90px] relative flex flex-col justify-center">
                            <span className="text-[28px] font-medium ml-2">5</span>
                            <span className="text-[12px] font-light ml-2">Courses</span>
                            <button className="absolute top-3 right-3 text-black opacity-50 text-xl">...</button>
                        </div>
                        {/* Your Children */}
                        <div className="bg-[#E2D8FC] rounded-2xl p-4 h-[90px] relative flex flex-col justify-center">
                            <span className="text-[28px] font-medium ml-2">2</span>
                            <span className="text-[12px] font-light ml-2">Your Children</span>
                            <button className="absolute top-3 right-3 text-black opacity-50 text-xl">...</button>
                        </div>
                        {/* Sessions */}
                        <div className="bg-[#F8E38D] rounded-2xl p-4 h-[90px] relative flex flex-col justify-center">
                            <span className="text-[28px] font-medium ml-2">100</span>
                            <span className="text-[12px] font-light ml-2">Sessions</span>
                            <button className="absolute top-3 right-3 text-black opacity-50 text-xl">...</button>
                        </div>
                    </div>

                    {/* Calendar */}
                    <div className="bg-white border border-[#DBDBDB] rounded-[20px] p-4 flex flex-col h-[300px]">
                        <div className="flex items-center justify-between mb-4 px-2">
                            <button className="text-[#B5BEC6] text-xs">‹</button>
                            <span className="text-[12px] font-semibold text-[#4A5660]">September 2021</span>
                            <button className="text-[#B5BEC6] text-xs">›</button>
                        </div>
                        <div className="grid grid-cols-7 gap-y-4 text-center text-[9px] font-bold text-[#B5BEC6] mb-2">
                            <span>SAT</span><span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span>
                        </div>
                        <div className="grid grid-cols-7 gap-y-3 text-center text-[11px] font-semibold text-[#4A5660] flex-1">
                            <span className="opacity-0">29</span><span className="opacity-0">30</span>
                            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                            <span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span>
                            <span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span>
                            <span className="bg-[#F04D23] text-white rounded-full w-5 h-5 flex items-center justify-center mx-auto shadow-sm text-[10px]">19</span>
                            <span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span>
                            <span>27</span><span>28</span><span>29</span><span>30</span><span>31</span>
                        </div>
                        <div className="mt-2 text-center text-[10px] text-[#969696]">Manage Calendar</div>
                    </div>
                </div>

                {/* 2. Expenses (Wide) */}
                <div className="bg-white border border-[#DBDBDB] rounded-[20px] p-6 min-h-[140px]">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">Expenses</h3>
                        <div className="flex gap-2 text-[10px] text-[#969696]">
                            <span>2023-2024</span>
                            <span className="text-black">Annual ▼</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1 bg-[#C3EBFA] rounded-xl p-3 relative h-[86px] flex flex-col justify-center">
                            <div className="absolute top-2 right-2 bg-white rounded-sm px-1.5 py-0.5 text-[8px] font-bold text-[#00997E]">↗ 12%</div>
                            <div className="text-[20px] font-medium leading-tight">₹2,545,000</div>
                            <div className="text-[10px] mt-0.5">Total Income</div>
                        </div>
                        <div className="flex-1 bg-[#C3EBFA] rounded-xl p-3 relative h-[86px] flex flex-col justify-center">
                            <div className="absolute top-2 right-2 bg-white rounded-sm px-1.5 py-0.5 text-[8px] font-bold text-[#00997E]">↗ 0.5%</div>
                            <div className="text-[20px] font-medium leading-tight">₹22,000,000</div>
                            <div className="text-[10px] mt-0.5">Total Expenses</div>
                        </div>
                    </div>
                </div>

                {/* 3. Fee Status & Messages Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Fee Status */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium">Fee Status</h3>
                            <button className="text-2xl text-black pb-2">...</button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-medium">1,335</span>
                                <span className="text-[10px] text-[#05D227] bg-[#EFFFF1] px-2 py-0.5 rounded-full">• Paid</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-medium">4,366</span>
                                <span className="text-[10px] text-[#FFAE43] bg-[#FDF6D8] px-2 py-0.5 rounded-full">• Pending</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-medium">208</span>
                                <span className="text-[10px] text-[#FF414B] bg-[#FFEDED] px-2 py-0.5 rounded-full">• Overdue</span>
                            </div>
                            <div className="text-[10px] text-[#969696] mt-2">Annual ▾</div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium">Messages</h3>
                            <button className="text-2xl text-black pb-2">...</button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: "Jane Cooper", img: "Jane" },
                                { name: "Kristin Watson", img: "Kristin" },
                                { name: "Jenny Wilson", img: "Jenny" },
                                { name: "Brooklyn Sim", img: "Brooklyn" },
                                { name: "Darrell Steward", img: "Darrell" }
                            ].map((u, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${u.img}`} alt={u.name} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[12px] font-normal">{u.name}</h4>
                                        <p className="text-[9px] text-gray-400">10:24 am</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
