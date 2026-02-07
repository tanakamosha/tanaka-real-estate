import React from 'react';

export default function PortfolioLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold">P</div>
                        <span className="font-semibold text-gray-900 tracking-tight">Portfolio</span>
                    </div>
                    <nav className="flex items-center gap-6">
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">作品</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">私について</a>
                        <a href="#" className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">お問い合わせ</a>
                    </nav>
                </div>
            </header>

            <main className="flex-grow pt-24 px-6 max-w-7xl mx-auto w-full">
                {children}
            </main>

            <footer className="border-t border-gray-200 bg-white py-12 mt-20">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-gray-500">© 2026 My Portfolio. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Instagram</a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </>
    );
}
