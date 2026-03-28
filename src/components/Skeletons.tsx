import React from "react";

export function NavbarSkeleton() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50 animate-pulse">
      {/* Left section: Logo and Links */}
      <div className="flex items-center space-x-8">
        {/* Logo Placeholder */}
        <div className="w-[40px] h-[40px] bg-gray-200 rounded-lg flex-shrink-0"></div>
        
        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center space-x-6">
          {[...Array(6)].map((_, i) => (
            <li key={i}>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right section: Search, Button, Avatar */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="hidden md:block w-[200px] h-9 bg-gray-200 rounded-md"></div>
        {/* Button */}
        <div className="w-[125px] h-9 bg-gray-200 rounded-md"></div>
        {/* Avatar */}
        <div className="h-9 w-9 bg-gray-200 rounded-full flex-shrink-0"></div>
      </div>
    </nav>
  );
}

export function SidebarSkeleton() {
  return (
    <div className="w-full lg:w-[320px] flex-shrink-0 space-y-4 animate-pulse">
      {/* Profile Card Skeleton */}
      <div className="bg-white rounded-[14px] shadow-sm border border-gray-100 overflow-hidden relative pb-6">
        <div className="h-24 w-full bg-gray-200"></div>
        <div className="flex flex-col items-center px-6 mt-[-36px] relative z-10">
          <div className="h-[72px] w-[72px] rounded-full bg-gray-300 border-4 border-white shadow-sm"></div>
          <div className="h-5 w-32 bg-gray-200 rounded mt-3"></div>
          <div className="h-3 w-48 bg-gray-200 rounded mt-2"></div>
          <div className="h-3 w-40 bg-gray-200 rounded mt-1"></div>
        </div>
      </div>

      {/* Stats Card Skeleton */}
      <div className="bg-white rounded-[14px] shadow-sm border border-gray-100 p-4">
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex justify-between items-center pb-2 border-b border-gray-50 last:border-0 last:pb-0">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="h-4 w-8 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Card Skeleton */}
      <div className="bg-white rounded-[14px] shadow-sm border border-gray-100 p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
            <div className="h-3 w-28 bg-gray-200 rounded mt-2"></div>
          </div>
          <div className="h-5 w-5 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export function SearchBarSkeleton() {
  return (
    <div className="w-full animate-pulse">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 p-2.5 flex flex-col md:flex-row items-center">
        {/* Input area */}
        <div className="flex-1 w-full pl-5 pr-4 py-3">
          <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
        </div>
        
        {/* Dividers & Dropdowns */}
        <div className="hidden md:block w-px h-8 bg-gray-100"></div>
        <div className="w-full md:w-[220px] px-6 py-3">
          <div className="h-5 w-24 bg-gray-200 rounded"></div>
        </div>

        <div className="hidden md:block w-px h-8 bg-gray-100"></div>
        <div className="w-full md:w-[180px] px-6 py-3">
          <div className="h-5 w-20 bg-gray-200 rounded"></div>
        </div>

        {/* Button */}
        <div className="w-full md:w-[120px] h-12 bg-gray-200 rounded-xl md:ml-2"></div>
      </div>

      {/* Tags Skeleton */}
      <div className="flex items-center gap-3 mt-6">
        <div className="h-4 w-12 bg-gray-200 rounded"></div>
        <div className="flex flex-wrap gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-8 w-24 bg-gray-200 rounded-md"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function JobCardSkeleton() {
  return (
    <div className="bg-white rounded-[14px] shadow-sm border border-gray-100 p-5 flex flex-col justify-between h-full animate-pulse">
      <div>
        <div className="flex gap-3 items-center mb-4 mt-1">
          <div className="h-[46px] w-[46px] bg-gray-200 rounded-[10px] flex-shrink-0"></div>
          <div className="flex flex-col justify-center gap-1.5 w-full">
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <div className="flex items-center gap-1.5">
            <div className="h-3.5 w-3.5 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-32 bg-gray-200 rounded"></div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3.5 w-3.5 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-40 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
        <div className="h-[38px] w-[38px] bg-gray-200 rounded-lg flex-shrink-0"></div>
      </div>
    </div>
  );
}

export function JobSectionSkeleton({ count = 5, titleLength = "w-32" }: { count?: number, titleLength?: string }) {
  return (
    <section className="mb-10 animate-pulse">
      <div className="flex items-center gap-3 mb-5">
        <div className={`h-6 ${titleLength} bg-gray-200 rounded`}></div>
        <div className="h-4 w-24 bg-gray-200 rounded mt-1"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {[...Array(count)].map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}
