import React from 'react';
import type { Metadata } from "next";
import RealEstateHeader from './_components/RealEstateHeader';

export const metadata: Metadata = {
    title: "田中不動産 | あなたの夢を叶える住まい探し",
    description: "地域密着で信頼と実績の田中不動産。AIを活用した迅速な対応で、あなたに最適な物件をご提案します。",
};

export default function RealEstateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="font-sans text-gray-800 flex flex-col min-h-screen">
            {/* Client Header */}
            <RealEstateHeader />

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Shared Pre-Footer (Contact CTA) */}
            <div className="relative bg-gray-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2670&auto=format&fit=crop"
                        alt="House Exterior"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">お気軽にご連絡ください</h2>
                        <p className="text-gray-400 max-w-md">
                            物件の見学予約、査定依頼、その他ご質問など、どのようなことでもお気軽にお問い合わせください。
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">お電話でのお問い合わせ</p>
                                <p className="text-2xl font-bold">01-2345-6789</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">メールでのお問い合わせ</p>
                                <p className="text-xl font-bold">hello@subarashiisato.co.jp</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((sns, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                                    <span className="sr-only">{sns}</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 9h-2v-5c0-.55-.45-1-1-1s-1 .45-1 1v5h-2V8h2v1.1c.45-.65 1.2-1.1 2-1.1 1.65 0 3 1.35 3 3v5z" /></svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Global Footer - Dark Navy Background */}
            <footer className="bg-slate-900 text-gray-400 py-12 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column: Brand */}
                    <div>
                        <div className="mb-6">
                            <img src="/images/logo-footer.png" alt="田中不動産" className="h-20 w-auto" />
                        </div>
                        <p className="mb-6 leading-relaxed max-w-sm text-sm">
                            お客様一人ひとりのライフスタイルに合わせた最適な住まいをご提案します。<br />
                            信頼と実績のパートナーとして、あなたの夢の実現をサポートいたします。
                        </p>
                    </div>

                    {/* Right Column: Quick Links */}
                    <div className="flex flex-col md:items-end justify-center">
                        <h3 className="text-white font-bold mb-4">クイックリンク</h3>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                            <a href="/real-estate/about" className="hover:text-[#FF6B00] transition-colors text-sm">会社概要</a>
                            <a href="/real-estate/privacy" className="hover:text-[#FF6B00] transition-colors text-sm">プライバシーポリシー</a>
                            <a href="/real-estate/sitemap-page" className="hover:text-[#FF6B00] transition-colors text-sm">サイトマップ</a>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center">
                    <p className="text-xs text-gray-500">© 2026 Tanaka Real Estate. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
