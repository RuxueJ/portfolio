"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";

import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack Project",
    title: "Zesty",
    description:
      "Zesty is a AI based website to enable users to generate personalized recipes based on refrigerator ingredients.",
    stack: [{ name: "react" }, { name: "nextjs" }, { name: "tailwindcss" }],
    image: "/assets/EcoScan.png",
    live: "",
    github: "",
  },

  {
    num: "02",
    category: "Hackathon Winner Project",
    title: "EcoScan",
    description: "description of project 2",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "NodeJS" },
      { name: "Fireworks API" },
    ],
    image: "/assets/EcoScan.png",
    live: "https://devpost.com/software/ecoscan-pz96vj",
    github: "https://github.com/RuxueJ/SFHacks24",
  },
  {
    num: "03",
    category: "Multiplayer Game",
    title: "project 3",
    description: "description of project 3",
    stack: [{ name: "react" }, { name: "nextjs" }, { name: "tailwindcss" }],
    image: "/assets/EcoScan.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Multiplayer Game",
    title: "project 4",
    description: "description of project 3",
    stack: [{ name: "react" }, { name: "nextjs" }, { name: "tailwindcss" }],
    image: "/assets/EcoScan.png",
    live: "",
    github: "",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index

    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* category */}
              <h2 className="text-[42px] font-bold leaing-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>

              {/* description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4 ">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* add comma if not last item */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>

                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt="EcoScan Thumbnail"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/*slider buttons*/}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-[0] z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transiton-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
// "use client";

// import { BsArrowDownRight } from "react-icons/bs";

// import Link from "next/link";
// import { Description } from "@radix-ui/react-dialog";
// import { motion } from "framer-motion";
// import Social from "@/components/Social";

// const projects = [
//   {
//     num: "01 Full Stack Application",
//     title: "Zesty",
//     category: "AI and food",
//     description:
//       "Zesty is a AI based website to enable users to generate personalized recipes based on refrigerator ingredients.",
//     href: "",
//   },
//   {
//     num: "02 Hackathon Winner Project",
//     title: "EcoScan",
//     category: "AI and environment",
//     description:
//       "EcoScan is a AI based website to help users to sort the trash into three trash bins.",
//     href: "https://devpost.com/software/ecoscan-pz96vj",
//   },
//   {
//     num: "03 Multi-pleyer Game",
//     title: "Uno Game",
//     category: "Game and Entertainment",
//     description: "Logo design",
//     href: "",
//   },
//   {
//     num: "04 OOP Java Game",
//     title: "Tank Game",
//     category: "Game and Entertainment",
//     description: "SEO",
//     href: "",
//   },
//   // {
//   //   num: "05 Front end Project",
//   //   title: "Music Visualization",
//   //   category: "Art",
//   //   description: "SEO",
//   //   href: "",
//   // },
//   // {
//   //   num: "05 Data Visualization Project",
//   //   title: "Music Visualization",
//   //   category: "Art",
//   //   description: "SEO",
//   //   href: "",
//   // },
//   // {
//   //   num: "05 Data Visualization Project",
//   //   title: "Music Visualization",
//   //   category: "Art",
//   //   description: "SEO",
//   //   href: "",
//   // },
// ];
// const Projects = () => {
//   return (
//     <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{
//             opacity: 1,
//             transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//           }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
//         >
//           {projects.map((project, index) => {
//             return (
//               <div
//                 key={index}
//                 className="flex-1 flex flex-col justify-center gap-6 group"
//               >
//                 {/* top */}
//                 <div className="w-full flex justify-between items-center">
//                   <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
//                     {project.num}
//                   </div>
//                   <Link
//                     href={project.href}
//                     className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500
//                     flex justify-center items-center hover:-rotate-45"
//                   >
//                     <BsArrowDownRight className="text-primary text-3xl" />
//                   </Link>
//                 </div>

//                 {/* title */}
//                 <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
//                   {project.title}
//                 </h2>

//                 <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
//                   {project.category}
//                 </h2>

//                 {/* description */}
//                 <p className="text-white/60">{project.description}</p>

//                 {/* border */}
//                 <div className="border-b border-white/20 w-full"></div>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
