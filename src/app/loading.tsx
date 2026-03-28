import React from "react";
import { 
  NavbarSkeleton, 
  SidebarSkeleton, 
  SearchBarSkeleton, 
  JobSectionSkeleton 
} from "@/components/Skeletons";

export default function Loading() {
  return (
    <>
      <NavbarSkeleton />
      <main className="max-w-[1600px] w-full mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Sidebar */}
        <div className="w-full lg:w-[320px] flex-shrink-0">
          <SidebarSkeleton />
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full min-w-0 flex flex-col space-y-8">
          
          {/* Header Greeting Skeleton */}
          <div className="animate-pulse">
            <div className="h-8 w-64 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-96 max-w-full bg-gray-200 rounded"></div>
          </div>

          <div className="w-full relative">
            <SearchBarSkeleton />
          </div>

          <div className="pt-2">
            <JobSectionSkeleton titleLength="w-32" count={4} />
            <JobSectionSkeleton titleLength="w-40" count={5} />
          </div>
        </div>
      </main>
    </>
  );
}
