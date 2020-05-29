import React from 'react';

const SocialLinks = () => {
  return (
    <ul className="header__links">
      {/* <li className="header__items">
        <Link to='/README.md' className="header__links">email</Link>
      </li> */}
      <li className="header__items">
        <a
          href="https://www.linkedin.com/in/williamhermozo/"
          className="header__links"
        >
          linkedin
        </a>
      </li>
      <li className="header__items">
        <a href="https://github.com/williamhzo" className="header__links">
          github
        </a>
      </li>
      <li className="header__items">
        <a href="https://twitter.com/williamhzo" className="header__links">
          twitter
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
