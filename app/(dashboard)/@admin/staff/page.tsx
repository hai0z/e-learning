"use client";
import React from "react";
import { Search, Plus, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

const StaffPage = () => {
  const teachers = [
    {
      id: 1,
      name: "Võ Trần Trung Anh (Chubin)",
      position: "Giáo vụ",
      birthDate: "05-03-2002",
      startDate: "2024-02-21 08:27",
      phone: "0706051087",
      email: "uyenle@gmail.com",
      status: "Đang làm việc",
    },
    {
      id: 2,
      name: "Võ Trần Trung Anh (Chubin)",
      position: "Giáo vụ",
      birthDate: "05-03-2002",
      startDate: "2024-02-21 08:27",
      phone: "0706051087",
      email: "uyenle@gmail.com",
      status: "Đang làm việc",
    },
    {
      id: 3,
      name: "Võ Trần Trung Anh (Chubin)",
      position: "Giáo vụ",
      birthDate: "05-03-2002",
      startDate: "2024-02-21 08:27",
      phone: "0706051087",
      email: "uyenle@gmail.com",
      status: "Đang làm việc",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Danh sách nhân viên</h2>
        <button className="btn btn-primary">
          <Plus size={20} />
          Thêm nhân viên
        </button>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="join flex-1">
          <input
            className="input input-bordered join-item flex-1"
            placeholder="Tìm kiếm nhân viên..."
          />
          <button className="btn join-item">
            <Search size={20} />
          </button>
        </div>
        <select className="select select-bordered w-48">
          <option>Tất cả trạng thái</option>
          <option>Đang làm việc</option>
          <option>Nghỉ việc</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-box">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Chức vụ</th>
              <th>Ngày sinh</th>
              <th>Ngày vào làm</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={`https://i.pravatar.cc/150?img=${index}`} />
                      </div>
                    </div>
                    <div>
                      <Link
                        href={`/teacher/${teacher.id}`}
                        className="font-bold hover:text-primary"
                      >
                        {teacher.name}
                      </Link>
                      <div className="text-sm opacity-50">
                        {teacher.position}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{teacher.birthDate}</td>
                <td>{teacher.startDate}</td>
                <td>{teacher.phone}</td>
                <td>{teacher.email}</td>
                <td>
                  <div className="badge badge-success gap-2">
                    {teacher.status}
                  </div>
                </td>
                <td>
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-xs"
                    >
                      <MoreHorizontal size={16} />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>
                          <Pencil size={16} />
                          Chỉnh sửa
                        </a>
                      </li>
                      <li>
                        <a className="text-error">
                          <Trash2 size={16} />
                          Xoá
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <span className="text-sm">Hiển thị 1-2 của 2 nhân viên</span>
        </div>
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn btn-active">1</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
    </div>
  );
};

export default StaffPage;
