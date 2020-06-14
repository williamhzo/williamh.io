import React from 'react';

const SocialLinks = ({ link, shortName, fullName }) => {
  return (
    <li className="header__items">
      <a
        href={link}
        className="header__links"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="header__links--shortName">{shortName}</span>
        <span className="header__links--fullName">{fullName}</span>
      </a>
    </li>
  );
};

export default SocialLinks;
