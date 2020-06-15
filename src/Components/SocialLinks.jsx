import React from 'react';

const SocialLinks = ({ link, shortName, fullName }) => {
  return (
    <li className="header__items">
      <div></div>
      <a
        href={link}
        className="header__links animate-cursor"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <span className="header__links--shortName animate-cursor">
          {shortName}
        </span> */}
        <span className="header__links--fullName animate-cursor">
          {fullName}
        </span>
      </a>
    </li>
  );
};

export default SocialLinks;
