'use client';

import React from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, Plus, FileText, Clock } from "lucide-react";
import Link from "next/link";

interface Exercise {
  id: number;
  title: string;
  dueDate: string;
}

const exercises: Exercise[] = [
  { id: 1, title: "Bài tập số UNIT 1", dueDate: "20/12/2024" },
  { id: 2, title: "Bài tập số UNIT 2", dueDate: "20/12/2024" },
  { id: 3, title: "Bài tập số UNIT 3", dueDate: "20/12/2024" },
];

export default function ChapterIdPage() {
  const params = useParams();

  return (
    <div className="container mx-auto max-w-7xl p-4 mt-16">
      <div className="mb-8 border border-base-200 px-4 py-6 rounded-lg">
        <Link 
          href={`/classes/${params.id}`} 
          className="btn btn-ghost gap-2 pl-0 mb-4"
        >
          <ArrowLeft size={20} />
          Quay lại
        </Link>
        <div>
        <h1 className="text-2xl font-bold text-primary">Chương 1: Phát âm</h1>
          <div className="flex items-center gap-2 text-sm text-base-content/70 mb-1">
            <span>Chào mừng tới lớp : 1131</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Tài liệu</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="card bg-base-100 border hover:shadow-md transition-all">
              <div className="card-body p-4">
                <FileText className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-medium">Tài liệu {item}</h3>
                <p className="text-sm text-base-content/70">PDF • 2.5MB</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Bài tập đã giao</h2>
        
        </div>
        <div className="space-y-3">
          {exercises.map((exercise) => (
            <div 
              key={exercise.id}
              className="card bg-base-100 border hover:shadow-md transition-all"
            >
              <div className="card-body p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <h3 className="font-medium">{exercise.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-base-content/70">
                    <Clock size={16} />
                    <span className="text-sm">Đến hạn: {exercise.dueDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}