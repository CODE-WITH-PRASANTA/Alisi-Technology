import { useState } from "react";
import {
  FiHome,
  FiEdit,
  FiDollarSign,
  FiUsers,
  FiCheckCircle,
  FiStar,
  FiBriefcase,
  FiChevronDown,
  FiX,
  FiLogOut,
} from "react-icons/fi";

const AppSidebar = ({ sidebarOpen, setSidebarOpen, collapsed }) => {
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <>
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static z-50 h-screen flex flex-col
        bg-gradient-to-b from-[#0f141b] to-[#0b0f14]
        border-r border-slate-800 transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* LOGO */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
          {!collapsed && (
            <span className="text-xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Admin Panel
            </span>
          )}
          <button className="lg:hidden text-slate-400" onClick={() => setSidebarOpen(false)}>
            <FiX />
          </button>
        </div>

        {/* MENU */}
        <nav className="flex-1 p-3 space-y-1 text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <SidebarItem icon={<FiHome />} label="Dashboard" collapsed={collapsed} color="text-blue-400" />

          {/* BLOG MANAGEMENT */}
          <button
            onClick={() => setBlogOpen(!blogOpen)}
            className="w-full flex items-center justify-between px-3 py-3 rounded-xl
            hover:bg-[#161c25] hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              <FiEdit className="text-purple-400 text-lg" />
              {!collapsed && <span>Blog Management</span>}
            </div>
            {!collapsed && (
              <FiChevronDown
                className={`transition ${blogOpen ? "rotate-180 text-purple-400" : "text-slate-400"}`}
              />
            )}
          </button>

          {blogOpen && !collapsed && (
            <div className="ml-8 space-y-1">
              <SubItem label="Add Blog" />
              <SubItem label="View Blog" />
            </div>
          )}

          <SidebarItem icon={<FiDollarSign />} label="Price Management" collapsed={collapsed} color="text-green-400" />
          <SidebarItem icon={<FiUsers />} label="Lead Management" collapsed={collapsed} color="text-cyan-400" />
          <SidebarItem icon={<FiCheckCircle />} label="Finalize Work" collapsed={collapsed} color="text-emerald-400" />
          <SidebarItem icon={<FiStar />} label="Testimonial Management" collapsed={collapsed} color="text-yellow-400" />
          <SidebarItem icon={<FiBriefcase />} label="Project & Client" collapsed={collapsed} color="text-orange-400" />
        </nav>

        {/* PROFILE */}
        <div className="border-t border-slate-800 p-3">
          <div
            className="flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer
            bg-[#0f141b] hover:bg-[#161c25] hover:shadow-lg transition"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
              className="w-9 h-9 rounded-full ring-2 ring-blue-500"
            />

            {!collapsed && (
              <div className="flex-1">
                <p className="text-sm font-semibold">Admin User</p>
                <p className="text-xs text-slate-400">Administrator</p>
              </div>
            )}

            {!collapsed && (
              <FiLogOut className="text-slate-400 hover:text-red-400 transition" />
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

const SidebarItem = ({ icon, label, collapsed, color }) => (
  <button
    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl
    hover:bg-[#161c25] hover:shadow-lg transition group"
  >
    <span className={`text-lg ${color} group-hover:scale-110 transition`}>
      {icon}
    </span>
    {!collapsed && <span className="font-medium">{label}</span>}
  </button>
);

const SubItem = ({ label }) => (
  <button
    className="block w-full text-left px-3 py-2 rounded-lg text-slate-400
    hover:text-white hover:bg-[#1b2230] transition"
  >
    {label}
  </button>
);

export default AppSidebar;
