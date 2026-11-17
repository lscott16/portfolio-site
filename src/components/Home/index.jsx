import { Link } from 'react-router-dom'
import {
  profileData,
  educationData,
  experiencesData,
  projectsData,
} from '../../data/portfolioData'

const Home = () => {
  const leadExperience = experiencesData[0]
  const awardProject = projectsData[2]

  return (
    <div className="space-y-8">
      {/* Banner Headline */}
      <section className="border-b border-rule pb-6">
        <div className="text-center max-w-4xl mx-auto mb-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted mb-2">
            SPECIAL PORTFOLIO EDITION • SOFTWARE ENGINEERING &amp; QUANTITATIVE ANALYSIS
          </p>
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[3.35rem] leading-[1.06] tracking-tight text-ink uppercase">
            BUILDING AT THE INTERSECTION OF SOFTWARE, AI &amp; ECONOMICS
          </h1>
          <p className="font-serif italic text-lg sm:text-2xl text-ink/90 mt-3">
            A chronicle of full-stack engineering, applied machine learning, and STEM leadership by
            Lucas Scott.
          </p>
        </div>

        {/* Main Front-Page Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pt-2">
          {/* Left Column: Portrait & Quick Bio */}
          <div className="lg:col-span-4 lg:border-r lg:border-rule lg:pr-6">
            <figure className="m-0">
              <div className="newsprint-portrait border border-rule aspect-[4/5] w-full">
                <img
                  src={profileData.headshotUrl}
                  alt="Lucas Scott portrait"
                  className="w-full h-full object-cover object-[50%_20%]"
                />
              </div>
              <figcaption className="font-serif text-[11px] leading-snug text-ink-muted mt-2">
                Lucas Scott in Guelph, Ontario. Honours Co-op Computer Science &amp; Economics
                student at the University of Guelph and Program Coordinator at Creative Encounters.
              </figcaption>
            </figure>

            <div className="mt-4 pt-4 border-t border-rule/60 flex items-center justify-between text-xs font-mono uppercase tracking-wider">
              <Link
                to="/about"
                className="font-semibold text-ink hover:underline underline-offset-4"
              >
                Full Profile (Page A2) →
              </Link>
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-ink hover:underline underline-offset-4"
              >
                Download CV (PDF) ↓
              </a>
            </div>
          </div>

          {/* Center Column: Lead Front-Page Article */}
          <div className="lg:col-span-5 lg:border-r lg:border-rule lg:pr-6 space-y-4">
            <div className="inline-block border border-rule px-2 py-0.5 text-[11px] font-mono uppercase tracking-wider bg-paper-card">
              Lead Dispatch
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl leading-tight text-ink uppercase">
              FROM MICROSERVICES TO CLASSROOMS
            </h2>
            <p className="font-serif text-[15px] leading-relaxed text-ink text-justify drop-cap">
              Lucas Scott is a Computer Science (Honours Co-op) major and Economics minor at the
              University of Guelph whose work spans distributed full-stack microservices, generative
              AI pipelines, geospatial carbon research, and large-scale youth STEM education.
            </p>
            <p className="font-serif text-[15px] leading-relaxed text-ink text-justify">
              Whether architecting Spring Boot and MariaDB backends to visualize federal Statistics
              Canada datasets, building award-winning LLM market intelligence tools with the Google
              Gemini API, or mentoring a cohort of 15 STEM instructors reaching nearly 1,700
              students, Scott approaches every challenge with his best effort.
            </p>
            <div className="pt-2 border-t border-rule/50 flex items-center justify-between">
              <span className="font-mono text-xs uppercase text-ink-muted">
                By The Editorial Board
              </span>
              <Link
                to="/about"
                className="font-serif text-xs uppercase tracking-wider font-bold text-ink hover:underline underline-offset-4"
              >
                CONTINUED ON PAGE A2 →
              </Link>
            </div>
          </div>

          {/* Right Column: Index of Sections & Featured Callout */}
          <aside className="lg:col-span-3 space-y-5">
            <div className="border border-rule p-4 bg-paper-card/60">
              <h3 className="font-display font-bold text-base uppercase tracking-wide border-b border-rule pb-1.5 mb-3 text-center">
                Inside Today&apos;s Paper
              </h3>
              <ul className="space-y-3 text-sm font-serif list-none m-0 p-0">
                <li className="border-b border-rule/30 pb-2">
                  <Link to="/about" className="group block">
                    <div className="flex justify-between font-mono text-[11px] uppercase text-ink-muted">
                      <span>Editorial Feature</span>
                      <span>Page A2</span>
                    </div>
                    <p className="font-bold text-ink group-hover:underline mt-0.5">
                      The Man Behind the Words: An Interview
                    </p>
                  </Link>
                </li>
                <li className="border-b border-rule/30 pb-2">
                  <Link to="/experience" className="group block">
                    <div className="flex justify-between font-mono text-[11px] uppercase text-ink-muted">
                      <span>Recent Chronicles</span>
                      <span>Page A3</span>
                    </div>
                    <p className="font-bold text-ink group-hover:underline mt-0.5">
                      Experience &amp; Engineering Dispatches
                    </p>
                  </Link>
                </li>
                <li className="border-b border-rule/30 pb-2">
                  <Link to="/resume" className="group block">
                    <div className="flex justify-between font-mono text-[11px] uppercase text-ink-muted">
                      <span>Curriculum Vitae</span>
                      <span>Page A4</span>
                    </div>
                    <p className="font-bold text-ink group-hover:underline mt-0.5">
                      Academic Credentials &amp; Technical Survey
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="group block">
                    <div className="flex justify-between font-mono text-[11px] uppercase text-ink-muted">
                      <span>Public Notices</span>
                      <span>Page A5</span>
                    </div>
                    <p className="font-bold text-ink group-hover:underline mt-0.5">
                      Write to the Editor &amp; Classifieds
                    </p>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="border border-rule p-4 text-center">
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                Academic Standing
              </p>
              <p className="font-display font-bold text-lg text-ink mt-1">
                {educationData.institution}
              </p>
              <p className="font-serif italic text-sm text-ink/90 mt-0.5">{educationData.degree}</p>
              <p className="font-serif text-xs text-ink-muted mt-1">{educationData.major}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom Section Teasers */}
      <section>
        <div className="flex items-center justify-between border-b border-rule pb-2 mb-5">
          <h2 className="font-display font-bold text-lg sm:text-xl uppercase tracking-wide text-ink">
            Featured Chronicles &amp; Dispatches
          </h2>
          <Link
            to="/experience"
            className="font-mono text-xs uppercase tracking-wider text-ink hover:underline"
          >
            View All Chronicles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Teaser 1: Leadership */}
          <article className="md:border-r md:border-rule md:pr-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                {leadExperience.date} • {leadExperience.company}
              </span>
              <h3 className="font-display font-bold text-xl leading-snug text-ink mt-1 uppercase">
                {leadExperience.title}: 1,695 Students Reached
              </h3>
              <p className="font-serif text-sm leading-relaxed text-ink/90 mt-2">
                {leadExperience.lead}
              </p>
            </div>
            <Link
              to="/experience"
              className="inline-block mt-4 font-mono text-xs uppercase tracking-wider font-semibold text-ink hover:underline"
            >
              Read Chronicle on Page A3 →
            </Link>
          </article>

          {/* Teaser 2: Hackathon Award */}
          <article className="md:border-r md:border-rule md:pr-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                {awardProject.date} • {awardProject.badge}
              </span>
              <h3 className="font-display font-bold text-xl leading-snug text-ink mt-1 uppercase">
                {awardProject.headline}
              </h3>
              <p className="font-serif text-sm leading-relaxed text-ink/90 mt-2">
                {awardProject.lead}
              </p>
            </div>
            <Link
              to="/experience"
              className="inline-block mt-4 font-mono text-xs uppercase tracking-wider font-semibold text-ink hover:underline"
            >
              Inspect Project on Page A3 →
            </Link>
          </article>

          {/* Teaser 3: Correspondence & Resume */}
          <article className="flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                Direct Wire • Co-op &amp; Software Roles
              </span>
              <h3 className="font-display font-bold text-xl leading-snug text-ink mt-1 uppercase">
                Public Notices &amp; Official CV Ledger
              </h3>
              <p className="font-serif text-sm leading-relaxed text-ink/90 mt-2">
                Review full academic credentials, technical capabilities across Python, Java, React,
                and SQL, or send a direct dispatch to the editor&apos;s desk.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Link
                to="/resume"
                className="font-mono text-xs uppercase tracking-wider font-semibold text-ink hover:underline"
              >
                Open Ledger (A4) →
              </Link>
              <Link
                to="/contact"
                className="font-mono text-xs uppercase tracking-wider font-semibold text-ink hover:underline"
              >
                Send Dispatch (A5) →
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Home
