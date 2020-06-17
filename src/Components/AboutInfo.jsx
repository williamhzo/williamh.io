import React from 'react';

import about from '../data/about.json';

const AboutInfo = () => {
  return (
    <>
      <h5 className="section__subtitle section__subtitle--margin">
        in a nutshell
      </h5>
      {about.map((el, index) => (
        <p key={index} className="about__description">
          {el.aboutMe}
        </p>
      ))}
      <p className="about__description">
        If you don't read Latin, you can take a look at my resume{' '}
        <a
          href="/media/CV_William-HERMOZO-2020-min.pdf"
          className="about__link"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <p className="about__description">{about[2].tools}</p>
      <hr className="content__separator"></hr>
    </>
  );
};

export default AboutInfo;
