import React from 'react';

const Project = ({ name, technologies, description, link }) => {
  return (
    <>
      <a
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        className="projects__link"
      >
        <h5 className="section__subtitle">{name} </h5>

        {/* <p className="projects__technologies">{technologies}</p> */}
        <p className="projects__info">{description}</p>
      </a>
      <hr className="content__separator"></hr>
    </>
  );
};

export default Project;
