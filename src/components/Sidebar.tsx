import { ChevronDown } from "lucide-react";
import userProfileImg from "../assets/images/user-profile-img.png";
import userCoverImg from "../assets/images/user-cover-img.png";

export default function Sidebar() {
  return (
    <div className="w-full lg:w-72 flex-shrink-0 space-y-4">
      {/* Profile Card */}
      <div className="card-hover bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden relative pb-6 cursor-pointer">
        {/* Cover Photo */}
        <div
          className="h-24 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${userCoverImg.src})` }}
        ></div>

        {/* Profile Info */}
        <div className="flex flex-col items-center px-6 mt-[-36px] relative z-10">
          {/* Avatar */}
          <div className="h-[72px] w-[72px] rounded-full border-4 border-white overflow-hidden shadow-sm">
            <img
              src={userProfileImg.src}
              alt="Albert Flores"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-gray-900 font-bold text-lg mt-3">Albert Flores</h2>
          <p className="text-gray-500 text-xs text-center leading-relaxed mt-1 line-clamp-2">
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </p>
          <p className="text-gray-400 text-xs mt-2 font-medium">
            Clinton, Maryland
          </p>
        </div>
      </div>

      {/* Stats Card */}
      <div className="card-hover bg-white rounded-xl shadow-sm border border-gray-100 p-4 cursor-pointer">
        <ul className="space-y-4 text-sm">
          <li className="flex justify-between items-center text-gray-700 font-medium hover:text-[#0154AA] transition-colors cursor-pointer">
            <span>Profile Visitors</span>
            <span className="text-primary ">140</span>
          </li>
          <li className="flex justify-between items-center text-gray-700 font-medium pb-4 border-b border-gray-100 hover:text-[#0154AA] transition-colors cursor-pointer">
            <span>Resume Viewers</span>
            <span className="text-primary ">20</span>
          </li>
          <li className="flex justify-between items-center text-gray-700 font-medium pt-1 hover:text-[#0154AA] transition-colors cursor-pointer">
            <span>My Jobs</span>
            <span className="text-primary ">88</span>
          </li>
        </ul>
      </div>

      {/* Calendar Card */}
      <div className="card-hover bg-white rounded-xl shadow-sm border border-gray-100 p-5 cursor-pointer hover:bg-gray-50/50 transition-colors">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-gray-900 font-bold text-sm">My calendar</h3>
            <p className="text-gray-400 text-xs mt-1">Upcoming Interviews</p>
          </div>
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
