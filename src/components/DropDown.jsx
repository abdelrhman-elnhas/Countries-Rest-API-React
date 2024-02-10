import { FiChevronDown } from "react-icons/fi";
import {
  FaEarthAfrica,
  FaEarthAmericas,
  FaEarthAsia,
  FaEarthEurope,
  FaEarthOceania,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-8 flex items-center justify-center">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md shadow-md text-slate-900 bg-white dark:text-slate-100 dark:bg-slate-700 hover:bg-slate-200 hover:dark:bg-slate-600 transition-colors"
        >
          <span className="font-medium text-sm">Filter by region</span>

          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100 shadow-xl absolute top-[120%] left-[60%] w-48 overflow-hidden"
        >
          <Option setOpen={setOpen} Icon={FaEarthAfrica} text="Africa" />
          <Option setOpen={setOpen} Icon={FaEarthAmericas} text="America" />
          <Option setOpen={setOpen} Icon={FaEarthAsia} text="Asia" />
          <Option setOpen={setOpen} Icon={FaEarthEurope} text="Europe" />
          <Option setOpen={setOpen} Icon={FaEarthOceania} text="Oceania" />
        </motion.ul>
      </motion.div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100 hover:bg-slate-200 hover:dark:bg-slate-600 rounded-md transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
