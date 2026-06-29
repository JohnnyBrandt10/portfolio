const skills = [
  {
    id: 'frontend',
    icon: 'ri-layout-4-line',
    title: 'Frontend',
    items: [
      { icon: 'ri-html5-line', label: 'HTML/CSS' },
      { icon: 'ri-javascript-line', label: 'JavaScript' },
      { icon: 'ri-reactjs-line', label: 'React' },
      { icon: 'ri-nextjs-line', label: 'Next.js' },
      { icon: 'ri-code-s-slash-line', label: 'TypeScript' },
      { icon: 'ri-palette-line', label: 'Tailwind CSS' },
    ],
  },
  {
    id: 'backend',
    icon: 'ri-server-line',
    title: 'Backend',
    items: [
      { icon: 'ri-nodejs-line', label: 'Node.js' },
      { icon: 'ri-code-line', label: 'Express.js' },
      { icon: 'ri-database-2-line', label: 'MongoDB' },
      { icon: 'ri-database-line', label: 'MySQL' },
      { icon: 'ri-git-branch-line', label: 'Prisma ORM' },
    ],
  },
  {
    id: 'tools',
    icon: 'ri-tools-line',
    title: 'Outils',
    items: [
      { icon: 'ri-git-branch-line', label: 'Git/GitHub' },
      { icon: 'ri-terminal-line', label: 'Linux' },
      { icon: 'ri-layout-line', label: 'Figma' },
      { icon: 'ri-merge-cells-horizontal', label: 'Merise' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">
        My <span>Skills</span>
      </h2>
      <p className="skills__subtitle">
        Technologies que je maîtrise et utilise au quotidien.
      </p>

      <div className="skills__container container">
        {skills.map((group) => (
          <div className="skills__group" key={group.id}>

            <div className="skills__group-header">
              <i className={group.icon}></i>
              <h3>{group.title}</h3>
            </div>

            <div className="skills__list">
              {group.items.map((item) => (
                <div className="skills__item" key={item.label}>
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}