import React from 'react';

import SocialLinks from './SocialLinks';

import socials from '../data/socials.json';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">
        William<br></br>Hermozo
      </h1>
      <div className="header__wrapper">
        <h2 className="header__title">
          I’m a <nobr>Front-End</nobr> Developer & Web Designer.
        </h2>
        <h3 className="header__subtitle">
          I design & code meaningful, user-centered applications for the modern
          web.
        </h3>
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
    </header>
  );
};

export default Header;
