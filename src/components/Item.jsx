import { boxAnimation } from "../motion/Variants";
import { motion } from "framer-motion";

const Item = ({ Icon, description }) => {
  return (
    <motion.div
      variants={boxAnimation}
      className="bg-white flex items-center md:flex-col space-x-6 md:space-y-4 md:text-center md:space-x-0 p-6 w-5/6 rounded-md h-60 justify-center"
    >
      <Icon className="w-1/2 h-14 md:h-10 lg:h-14" />
      <p>{description}</p>
    </motion.div>
  );
};

export default Item;
