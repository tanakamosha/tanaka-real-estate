"use client";

import React, { useEffect, useState, useRef } from 'react';

const stats = [
    { value: 20, label: "長年にわたる経験", suffix: "" },
    { value: 3600, label: "売却物件数", suffix: "" },
    { value: 4, label: "専用エージェント数", suffix: "" },
    { value: 132, label: "2025年販売数", suffix: "" },
];

function Counter({ end, label, isVisible }: { end: number, label: string, isVisible: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
        <div className="relative z-10">
            <div className="text-5xl md:text-7xl font-bold text-[#FF6B00] mb-2 font-mono tracking-tighter drop-shadow-md">
                {count}
            </div>
            <div className="text-gray-200 font-medium text-sm md:text-base tracking-wider">
                {label}
            </div>
        </div>
    );
}

export default function StatisticsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.1 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-32 relative overflow-hidden bg-fixed bg-center bg-cover"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')" // High-rise buildings
            }}
        >
            {/* Dark Overlay for Contrast */}
            <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply z-0"></div>

            {/* Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 z-0"></div>

            {/* Rising Light Particles */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-orange-500 rounded-full mix-blend-screen filter blur-[60px] animate-flow-up opacity-0"></div>
                <div className="absolute bottom-0 left-3/4 w-24 h-24 bg-yellow-500 rounded-full mix-blend-screen filter blur-[50px] animate-flow-up animation-delay-2000 opacity-0"></div>
                <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-white rounded-full mix-blend-overlay filter blur-[40px] animate-flow-up animation-delay-4000 opacity-0"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">数字で見る実績</h2>
                    <p className="text-gray-400 text-sm">信頼の証としてのこれまでの歩み</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <Counter key={index} end={stat.value} label={stat.label} isVisible={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
}
