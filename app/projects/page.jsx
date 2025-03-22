"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { BsPlayCircle, BsGithub, BsFilePdf } from "react-icons/bs";

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
    num: "01 Zesty",
    title: "Zesty",
    category: "Web Application",
    description:
      "Zesty is a AI based website to enable users to generate personalized recipes based on refrigerator ingredients.",
    stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Flask" },
      { name: "Python" },
      { name: "Gemini API" },
      { name: "AWS" },
      { name: "Nginx" },
      { name: "Git" },
    ],
    images: [
      "/assets/Zesty/Zesty_1.png",
      "/assets/Zesty/Zesty_9.png",
      "/assets/Zesty/Zesty_3.png",
      "/assets/Zesty/Zesty_4.png",
      "/assets/Zesty/Zesty_2.png",
      "/assets/Zesty/Zesty_5.png",
      "/assets/Zesty/Zesty_6.png",
      "/assets/Zesty/Zesty_7.png",
      "/assets/Zesty/Zesty_8.png",
    ],

    mobileImages: [
      "/assets/Zesty/Zesty_1.png",
      "/assets/Zesty/Zesty_9.png",
      "/assets/Zesty/Zesty_3.png",
      "/assets/Zesty/Zesty_4.png",
      "/assets/Zesty/Zesty_2.png",
      "/assets/Zesty/Zesty_5.png",
      "/assets/Zesty/Zesty_6.png",
      "/assets/Zesty/Zesty_7.png",
      "/assets/Zesty/Zesty_8.png",
    ],
    live: "https://www.youtube.com/watch?v=WTBUxciHZ9o&t=5s",
    github: "https://github.com/RuxueJ/Zesty",
  },

  {
    num: "02 EcoScan",

    title: "EcoScan",
    category: "Web Application",
    description:
      "EcoScan is a web application that uses AI to analyze trash and determine the appropriate disposal bin—Compost, Recycle, Landfill, or No Bin.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "NodeJS" },
      { name: "Fireworks API" },
    ],
    images: [
      "/assets/EcoScan/EcoScan.png",
      "/assets/EcoScan/EcoScan_2.png",
      "/assets/EcoScan/EcoScan_3.png",
      "/assets/EcoScan/EcoScan_4.png",
      "/assets/EcoScan/EcoScan_5.png",
      "/assets/EcoScan/EcoScan_6.png",
      "/assets/EcoScan/EcoScan_7.png",
    ],

    mobileImages: [
      "/assets/EcoScan/EcoScan.png",
      "/assets/EcoScan/EcoScan_2.png",
      "/assets/EcoScan/EcoScan_3.png",
      "/assets/EcoScan/EcoScan_4.png",
      "/assets/EcoScan/EcoScan_5.png",
      "/assets/EcoScan/EcoScan_6.png",
      "/assets/EcoScan/EcoScan_7.png",
    ],
    live: "https://devpost.com/software/ecoscan-pz96vj",
    github: "https://github.com/RuxueJ/SFHacks24",
  },
  {
    num: "03 UNO",
    title: "project 3",
    category: "Game Application",
    description:
      "A web-based multiplayer UNO game that enables players to create rooms, chat with other participants, and enjoy the classic card game online.",
    stack: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "Next.js" },
      { name: "PostgreSQL" },
      { name: "Socket.io" },
    ],
    images: [
      "/assets/Uno/Uno_2.png",
      "/assets/Uno/Uno_1.png",
      "/assets/Uno/Uno_3.png",
      "/assets/Uno/Uno_4.png",
      "/assets/Uno/Uno_5.png",
    ],
    mobileImages: [
      "/assets/Mobile_uno/mobile_uno_0.png",
      "/assets/Mobile_uno/mobile_uno_1.png",
      "/assets/Mobile_uno/mobile_uno_2.png",
      "/assets/Mobile_uno/mobile_uno_3.png",
      "/assets/Mobile_uno/mobile_uno_4.png",
      "/assets/Mobile_uno/mobile_uno_5.png",
    ],
    live: "https://youtu.be/0j1kEpJ7KBg",
    github: "https://github.com/RuxueJ/Uno",
  },

  {
    num: "04 Tank Battle",
    title: "project 3",
    category: "Game Application",
    description:
      "A web-based multiplayer UNO game that enables players to create rooms, chat with other participants, and enjoy the classic card game online.",
    stack: [{ name: "Java" }, { name: "OOP" }],
    images: ["/assets/TankGame.png"],
    mobileImages: ["/assets/TankGame.png"],
    live: "https://www.youtube.com/watch?v=aejM3Vc4LkY",
    github: "https://github.com/RuxueJ/2D_TankGame",
  },

  {
    num: "05 Music Visualizer",
    title: "project 3",
    category: "Web Application",
    description:
      "A web-based multiplayer UNO game that enables players to create rooms, chat with other participants, and enjoy the classic card game online.",
    stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "PostgreSQL" },
    ],
    images: [
      "/assets/Music_Visualizer/Music_Visualizer_1.png",
      "/assets/Music_Visualizer/Music_Visualizer_2.png",
      "/assets/Music_Visualizer/Music_Visualizer_3.png",
      "/assets/Music_Visualizer/Music_Visualizer_4.png",
    ],
    mobileImages: [
      "/assets/Music_Visualizer/Music_Visualizer_1.png",
      "/assets/Music_Visualizer/Music_Visualizer_2.png",
      "/assets/Music_Visualizer/Music_Visualizer_3.png",
      "/assets/Music_Visualizer/Music_Visualizer_4.png",
    ],
    live: "https://youtu.be/MkqYqad77SA",
    github: "https://github.com/RuxueJ/Music_Visualizer",
  },

  {
    num: "06 Parallel Optimization of MML Using OpenMP",
    title: "project 3",
    category: "HPC",
    description:
      "Parallelizing matrix multiplication with OpenMP, evaluating performance at different concurrency levels and problem sizes, and comparing to CBLAS.",
    stack: [
      { name: "C++" },
      { name: "Parallel Programming" },
      { name: "OpenMP" },
      { name: "LIKWID" },
    ],
    images: [
      "/assets/Parallel_MMUL/Basic_MMUL_OpenMP.png",
      "/assets/Parallel_MMUL/Block_MMUL_OpenMP.png",
    ],
    mobileImages: [
      "/assets/Parallel_MMUL/Basic_MMUL_OpenMP.png",
      "/assets/Parallel_MMUL/Block_MMUL_OpenMP.png",
    ],
    pdf: "assets/Parallel_MMUL/Parallel_MMUL.pdf",
  },
  {
    num: "07 Stencil Operation",
    title: "project 3",
    category: "HPC",
    description:
      "A web-based multiplayer UNO game that enables players to create rooms, chat with other participants, and enjoy the classic card game online.",
    stack: [
      { name: "C++" },
      { name: "Convolutinoal Multiplication" },
      { name: "distributed programming" },
      { name: "MPI" },
    ],
    images: [
      "/assets/Stencil_Operation/tile_decomposed.png",
      "/assets/Stencil_Operation/Zebra_original.jpg",
    ],
    mobileImages: [
      "/assets/Stencil_Operation/tile_decomposed.png",
      "/assets/Stencil_Operation/Zebra_original.jpg",
    ],
    pdf: "/assets/Stencil_Operation/Stencil_Operation.pdf",
  },

  //   {
  //     num: "09 ",
  //     title: "project 3",
  //     category: "Deep Learning",
  //     description:
  //       "A web-based multiplayer UNO game that enables players to create rooms, chat with other participants, and enjoy the classic card game online.",
  //     stack: [
  //       { name: "React" },
  //       { name: "TypeScript" },
  //       { name: "Next.js" },
  //       { name: "PostgreSQL" },
  //     ],
  //     images: ["/assets/Uno/Uno_2.png"],
  //     mobileImages: ["/assets/Mobile_uno/mobile_uno_0.png"],
  //     live: "",
  //     github: "https://github.com/RuxueJ/Uno",
  //   },
];

