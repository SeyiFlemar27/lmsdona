"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Signup() {
    const router = useRouter();
    const [userType, setUserType] = useState<"parent" | "teacher">("parent");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        // Redirect based on user type
        if (userType === "parent") {
            router.push("/parents/dashboard");
        } else {
            router.push("/teacher/dashboard");
        }
    };

    return (
        <div className="min-h-screen w-full flex bg-white font-[Roboto,sans-serif]">
            {/* Left Side - Form Area */}
            <div className="w-full lg:w-[720px] shrink-0 flex flex-col items-center justify-center relative bg-white z-10 p-8">
                {/* Content Container */}
                <div className="w-full max-w-[505px] flex flex-col gap-[32px]">

                    {/* Header Group */}
                    <div className="flex flex-col items-center gap-[16px]">
                        <div className="w-[96px] h-[96px] relative flex items-center justify-center">
                            <Image src="/images/logo.png" alt="Logo" width={96} height={96} className="object-contain" />
                        </div>
                        <div className="text-center flex flex-col items-center">
                            <h1 className="text-[32px] leading-[41px] font-semibold text-[#000000]">
                                Create Account 🎉
                            </h1>
                            <p className="text-[#8692A6] text-[16px] leading-[25px] tracking-[0.005em]">
                                Join our learning community today
                            </p>
                        </div>
                    </div>

                    {/* User Type Selection */}
                    <div className="flex flex-col gap-[12px]">
                        <label className="text-[16px] font-medium text-[#9794AA]">I am a</label>
                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setUserType("parent")}
                                className={`flex-1 h-[56px] rounded-[6px] border-2 font-semibold text-[16px] transition-all ${userType === "parent"
                                    ? "border-[#FDC832] bg-[#FDC832] text-black"
                                    : "border-[#DBDBDB] bg-white text-[#9794AA] hover:border-[#FDC832]"
                                    }`}
                            >
                                👨‍👩‍👧 Parent
                            </button>
                            <button
                                type="button"
                                onClick={() => setUserType("teacher")}
                                className={`flex-1 h-[56px] rounded-[6px] border-2 font-semibold text-[16px] transition-all ${userType === "teacher"
                                    ? "border-[#FDC832] bg-[#FDC832] text-black"
                                    : "border-[#DBDBDB] bg-white text-[#9794AA] hover:border-[#FDC832]"
                                    }`}
                            >
                                👨‍🏫 Teacher
                            </button>
                        </div>
                    </div>

                    {/* Signup Form */}
                    <form onSubmit={handleSignup} className="flex flex-col gap-[50px] w-full">

                        {/* Input Fields */}
                        <div className="flex flex-col gap-[20px] w-full">
                            {/* Full Name */}
                            <div className="flex flex-col gap-[8px]">
                                <label htmlFor="fullName" className="text-[16px] font-medium text-[#9794AA]">Full Name</label>
                                <div className="h-[56px] border border-[#9794AA] rounded-[6px] px-[20px] flex items-center">
                                    <input
                                        id="fullName"
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="bg-transparent w-full h-full outline-none text-[16px] text-[#9794AA] placeholder-[#9794AA] font-semibold"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className="flex flex-col gap-[8px]">
                                <label htmlFor="email" className="text-[16px] font-medium text-[#9794AA]">Email Address</label>
                                <div className="h-[56px] border border-[#9794AA] rounded-[6px] px-[20px] flex items-center">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-transparent w-full h-full outline-none text-[16px] text-[#9794AA] placeholder-[#9794AA] font-semibold"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-[8px]">
                                <label htmlFor="password" className="text-[16px] font-medium text-[#9794AA]">Password</label>
                                <div className="h-[56px] bg-[#F5F6F7] border border-[#DBDBDB] rounded-[6px] px-[20px] flex items-center justify-between">
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Create a password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-transparent w-full h-full outline-none text-[16px] text-[#757575] placeholder-[#757575] font-medium"
                                        required
                                    />
                                    <button type="button" className="text-[#9794AA] hover:text-black">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div className="flex flex-col gap-[8px]">
                                <label htmlFor="confirmPassword" className="text-[16px] font-medium text-[#9794AA]">Confirm Password</label>
                                <div className="h-[56px] bg-[#F5F6F7] border border-[#DBDBDB] rounded-[6px] px-[20px] flex items-center justify-between">
                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Confirm your password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="bg-transparent w-full h-full outline-none text-[16px] text-[#757575] placeholder-[#757575] font-medium"
                                        required
                                    />
                                    <button type="button" className="text-[#9794AA] hover:text-black">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Terms & Conditions */}
                            <label className="flex items-start gap-[8px] cursor-pointer">
                                <input type="checkbox" className="w-[18px] h-[18px] mt-1 accent-[#FDC832]" required />
                                <span className="text-[14px] text-[#9794AA]">
                                    I agree to the{" "}
                                    <Link href="#" className="text-[#FDC832] hover:underline font-medium">
                                        Terms & Conditions
                                    </Link>
                                    {" "}and{" "}
                                    <Link href="#" className="text-[#FDC832] hover:underline font-medium">
                                        Privacy Policy
                                    </Link>
                                </span>
                            </label>
                        </div>

                        {/* Signup Button */}
                        <button
                            type="submit"
                            className="w-full h-[56px] bg-[#FDC832] hover:bg-[#fdd45c] text-black font-bold text-[16px] rounded-[6px] transition-all shadow-sm hover:shadow-md"
                        >
                            Sign up as {userType === "parent" ? "Parent" : "Teacher"}
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="text-center">
                        <p className="text-[14px] text-[#9794AA]">
                            Already have an account?{" "}
                            <Link href="/login" className="text-[#FDC832] hover:underline font-semibold">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#FFF9E6] to-[#FFF0CC] items-center justify-center p-12 relative overflow-hidden">
                <div className="relative z-10 max-w-2xl w-full">
                    <Image
                        src="/images/signup_illustration.png"
                        alt="Signup Illustration"
                        width={600}
                        height={600}
                        className="object-contain w-full h-auto"
                    />
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-[#FDC832]/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#FDC832]/10 rounded-full blur-2xl"></div>
            </div>
        </div>
    );
}
