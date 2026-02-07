"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RealEstateHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Check if we are on the main landing page
    const isHomePage = pathname === '/real-estate';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Determine header style state
    const useSolidHeader = !isHomePage || isScrolled || isMenuOpen;

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${useSolidHeader
                ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
                : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="/real-estate" className="flex items-center gap-3 group z-50 relative">
                    <img
                        src="/images/logo-header.png"
                        alt="田中不動産"
                        className={`h-10 w-auto object-contain transition-all duration-300 ${!useSolidHeader ? "brightness-0 invert" : ""}`}
                    />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex items-center gap-8">
                        {['物件を探す', '私たちについて', 'お客様の声'].map((item, i) => {
                            const links = ['/real-estate/properties', '/real-estate/about', '/real-estate#testimonials'];
                            return (
                                <a
                                    key={i}
                                    href={links[i]}
                                    className={`text-sm font-medium transition-colors ${useSolidHeader
                                        ? "text-gray-600 hover:text-[#FF6B00]"
                                        : "text-white/90 hover:text-white"
                                        }`}
                                >
                                    {item}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                        <a
                            href="#"
                            className="flex items-center gap-2 px-4 py-2 bg-[#06C755] text-white text-sm font-bold rounded-full hover:bg-[#05b34c] transition-colors shadow-lg shadow-green-500/20"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.4.5.5 4.8.5 10.3c0 3.2 1.8 6 4.6 7.9-.2.8-1.5 3-1.6 3.3-.1.2-.1.5.2.6.1 0 .2.1.3.1.2 0 1.9-1.3 4.2-2.5.5.1 1.1.2 1.7.2 6.6 0 11.5-4.4 11.5-9.8S17.6.5 12 .5z" /></svg>
                            LINEで相談
                        </a>

                        <a
                            href="/real-estate/contact"
                            className={`px-6 py-2 bg-[#FF6B00] text-white text-sm font-bold rounded-full hover:bg-[#e56000] transition-colors shadow-lg shadow-orange-500/20`}
                        >
                            お問い合わせ
                        </a>
                    </div>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden z-50 p-2 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                        <span className={`block w-full h-0.5 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2 bg-gray-900" : useSolidHeader ? "bg-gray-900" : "bg-white"}`}></span>
                        <span className={`block w-full h-0.5 transition-all duration-300 ${isMenuOpen ? "opacity-0" : useSolidHeader ? "bg-gray-900" : "bg-white"}`}></span>
                        <span className={`block w-full h-0.5 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2 bg-gray-900" : useSolidHeader ? "bg-gray-900" : "bg-white"}`}></span>
                    </div>
                </button>

                {/* Mobile Overlay Menu */}
                <div className={`fixed top-0 left-0 w-full h-[100dvh] bg-slate-950 z-[100] flex flex-col justify-center items-center transition-all duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    <nav className="flex flex-col items-center gap-8 w-full px-6">
                        {[
                            { label: 'ホーム', href: '/real-estate' },
                            { label: '物件一覧', href: '/real-estate/properties' },
                            { label: '会社概要', href: '/real-estate/about' },
                            { label: 'サイトマップ', href: '/real-estate/sitemap-page' },
                            { label: 'LINEで相談', href: '#' },
                            { label: 'お問い合わせ', href: '/real-estate/contact' },
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-xl font-bold text-white hover:text-[#FF6B00] transition-colors tracking-wide"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Close Button */}
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
