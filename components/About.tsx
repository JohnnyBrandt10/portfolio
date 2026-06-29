'use client'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 7, suffix: '+', label: 'Projets réalisés' },
  { number: 1, suffix: '', label: 'Stage pro' },
  { number: 6, suffix: '+', label: 'Technologies' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true

          const duration = 1500
          const steps = 60
          const increment = target / steps
          const interval = duration / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, interval)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span className="about__stat-number" ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">

        <div className="about__data">
          <h2 className="section__title section__title--left">
            About <span>Me</span>
          </h2>
          <p className="about__description">
            Étudiant en Licence 3 en Informatique Statistique et Intelligence
            Artificielle, passionné par le développement web et les systèmes backend.
            Expérience concrète dans la conception et le développement
            d&apos;applications complètes (frontend & backend).
            Rigoureux, autonome et orienté solution.
          </p>

          <div className="about__stats">
            {stats.map((stat) => (
              <div className="about__stat" key={stat.label}>
                <Counter target={stat.number} suffix={stat.suffix} />
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="button">
            Work with me <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        <div className="about__img-wrapper">
           <Image
            src="/img/profile.jpg"
            alt="Johnny Fanilonantenaïna"
            className="about__img"
            width={400}
            height={400}
          />

          <div className="about__badge">
            <i className="ri-code-s-slash-line"></i>
            <span>Fullstack Dev</span>
          </div>
        </div>

      </div>
    </section>
  )
}