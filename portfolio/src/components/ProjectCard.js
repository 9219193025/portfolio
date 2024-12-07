import React from "react";

const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
    <p className="text-gray-400 mb-4">{project.description}</p>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-300"
    >
      Visit Project
    </a>
  </div>
);

export default ProjectCard;
