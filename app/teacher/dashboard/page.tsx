"use client";

import Image from "next/image";

export default function TeacherDashboard() {
    return (
        <div className="flex flex-col xl:flex-row gap-6 pb-10 font-roboto text-black animate-fade-in p-6 md:p-10">

            {/* ---------------- LEFT SECTION (approx 63%) ---------------- */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">

                {/* 1. Welcome Banner */}
                <div className="bg-white border border-[#DBDBDB] rounded-[20px] p-8 relative overflow-hidden flex flex-col justify-center min-h-[200px]">
                    <div className="z-10 space-y-4 max-w-lg">
                        <h1 className="text-[24px] md:text-[32px] font-medium text-black leading-tight">Welcome, Mehrab!</h1>
                        <p className="text-[#8F8F8F] text-[13px] font-light leading-[1.4]">
                            Manage your school operations with ease. Stay updated on academics, attendance, finances, and more—all in one place. Let's keep shaping a brighter future together!
                        </p>
                        <div className="bg-[#05D227]/10 w-fit px-4 py-1.5 rounded-full flex items-center gap-2">
                            <span className="text-[#05D227] text-[13px] font-normal">Approved</span>
                        </div>
                    </div>
                    {/* Illustration Placeholder */}
                    <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 w-[240px] h-[180px]">
                        <img src="/images/illustration-girl.png" alt="Welcome" className="w-full h-full object-contain opacity-80 mix-blend-multiply" />
                    </div>
                </div>

                {/* 2. Your Children (Pies) & Notice Board */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Students - Pie Charts */}
                    <div className="bg-white border border-[#DBDBDB] rounded-[20px] p-6 h-[230px] flex flex-col relative text-black">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-base md:text-lg font-medium text-black">Students</h3>
                            <button className="text-2xl text-black pb-2">...</button>
                        </div>
                        <div className="flex-1 flex items-center justify-center gap-6">
                            {/* Boy Chart */}
                            <div className="relative w-28 h-28 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="56" cy="56" r="46" stroke="#EDEDED" strokeWidth="8" fill="none" />
                                    <circle cx="56" cy="56" r="46" stroke="#CFCEFF" strokeWidth="8" fill="none" strokeDasharray="289" strokeDashoffset="135" strokeLinecap="round" />
                                </svg>
                                <span className="absolute text-[24px] font-semibold text-black">53<span className="text-sm">%</span></span>
                                <span className="absolute -bottom-6 text-xs text-[#969696] font-medium">Boys</span>
                            </div>
                            {/* Girl Chart */}
                            <div className="relative w-28 h-28 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="56" cy="56" r="46" stroke="#EDEDED" strokeWidth="8" fill="none" />
                                    <circle cx="56" cy="56" r="46" stroke="#FFED9F" strokeWidth="8" fill="none" strokeDasharray="289" strokeDashoffset="153" strokeLinecap="round" />
                                </svg>
                                <span className="absolute text-[24px] font-semibold text-black">47<span className="text-sm">%</span></span>
                                <span className="absolute -bottom-6 text-xs text-[#969696] font-medium">Girls</span>
                            </div>
                        </div>
                    </div>

                    {/* Notice Board */}
                    <div className="bg-white border border-[#DBDBDB] rounded-[20px] p-6 h-[230px] flex flex-col text-black">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-base md:text-lg font-medium text-black">Notice Board</h3>
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
                                    📢
                                </div>
                                <div>
                                    <h4 className="text-[12px] font-normal text-black">Summer Break Start Date</h4>
                                    <p className="text-[8px] text-[#969696] leading-tight mt-1">Summer break begins on May 25, 2024. Have a wonderful holiday!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Notifications & Activity Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Notifications */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-base md:text-lg font-bold text-black">Notifications</h3>
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

                    {/* Earnings Graph */}
                    <div className="md:col-span-1 bg-white border border-[#DBDBDB] rounded-[20px] p-6 min-h-[350px] flex flex-col text-black">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-black">Earnings</h3>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#A0D7E7]"></div>
                                    <span className="text-[10px] text-[#969696]">Income</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#E2D4F5]"></div>
                                    <span className="text-[10px] text-[#969696]">Expense</span>
                                </div>
                                <button className="text-xl text-black pb-2 ml-2">...</button>
                            </div>
                        </div>

                        <div className="flex-1 relative w-full h-[250px]">
                            {/* Y-Axis Labels */}
                            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-[#969696] h-full">
                                <span>1000K</span>
                                <span>750K</span>
                                <span>500K</span>
                                <span>250K</span>
                                <span>0</span>
                            </div>

                            {/* Chart Area */}
                            <div className="absolute left-10 right-0 top-2 bottom-6">
                                <svg className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
                                    {/* Grid Lines */}
                                    <line x1="0" y1="150" x2="300" y2="150" stroke="#f0f0f0" strokeWidth="1" />

                                    {/* Income Line (Cyan) */}
                                    <path
                                        d="M0,75 C20,60 40,30 60,30 C80,30 100,50 120,60 C140,70 160,50 180,40 C200,30 220,10 240,10 C260,10 280,40 300,20"
                                        fill="none"
                                        stroke="#CCF0FA"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        className="drop-shadow-sm"
                                    />

                                    {/* Expense Line (Purple) */}
                                    <path
                                        d="M0,100 C30,90 50,70 80,90 C110,110 140,80 170,90 C200,100 230,80 260,90 C280,95 290,60 300,50"
                                        fill="none"
                                        stroke="#F0E8FA"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        className="drop-shadow-sm"
                                    />

                                    {/* Tooltip Point Example */}
                                    <circle cx="180" cy="40" r="3" fill="#A0D7E7" />
                                    <circle cx="260" cy="90" r="3" fill="#E2D4F5" />
                                </svg>

                                {/* Tooltip Overlay (Static for design match) */}
                                <div className="absolute top-[20%] right-[35%] bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-gray-50 text-[8px]">
                                    <div className="flex items-center gap-1 mb-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#A0D7E7]"></div>
                                        <span>$837,000</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#E2D4F5]"></div>
                                        <span>$500,000</span>
                                    </div>
                                </div>
                            </div>

                            {/* X-Axis Labels */}
                            <div className="absolute left-10 right-0 bottom-0 flex justify-between text-[10px] text-[#525252] font-medium pt-2">
                                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                                <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* ---------------- RIGHT SECTION (approx 37%) ---------------- */}
            <div className="w-full xl:w-[420px] flex flex-col gap-6 shrink-0">

                {/* 1. Stats & Calendar Row */}
                <div className="grid grid-cols-[140px_1fr] gap-6">

                    {/* Stats Stack */}
                    <div className="flex flex-col gap-4 text-black">
                        {/* Courses */}
                        <div className="bg-[#F8E38D] rounded-2xl p-4 h-[90px] relative flex flex-col justify-center">
                            <span className="text-[28px] font-medium ml-2 text-black">5</span>
                            <span className="text-[12px] font-light ml-2 text-black">Courses</span>
                            <button className="absolute top-3 right-3 text-black opacity-50 text-xl">...</button>
                        </div>
                        {/* Students */}
                        <div className="bg-[#E2D8FC] rounded-2xl p-4 h-[90px] relative flex flex-col justify-center">
                            <span className="text-[28px] font-medium ml-2 text-black">42</span>
                            <span className="text-[12px] font-light ml-2 text-black">Students</span>
                            <button className="absolute top-3 right-3 text-black opacity-50 text-xl">...</button>
                        </div>
                        {/* Classes */}
                        <div className="bg-[#F8E38D] rounded-2xl p-4 h-[90px] relative flex flex-col justify-center">
                            <span className="text-[28px] font-medium ml-2 text-black">12</span>
                            <span className="text-[12px] font-light ml-2 text-black">Classes</span>
                            <button className="absolute top-3 right-3 text-black opacity-50 text-xl">...</button>
                        </div>
                    </div>

                    {/* Calendar */}
                    <div className="bg-white border border-[#DBDBDB] rounded-[20px] p-4 flex flex-col h-[300px] text-black">
                        <div className="flex items-center justify-between mb-4 px-2">
                            <button className="text-[#B5BEC6] text-xs">‹</button>
                            <span className="text-[12px] font-semibold text-[#4A5660]">January 2026</span>
                            <button className="text-[#B5BEC6] text-xs">›</button>
                        </div>
                        <div className="grid grid-cols-7 gap-y-4 text-center text-[9px] font-bold text-[#B5BEC6] mb-2">
                            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                        </div>
                        <div className="grid grid-cols-7 gap-y-3 text-center text-[11px] font-semibold text-[#4A5660] flex-1">
                            <span className="opacity-0">29</span><span className="opacity-0">30</span>
                            <span>1</span><span>2</span><span>3</span><span className="bg-[#FDC832] text-black rounded-full w-5 h-5 flex items-center justify-center mx-auto shadow-sm text-[10px]">4</span><span>5</span>
                            <span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span>
                            <span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span>
                            <span>19</span>
                            <span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span>
                            <span>27</span><span>28</span><span>29</span><span>30</span><span>31</span>
                        </div>
                        <div className="mt-2 text-center text-[10px] text-[#969696]">Manage Calendar</div>
                    </div>
                </div>

                {/* 2. Expenses (Wide) */}
                <div className="bg-white border border-[#DBDBDB] rounded-[20px] p-6 min-h-[140px] text-black">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-black">Expenses</h3>
                        <div className="flex gap-2 text-[10px] text-[#969696]">
                            <span>2025-2026</span>
                            <span className="text-black">Annual ▼</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1 bg-[#C3EBFA] rounded-xl p-3 relative h-[86px] flex flex-col justify-center">
                            <div className="absolute top-2 right-2 bg-white rounded-sm px-1.5 py-0.5 text-[8px] font-bold text-[#00997E]">↗ 12%</div>
                            <div className="text-[20px] font-medium leading-tight text-black">₹2.5L</div>
                            <div className="text-[10px] mt-0.5 text-black">Total Income</div>
                        </div>
                        <div className="flex-1 bg-[#C3EBFA] rounded-xl p-3 relative h-[86px] flex flex-col justify-center">
                            <div className="absolute top-2 right-2 bg-white rounded-sm px-1.5 py-0.5 text-[8px] font-bold text-[#00997E]">↗ 0.5%</div>
                            <div className="text-[20px] font-medium leading-tight text-black">₹22k</div>
                            <div className="text-[10px] mt-0.5 text-black">Total Expenses</div>
                        </div>
                    </div>
                </div>

                {/* 3. Fee Status & Messages Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-black">
                    {/* Fee Status */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-black">Fee Status</h3>
                            <button className="text-2xl text-black pb-2">...</button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-medium text-black">135</span>
                                <span className="text-[10px] text-[#05D227] bg-[#EFFFF1] px-2 py-0.5 rounded-full">• Paid</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-medium text-black">36</span>
                                <span className="text-[10px] text-[#FFAE43] bg-[#FDF6D8] px-2 py-0.5 rounded-full">• Pending</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-medium text-black">8</span>
                                <span className="text-[10px] text-[#FF414B] bg-[#FFEDED] px-2 py-0.5 rounded-full">• Overdue</span>
                            </div>
                            <div className="text-[10px] text-[#969696] mt-2">Annual ▾</div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-black">Messages</h3>
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
                                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-100">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${u.img}`} alt={u.name} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[12px] font-normal text-black">{u.name}</h4>
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
