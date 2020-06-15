import React from 'react';

import Project from './Project';

import projects from '../data/projects.json';

const Projects = () => {
  return (
    <section className="projects">
      <h4 className="projects__title">
        selected<br></br>projects.
      </h4>
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          technologies={project.technologies}
          description={project.description}
          link={project.link}
        />
      ))}
    </section>
  );
};

export default Projects;
