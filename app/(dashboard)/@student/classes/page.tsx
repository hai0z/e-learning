"use client";
import React from "react";
import { ArrowUpRight, Folder, Users } from "lucide-react";
import Link from "next/link";

const ClassesPage = () => {
  const classes = [
    {
      id: 1,
      name: "Tiếng Anh cơ bản",
      teacher: "Nguyễn Văn A",
      coverImage: "https://gstatic.com/classroom/themes/img_read.jpg",
      topics: "Animals",
      room: "Cs123",
      students: 24,
    },
    {
      id: 2,
      name: "Tiếng Anh giao tiếp",
      teacher: "Trần Thị B",
      coverImage: "https://gstatic.com/classroom/themes/img_code.jpg",
      topics: "Communication",
      room: "Cs456",
      students: 18,
    },
    {
      id: 3,
      name: "IELTS Writing",
      teacher: "Phạm Văn C",
      coverImage: "https://gstatic.com/classroom/themes/img_breakfast.jpg",
      topics: "Essay Writing",
      room: "Cs789",
      students: 15,
    },
    {
      id: 4,
      name: "TOEIC Listening",
      teacher: "Lê Thị D",
      coverImage: "https://gstatic.com/classroom/themes/img_concert.jpg",
      topics: "Listening Skills",
      room: "Cs321",
      students: 30,
    },
    {
      id: 5,
      name: "Business English",
      teacher: "Hoàng Văn E",
      coverImage: "https://gstatic.com/classroom/themes/img_coffee.jpg",
      topics: "Business Communication",
      room: "Cs654",
      students: 20,
    },
    {
      id: 6,
      name: "English Grammar",
      teacher: "Đỗ Thị F",
      coverImage: "https://gstatic.com/classroom/themes/img_graduation.jpg",
      topics: "Grammar Rules",
      room: "Cs987",
      students: 25,
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-center sm:text-left">
            Lớp học của tôi
          </h1>
          <p className="text-base-content/70 mt-1">
            Quản lý và tham gia các lớp học của bạn
          </p>
        </div>
        <button className="btn btn-primary w-full sm:w-auto gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
          Tham gia lớp học
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className="card bg-base-100 shadow-md transition-all duration-300 overflow-hidden group"
          >
            <div
              className="h-48 relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${classItem.coverImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute top-6 left-6 right-16">
                <h2 className="text-white text-2xl font-bold mb-2 truncate">
                  {classItem.name}
                </h2>
                <p className="text-white/90 text-base font-medium mb-1">
                  GV: {classItem.teacher}
                </p>
                <p className="text-white/80 text-base">
                  Phòng: {classItem.room}
                </p>
              </div>
              <div className="absolute top-4 right-4">
                <div className="dropdown dropdown-end">
                  <button className="btn btn-ghost btn-md btn-circle text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      ></path>
                    </svg>
                  </button>
                  <ul className="dropdown-content z-[1] menu p-3 shadow-lg bg-base-100 rounded-box w-60">
                    <li>
                      <a className="text-base py-3">Xem chi tiết</a>
                    </li>
                    <li>
                      <a className="text-base py-3">Rời lớp học</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 flex justify-between items-center border-t">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 text-base-content/70">
                  <Users size={22} />
                  <span className="text-base">{classItem.students}</span>
                </div>
                <div className="flex items-center gap-3 text-base-content/70">
                  <Folder size={22} />
                  <span className="text-base">5</span>
                </div>
              </div>
              <Link
                href={`/classes/${classItem.id}`}
                className="btn btn-ghost btn-md gap-2"
              >
                <ArrowUpRight size={22} />
                <span className="text-base">Vào học</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;
