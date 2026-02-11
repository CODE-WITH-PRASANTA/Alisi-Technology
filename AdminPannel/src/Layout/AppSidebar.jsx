import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import {
  FiHome,
  FiEdit,
  FiDollarSign,
  FiStar,
  FiBriefcase,
  FiChevronDown,
  FiX,
  FiLogOut,
  FiUserPlus,
  FiMail,
} from "react-icons/fi";

/* ================= SERVICES LIST ================= */
const PRICING_SERVICES = [
  { label: "All Services", path: "/services/all-services" },
  { label: "AI & Data Analytics", path: "/services/Data-Analytics" },
  { label: "BPO Services", path: "/services/bpo" },
  { label: "KPO Services", path: "/services/kpo" },
  { label: "Cloud Computing", path: "/services/Cloud" },
  { label: "Cognitive Operations", path: "/services/cognitive-operations" },
  { label: "Consulting", path: "/services/Consulting" },
  { label: "Cybersecurity", path: "/services/cybersecurity" },
  { label: "Enterprise Solutions", path: "/services/enterprise-solutions" },
  { label: "IoT & Digital Engineering", path: "/services/iot-digital-engineering" },
  { label: "Network Solutions", path: "/services/network-solutions" },
  { label: "Sustainability Services", path: "/services/sustainability" },
];

const AppSidebar = ({ sidebarOpen, setSidebarOpen, collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const [contentOpen, setContentOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setSidebarOpen(false);
    navigate("/login", { replace: true });
  };

  return (
    <>
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
            <span
              onClick={() => navigate("/dashboard")}
              className="text-xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
            >
              Admin Console
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
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto text-sm">
          <SidebarItem
            icon={<FiHome />}
            label="Dashboard"
            active={isActive("/dashboard")}
            collapsed={collapsed}
            onClick={() => navigate("/dashboard")}
          />

          {/* CONTENT */}
          <Dropdown
            icon={<FiEdit className="text-purple-400" />}
            label="Content Management"
            open={contentOpen}
            setOpen={setContentOpen}
            collapsed={collapsed}
          >
            <SubItem label="Create Article" onClick={() => navigate("/blog")} />
            <SubItem label="Manage Articles" onClick={() => navigate("/blog-view")} />
          </Dropdown>

          {/* PRICING */}
          <Dropdown
            icon={<FiDollarSign className="text-green-400" />}
            label="Pricing & Plans"
            open={priceOpen}
            setOpen={setPriceOpen}
            collapsed={collapsed}
          >
            <SubItem label="Add Pricing Plan" onClick={() => navigate("/price/add")} />
            <SubItem label="Manage Pricing" onClick={() => navigate("/price")} />
          </Dropdown>

          {/* TESTIMONIAL */}
          <SidebarItem
            icon={<FiStar />}
            label="Client Testimonials"
            collapsed={collapsed}
            onClick={() => navigate("/testimonial")}
          />

          {/* TEAM */}
          <SidebarItem
            icon={<FiUserPlus />}
            label="Team Management"
            collapsed={collapsed}
            onClick={() => navigate("/team")}
          />

          {/* CONTACT RECORDS */}
          <SidebarItem
            icon={<FiMail className="text-cyan-400" />}
            label="Contact Records"
            collapsed={collapsed}
            active={isActive("/contacts")}
            onClick={() => navigate("/contacts")}
          />

          {/* PORTFOLIO */}
          <Dropdown
            icon={<FiBriefcase className="text-orange-400" />}
            label="Portfolio Management"
            open={projectOpen}
            setOpen={setProjectOpen}
            collapsed={collapsed}
          >
            <SubItem label="Add Portfolio" onClick={() => navigate("/projects/add")} />
            <SubItem label="Manage Portfolio" onClick={() => navigate("/projects")} />
            <SubItem label="Upload Client Logo" onClick={() => navigate("/client-logos")} />
          </Dropdown>
        </nav>

        {/* PROFILE */}
        <div className="border-t border-slate-800 p-3">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#161c25]">
            <img
              src="https://i.pravatar.cc/40"
              className="w-9 h-9 rounded-full ring-2 ring-blue-500"
              alt="profile"
            />
            {!collapsed && (
              <>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Admin User</p>
                  <p className="text-xs text-slate-400">Administrator</p>
                </div>
                <FiLogOut
                  className="text-red-400 cursor-pointer hover:text-red-500"
                  onClick={handleLogout}
                />
              </>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;

/* ================= SUB COMPONENTS ================= */

const SidebarItem = ({ icon, label, collapsed, onClick, active }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition
      ${active ? "bg-[#1b2230] text-white" : "hover:bg-[#161c25] text-slate-300"}`}
  >
    <span className="text-lg">{icon}</span>
    {!collapsed && <span>{label}</span>}
  </button>
);

const Dropdown = ({ icon, label, open, setOpen, collapsed, children }) => (
  <>
    <button
      onClick={() => setOpen(!open)}
      className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-[#161c25]"
    >
      <div className="flex items-center gap-3">
        {icon}
        {!collapsed && <span>{label}</span>}
      </div>
      {!collapsed && (
        <FiChevronDown
          className={`transition ${open ? "rotate-180 text-blue-400" : ""}`}
        />
      )}
    </button>
    {open && !collapsed && (
      <div className="ml-8 space-y-1">{children}</div>
    )}
  </>
);

const SubItem = ({ label, onClick, active }) => (
  <button
    onClick={onClick}
    className={`block w-full text-left px-3 py-2 rounded-lg transition
      ${active ? "bg-[#1b2230] text-white" : "text-slate-400 hover:bg-[#1b2230]"}`}
  >
    {label}
  </button>
);