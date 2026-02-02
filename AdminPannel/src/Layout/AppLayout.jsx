import { useState } from "react";
import AppHeader from "./AppHeader";
import RightSidebar from "./RightSidebar";
import AppSidebar from "./AppSidebar";

const AppLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0b0f14] text-slate-200">
      <AppSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        collapsed={collapsed}
      />

      <div className="flex-1 flex flex-col">
        <AppHeader
          setSidebarOpen={setSidebarOpen}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          setRightOpen={setRightOpen}
        />

        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>

      <RightSidebar open={rightOpen} setOpen={setRightOpen} />
    </div>
  );
};

export default AppLayout;
