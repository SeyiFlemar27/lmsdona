"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProfileSettingPage() {
    const router = useRouter();
    const [hasChanges, setHasChanges] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: string } | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const [formData, setFormData] = useState({
        firstName: "Mehrab",
        lastName: "Bozorgi",
        email: "Mehrabbozorgi.business@gmail.com",
        address: "33062 Zboncak isle",
        contactNumber: "58077.79",
        city: "Mehrab",
        state: "Bozorgi",
        password: "",
        confirmPassword: ""
    });

    const [initialData] = useState(formData);

    useEffect(() => {
        const changed = JSON.stringify(formData) !== JSON.stringify(initialData);
        setHasChanges(changed);
    }, [formData, initialData]);

    const showToast = (message: string, type: string = "success") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format";
        if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact number is required";

        if (formData.password && formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }
        if (formData.password && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
        if (errors[field]) {
            setErrors({ ...errors, [field]: "" });
        }
    };

    const handleSave = () => {
        if (!validateForm()) {
            showToast("Please fix the errors before saving", "error");
            return;
        }

        // Simulate API call
        showToast("Profile updated successfully", "success");
        setHasChanges(false);
    };

    const handleCancel = () => {
        if (hasChanges) {
            if (confirm("You have unsaved changes. Are you sure you want to cancel?")) {
                setFormData(initialData);
                setErrors({});
                setHasChanges(false);
            }
        } else {
            router.back();
        }
    };

    const getPasswordStrength = (password: string) => {
        if (!password) return { strength: 0, label: "", color: "" };
        if (password.length < 6) return { strength: 33, label: "Weak", color: "bg-red-500" };
        if (password.length < 10) return { strength: 66, label: "Medium", color: "bg-yellow-500" };
        return { strength: 100, label: "Strong", color: "bg-green-500" };
    };

    const passwordStrength = getPasswordStrength(formData.password);

    return (
        <div className="min-h-screen bg-white p-6 md:p-10 font-roboto">
            {/* Toast */}
            {toast && (
                <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-medium animate-slide-in ${toast.type === "success" ? "bg-green-500" : "bg-red-500"
                    }`}>
                    {toast.message}
                </div>
            )}

            {/* Header with Profile Picture */}
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-[32px] font-bold text-[#FDC832]">Profile Setting</h1>
                    <p className="text-[14px] text-[#9E9E9E] mt-1">Manage your account information</p>
                </div>
                <div className="relative group">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg cursor-pointer">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <button className="absolute bottom-0 right-0 p-2 bg-[#FDC832] rounded-full hover:bg-[#fdd45c] transition-colors shadow-lg">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Unsaved Changes Warning */}
            {hasChanges && (
                <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-[8px] flex items-center gap-3 animate-slide-up">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <span className="text-[14px] text-yellow-800">You have unsaved changes</span>
                </div>
            )}

            {/* Form */}
            <div className="max-w-3xl space-y-6">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[14px] font-semibold text-black">
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleChange("firstName", e.target.value)}
                            className={`w-full h-[56px] px-5 border rounded-[8px] text-[14px] focus:outline-none transition-colors ${errors.firstName ? "border-red-500" : "border-[#E0E0E0] focus:border-[#FDC832]"
                                }`}
                        />
                        {errors.firstName && <p className="text-red-500 text-[12px]">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-[14px] font-semibold text-black">
                            Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleChange("lastName", e.target.value)}
                            className={`w-full h-[56px] px-5 border rounded-[8px] text-[14px] focus:outline-none transition-colors ${errors.lastName ? "border-red-500" : "border-[#E0E0E0] focus:border-[#FDC832]"
                                }`}
                        />
                        {errors.lastName && <p className="text-red-500 text-[12px]">{errors.lastName}</p>}
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label className="text-[14px] font-semibold text-black">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className={`w-full h-[56px] px-5 pr-12 border rounded-[8px] text-[14px] focus:outline-none transition-colors ${errors.email ? "border-red-500" : "border-[#E0E0E0] focus:border-[#FDC832]"
                                }`}
                        />
                        {!errors.email && validateEmail(formData.email) && (
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                        )}
                    </div>
                    {errors.email && <p className="text-red-500 text-[12px]">{errors.email}</p>}
                </div>

                {/* Address */}
                <div className="space-y-2">
                    <label className="text-[14px] font-semibold text-black">Address</label>
                    <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        className="w-full h-[56px] px-5 border border-[#E0E0E0] rounded-[8px] text-[14px] focus:outline-none focus:border-[#FDC832] transition-colors"
                    />
                </div>

                {/* Contact Number */}
                <div className="space-y-2">
                    <label className="text-[14px] font-semibold text-black">
                        Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={formData.contactNumber}
                        onChange={(e) => handleChange("contactNumber", e.target.value)}
                        className={`w-full h-[56px] px-5 border rounded-[8px] text-[14px] focus:outline-none transition-colors ${errors.contactNumber ? "border-red-500" : "border-[#E0E0E0] focus:border-[#FDC832]"
                            }`}
                    />
                    {errors.contactNumber && <p className="text-red-500 text-[12px]">{errors.contactNumber}</p>}
                </div>

                {/* City and State */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[14px] font-semibold text-black">City</label>
                        <div className="relative">
                            <select
                                value={formData.city}
                                onChange={(e) => handleChange("city", e.target.value)}
                                className="w-full h-[56px] px-5 pr-12 border border-[#E0E0E0] rounded-[8px] text-[14px] bg-white focus:outline-none focus:border-[#FDC832] appearance-none cursor-pointer transition-colors"
                            >
                                <option>Mehrab</option>
                                <option>New York</option>
                                <option>Los Angeles</option>
                                <option>Chicago</option>
                            </select>
                            <svg className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[14px] font-semibold text-black">State</label>
                        <div className="relative">
                            <select
                                value={formData.state}
                                onChange={(e) => handleChange("state", e.target.value)}
                                className="w-full h-[56px] px-5 pr-12 border border-[#E0E0E0] rounded-[8px] text-[14px] bg-white focus:outline-none focus:border-[#FDC832] appearance-none cursor-pointer transition-colors"
                            >
                                <option>Bozorgi</option>
                                <option>California</option>
                                <option>Texas</option>
                                <option>Florida</option>
                            </select>
                            <svg className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Password Section */}
                <div className="pt-6 border-t border-[#E0E0E0]">
                    <h3 className="text-[18px] font-semibold text-black mb-4">Change Password</h3>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[14px] font-semibold text-black">New Password</label>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => handleChange("password", e.target.value)}
                                placeholder="Leave blank to keep current password"
                                className={`w-full h-[56px] px-5 border rounded-[8px] text-[14px] focus:outline-none transition-colors ${errors.password ? "border-red-500" : "border-[#E0E0E0] focus:border-[#FDC832]"
                                    }`}
                            />
                            {errors.password && <p className="text-red-500 text-[12px]">{errors.password}</p>}

                            {formData.password && (
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[12px]">
                                        <span className="text-[#9E9E9E]">Password Strength:</span>
                                        <span className={`font-medium ${passwordStrength.label === "Strong" ? "text-green-600" :
                                                passwordStrength.label === "Medium" ? "text-yellow-600" : "text-red-600"
                                            }`}>{passwordStrength.label}</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${passwordStrength.color} transition-all duration-300`}
                                            style={{ width: `${passwordStrength.strength}%` }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-[14px] font-semibold text-black">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => handleChange("confirmPassword", e.target.value)}
                                    placeholder="Confirm your new password"
                                    className={`w-full h-[56px] px-5 pr-12 border rounded-[8px] text-[14px] focus:outline-none transition-colors ${errors.confirmPassword ? "border-red-500" : "border-[#E0E0E0] focus:border-[#FDC832]"
                                        }`}
                                />
                                {formData.password && formData.confirmPassword && formData.password === formData.confirmPassword && (
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            {errors.confirmPassword && <p className="text-red-500 text-[12px]">{errors.confirmPassword}</p>}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6">
                    <button
                        onClick={handleCancel}
                        className="px-12 py-3 bg-white border-2 border-[#FDC832] text-[#FDC832] font-semibold rounded-full hover:bg-[#FFF9E6] transition-all text-[16px]"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!hasChanges}
                        className={`px-12 py-3 font-semibold rounded-full transition-all text-[16px] ${hasChanges
                                ? "bg-[#FDC832] text-black hover:bg-[#fdd45c] hover:scale-105"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
