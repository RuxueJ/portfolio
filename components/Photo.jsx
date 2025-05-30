"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Photo = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
          className={`w-[200px] h-[200px] xl:w-[580px] xl:h-[580px] absolute rounded-full overflow-hidden ${
            isDarkMode ? "mix-blend-lighten" : "mix-blend-normal"
          }`}
        >
          <Image
            src="/assets/portfolio (2).jpg"
            priority
            quality={100}
            fill
            className="object-cover"
            alt=""
          />
        </motion.div>

        <motion.svg
          className="w-[200px] xl:w-[580px] h-[200px] xl:h-[580px]"
          fill="transparent"
          viewBox="0 0 580 580"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="290"
            cy="290"
            r="350"
            stroke="var(--accent)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="join"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
