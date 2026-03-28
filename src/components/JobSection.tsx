import Link from "next/link";
import JobCard, { Job } from "./JobCard";

interface JobSectionProps {
  title: string;
  linkText: string;
  linkUrl: string;
  jobs: Job[];
}

export default function JobSection({ title, linkText, linkUrl, jobs }: JobSectionProps) {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-xl font-normal text-gray-900">{title}</h2>
        <Link href={linkUrl} className="text-[#0154AA] hover:text-primary/80 underline text-sm font-medium mt-1">
          {linkText}
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
