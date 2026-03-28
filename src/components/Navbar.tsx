"use client";

import { Search, Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import navbarUserProfileImg from "../assets/images/navbar-user-profile.jpg";
import siteLogo from "../assets/images/site-logo-find-job.png";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// ── Centered Page Loader ───────────────────────────────────────────────────
function CenterLoader() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const start = () => setActive(true);
    const stop = () => setActive(false);
    window.addEventListener("loader:start", start);
    window.addEventListener("loader:stop", stop);
    return () => {
      window.removeEventListener("loader:start", start);
      window.removeEventListener("loader:stop", stop);
    };
  }, []);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => { setActive(false); }, [pathname, searchParams]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center pointer-events-none">
      {/* Frosted background overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />

      {/* Spinner card */}
      <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-white/60 px-10 py-8 flex flex-col items-center gap-4">
        {/* Outer ring */}
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-[3px] border-blue-100" />
          <div
            className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#0154AA] border-r-[#0154AA]"
            style={{ animation: "spin 0.8s linear infinite" }}
          />
          {/* Inner pulsing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-[#0154AA] animate-pulse" />
          </div>
        </div>
        <p className="text-sm font-medium text-[#737A91] tracking-wide">Finding jobs...</p>
      </div>
    </div>
  );
}

// ── Navbar ─────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Find Jobs", href: "#", active: true },
    { name: "Top Companies", href: "#" },
    { name: "Job Tracker", href: "#" },
    { name: "My Calendar", href: "#" },
    { name: "Documents", href: "#" },
    { name: "Messages", href: "#" },
    { name: "Notifications", href: "#" },
  ];

  // Close mobile menu on resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      <CenterLoader />

      <nav className="bg-white border-b border-gray-200 px-8 py-3.5 flex items-center justify-between sticky top-0 z-50">
        {/* Left section: Logo and Links */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center justify-center flex-shrink-0 mr-2">
            <img src={siteLogo.src} alt="TalentVare Logo" className="h-[40px] w-auto object-contain" />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-6 text-[15px] font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`whitespace-nowrap ${
                    link.active
                      ? "text-primary font-semibold"
                      : "text-[#737A91] hover:text-gray-900"
                  } transition-colors`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          {/* Search Bar (desktop) */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-44 pl-10 pr-3 py-2 border border-transparent rounded-lg leading-5 bg-[#F6F9FF] text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-gray-300 focus:ring-1 focus:ring-primary text-sm transition-colors"
              placeholder="Search"
            />
          </div>

          {/* Resume Builder Button (desktop) */}
          <button className="hidden sm:flex bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Resume Builder
          </button>

          {/* User Avatar */}
          <div className="h-9 w-9 rounded-full bg-gray-200 overflow-hidden border border-gray-300 flex-shrink-0 cursor-pointer">
            <img
              src={navbarUserProfileImg.src}
              alt="User avatar"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="lg:hidden flex items-center justify-center h-9 w-9 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-end px-5 py-4 border-b border-gray-100">
          <button
            onClick={() => setMobileOpen(false)}
            className="h-9 w-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* User Profile inside drawer */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-gray-50/60">
          <div className="h-11 w-11 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
            <img src={navbarUserProfileImg.src} alt="User" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Albert Flores</p>
            <p className="text-xs text-[#737A91]">Senior Product Designer</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto py-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between px-5 py-3.5 text-[15px] font-medium transition-colors ${
                link.active
                  ? "text-primary bg-blue-50/60"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span>{link.name}</span>
              <ChevronRight className="h-4 w-4 text-gray-300" />
            </Link>
          ))}
        </nav>

        {/* Resume Builder inside drawer */}
        <div className="p-5 border-t border-gray-100">
          <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl text-sm font-semibold transition-colors">
            Resume Builder
          </button>
        </div>
      </div>

      {/* Spin keyframe */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
