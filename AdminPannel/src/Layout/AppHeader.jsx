import { useEffect, useRef, useState } from "react";
import {
  FiMenu,
  FiSearch,
  FiBell,
  FiChevronDown,
  FiSliders, // ✅ right sidebar icon
} from "react-icons/fi";

const countries = [
  { name: "India", code: "in" },
  { name: "United States", code: "us" },
  { name: "United Kingdom", code: "gb" },
  { name: "Canada", code: "ca" },
];

const AppHeader = ({
  setSidebarOpen,
  collapsed,
  setCollapsed,
  setRightOpen,
}) => {
  const [countryOpen, setCountryOpen] = useState(false);
  const [country, setCountry] = useState(countries[0]);
  const dropdownRef = useRef(null);

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="h-16 bg-gradient-to-r from-[#0f141b] to-[#0b0f14]
      border-b border-slate-800 flex items-center justify-between
      px-4 sm:px-6"
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        {/* MOBILE MENU */}
        <button
          className="lg:hidden text-xl hover:text-blue-400 transition"
          onClick={() => setSidebarOpen(true)}
        >
          <FiMenu />
        </button>

        {/* DESKTOP COLLAPSE */}
        <button
          className="hidden lg:block text-xl hover:text-blue-400 transition"
          onClick={() => setCollapsed(!collapsed)}
        >
          <FiMenu />
        </button>

        <h1 className="hidden sm:block font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Dashboard
        </h1>
      </div>

      {/* SEARCH */}
      <div className="hidden md:flex items-center bg-[#0b0f14]
        border border-slate-700 rounded-full px-4 py-2 w-[320px]
        focus-within:border-blue-500 transition">
        <FiSearch className="text-slate-400" />
        <input
          className="bg-transparent outline-none px-2 text-sm w-full"
          placeholder="Search here..."
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        {/* NOTIFICATIONS */}
        <button className="relative text-lg hover:text-yellow-400 transition">
          <FiBell />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* 👉 RIGHT SIDEBAR ICON */}
        <button
          onClick={() => setRightOpen(true)}
          className="text-xl hover:text-blue-400 transition"
          title="Open Panel"
        >
          <FiSliders />
        </button>

        {/* COUNTRY DROPDOWN */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setCountryOpen(!countryOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full
            border border-slate-700 hover:bg-[#161c25]
            hover:border-blue-500 transition"
          >
            <img
              src={`https://flagcdn.com/w20/${country.code}.png`}
              alt={country.name}
              className="w-5 h-4 rounded-sm"
            />
            <span className="hidden sm:block text-sm">{country.name}</span>
            <FiChevronDown
              className={`text-sm transition ${
                countryOpen ? "rotate-180 text-blue-400" : ""
              }`}
            />
          </button>

          {countryOpen && (
            <div
              className="absolute right-0 mt-2 w-48 rounded-xl
              bg-[#0f141b] border border-slate-700 shadow-2xl
              animate-fadeIn z-50"
            >
              {countries.map((c) => (
                <button
                  key={c.code}
                  onClick={() => {
                    setCountry(c);
                    setCountryOpen(false);
                  }}
                  className="w-full flex items-center gap-3
                  px-4 py-2.5 text-sm hover:bg-[#161c25] transition"
                >
                  <img
                    src={`https://flagcdn.com/w20/${c.code}.png`}
                    alt={c.name}
                    className="w-5 h-4 rounded-sm"
                  />
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
