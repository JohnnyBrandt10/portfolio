'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 50);

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Johnny<span>.</span>
        </a>

        <div
          className={`nav__menu ${menuOpen ? 'show-menu' : ''}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {['home', 'about', 'work', 'services', 'skills', 'experience'].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="nav__link"
                    onClick={closeMenu}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>

          <button
            className="nav__close"
            onClick={closeMenu}
            aria-label="Fermer le menu"
          >
            <i className="ri-close-large-line"></i>
          </button>
        </div>

        <a href="#contact" className="nav__contact" onClick={closeMenu}>
          Contact me
        </a>

        <button
          className="nav__toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <i className="ri-menu-line"></i>
        </button>
      </nav>
    </header>
  );
}
