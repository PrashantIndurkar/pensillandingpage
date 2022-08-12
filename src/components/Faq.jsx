import React from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { motion } from "framer-motion";
import { boxAnimation } from "../motion/Variants";

const Faq = ({ answer, question }) => {
  const [visible, setVisible] = useState(false);
  return (
    <motion.div
      variants={boxAnimation}
      className="mt-6 border-b border-zinc-300 pb-4"
    >
      <div className="flex justify-between">
        <h1 className="font-semibold">{question}</h1>
        {visible ? (
          <MinusCircleIcon
            className="h-5 w-5 md:h-7 md:w-7 cursor-pointer text-blue-600"
            onClick={() => setVisible(!visible)}
          />
        ) : (
          <PlusCircleIcon
            className="h-5 w-5 md:h-7 md:w-7 cursor-pointer text-blue-600"
            onClick={() => setVisible(!visible)}
          />
        )}
      </div>
      {visible && (
        <p className="mt-2 text-gray-800 transition-all duration-200 ease-in">
          {answer}
        </p>
      )}
    </motion.div>
  );
};

export default Faq;