const categories = [
  "All",
  "Web Application",
  "Game Application",
  "HPC",
  "Deep Learning",
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex); // Update the current index when slide changes
  };

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
        <div className="flex flex-col gap-10 xl:gap-[30px] justify-center items-center ">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`sm:w-auto sm:px-6 sm:py-3 text-sm px-6 py-2 font-semibold rounded-lg transition-all duration-300 
                ${
                  selectedCategory === category
                    ? "bg-accent text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col w-full xl:w-[50%] xl:justify-between xl:order-none mb-8 xl:mb-0 xl:gap-[30px]"
            >
              {/* Project details section */}

              <div className="flex flex-col gap-[30px]">
                {/* Project details */}
                <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>

                {/* Project images swiper */}
                <div className="w-full">
                  <Swiper
                    onSlideChange={handleSlideChange} // Update currentIndex when slide changes
                    loop={false} // Disable looping to avoid going back from the last image to the first one
                    spaceBetween={30}
                    slidesPerView={1}
                    className="h-[460px]"
                  >
                    {project.images.map((image, imageIndex) => (
                      <SwiperSlide key={imageIndex}>
                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                          {/* Overlay */}
                          <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                          {/* Desktop Image - hidden on small screens */}
                          <div className="relative w-full h-full hidden sm:block">
                            <Image
                              src={image}
                              alt="Website Thumbnail"
                              layout="fill"
                              className="object-cover"
                            />
                          </div>

                          {/* Mobile Image - shown only on small screens */}
                          <div className="relative w-full h-full sm:hidden">
                            <Image
                              src={project.mobileImages[imageIndex]}
                              alt="Website Thumbnail - Mobile"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}

                    {/* Slider buttons */}

                    <WorkSliderBtns
                      containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] z-20 w-full justify-between xl:w-full xl:justify-between"
                      btnStyles="bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                      currentIndex={currentIndex} // Pass current index
                      totalImages={project.images.length} // Pass total images count
                    />
                  </Swiper>
                </div>

                <p className="text-white/60">{project.description}</p>

                {/* Stack */}
                <div className="flex">
                  <ul className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.stack.map((item, index) => (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  {project.category === "HPC" ? (
                    <Link
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsFilePdf className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Paper</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  ) : (
                    <>
                      {/* Live project */}
                      <Link href={project.live}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                              <BsPlayCircle className="text-white text-3xl group-hover:text-accent" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                      {/* Github */}
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
                    </>
                  )}
                </div>
              </div>

              {/* Border */}
              <div className="border border-white/20 mt-8 mb-8"></div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
