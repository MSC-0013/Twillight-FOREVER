import { Outlet } from "react-router-dom";
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";
import { useState } from "react";

function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar - fixed & scrollable */}
      <div className="fixed left-0 top-0 h-screen w-64 overflow-y-auto bg-white shadow-md">
        <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
      </div>

      {/* Main Content (shifted right by sidebar width) */}
      <div className="flex flex-1 flex-col ml-64">
        <AdminHeader setOpen={setOpenSidebar} />
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
