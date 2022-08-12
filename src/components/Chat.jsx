import React from "react";
import profile from "../assets/profile.jpg";
import { boxAnimation } from "../motion/Variants";
import { motion } from "framer-motion";

const Chat = ({ question }) => {
  return (
    <motion.div
      variants={boxAnimation}
      className="mt-8 border-b border-zinc-300 pb-4"
    >
      <div className="flex space-x-4 ">
        <img
          src={profile}
          className="h-12 rounded-full cursor-pointer w-12"
          alt=""
        />
        <h1 className="font-semibold cursor-pointer">Member Name</h1>
        <p className="text-zinc-500 text-sm">2 days ago</p>
      </div>

      <p className="pl-16 -mt-4 text-zinc-700">{question}</p>
    </motion.div>
  );
};

export default Chat;
