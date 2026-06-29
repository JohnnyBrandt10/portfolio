'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const projects = [
  {
    number: '01',
    title: 'Varotra+',
    description: 'Application fullstack de gestion commerciale développée chez Softika — API REST sécurisée, gestion des stocks et des ventes.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Tailwind'],
    image: '/img/varotra.png',
    private: true,
  },
  {
    number: '02',
    title: 'Ijeery',
    description: 'Application de gestion commerciale intelligente avec IA intégrée — développée chez Softika pour optimiser les processus métier.',
    tags: ['React', 'Express', 'MySQL', 'Sequelize', 'Tailwind'],
    image: '/img/ijeery.png',
    private: true,
  },
  {
    number: '03',
    title: 'Gestion Docs',
    description: 'Application de gestion documentaire — BDD structurée, routes API REST et interface moderne développée chez Softika.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Material UI'],
    image: '/img/gestiondocs.png',
    private: true,
  },
  {
    number: '04',
    title: 'Softracker',
    description: 'Frontend pour une application de suivi de projets internes — développé chez Softika.',
    tags: ['Next.js', 'Tailwind CSS'],
    image: '/img/softracker.png',
    private: true,
  },
]

export default function Work() {
  return (
    <section className="work section" id="work">
      <h2 className="section__title">
        View My <span>Projects</span>
      </h2>

      <div className="work__container container">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          grabCursor={true}
          loop={false}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="work-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.number}>
              <div className="work__card">
                <div className="work__img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="work__img"
                  />
                  {project.private && (
                    <div className="work__private">
                      <i className="ri-lock-line"></i>
                      <span>Projet privé</span>
                    </div>
                  )}
                </div>

                <div className="work__info">
                  <span className="work__number">{project.number}</span>
                  <h3 className="work__title">{project.title}</h3>
                  <p className="work__description">{project.description}</p>
                  <div className="work__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}