'use client'
import { useState } from 'react'

const services = [
  {
    id: 'service-1',
    icon: 'ri-code-s-slash-line',
    title: 'Frontend Development',
    description: 'Interfaces modernes, responsives et performantes avec React, Next.js et Tailwind CSS.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Responsive'],
  },
  {
    id: 'service-2',
    icon: 'ri-server-line',
    title: 'Backend Development',
    description: 'APIs REST sécurisées, gestion de bases de données et logique métier robuste.',
    tags: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Prisma'],
  },
  {
    id: 'service-3',
    icon: 'ri-stack-line',
    title: 'Fullstack Applications',
    description: 'Applications complètes de A à Z, du design de la base de données au déploiement.',
    tags: ['Architecture', 'API REST', 'Auth', 'Deploy'],
  },
  {
    id: 'service-4',
    icon: 'ri-database-2-line',
    title: 'Database Design',
    description: 'Modélisation et gestion de bases de données relationnelles et NoSQL.',
    tags: ['MySQL', 'MongoDB', 'Prisma ORM'],
  },
]

export default function Services() {
  const [openId, setOpenId] = useState<string>('service-1')

  const toggle = (id: string) => {
    setOpenId(prev => prev === id ? '' : id)
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">
        My <span>Services</span>
      </h2>

      <div className="services__container container">
        {services.map((service) => (
          <div
            key={service.id}
            className={`services__item ${openId === service.id ? 'open' : ''}`}
          >
            <div
              className="services__header"
              onClick={() => toggle(service.id)}
            >
              <i className={`${service.icon} services__icon`}></i>
              <h3 className="services__title">{service.title}</h3>
              <i className="ri-arrow-down-s-line services__arrow"></i>
            </div>

            <div className="services__content">
              <p>{service.description}</p>
              <div className="services__tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}