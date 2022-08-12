import React from "react";
import { motion } from "framer-motion";
import { BsFillPeopleFill } from "react-icons/bs";
import { boxAnimation } from "../motion/Variants";

const ExploreGroup = ({ GroupImage, GroupName }) => {
  return (
    <motion.div
      variants={boxAnimation}
      // whileHover={{ scale: 1.1 }}
      className="w-3/5 md:w-fit shadow-md rounded-lg h-fit mt-12 pb-6"
    >
      <img
        src={GroupImage}
        className="h-1/2 w-full rounded-tr-lg rounded-tl-lg"
        alt="groupIcon"
      ></img>
      <div className="mt-6 px-4">
        <h1 className="font-semibold">{GroupName}</h1>
        <p className="leading-relaxed text-sm mt-2">
          Most higly joined community with higly active members.
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-x-2">
            <BsFillPeopleFill className="h-5 w-5" />
            <h2 className="font-semibold text-xs text-gray-700">1202</h2>
          </div>
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="bg-primaryBlueLight rounded-full font-bold px-4 py-1 py text-white shadow-md hover:bg-primaryBlue transition-all duration-200"
          >
            Join
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ExploreGroup;
