"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const SlideTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ x: "100%" }} // Start off-screen to the right
        animate={{ x: 0 }} // Slide in to normal position
        exit={{ x: "-100%" }} // Slide out to the left
        transition={{
          duration: 0.4, // Adjust transition speed here
          ease: "easeInOut",
        }}
        className="w-full h-full absolute top-0 left-0"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideTransition;
