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

  const navItems = [
  { href: 'home', label: 'Accueil' },
  { href: 'about', label: 'À propos' },
  { href: 'work', label: 'Projets' },
  { href: 'services', label: 'Services' },
  { href: 'skills', label: 'Compétences' },
  { href: 'experience', label: 'Expérience' },
]

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
            {navItems.map(
              (item) => (
                <li key={item.href}>
                  <a
                    href={`#${item.href}`}
                    className="nav__link"
                    onClick={closeMenu}
                  >
                    {item.label}
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

        <a href="#contact" className="nav__contact" onClick={closeMenu}>Me contacter</a>

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
