"use client";
import React from "react";
import { Mail, Phone, MapPin, Calendar, FileText } from "lucide-react";

interface StudentDetail {
  id: string;
  name: string;
  email: string;
  avatar: string;
  class: string;
  birthday: string;
  phone: string;
  address: string;
  registeredDate: string;
  notes: string[];
  documents: {
    name: string;
    size: string;
    type: string;
  }[];
  stats: {
    messages: number;
    files: number;
  };
}

const StudentDetailPage = () => {
  const student: StudentDetail = {
    id: "1",
    name: "Võ Trần Trung Anh",
    class: "Lớp 12A1",
    email: "trunganh@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    birthday: "24/02/1997",
    phone: "0706051087",
    address: "123 Nguyễn Văn Cừ, Quận 5, TP.HCM",
    registeredDate: "24/02/2024",
    notes: [
      "Ghi chú về buổi học ngày 24/02",
      "Trao đổi với giáo viên về lịch học",
      "Chuẩn bị tài liệu cho khóa học mới",
    ],
    documents: [
      { name: "Bài tập về nhà.pdf", size: "2.4mb", type: "pdf" },
      { name: "Báo cáo học tập tháng 2.pdf", size: "1.2mb", type: "pdf" },
      { name: "Đề cương ôn tập.pdf", size: "3.4mb", type: "pdf" },
    ],
    stats: {
      messages: 16,
      files: 2,
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body items-center text-center">
              <div className="avatar">
                <div className="w-24 h-24 rounded-full">
                  <img src={student.avatar} alt={student.name} />
                </div>
              </div>
              <h2 className="card-title mt-4">{student.name}</h2>
              <p className="text-sm text-gray-500">{student.class}</p>

              <div className="flex gap-8 mt-4">
                <div className="text-center">
                  <div className="font-bold">{student.stats.messages}</div>
                  <div className="text-xs text-gray-500">Tin nhắn</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">{student.stats.files}</div>
                  <div className="text-xs text-gray-500">Tập tin</div>
                </div>
              </div>

              <div className="divider"></div>

              <div className="w-full space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <div className="text-sm text-left">{student.email}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <div className="text-sm text-left">{student.phone}</div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <div className="text-sm text-left">{student.address}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <div className="text-sm text-left">
                    Ngày nhập học: {student.registeredDate}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 space-y-6">
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Ghi chú</h3>
              <div className="space-y-4">
                {student.notes.map((note, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="text-sm">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <h3 className="card-title">Tập tin / Tài liệu</h3>
                <button className="btn btn-primary btn-sm">Thêm tập tin</button>
              </div>
              <div className="space-y-3">
                {student.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-base-200 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">{doc.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{doc.size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailPage;
