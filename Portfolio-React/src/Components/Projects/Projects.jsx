import React from "react";
import projects_data from "../../assets/projects_data";
import "./Projects.css";
import ThreeBackground from "./ThreeBackground";

import pattern from '../../assets/theme.svg';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <ThreeBackground />
      <div className="about-title">
        <h1>My Projects</h1>
        <img src={pattern} alt="theme" />
      </div>

      <div className="projects-grid">
        {projects_data.map((project, index) => (
          <div className="project-card" key={project.id}>
            {/* 1️⃣ Subheader */}
            <h2 className="project-name">{project.name || "Untitled Project"}</h2>

            {/* 2️⃣ Image */}
            <div className="card-image">
              <img
                src={project.image || "/placeholder.png"}
                alt={project.name || "Project Image"}
              />
              <span className="project-number">{index + 1}</span>
            </div>

            {/* 3️⃣ Content */}
            <div className="card-content">
              {/* Tech Stack */}
              <div className="tech-stack">
                {(String(project.tech || "")
                  .split(",")
                  .map((tech) => tech.trim())
                  .filter((tech) => tech !== "")
                ).map((tech) => (
                  <span className="tech-badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="project-description">
                {(project.fullDescription || "")
                  .split("\n\n")
                  .map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
              </div>

              {/* Links */}
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
