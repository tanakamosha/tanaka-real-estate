import React from 'react';
import Image from 'next/image';

export default function PropertiesPage() {
    const properties = [
        { title: "南町店マンション", location: "東京都港区南町", layout: "2LDK / 65m²", price: "8,500万円", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop", type: "マンション" },
        { title: "北山町一戸建て", location: "京都府京都市北山", layout: "4LDK / 120m²", price: "6,200万円", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000&auto=format&fit=crop", type: "一戸建て" },
        { title: "南野公園町一戸建て", location: "大阪府吹田市南野", layout: "3LDK / 98m²", price: "5,400万円", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop", type: "一戸建て" },
        { title: "海沿いの別荘", location: "神奈川県鎌倉市", layout: "3LDK / 110m²", price: "1億2,000万円", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop", type: "別荘" },
        { title: "都心タワーマンション", location: "東京都新宿区", layout: "1LDK / 55m²", price: "7,800万円", img: "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=2000&auto=format&fit=crop", type: "マンション" },
        { title: "郊外の広々邸宅", location: "埼玉県さいたま市", layout: "5LDK / 150m²", price: "5,980万円", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop", type: "一戸建て" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-20">
            <div className="bg-gray-900 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">物件を探す</h1>
                    <p className="text-gray-400">あなたのライフスタイルに合った理想の住まいを見つけましょう。</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Filter Mock */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-12 flex flex-wrap gap-4 items-center">
                    <span className="font-bold text-gray-700">絞り込み:</span>
                    <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm"><option>エリアを選択</option></select>
                    <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm"><option>価格帯を選択</option></select>
                    <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm"><option>間取りを選択</option></select>
                    <button className="ml-auto px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-bold hover:bg-[#FF6B00] transition-colors">検索する</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {properties.map((item, index) => (
                        <div key={index} className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <div className="absolute top-4 left-4 bg-[#FF6B00] text-white px-3 py-1 text-xs font-bold z-10 rounded-full">{item.type}</div>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FF6B00] transition-colors">{item.title}</h3>
                                <p className="text-gray-500 mb-4 flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    {item.location}
                                </p>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                    <span className="font-bold text-gray-900 flex items-center gap-2 text-sm">
                                        <svg className="w-4 h-4 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                        {item.layout}
                                    </span>
                                    <span className="text-[#FF6B00] font-bold text-lg">{item.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
