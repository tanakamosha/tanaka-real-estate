"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function DigitalGuides() {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4 pointer-events-none">
            {/* Speech Bubbles Container */}
            <div className="flex flex-col items-end gap-2 pr-4 pointer-events-auto">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tr-none shadow-lg border border-gray-100 max-w-[240px] animate-fade-in-up">
                    <p className="text-sm text-gray-800 font-bold">
                        <span className="text-[#3EA222]">ずんだもん:</span> 物件探しのお手伝いをするのだ！
                    </p>
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-br-none shadow-lg border border-gray-100 max-w-[240px] animate-fade-in-up delay-100">
                    <p className="text-sm text-gray-800 font-bold">
                        <span className="text-[#6D3457]">めたん:</span> お気軽にご相談くださいね
                    </p>
                </div>
            </div>

            {/* Characters Container */}
            <div className="flex items-end gap-[-10px] pointer-events-auto relative">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors z-50 text-gray-500"
                    aria-label="Close"
                >
                    ×
                </button>

                {/* Metan Placeholder (Purple) */}
                <div className="w-16 h-16 rounded-full bg-[#E5D1E8] border-4 border-white shadow-lg overflow-hidden relative transform translate-x-4 z-10 hover:scale-110 transition-transform cursor-pointer">
                    <div className="relative w-full h-full">
                        <Image
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                            alt="Guide Metan"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-[#6D3457]/20"></div>
                </div>

                {/* Zundamon Placeholder (Green) */}
                <div className="w-20 h-20 rounded-full bg-[#D1E8D5] border-4 border-white shadow-xl overflow-hidden relative z-20 hover:scale-110 transition-transform cursor-pointer">
                    <div className="relative w-full h-full">
                        <Image
                            src="https://images.unsplash.com/photo-1542596768-5d1d21f1cf72?q=80&w=200&auto=format&fit=crop"
                            alt="Guide Zundamon"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-[#3EA222]/20"></div>
                </div>
            </div>
        </div>
    );
}
