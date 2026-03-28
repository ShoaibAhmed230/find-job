import { MapPin, Clock, Bookmark } from "lucide-react";
import msTeamsIcon from "../assets/icons/MSteams-icon.png";

export interface Job {
  id: string;
  isPromoted?: boolean;
  logo: string;
  title: string;
  company: string;
  location: string;
  timePosted: string;
  applicants: number;
  type: string;
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="card-hover bg-white rounded-[14px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-[#E1E1E1] p-5 flex flex-col justify-between cursor-pointer h-full">
      {/* Header */}
      <div>


        <div className="flex gap-4 items-center mb-4 mt-1">
          <div className="h-[54px] w-[54px] bg-[#F8F9FA] rounded-xl flex items-center justify-center flex-shrink-0">
            <img src={msTeamsIcon.src} alt={job.company} className="h-[60px] w-[60px] object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[16px] font-normal text-gray-900 leading-snug">
              {job.title}
            </h3>
            <p className="text-[13px] text-[#737A91] leading-none mt-1">{job.company}</p>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-1.5 mb-5">
          <div className="flex items-center text-[#737A91] text-[13px]">
            <MapPin className="h-[14px] w-[14px] mr-1.5 stroke-[1.5]" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-[#737A91] text-[13px]">
            <Clock className="h-[14px] w-[14px] mr-1.5 stroke-[1.5]" />
            <span>{job.timePosted}</span>
            <span className="mx-1.5 text-gray-300">|</span>
            <span className="text-[#0154AA] font-normal">{job.applicants} applicants</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="flex-1 bg-[#0154AA] hover:bg-[#013d80] active:scale-95 text-white font-medium py-2.5 px-4 rounded-lg text-[14px] cursor-pointer">
          Apply Now
        </button>
        <button className="flex items-center justify-center text-[#737A91] hover:text-[#0154AA] active:scale-90 transition-colors flex-shrink-0 pr-1 cursor-pointer">
          <Bookmark className="h-[22px] w-[22px] stroke-[1.5]" />
        </button>
      </div>
    </div>
  );
}
