import React from 'react';

const MainTitle = () => {
  return (
    <>
      <h2 className="header__title">
        I’m a creative{' '}
        <span className="header__title--fullCaps">
          <nobr>Front-End</nobr> Developer
        </span>{' '}
        <span className="header__title--transparent">&</span>{' '}
        <nobr>Web Designer</nobr>.
      </h2>
    </>
  );
};

export default MainTitle;
