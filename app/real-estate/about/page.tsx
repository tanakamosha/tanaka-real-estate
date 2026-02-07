import React from 'react';

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen pt-20">
            <div className="bg-gray-900 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">私たちについて</h1>
                    <p className="text-gray-400">ファルコン不動産の想いとチームをご紹介します。</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
                            alt="Office"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
                            住まいを通じて、<br />人生を豊かにする。
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#FF6B00]"></span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            私たち田中不動産は、単に物件を紹介するだけではありません。お客様一人ひとりのライフスタイルや将来の夢に寄り添い、最適な「暮らし」をご提案することを使命としています。
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            長年の経験と実績、そして地域に根ざしたネットワークを活かし、安心・安全なお取引をお約束します。初めてのマイホーム購入から、大切な資産の売却・運用まで、不動産に関することなら何でもご相談ください。
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-4">会社概要</h3>
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                            <div className="border-b border-gray-100 pb-2">
                                <dt className="text-gray-500 mb-1">社名</dt>
                                <dd className="font-bold text-gray-900">株式会社田中不動産</dd>
                            </div>
                            <div className="border-b border-gray-100 pb-2">
                                <dt className="text-gray-500 mb-1">設立</dt>
                                <dd className="font-bold text-gray-900">2005年4月</dd>
                            </div>
                            <div className="border-b border-gray-100 pb-2">
                                <dt className="text-gray-500 mb-1">代表者</dt>
                                <dd className="font-bold text-gray-900">代表取締役　大山 恵子</dd>
                            </div>
                            <div className="border-b border-gray-100 pb-2">
                                <dt className="text-gray-500 mb-1">所在地</dt>
                                <dd className="font-bold text-gray-900">東京都港区南青山1-1-1</dd>
                            </div>
                            <div className="border-b border-gray-100 pb-2">
                                <dt className="text-gray-500 mb-1">免許番号</dt>
                                <dd className="font-bold text-gray-900">東京都知事 (4) 第12345号</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
