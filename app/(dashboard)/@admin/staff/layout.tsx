"use client";
import Breadcrumb from "@/app/components/Breadcrumb";
import React from "react";

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Breadcrumb />
      {children}
    </div>
  );
};

export default TeacherLayout;
