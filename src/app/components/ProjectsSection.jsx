// ProjectsSection.jsx
"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Threat Detection System",
    description: "A system designed to detect threats.",
    role: "Data Scientist",
    image: "/images/projects/1.png", // Update or ensure correct image paths
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/Akshith2307/Threat-Detection-System",
    previewUrl: "https://example.com/preview1", // Replace with actual preview link if available
  },
  {
    id: 2,
    title: "Bank Fraud Detection",
    description: "Application to detect bank frauds.",
    role: "Data Scientist",
    image: "/images/projects/2.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/Akshith2307/Bank-Fraud-Detection-",
    previewUrl: "https://example.com/preview2",
  },
  {
    id: 3,
    title: "Cyber Bullying Detection",
    description: "Identifying cyber bullying patterns.",
    role: "Data Scientist",
    image: "/images/projects/3.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/Akshith2307/Cyber-Bullying-Detection",
    previewUrl: "https://example.com/preview3",
  },
  {
    id: 4,
    title: "Obstacle Avoidance Using IOT",
    description: "IOT solution for obstacle avoidance.",
    role: "Data Scientist",
    image: "/images/projects/4.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/Akshith2307/Obstacle-Avoidance-Using-IOT",
    previewUrl: "https://example.com/preview4",
  },
  {
    id: 5,
    title: "We Go Jim",
    description: "App for gym enthusiasts.",
    role: "Data Scientist",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Akshith2307/We-Go-Jim",
    previewUrl: "https://example.com/preview5",
  },
  {
    id: 6,
    title: "Spotify Dashboard",
    description: "Dashboard for Spotify analytics.",
    role: "Data Scientist",
    image: "/images/projects/6.png",
    tag: ["All", "Analytics"],
    gitUrl: "https://github.com/Akshith2307/Spotify-Dashboard",
    previewUrl: "https://example.com/preview6",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={() => handleTagChange("All")} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={() => handleTagChange("Machine Learning")} name="Machine Learning" isSelected={tag === "Machine Learning"} />
        <ProjectTag onClick={() => handleTagChange("Analytics")} name="Analytics" isSelected={tag === "Analytics"} />
        <ProjectTag onClick={() => handleTagChange("Mobile")} name="Mobile" isSelected={tag === "Mobile"} />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              role={project.role}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
