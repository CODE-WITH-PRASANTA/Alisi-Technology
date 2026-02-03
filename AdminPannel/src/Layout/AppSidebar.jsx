import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const [blogOpen, setBlogOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

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
          <button
            className="lg:hidden text-slate-400"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX />
          </button>
        </div>

        {/* MENU */}
        <nav className="flex-1 p-3 space-y-1 text-sm overflow-y-auto">
          <SidebarItem
            icon={<FiHome />}
            label="Dashboard"
            collapsed={collapsed}
            color="text-blue-400"
            onClick={() => navigate("/dashboard")}
          />

          {/* BLOG */}
          <Dropdown
            icon={<FiEdit className="text-purple-400" />}
            label="Blog Management"
            open={blogOpen}
            setOpen={setBlogOpen}
            collapsed={collapsed}
          >
            <SubItem label="Add Blog" />
            <SubItem label="View Blog" />
          </Dropdown>

          {/* PRICE MANAGEMENT */}
          <Dropdown
            icon={<FiDollarSign className="text-green-400" />}
            label="Price Management"
            open={priceOpen}
            setOpen={setPriceOpen}
            collapsed={collapsed}
          >
            <SubItem
              label="Add Price"
              onClick={() => {
                navigate("/price/add");
                setSidebarOpen(false);
              }}
            />
            <SubItem
              label="View Prices"
              onClick={() => {
                navigate("/price");
                setSidebarOpen(false);
              }}
            />
          </Dropdown>

          <SidebarItem
            icon={<FiUsers />}
            label="Lead Management"
            collapsed={collapsed}
            color="text-cyan-400"
          />

          <SidebarItem
            icon={<FiCheckCircle />}
            label="Finalize Work"
            collapsed={collapsed}
            color="text-emerald-400"
          />

          <SidebarItem
            icon={<FiStar />}
            label="Testimonial Management"
            collapsed={collapsed}
            color="text-yellow-400"
          />

          {/* PROJECT & CLIENT */}
          <Dropdown
            icon={<FiBriefcase className="text-orange-400" />}
            label="Project & Client"
            open={projectOpen}
            setOpen={setProjectOpen}
            collapsed={collapsed}
          >
            <SubItem
              label="Add Project"
              onClick={() => {
                navigate("/projects/add");
                setSidebarOpen(false);
              }}
            />
            <SubItem
              label="View Projects"
              onClick={() => {
                navigate("/projects");
                setSidebarOpen(false);
              }}
            />
            <SubItem label="Clients" />
          </Dropdown>
        </nav>

        {/* PROFILE */}
        <div className="border-t border-slate-800 p-3">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#161c25] transition">
            <img
              src="https://i.pravatar.cc/40"
              className="w-9 h-9 rounded-full ring-2 ring-blue-500"
            />
            {!collapsed && (
              <>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Admin User</p>
                  <p className="text-xs text-slate-400">Administrator</p>
                </div>
                <FiLogOut className="text-slate-400 hover:text-red-400" />
              </>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

/* ---------- COMPONENTS ---------- */

const SidebarItem = ({ icon, label, collapsed, color, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#161c25] transition"
  >
    <span className={`text-lg ${color}`}>{icon}</span>
    {!collapsed && <span>{label}</span>}
  </button>
);

const Dropdown = ({ icon, label, open, setOpen, collapsed, children }) => (
  <>
    <button
      onClick={() => setOpen(!open)}
      className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-[#161c25] transition"
    >
      <div className="flex items-center gap-3">
        {icon}
        {!collapsed && <span>{label}</span>}
      </div>
      {!collapsed && (
        <FiChevronDown
          className={`transition ${
            open ? "rotate-180 text-blue-400" : "text-slate-400"
          }`}
        />
      )}
    </button>

    {open && !collapsed && <div className="ml-8 space-y-1">{children}</div>}
  </>
);

const SubItem = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="block w-full text-left px-3 py-2 rounded-lg
    text-slate-400 hover:text-white hover:bg-[#1b2230] transition"
  >
    {label}
  </button>
);

export default AppSidebar;
