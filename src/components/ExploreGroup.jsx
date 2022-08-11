import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import jcs from "../assets/Group.png";

const ExploreGroup = () => {
  return (
    <div className="w-3/5 md:w-fit shadow-md rounded-lg h-fit mt-12 pb-6">
      <img src={jcs} className="h-1/2 w-full rounded-tr-lg rounded-tl-lg"></img>
      <div className="mt-6 px-4">
        <h1 className="font-semibold">Explore Groups</h1>
        <p className="leading-relaxed text-sm mt-2">
          Most higly joined community with higly active members.
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-x-2">
            <BsFillPeopleFill className="h-5 w-5" />
            <h2 className="font-semibold text-xs text-gray-700">1202</h2>
          </div>
          <button className="bg-primaryBlueLight rounded-full font-bold px-4 py-1 py text-white shadow-md hover:bg-primaryBlue transition-all duration-200">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreGroup;
