import { useState } from 'react'
import ExperienceCard from '../ExperienceCard'
import ExperiencePopup from '../ExperiencePopup'
import { experiencesData, projectsData } from '../../data/portfolioData'

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null)

  return (
    <div className="space-y-10">
      {/* Page Banner (matches experience_page.jpg) */}
      <header className="text-center border-b border-rule pb-5">
        <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-[2.85rem] leading-tight tracking-tight text-ink uppercase">
          RECORD OF PROGRESS: RECENT CHRONICLES
        </h1>
        <p className="font-serif text-base sm:text-xl text-ink/90 mt-2">
          A comprehensive account of engineering, system design, research, and STEM leadership.
        </p>
      </header>

      {/* Experience Timeline */}
      <section className="space-y-7" aria-label="Professional experience">
        {experiencesData.map((exp) => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            onSelect={(item) => setSelectedExperience(item)}
          />
        ))}
      </section>

      {/* Engineering Projects Section (from Resume) */}
      <section className="pt-4 border-t-2 border-rule" aria-label="Selected engineering projects">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-rule pb-2.5 mb-6">
          <h2 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-ink">
            SELECTED ENGINEERING DISPATCHES &amp; PROJECTS
          </h2>
          <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            Full-Stack • Microservices • Applied AI
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="border border-rule p-4 bg-paper-card/45 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-[11px] font-mono uppercase text-ink-muted mb-2">
                  <span className="border border-rule/60 px-1.5 py-0.5 bg-paper">
                    {project.category}
                  </span>
                  <span>{project.date}</span>
                </div>

                <h3 className="font-display font-bold text-lg leading-snug text-ink uppercase">
                  {project.headline}
                </h3>
                <p className="font-mono text-[11px] text-ink-muted mt-1">{project.subtitle}</p>

                <ul className="font-serif text-[13.5px] leading-relaxed text-ink space-y-2 mt-3 pl-4 list-disc">
                  {project.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-2.5 border-t border-rule/50 text-right font-mono text-[11px] uppercase tracking-wider font-semibold text-ink">
                {project.badge}
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedExperience && (
        <ExperiencePopup
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </div>
  )
}

export default Experience
