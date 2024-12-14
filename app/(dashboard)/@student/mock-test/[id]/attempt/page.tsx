import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface AttemptPageProps {
  params: Promise<{
    id: string;
  }>;
}

const AttemptPage = async ({ params }: AttemptPageProps) => {
  const { id } = await params;

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="mb-8">
        <Link href={`/mock-test/${id}`} className="btn btn-ghost gap-2 mb-4">
          <ArrowLeft size={20} />
          Quay lại
        </Link>
        <h2 className="text-3xl font-bold mb-3">Bài thi thử TOEIC</h2>
        <p className="text-base-content/70 text-lg">
          Hoàn thành các câu hỏi dưới đây trong thời gian quy định
        </p>
      </div>

      <div className="flex gap-6">
        {/* Main content */}
        <div className="flex-1">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-medium">Câu hỏi 1/20</h3>
                  <p className="text-base-content/70">
                    Thời gian còn lại: 119:45
                  </p>
                </div>
                <button className="btn btn-primary">Nộp bài</button>
              </div>

              <div className="space-y-6">
                <div className="prose max-w-none">
                  <p>Listen to the audio and choose the correct answer:</p>
                  <div className="flex justify-center my-4">
                    <audio controls className="w-full max-w-md">
                      <source src="/audio/sample.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="form-control">
                    <label className="label cursor-pointer justify-normal gap-4">
                      <input
                        type="radio"
                        name="answer"
                        className="radio radio-primary"
                      />
                      <span>(A) The woman is applying for a job</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-normal gap-4">
                      <input
                        type="radio"
                        name="answer"
                        className="radio radio-primary"
                      />
                      <span>(B) The woman is requesting time off</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-normal gap-4">
                      <input
                        type="radio"
                        name="answer"
                        className="radio radio-primary"
                      />
                      <span>(C) The woman is giving a presentation</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-normal gap-4">
                      <input
                        type="radio"
                        name="answer"
                        className="radio radio-primary"
                      />
                      <span>(D) The woman is attending a meeting</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button className="btn btn-outline" disabled>
                  Câu trước
                </button>
                <button className="btn btn-primary">Câu tiếp theo</button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-72">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="font-medium mb-4">Danh sách câu hỏi</h3>
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 20 }).map((_, i) => (
                  <button
                    key={i}
                    className={`btn btn-sm ${
                      i === 0 ? "btn-primary" : "btn-outline"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttemptPage;
