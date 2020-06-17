import React from 'react';

import about from '../data/about.json';

const AboutInfo = () => {
  return (
    <>
      <h5 className="section__subtitle section__subtitle--margin">
        in a nutshell
      </h5>
      {/* {about.map((el, index) => (
         <p key={index} className="about__description">
           {el.aboutMe}
         </p>
      ))} */}
      <p className="about__description">{about[0].aboutMeIntro}</p>
      <p className="about__description">
        Inquisitive and driven, I find inspiration and resources in a broad
        range of fields and art. Writing code to turn pixels into living
        products is what makes me{' '}
        <span className="about__description--strike">
          spend sleepless nights
        </span>{' '}
        wake up in the morning.
      </p>
      <p className="about__description section__subtitle--margin">
        You can take a look at my resume{' '}
        <a
          href="/media/CV_William-HERMOZO-2020-min.pdf"
          className="about__link"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <hr className="content__separator"></hr>
    </>
  );
};

export default AboutInfo;
