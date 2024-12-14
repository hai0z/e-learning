"use client";
import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const AdminNavbar = () => {
  return (
    <div className="navbar bg-base-100 border-b fixed top-0 left-0 right-0">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
          <Menu size={20} />
        </label>
      </div>
      <div className="flex-1"></div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://ui-avatars.com/api/?name=Admin" alt="avatar" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/term/account">Tài khoản</Link>
            </li>
            <li>
              <Link href="/term/setting">Cài đặt</Link>
            </li>
            <li>
              <Link href="/login">Đăng xuất</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
