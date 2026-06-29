'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let typedInstance: {
      destroy: () => void;
    } | null = null;

    const loadTyped = async () => {
      const Typed = (await import('typed.js')).default;

      typedInstance = new Typed('#typed-text', {
        strings: [
          'Developer.',
          'React Dev.',
          'Node.js Dev.',
          'Next.js Dev.',
          'Problem Solver.'
        ],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        cursorChar: '|'
      });
    };

    loadTyped();

    const card = cardRef.current;

    let handleMouseMove: ((e: MouseEvent) => void) | undefined;
    let handleMouseLeave: (() => void) | undefined;

    if (card) {
      handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y - rect.height / 2) / rect.height) * -10;
        const rotateY = ((x - rect.width / 2) / rect.width) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      };

      handleMouseLeave = () => {
        card.style.transform =
          'perspective(1000px) rotateY(-5deg) rotateX(5deg)';
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    const blobs = document.querySelectorAll('.blob-big, .blob-small');

    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      blobs.forEach((blob, index) => {
        if (!(blob instanceof HTMLElement)) return;

        const speed = index % 2 === 0 ? 20 : 30;

        blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener('mousemove', onMove);

    return () => {
      typedInstance?.destroy();

      window.removeEventListener('mousemove', onMove);

      if (card && handleMouseMove && handleMouseLeave) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <p className="home__subtitle">
            Hi! I&apos;m Johnny — Based in Antananarivo 🇲🇬
          </p>

          <h1 className="home__title">
            Fullstack <br />
            <span id="typed-text"></span>
          </h1>

          <p className="home__description">
            Je construis des applications web complètes, du frontend au backend,
            avec des technologies modernes.
          </p>

          <div className="home__buttons">
            <a href="#work" className="button">
              View my work
            </a>

            <a
              href="/img/CV-de-Johnny.pdf"
              className="button button--ghost"
              download
            >
              Download CV <i className="ri-download-line"></i>
            </a>
          </div>

          <div className="home__socials">
            <a
              title='github'
              href="https://github.com/JohnnyBrandt10"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <i className="ri-github-fill"></i>
            </a>

            <a
              title='linkedin'
              href="mailto:johnnybrandt10@gmail.com"
              className="home__social-link"
            >
              <i className="ri-mail-line"></i>
            </a>

            <a
              title='phone'
              href="tel:+261347474172"
              className="home__social-link"
            >
              <i className="ri-phone-line"></i>
            </a>
          </div>
        </div>

        <div className="home__img-wrapper">
          <div className="home__img-card" ref={cardRef}>
            <Image
              src="/img/Profile.jpg"
              alt="Johnny Fanilonantenaïna"
              width={500}
              height={500}
              priority
              className="home__img"
            />
          </div>

          <div className="home__rotate-text">
            <svg viewBox="0 0 200 200" className="home__rotate-svg">
              <defs>
                <path
                  id="circle-path"
                  d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
              </defs>

              <text className="home__rotate-label">
                <textPath href="#circle-path">
                  Let&apos;s work together • Explore more •
                </textPath>
              </text>
            </svg>

            <a title="Scroll down" href="#work" className="home__rotate-arrow">
              <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="blob-big blob-big--hero"></div>
<div className="blob-small blob-small--hero"></div>
    </section>
  );
}
