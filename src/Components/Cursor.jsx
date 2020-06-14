// import React, { useEffect, useState, useRef } from 'react';
import React from 'react';
import TweenMax from 'gsap';

const Cursor = () => {
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  const projectLinks = document.querySelectorAll('.projects__link');

  let posX, posY, mouseX, mouseY;

  TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      TweenMax.set(follower, {
        css: {
          left: posX - 20,
          top: posY - 20,
        },
      });

      TweenMax.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        },
      });
    },
  });

  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    console.log(mouseX, mouseY);
  };

  const handleMouseEnter = () => {
    cursor.addClass('active');
    follower.addClass('active');
  };

  const handleMouseLeave = () => {
    cursor.removeClass('active');
    follower.removeClass('active');
  };

  window.addEventListener('mousemove', handleMouseMove);

  projectLinks.forEach((link) => {
    link.addEventListener('mouseenter', handleMouseEnter);
    link.addEventListener('mouseleave', handleMouseLeave);
  });

  return (
    <>
      <div onMouseMove={handleMouseMove} className="cursor"></div>
      <div onMouseMove={handleMouseMove} className="cursor-follower"></div>
    </>
  );
};

export default Cursor;
