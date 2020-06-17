import React from 'react';
import Typewriter from 'typewriter-effect';

import SocialLinks from '../Components/SocialLinks';
import MainTitle from '../Components/MainTitle';

import socials from '../data/socials.json';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">
        <Typewriter
          onClick={(typewriter) => {
            typewriter
              .deleteAll()
              .typeString('williamh.io')
              .pauseFor(2500)
              .typeString('WILLIAM HERMOZO')
              .start();
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('williamh.io')
              .pauseFor(2500)
              .deleteAll()
              .typeString('WILLIAM HERMOZO')
              .start();
          }}
        />
      </h1>
      <div className="header__wrapper">
        <MainTitle />
        <ul className="header__list">
          {socials.map((item, index) => (
            <SocialLinks
              key={index}
              link={item.link}
              shortName={item.shortName}
              fullName={item.fullName}
            />
          ))}
        </ul>
      </div>
      <h3 className="header__subtitle">
        I design & code meaningful, user-centered applications for the modern
        web.
      </h3>
      <ul className="header__list--mobile">
        {socials.map((item, index) => (
          <SocialLinks key={index} link={item.link} shortName={item.fullName} />
        ))}
      </ul>
    </header>
  );
};

export default Header;
