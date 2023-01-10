import { useEffect } from 'react';
import './scrollup.css';

const scrollUpHandler = () => {
  const scrollUp = document.querySelector('.scrollup');
  if (window.scrollY >= 560) {
    scrollUp?.classList.add('show-scroll');
  } else {
    scrollUp?.classList.remove('show-scroll');
  }
};

const ScrollUp = () => {
  useEffect(() => {
    window.addEventListener('scroll', scrollUpHandler);

    return () => {
      window.removeEventListener('scroll', scrollUpHandler);
    };
  }, []);

  return (
    <a className="scrollup" href="#">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
