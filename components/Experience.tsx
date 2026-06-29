const experiences = [
  {
    id: 'exp-1',
    date: '2026',
    title: 'Stagiaire Développeur Web',
    company: 'Softika',
    items: [
      'Développement et amélioration d\'applications web (frontend & backend)',
      'Conception et implémentation d\'API REST avec Node.js et Express',
      'Gestion de données (MySQL, MongoDB)',
      'Participation à l\'analyse des besoins et modélisation des systèmes',
      'Collaboration sur les projets internes (Varotra+, Pointa...)',
    ],
    tags: ['Node.js', 'Express', 'React', 'MySQL', 'MongoDB'],
  },
  {
    id: 'exp-2',
    date: '2022 — Present',
    title: 'Licence 3 — Informatique Statistique & IA',
    company: 'Institut Supérieur Polytechnique de Madagascar (ISPM)',
    items: [
      'Spécialisation en développement web et systèmes backend',
      'Projets fullstack en équipe et en solo',
    ],
    tags: ['Algorithmique', 'Base de données', 'IA'],
  },
  {
    id: 'exp-3',
    date: '2019',
    title: 'Baccalauréat Série D',
    company: 'Lycée Nanisana, Antananarivo',
    items: [
      'Mention obtenue avec spécialité scientifique',
    ],
    tags: ['Sciences', 'Mathématiques'],
  },
]

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">
        My <span>Experience</span>
      </h2>

      <div className="experience__container container">
        {experiences.map((exp) => (
          <div className="experience__item" key={exp.id}>
            <div className="experience__dot"></div>

            <div className="experience__content">
              <span className="experience__date">{exp.date}</span>
              <h3 className="experience__title">{exp.title}</h3>
              <span className="experience__company">{exp.company}</span>

              <ul className="experience__list">
                {exp.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="experience__tags">
                {exp.tags.map((tag) => (
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