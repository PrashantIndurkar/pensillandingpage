import React from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";
import { useState } from "react";
const Faq = ({ answer, show }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="mt-6 border-b border-zinc-300 pb-4">
      <div className="flex justify-between">
        <h1 className="font-semibold">Is there free trail available?</h1>
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
    </div>
  );
};

export default Faq;
