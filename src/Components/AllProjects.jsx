import React from 'react';

import Project from './Project'

import projects from '../data/projects.json';

const Projects = () => {
  return (
    <section className="projects">
      <h4 className="projects__title">
        selected<br></br>projects.
      </h4>
      {projects.map((project, index) => (
        <Project
          name={project.name}
          technologies={project.technologies}
          description={project.description}
          link={project.link}
        />
      ))}
      <div className="projects__wrapper">
        <h5 className="projects__subtitle">
          <a
            href="https://www.freely.cool/"
            rel="noopener noreferrer"
            target="_blank"
            className="projects__link"
          >
            freely
          </a>
        </h5>
        <div className="projects__description">
          <p className="projects__technologies">
            React.js, Node.js, Express, MongoDB
          </p>
          <p className="projects__info">PWA, mobile-first | 2020</p>
        </div>
        <hr className="projects__separator"></hr>
      </div>
      <div className="projects__wrapper">
        <h5 className="projects__subtitle">
          <a
            href="https://scoby-frw.herokuapp.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="projects__link"
          >
            scoby
          </a>
        </h5>
        <div className="projects__description">
          <p className="projects__technologies">
            React.js, Node.js, Express, MongoDB
          </p>
          <p className="projects__info">Map-based, mobile-first | 2020</p>
        </div>
        <hr className="projects__separator"></hr>
      </div>
      <div className="projects__wrapper">
        <h5 className="projects__subtitle">
          <a
            href="https://williamhzo.github.io/emoji-quiz/"
            rel="noopener noreferrer"
            target="_blank"
            className="projects__link"
          >
            emoji-quiz
          </a>
        </h5>
        <div className="projects__description">
          <p className="projects__technologies">
            Vanilla JavaScript, HTML5, CSS3
          </p>
          <p className="projects__info">SPA | 2020</p>
        </div>
        <hr className="projects__separator"></hr>
      </div>
    </section>
  );
};

export default Projects;
