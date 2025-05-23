import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
    // left: "0%",
  },
  animate: {
    top: "100%",
    // left: "100%",
    // transition: {
    //   duration: 1,
    //   ease: "easeInOut",
    // },
  },
  exit: {
    top: ["100%", "0%"],
    // left: ["100%", "0%"],
    // transition: {
    //   duration: 1,
    //   ease: "easeInOut",
    // },
  },
};

const reverseIndex = (index) => {
  const totalSteps = 4;
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
