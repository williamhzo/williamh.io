import React from 'react';

const Project = ({ name, technologies, description, link }) => {
  return (
    <div>
      <h5 className="projects__subtitle">
        <a
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="projects__link animate-cursor"
        >
          {name}
        </a>
      </h5>
      <div className="projects__description">
        <p className="projects__technologies">{technologies}</p>
        <p className="projects__info">{description}</p>
      </div>
      <hr className="content__separator"></hr>
    </div>
  );
};

export default Project;
