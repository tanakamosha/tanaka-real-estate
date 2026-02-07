import React from 'react';

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen pt-20">
            <div className="bg-gray-900 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">お問い合わせ</h1>
                    <p className="text-gray-400">物件に関するご質問やご相談など、お気軽にお問い合わせください。</p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-24">
                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">お名前 <span className="text-red-500">*</span></label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] outline-none" placeholder="山田 太郎" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">フリガナ <span className="text-red-500">*</span></label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] outline-none" placeholder="ヤマダ タロウ" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] outline-none" placeholder="example@email.com" />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">お問い合わせ種別</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] outline-none bg-white">
                            <option>物件について</option>
                            <option>売却査定について</option>
                            <option>内覧予約</option>
                            <option>その他</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
                        <textarea rows={6} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] outline-none" placeholder="ご質問内容をご記入ください"></textarea>
                    </div>

                    <div className="flex items-center gap-2 pt-4">
                        <input type="checkbox" id="privacy" className="w-5 h-5 text-[#FF6B00] border-gray-300 rounded focus:ring-[#FF6B00]" required />
                        <label htmlFor="privacy" className="text-sm text-gray-600">
                            <a href="/real-estate/privacy" className="text-[#FF6B00] hover:underline" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>
                            に同意する
                        </label>
                    </div>

                    <div className="text-center pt-8">
                        <button type="submit" className="px-12 py-4 bg-[#FF6B00] text-white font-bold rounded-full hover:bg-[#e56000] transition-colors shadow-lg shadow-orange-500/30">
                            送信する
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
