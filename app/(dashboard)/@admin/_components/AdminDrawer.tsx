"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  FileText,
  Book,
  Settings,
} from "lucide-react";
import AdminNavbar from "./AdminNavbar";

interface Props {
  children: React.ReactNode;
}

const menu = [
  {
    label: "Tổng quan",
    href: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    label: "Nhân viên",
    href: "/staff",
    icon: <Users size={20} />,
    submenu: [
      {
        label: "Danh sách nhân viên",
        href: "/staff",
      },
      {
        label: "Thêm nhân viên",
        href: "/staff/add",
      },
    ],
  },
  {
    label: "Học viên",
    href: "/student",
    icon: <GraduationCap size={20} />,
    submenu: [
      {
        label: "Danh sách học viên",
        href: "/student",
      },
      {
        label: "Thêm học viên",
        href: "/student/add",
      },
    ],
  },
  {
    label: "Khoá học",
    href: "/course",
    icon: <BookOpen size={20} />,
    submenu: [
      {
        label: "Danh sách khoá học",
        href: "/course",
      },
      {
        label: "Thêm khoá học",
        href: "/course/add",
      },
    ],
  },
  {
    label: "Bài học",
    href: "/lesson",
    icon: <FileText size={20} />,
    submenu: [
      {
        label: "Danh sách bài học",
        href: "/lesson",
      },
      {
        label: "Thêm bài học",
        href: "/lesson/add",
      },
    ],
  },
  {
    label: "Tài liệu",
    href: "/document",
    icon: <Book size={20} />,
    submenu: [
      {
        label: "Danh sách tài liệu",
        href: "/document",
      },
      {
        label: "Thêm tài liệu",
        href: "/document/add",
      },
    ],
  },
  {
    label: "Cài đặt",
    href: "/term",
    icon: <Settings size={20} />,
    submenu: [
      {
        label: "Cài đặt chung",
        href: "/term/general",
      },
      {
        label: "Cài đặt tài khoản",
        href: "/term/account",
      },
    ],
  },
];

const Drawer: React.FC<Props> = ({ children }) => {
  const pathName = usePathname();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-100">
        <AdminNavbar />
        <div className="px-6 py-20">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <aside className="bg-base-200 w-80 min-h-screen">
          {/* Logo */}
          <div className="navbar bg-base-200 border-b border-base-300">
            <div className="flex-1">
              <Link href="/" className="btn btn-ghost text-xl">
                <span className="text-primary font-bold">E</span>
                <span className="font-semibold">Learning</span>
              </Link>
            </div>
          </div>

          {/* Menu */}
          <ul className="menu bg-base-200 w-full p-4 font-medium menu-lg">
            {menu.map((item) => (
              <li key={item.label}>
                {!item.submenu ? (
                  <Link
                    href={item.href}
                    className={pathName === item.href ? "active" : ""}
                  >
                    <span className="flex items-center gap-3">
                      {item.icon}
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <details open={pathName.startsWith(item.href)}>
                    <summary>
                      <span className="flex items-center gap-3">
                        {item.icon}
                        {item.label}
                      </span>
                    </summary>
                    <ul>
                      {item.submenu.map((subItem) => (
                        <li key={subItem.href}>
                          <Link
                            href={subItem.href}
                            className={
                              pathName === subItem.href ? "active" : ""
                            }
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Drawer;
