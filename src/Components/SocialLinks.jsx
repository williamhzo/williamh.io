import React from 'react';

const SocialLinks = ({ link, shortName, fullName }) => {
  return (
    <li className="header__items">

      <a
        href={link}
        className="header__links header__links--mobile animate-cursor-large"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={`header__links--${fullName} `}>{shortName}</span>
      </a>
    </li>
  );
};

export default SocialLinks;
