import { useState } from "react";
import AppHeader from "./AppHeader";
import RightSidebar from "./RightSidebar";
import AppSidebar from "./AppSidebar";

const AppLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <div className="h-screen flex bg-[#0b0f14] text-slate-200 overflow-hidden">
      
      {/* LEFT SIDEBAR */}
      <AppSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        collapsed={collapsed}
      />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* HEADER (FIXED HEIGHT) */}
        <AppHeader
          setSidebarOpen={setSidebarOpen}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          setRightOpen={setRightOpen}
        />

        {/* SCROLLABLE CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

      </div>

      {/* RIGHT SIDEBAR */}
      <RightSidebar open={rightOpen} setOpen={setRightOpen} />
    </div>
  );
};

export default AppLayout;
