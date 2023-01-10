import './header.css';
import { useState, useCallback, useEffect } from 'react';
import { navInfo } from './data';

const scrollHandler = function () {
  const header = document.querySelector('.header');
  if (window.scrollY >= 80) {
    header?.classList.add('scroll-header');
  } else {
    header?.classList.remove('scroll-header');
  }
};

const Header = () => {
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const navLinks = document.getElementsByClassName('nav__link');

    const activeLinkScrollHandler = () => {
      const fromTop = window.scrollY;
      Array.from(navLinks).forEach((link) => {
        const href = link.getAttribute('href');
        const section = document.querySelector(`${href}`) as HTMLElement;
        if (section) {
          if (
            section.offsetTop - 70 <= fromTop &&
            section.offsetTop - 70 + section.offsetHeight > fromTop
          ) {
            if (href) setActiveLink(href);
          }
        }
      });
    };

    window.addEventListener('scroll', activeLinkScrollHandler);
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('scroll', activeLinkScrollHandler);
    };
  }, []);

  const [menuVisibility, setMenuVisibility] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuVisibility(!menuVisibility);
  }, [menuVisibility]);

  return (
    <header className="header">
      <nav className="nav container">
        <a className="nav__logo" href="index.html">
          Ilya Kotsur
        </a>
        <div className={menuVisibility ? 'nav__menu show-menu' : 'nav__menu hide-menu'}>
          <ul className="nav__list">
            {navInfo.map((item) => {
              return (
                <li className="nav__item" key={item.text}>
                  <a
                    className={
                      activeLink === item.href
                        ? `${item.a_className} active-link `
                        : `${item.a_className}`
                    }
                    href={item.href}
                  >
                    <i className={`uil nav__icon ${item.i_className}`}></i>
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
          <i className="uil uil-times nav__close" onClick={toggleMenu}></i>
        </div>
        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
