// Confirmation Modal Component
"use client";

import { ReactNode } from "react";

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    type?: "danger" | "warning" | "info";
}

export default function ConfirmModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    type = "info"
}: ConfirmModalProps) {
    if (!isOpen) return null;

    const getButtonColor = () => {
        switch (type) {
            case "danger":
                return "bg-red-500 hover:bg-red-600";
            case "warning":
                return "bg-yellow-500 hover:bg-yellow-600";
            default:
                return "bg-[#FDC832] hover:bg-[#fdd45c]";
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
            <div className="bg-white rounded-[16px] p-8 max-w-md w-full mx-4 shadow-2xl animate-scale-in">
                <h3 className="text-[20px] font-bold text-black mb-3">{title}</h3>
                <p className="text-[14px] text-[#9E9E9E] mb-6">{message}</p>
                <div className="flex gap-3 justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 bg-white border border-[#E0E0E0] text-black font-medium rounded-[8px] hover:bg-gray-50 transition-colors"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                        className={`px-6 py-2.5 text-white font-medium rounded-[8px] transition-colors ${getButtonColor()}`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
}
