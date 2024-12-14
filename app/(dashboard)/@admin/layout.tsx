import React from "react";
import Drawer from "./_components/AdminDrawer";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Drawer>{children}</Drawer>
    </div>
  );
};

export default AdminLayout;
