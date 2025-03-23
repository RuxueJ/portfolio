"use client";
import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
  SiJest,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const about = {
  title: "About me",
  description: "",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ruxue Jin",
    },
    {
      fieldName: "School",
      fieldValue: "San Francisco State University",
    },
    {
      fieldName: "Degree",
      fieldValue: "Master of Science in Computer Science",
    },
    {
      fieldName: "Email",
      fieldValue: "rjin@sfsu.edu",
    },
  ],
};

const experiences = {
  icon: "",
  title: "My Experience",
  description: "experience",
  items: [
    {
      company: "San Francisco State University",
      position: "Software Engineer",
      duration: "Jan 2024 - May 2024",
    },
    {
      company: "Open Energy Dashboard",
      position: "Software Engineer Intern",
      duration: "Dec 2023 - Jan 2024",
    },
    {
      company: "San Francisco State University",
      position: "Accessible Media Assistant",
      duration: "Dec 2024 - Jan 2025",
    },
    {
      company: "San Francisco State University",
      position: "Web Accessibility Evaluator",
      duration: "May 2024 - Feb 2025",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description: "my education",
  items: [
    {
      school: "San Francisco State University",
      degree: "Master of Science in Computer Science",
      duration: "Aug 2023 - May 2025",
    },
    {
      school: "Huazhong Univerisity of Science and Technology",
      degree: "Bachelor of Science in Civil Engineering",
      duration: "Aug 2011 - May 2015",
    },
  ],
};

const skills = [
  {
    category: "Frontend",
    skills: [
      { icon: <FaHtml5 />, name: "HTML 5" },
      { icon: <FaCss3 />, name: "CSS 3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaPython />, name: "Python" },
      { icon: <FaJava />, name: "Java" },
      { icon: <SiGraphql />, name: "GraphQL" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { icon: <FaDatabase />, name: "SQL & NoSQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { icon: <FaGitAlt />, name: "Git & GitHub" },
      { icon: <FaDocker />, name: "Docker" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <FaAws />, name: "AWS" },
    ],
  },
  {
    category: "Testing & CI/CD",
    skills: [{ icon: <SiJest />, name: "Jest" }],
  },
];

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full  text-[white] max-w-[380] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full ">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">
                  {experiences.title}
                </h3>
                <p className="max-w-[600px] text-background mx-auto xl:mx-0">
                  {experiences.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiences.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-[#00ff99]">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px]  text-white text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white mx-auto xl:mx-0">
                  {experiences.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-[#00ff99]">
                            {item.duration}
                          </span>
                          <h3 className="text-xl text-white max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white">{item.title}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex felx-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                {skills.map((category, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-2xl font-semibold mb-4 text-[#00ff99]">
                      {category.category}
                    </h3>
                    <ul className="space-y-3">
                      {category.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="flex items-center space-x-3 p-3 rounded-lg text-white bg-gray-700 hover:bg-gray-600 transition"
                        >
                          <span className="text-3xl text-[#00ff99]">
                            {skill.icon}
                          </span>
                          <p className="text-lg">{skill.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:jusitfy-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
