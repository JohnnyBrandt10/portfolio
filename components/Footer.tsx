const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  {
    href: 'https://github.com/JohnnyBrandt10',
    icon: 'ri-github-fill',
    label: 'GitHub',
  },
  {
    href: 'mailto:johnnybrandt10@gmail.com',
    icon: 'ri-mail-line',
    label: 'Email',
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">

        <a href="#home" className="footer__logo">
          Johnny<span>.</span>
        </a>

        <nav className="footer__nav">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="footer__nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
              className="footer__social-link"
              aria-label={social.label}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} Johnny Fanilonantenaïna. Tous droits réservés.
        </p>

      </div>
    </footer>
  )
}