import { FiX, FiBell } from "react-icons/fi";

const RightSidebar = ({ open, setOpen }) => {
  return (
    <>
      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 cursor-pointer"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-80
        bg-[#0f141b] border-l border-slate-800
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="h-16 px-5 flex items-center justify-between border-b border-slate-800">
          {/* TITLE AREA */}
          <div className="flex items-center gap-2 cursor-pointer">
            <FiBell className="text-yellow-400" />
            <h3 className="font-semibold">Notifications</h3>
          </div>

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="text-slate-400 hover:text-white cursor-pointer"
          >
            <FiX />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-64px)]">
          <NotificationItem
            title="New Lead"
            desc="A new lead has been submitted"
            time="2 min ago"
          />
          <NotificationItem
            title="Payment Received"
            desc="₹12,000 payment confirmed"
            time="1 hour ago"
          />
          <NotificationItem
            title="Project Updated"
            desc="Client updated project status"
            time="Yesterday"
          />
        </div>
      </aside>
    </>
  );
};

const NotificationItem = ({ title, desc, time }) => (
  <div
    className="bg-[#161c25] p-4 rounded-xl
    hover:bg-[#1b2230] transition
    cursor-pointer"
  >
    <h4 className="text-sm font-semibold cursor-pointer">{title}</h4>
    <p className="text-xs text-slate-400 mt-1 cursor-pointer">{desc}</p>
    <span className="text-[11px] text-slate-500 mt-2 block cursor-pointer">
      {time}
    </span>
  </div>
);

export default RightSidebar;
