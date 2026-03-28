"use client";

import { Search, ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const LOCATIONS = [
  "Seattle, USA",
  "New York, USA",
  "London, UK",
  "Berlin, Germany",
  "Toronto, Canada",
  "San Francisco, USA",
  "Stockholm, Sweden",
  "Sydney, Australia",
  "Los Angeles, USA",
  "Austin, USA",
];

const JOB_TYPES = ["Full-Time", "Contract", "Freelance", "Part-Time"];

function Dropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between gap-2 cursor-pointer group w-full"
      >
        <span
          className={`text-base transition-colors ${
            value ? "text-gray-900 font-medium" : "text-[#737A91]"
          }`}
        >
          {value || label}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-[#737A91] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          strokeWidth={1.5}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 left-0 z-50 bg-white border border-[#E1E1E1] rounded-xl shadow-lg py-2 min-w-[200px]">
          <button
            type="button"
            onClick={() => { onChange(""); setIsOpen(false); }}
            className="w-full text-left px-4 py-2.5 text-sm text-[#737A91] hover:bg-gray-50 transition-colors"
          >
            {label}
          </button>
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => { onChange(option); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                value === option ? "text-[#0154AA] font-medium bg-blue-50/50" : "text-gray-800"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState(searchParams.get("keyword") ?? "");
  const [location, setLocation] = useState(searchParams.get("location") ?? "");
  const [jobType, setJobType] = useState(searchParams.get("type") ?? "");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("keyword", keyword.trim());
    if (location) params.set("location", location);
    if (jobType) params.set("type", jobType);
    window.dispatchEvent(new Event("loader:start"));
    router.push(`/?${params.toString()}`);
  }

  function handleTagClick(tag: string) {
    setKeyword(tag);
    const params = new URLSearchParams();
    params.set("keyword", tag);
    if (location) params.set("location", location);
    if (jobType) params.set("type", jobType);
    window.dispatchEvent(new Event("loader:start"));
    router.push(`/?${params.toString()}`);
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSearch}
        className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-2.5 flex flex-col md:flex-row items-center border border-gray-100/50"
      >
        {/* Keyword Input */}
        <div className="flex-1 w-full pl-5 pr-4 py-3 flex items-center">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Job Title, Company, or Keywords"
            className="w-full bg-transparent text-gray-900 placeholder-[#737A91] focus:outline-none text-base font-normal tracking-wide"
          />
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-[#E5E7EB]"></div>

        {/* Location Dropdown */}
        <div className="w-full md:w-[220px] px-6 py-3">
          <Dropdown
            label="Select Location"
            options={LOCATIONS}
            value={location}
            onChange={setLocation}
          />
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-[#E5E7EB]"></div>

        {/* Job Type Dropdown */}
        <div className="w-full md:w-[180px] px-6 py-3">
          <Dropdown
            label="Job Type"
            options={JOB_TYPES}
            value={jobType}
            onChange={setJobType}
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-[#0154AA] hover:bg-[#013d80] active:scale-95 text-white px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 text-base font-medium md:ml-2 cursor-pointer"
        >
          <Search className="h-5 w-5" strokeWidth={2} />
          <span>Search</span>
        </button>
      </form>

      {/* Similar Tags */}
      <div className="flex items-center gap-3 mt-6">
        <span className="text-gray-400 text-sm font-medium">Similar:</span>
        <div className="flex flex-wrap gap-2">
          {["Frontend", "Backend", "Graphic Designer"].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagClick(tag)}
              className="px-4 py-1.5 border border-gray-200 rounded-md text-gray-500 text-sm font-medium hover:border-[#0154AA] hover:text-[#0154AA] active:scale-95 bg-white cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
