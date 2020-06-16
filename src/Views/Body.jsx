import React from 'react';

import Project from '../Components/ProjectInfo';
import ContactInfo from '../Components/ContactInfo';
import AboutInfo from '../Components/AboutInfo.jsx';

import projects from '../data/projects.json';

const Body = () => {
  return (
    <>
      <section className="projects">
        <h4 className="section__title">selected projects.</h4>
        <div className="section__wrapper">
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
      <section className="about">
        <h4 className="section__title">
          about me.
        </h4>
        <div className="section__wrapper">
          <AboutInfo />
        </div>
      </section>
      <section className="contact">
        <h4 className="section__title">
          want to say hi?
        </h4>
        <div className="section__wrapper">
          <ContactInfo />
        </div>
      </section>
    </>
  );
};

export default Body;
