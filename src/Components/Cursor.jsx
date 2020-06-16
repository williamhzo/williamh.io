import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [cursorPositionX, setCursorPositionX] = useState(null);
  const [cursorPositionY, setCursorPositionY] = useState(null);
  const [cursorSize, setCursorSize] = useState(1);

  useEffect(() => {
    const hoverLinks = document.querySelectorAll('.animate-cursor');
    const hoverLinksLarge = document.querySelectorAll('.animate-cursor-large');

    hoverLinks.forEach((link) =>
      link.addEventListener('mouseenter', animateScaleCursorIn)
    );
    hoverLinks.forEach((link) =>
      link.addEventListener('mouseleave', animateScaleCursorOut)
    );
    hoverLinksLarge.forEach((link) =>
      link.addEventListener('mouseenter', animateLargeScaleCursorIn)
    );
    hoverLinksLarge.forEach((link) =>
      link.addEventListener('mouseleave', animateScaleCursorOut)
    );
    window.addEventListener('mousemove', editCursor);
  }, []);

  const animateScaleCursorIn = (e) => {
    setCursorSize(4);
  };

  const animateLargeScaleCursorIn = (e) => {
    setCursorSize(8);
  };

  const animateScaleCursorOut = (e) => {
    setCursorSize(1);
  };

  const editCursor = (e) => {
    setCursorPositionX(e.clientX);
    setCursorPositionY(e.clientY);
  };

  const cursorStyle = {
    left: `${cursorPositionX}px`,
    top: `${cursorPositionY}px`,
    transform: `scale(${cursorSize})`,
  };

  return (
    <>
      <div className="cursor" style={cursorStyle}></div>
    </>
  );
};

export default Cursor;
