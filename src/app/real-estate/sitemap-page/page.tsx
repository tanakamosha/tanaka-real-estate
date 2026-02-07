import React from 'react';

export default function SitemapPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">サイトマップ</h1>
                <p className="text-gray-500 mb-8">各ページへのリンク一覧です。</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-2 h-6 bg-[#FF6B00]"></span>
                            メインメニュー
                        </h2>
                        <ul className="space-y-4 pl-4">
                            <li>
                                <a href="/real-estate" className="text-gray-700 hover:text-[#FF6B00] transition-colors font-bold text-lg block border-b border-gray-100 pb-2">トップページ</a>
                            </li>
                            <li>
                                <a href="/real-estate/properties" className="text-gray-700 hover:text-[#FF6B00] transition-colors font-bold text-lg block border-b border-gray-100 pb-2">物件を探す</a>
                            </li>
                            <li>
                                <a href="/real-estate/about" className="text-gray-700 hover:text-[#FF6B00] transition-colors font-bold text-lg block border-b border-gray-100 pb-2">私たちについて</a>
                            </li>
                            <li>
                                <a href="/real-estate/contact" className="text-gray-700 hover:text-[#FF6B00] transition-colors font-bold text-lg block border-b border-gray-100 pb-2">お問い合わせ</a>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-2 h-6 bg-gray-400"></span>
                            情報・その他
                        </h2>
                        <ul className="space-y-4 pl-4">
                            <li>
                                <a href="/real-estate/privacy" className="text-gray-700 hover:text-[#FF6B00] transition-colors block border-b border-gray-100 pb-2">プライバシーポリシー</a>
                            </li>
                            <li>
                                <a href="/real-estate/sitemap-page" className="text-gray-700 hover:text-[#FF6B00] transition-colors block border-b border-gray-100 pb-2">サイトマップ</a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
