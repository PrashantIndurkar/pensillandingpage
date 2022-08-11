import React from "react";
import profile from "../assets/profile.jpg";

const Chat = () => {
  return (
    <div className="pt-6 border-b border-zinc-300 pb-4">
      <div className="flex space-x-4 ">
        <img
          src={profile}
          className="h-12 rounded-full cursor-pointer w-12"
          alt=""
        />
        <h1 className="font-semibold cursor-pointer">Member Name</h1>
        <p className="text-zinc-500 text-sm">2 days ago</p>
      </div>
      <p className="pl-16 -mt-4 text-zinc-700">
        Can anyone suggest how much DSA is required to crack interview and work
        at top product based company as a front end developer??
      </p>
    </div>
  );
};

export default Chat;
