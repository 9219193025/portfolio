import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "E-commerce",
    description: "A responsive gaming portal showcasing games and animations.",
    link: "https://ecommerce-website-oii60rax8-kartikey-tiwaris-projects.vercel.app",
  },
  {
    id: 2,
    title: "Task Tracker App",
    description: "A feature-rich task management app with a clean interface.",
    link: "https://task-94zgac6p7-kartikey-tiwaris-projects.vercel.app",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "An app providing real-time weather updates with animations.",
    link: " https://my-project-2kp3gq290-kartikey-tiwaris-projects.vercel.app ",
  },
];

const Projects = () => (
  <section id="projects" className="py-16 bg-gray-900 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
