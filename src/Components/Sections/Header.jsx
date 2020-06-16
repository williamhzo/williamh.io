import React from 'react';

import SocialLinks from '../SocialLinks';

import socials from '../../data/socials.json';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">William Hermozo</h1>
      <div className="header__wrapper">
        <h2 className="header__title">
          I’m a creative{' '}
          <span className="header__title--fullCaps">
            <nobr>Front-End</nobr> Developer
          </span>{' '}
          <span className="header__title--transparent">&</span>{' '}
          <nobr>Web Designer</nobr>.
        </h2>
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
    </header>
  );
};

export default Header;
