import React from 'react';

const SocialLinks = ({ link, shortName, fullName }) => {
  return (
    <li className="header__items">
      <div></div>
      <a
        href={link}
        className="header__links animate-cursor-large"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={`header__links--${fullName} `}>{shortName}</span>
        {/* <span className={`header__links--${fullName}--fullName `}>
          {fullName}
        </span> */}
      </a>
    </li>
  );
};

export default SocialLinks;
