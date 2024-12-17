import React from "react";
const checkUserRole = () => {
  return "student";
};
interface DashboardLayoutProps {
  student: React.ReactNode;
  teacher: React.ReactNode;
}
const DashboardLayout = ({ student, teacher }: DashboardLayoutProps) => {
  const userRole = checkUserRole();
  return userRole === "student"
    ? student
    : userRole === "teacher"
    ? teacher
    : null;
};

export default DashboardLayout;
