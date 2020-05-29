import React from 'react';

import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">
        William<br></br>Hermozo
      </h1>
      <h2 className="header__title">
        I’m a Front-End Developer & Web Designer.
      </h2>
      <h3 className="header__subtitle">
        I design & code meaningful, user-centered applications for the modern
        web.
      </h3>
      <SocialLinks />
    </header>
  );
};

export default Header;
