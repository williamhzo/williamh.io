import React from 'react';

import Project from '../Project';

import projects from '../../data/projects.json';

const Projects = () => {
  return (
    <section className="projects">
      <h4 className="projects__title">selected projects.</h4>
      <div className="projects__wrapper">
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            technologies={project.technologies}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
