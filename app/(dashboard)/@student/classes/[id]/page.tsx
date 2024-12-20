import React from "react";
import Link from "next/link";

interface Chapter {
  id: number;
  title: string;
  type: 'Phát âm' | 'Từ đồng nghĩa' | 'Từ loại';
  description: string;
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: 'Chương 1: Phát âm',
    type: 'Phát âm',
    description: 'Hôm nay, chúng ta cùng tìm hiểu chi tiết bằng phiên âm tiếng Anh IPA địa chỉ và cách phát âm 44 âm chuẩn quốc tế'
  },
  {
    id: 2,
    title: 'Chương 2: Từ đồng nghĩa',
    type: 'Từ đồng nghĩa',
    description: 'Hôm nay, chúng ta cùng tìm hiểu chi tiết về từ đồng nghĩa trong tiếng Anh.'
  },
  {
    id: 3,
    title: 'Chương 3: Từ loại',
    type: 'Từ loại',
    description: 'Hôm nay, chúng ta cùng tìm hiểu chi tiết về từ loại trong tiếng Anh.'
  },
  {
    id: 5,
    title: 'Chương 5: Phát âm',
    type: 'Phát âm',
    description: 'Hôm nay, chúng ta cùng tìm hiểu chi tiết bằng phiên âm tiếng Anh IPA địa chỉ và cách phát âm 44 âm chuẩn quốc tế'
  },
  {
    id: 6,
    title: 'Chương 6: Từ đồng nghĩa',
    type: 'Từ đồng nghĩa',
    description: 'Hôm nay, chúng ta cùng tìm hiểu chi tiết về từ đồng nghĩa trong tiếng Anh.'
  }
];
interface ClassesDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}
const ClassesDetailPage = async({params}: ClassesDetailPageProps) => {
  
  const { id } = await params;


  return (
    <div>
      <div className="container mx-auto max-w-7xl">
      <div className="mt-16">
      <div className="p-4">
      {/* Welcome Message */}
      <div className="hero bg-gradient-to-r from-primary/10 to-secondary/10 rounded-box mb-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
        <div className="hero-content flex-col lg:flex-row py-6 gap-6">
          <div className="avatar placeholder relative">
            <div className="bg-primary text-primary-content rounded-full w-20 h-20 ring ring-primary ring-offset-base-100 ring-offset-2">
              <span className="text-3xl font-bold">1131</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold">Chào mừng tới lớp học</h1>
              <div className="badge badge-primary">2023-2024</div>
            </div>
            <p className="py-2 text-base-content/70 flex items-center gap-2">
              <span>Cùng bắt đầu hành trình học tập của bạn</span>
            </p>
            <div className="flex gap-2 mt-2">
              <div className="badge badge-outline gap-2">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                Online
              </div>
              <div className="badge badge-outline gap-2">
                <div className="w-2 h-2 rounded-full bg-warning"></div>
                5 Chapters
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Section Title */}
      <h2 className="text-lg font-medium mb-4">Các chương trình có trong lớp học</h2>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapters.map((chapter) => (
          <Link key={chapter.id} href={`/classes/${id}/chapter/${chapter.id}`} className="card bg-base-100 card-bordered">
            <div className="card-body">
              <h3 className="card-title text-primary">{chapter.title}</h3>
              <div className="divider"></div>
              <p className="text-sm text-base-content/70">{chapter.description}</p>
            
            </div>
          </Link>
        ))}
      </div>
    </div>
      </div>
      </div>
    </div>
  );
};

export default ClassesDetailPage;
