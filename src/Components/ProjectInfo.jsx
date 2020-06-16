import React from 'react';

const Project = ({ name, technologies, description, link }) => {
  return (
    <div className='projects__hover'>
      <h5 className="section__subtitle">
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
        {/* <p className="projects__technologies">{technologies}</p> */}
        <p className="projects__info">{description}</p>
      </div>
      <hr className="content__separator"></hr>
    </div>
  );
};

export default Project;
