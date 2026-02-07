import React from 'react';

interface WorkCardProps {
  title: string;
  category: string;
  imageUrl?: string;
}

export default function WorkCard({ title, category, imageUrl }: WorkCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800">
      <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300">
            <span className="text-sm">画像なし</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <div className="p-5">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">{category}</p>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
      </div>
    </div>
  );
}
