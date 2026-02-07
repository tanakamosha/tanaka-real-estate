import React from 'react';
import HeroSlider from './_components/HeroSlider';
import StatisticsSection from './_components/StatisticsSection';

export default function RealEstatePage() {
    return (
        <>
            {/* 2. Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Slider */}
                <HeroSlider />

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
                        あなたの夢の住まい探しの<br />お手伝いをさせてください！
                    </h1>
                    <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
                        信頼と実績の田中不動産が、あなたに最適な暮らしをご提案します。
                    </p>
                    <a href="/real-estate/contact" className="px-10 py-4 bg-[#FF6B00] text-white text-lg font-bold rounded-full hover:bg-[#e56000] transition-all transform hover:scale-105 shadow-xl shadow-orange-500/30 inline-block">
                        お問い合わせ
                    </a>
                </div>
            </section>

            {/* 3. Team Section (Black Background) */}
            <section className="py-24 bg-black text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="w-1 h-10 bg-[#FF6B00]"></div>
                        <h2 className="text-3xl font-bold">チームの紹介</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "大山 恵子", role: "代表取締役", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop" },
                            { name: "小山田 圭一", role: "不動産鑑定士", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop" },
                            { name: "佐藤 建", role: "シニアエージェント", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop" },
                            { name: "鈴木 美咲", role: "インテリアコーディネーター", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop" },
                        ].map((member, index) => (
                            <div key={index} className="group relative">
                                <div className="aspect-[3/4] overflow-hidden bg-gray-900 mb-4">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <div className="border-l-4 border-[#FF6B00] pl-4">
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-sm text-gray-400">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Featured Properties (White Background) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="w-1 h-10 bg-[#FF6B00]"></div>
                        <h2 className="text-3xl font-bold text-gray-900">注目の物件リスト</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "南町店マンション", location: "東京都港区南町", layout: "2LDK / 65m²", price: "8,500万円", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop" },
                            { title: "北山町一戸建て", location: "京都府京都市北山", layout: "4LDK / 120m²", price: "6,200万円", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000&auto=format&fit=crop" },
                            { title: "南野公園町一戸建て", location: "大阪府吹田市南野", layout: "3LDK / 98m²", price: "5,400万円", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop" },
                        ].map((item, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6 relative">
                                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 text-xs font-bold z-10">NEW</div>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#FF6B00] transition-colors">{item.title}</h3>
                                <p className="text-gray-500 mb-4 flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    {item.location}
                                </p>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                    <span className="font-bold text-gray-900 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                        {item.layout}
                                    </span>
                                    <span className="text-[#FF6B00] font-bold text-lg">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* NEW: View All Button */}
                    <div className="mt-12 text-center">
                        <a
                            href="/real-estate/properties"
                            className="inline-block px-12 py-4 border-2 border-[#FF6B00] text-[#FF6B00] font-bold rounded-full hover:bg-[#FF6B00] hover:text-white transition-all transform hover:scale-105"
                        >
                            すべての物件を探す
                        </a>
                    </div>
                </div>
            </section>

            {/* 5. Statistics (Dynamic Background) */}
            <StatisticsSection />

            {/* 6. Testimonials */}
            <section id="testimonials" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">お客様の声</h2>
                        <p className="text-gray-500">実際に田中不動産をご利用いただいた皆様の感想です</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "田中 健太 様", comment: "初めての購入で不安でしたが、親身に相談に乗っていただき、理想の家が見つかりました！手続きもスムーズで助かりました。", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2000&auto=format&fit=crop" },
                            { name: "山本 さくら 様", comment: "売却をお願いしましたが、予想以上の価格で売れて驚きました。プロフェッショナルな対応に感謝しています。", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2000&auto=format&fit=crop" },
                            { name: "高橋 誠 様", comment: "地域に詳しく、隠れた好物件を紹介してくれました。家族全員が大満足の住まいです。友人にも紹介したいです。", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop" },
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-2xl relative">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md absolute -top-8 left-8">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="mt-8">
                                    <p className="text-gray-600 mb-6 italic leading-relaxed">
                                        &quot;{item.comment}&quot;
                                    </p>
                                    <p className="font-bold text-gray-900">{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
