import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import JobSection from "@/components/JobSection";
import { Job } from "@/components/JobCard";
import { SearchBarSkeleton } from "@/components/Skeletons";

// Enriched Mock Data
const MOCK_JOBS: Job[] = [
  { id: "1", logo: "", title: "UI/UX Designer", company: "Microsoft Teams", location: "Seattle, USA (Remote)", timePosted: "1 day ago", applicants: 22, type: "Full-Time" },
  { id: "2", logo: "", title: "UI/UX Designer", company: "Figma Inc.", location: "New York, USA", timePosted: "2 days ago", applicants: 18, type: "Contract" },
  { id: "3", logo: "", title: "Frontend Developer", company: "Google", location: "London, UK (Remote)", timePosted: "3 hours ago", applicants: 45, type: "Full-Time" },
  { id: "4", logo: "", title: "Frontend Developer", company: "Meta", location: "Berlin, Germany", timePosted: "5 hours ago", applicants: 31, type: "Full-Time" },
  { id: "5", logo: "", title: "Backend Engineer", company: "Amazon", location: "Seattle, USA", timePosted: "1 day ago", applicants: 60, type: "Full-Time" },
  { id: "6", logo: "", title: "Backend Engineer", company: "Shopify", location: "Toronto, Canada (Remote)", timePosted: "2 days ago", applicants: 28, type: "Contract" },
  { id: "7", logo: "", title: "Product Manager", company: "Apple", location: "San Francisco, USA", timePosted: "3 days ago", applicants: 75, type: "Full-Time" },
  { id: "8", logo: "", title: "Product Manager", company: "Spotify", location: "Stockholm, Sweden", timePosted: "1 day ago", applicants: 42, type: "Full-Time" },
  { id: "9", logo: "", title: "Graphic Designer", company: "Adobe", location: "New York, USA (Remote)", timePosted: "4 hours ago", applicants: 19, type: "Freelance" },
  { id: "10", logo: "", title: "Graphic Designer", company: "Canva", location: "Sydney, Australia", timePosted: "2 days ago", applicants: 33, type: "Full-Time" },
  { id: "11", logo: "", title: "DevOps Engineer", company: "Netflix", location: "Los Angeles, USA", timePosted: "6 hours ago", applicants: 55, type: "Full-Time" },
  { id: "12", logo: "", title: "DevOps Engineer", company: "GitHub", location: "London, UK (Remote)", timePosted: "1 day ago", applicants: 24, type: "Contract" },
  { id: "13", logo: "", title: "Data Scientist", company: "Tesla", location: "Austin, USA", timePosted: "3 days ago", applicants: 88, type: "Full-Time" },
  { id: "14", logo: "", title: "Data Scientist", company: "OpenAI", location: "San Francisco, USA (Remote)", timePosted: "5 hours ago", applicants: 120, type: "Full-Time" },
  { id: "15", logo: "", title: "Mobile Developer", company: "Uber", location: "New York, USA", timePosted: "2 days ago", applicants: 37, type: "Full-Time" },
  { id: "16", logo: "", title: "Mobile Developer", company: "Airbnb", location: "Seattle, USA (Remote)", timePosted: "1 day ago", applicants: 29, type: "Contract" },
];

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ keyword?: string; location?: string; type?: string }>;
}) {
  // Simulate a network request to show the skeleton loading animation
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const params = await searchParams;
  const keyword = params.keyword?.toLowerCase().trim() ?? "";
  const location = params.location?.toLowerCase().trim() ?? "";
  const type = params.type?.toLowerCase().trim() ?? "";

  const filteredJobs = MOCK_JOBS.filter((job) => {
    const matchesKeyword =
      !keyword ||
      job.title.toLowerCase().includes(keyword) ||
      job.company.toLowerCase().includes(keyword);

    const matchesLocation =
      !location || job.location.toLowerCase().includes(location);

    const matchesType =
      !type || job.type.toLowerCase() === type;

    return matchesKeyword && matchesLocation && matchesType;
  });

  const featuredJobs = filteredJobs.slice(0, 5);
  const recommendedJobs = filteredJobs.slice(5);

  return (
    <>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main className="max-w-[1600px] w-full mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Sidebar */}
        <div className="w-full lg:w-[320px] flex-shrink-0">
          <Sidebar />
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full min-w-0 flex flex-col space-y-8">

          {/* Header Greeting */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 leading-snug">
              Find your Dream Job, <span className="text-primary font-bold">Alert!</span>
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Explore the latest job openings and apply for the best opportunities available today!
            </p>
          </div>

          <Suspense fallback={<SearchBarSkeleton />}>
            <SearchBar />
          </Suspense>

          <div className="pt-2">
            {featuredJobs.length > 0 ? (
              <JobSection
                title="Featured Jobs"
                linkText="See Featured Jobs"
                linkUrl="#"
                jobs={featuredJobs}
              />
            ) : null}

            {recommendedJobs.length > 0 ? (
              <JobSection
                title="Recommended Jobs"
                linkText="See Recommended Jobs"
                linkUrl="#"
                jobs={recommendedJobs}
              />
            ) : null}

            {filteredJobs.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-500 text-sm">
                  Try adjusting your search filters or keywords to find more opportunities.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
