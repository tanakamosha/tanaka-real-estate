import WorkCard from "@/components/WorkCard";
import UploadForm from "@/components/UploadForm";

export default function Home() {
  const works = [
    { title: "ネオンシティ", category: "3Dアート", imageUrl: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop" },
    { title: "ミニマルチェア", category: "プロダクトデザイン", imageUrl: "https://images.unsplash.com/photo-1503602642458-2321114458ad?q=80&w=2000&auto=format&fit=crop" },
    { title: "抽象的な波", category: "グラフィックデザイン", imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" },
    { title: "モダンUIキット", category: "Webデザイン", imageUrl: "https://images.unsplash.com/photo-1559028013-ca9c48509f66?q=80&w=2070&auto=format&fit=crop" },
    { title: "森の隠れ家", category: "写真", imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop" },
    { title: "テックブランド", category: "ブランディング", imageUrl: "https://images.unsplash.com/photo-1626785774573-4b7993143d20?q=80&w=2000&auto=format&fit=crop" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content - Gallery */}
      <div className="flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">作品一覧</h1>
          <p className="text-gray-500">最新のプロジェクトや実験的な作品について。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work, index) => (
            <WorkCard
              key={index}
              title={work.title}
              category={work.category}
              imageUrl={work.imageUrl}
            />
          ))}
        </div>
      </div>

      {/* Sidebar - Upload & Info */}
      <div className="w-full lg:w-80 flex-shrink-0 space-y-6">
        <UploadForm />

        <div className="bg-gray-100 rounded-2xl p-6 text-sm text-gray-500">
          <h3 className="font-semibold text-gray-900 mb-2">ポートフォリオについて</h3>
          <p>これは2026年のミニマルなポートフォリオデザインのデモです。表示されている作品はすべてダミーです。</p>
        </div>
      </div>
    </div>
  );
}
