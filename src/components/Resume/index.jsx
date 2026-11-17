import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScissors } from '@fortawesome/free-solid-svg-icons'
import {
  profileData,
  educationData,
  skillsData,
} from '../../data/portfolioData'

const Resume = () => {
  return (
    <div className="space-y-8">
      {/* Page Title (matches resume_page.jpg) */}
      <header className="text-center pb-2">
        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[3.1rem] leading-tight tracking-tight text-ink">
          Curriculum Vitae: The Lucas Scott Ledger
        </h1>
        <p className="font-serif text-base sm:text-xl text-ink/90 mt-2">
          A complete record of academic, technical, and professional achievements.
        </p>
      </header>

      {/* 3-Column Broadsheet Ledger Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Academic Endeavors and Credentials */}
        <section className="lg:col-span-4 lg:border-r lg:border-rule lg:pr-6 flex flex-col justify-between space-y-6">
          <div>
            <div className="border-t-[3px] border-b border-rule py-2 text-center mb-4">
              <h2 className="font-display font-bold text-base sm:text-lg uppercase tracking-wide text-ink">
                ACADEMIC ENDEAVORS
                <br />
                AND CREDENTIALS
              </h2>
            </div>

            <div className="space-y-3 font-serif text-ink">
              <h3 className="font-display font-bold text-lg text-ink">Education</h3>
              <div>
                <p className="font-bold text-base leading-snug">
                  {educationData.degree}
                  <br />
                  {educationData.major}
                </p>
                <p className="text-sm text-ink/90 mt-1">{educationData.institution}</p>
                <p className="text-xs font-mono text-ink-muted">
                  {educationData.location} • {educationData.period}
                </p>
              </div>

              <div className="pt-2">
                <p className="font-bold text-sm mb-1.5">Academic &amp; Technical Focus:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[13.5px] leading-snug text-ink/95">
                  {educationData.focusAreas.map((area, idx) => (
                    <li key={idx}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-rule pt-2 text-right">
            <Link
              to="/contact"
              className="font-serif text-xs uppercase tracking-wider text-ink hover:underline"
            >
              CONTINUED ON PAGE A5
            </Link>
          </div>
        </section>

        {/* Center Column: Scissors Download Coupon + Survey of Technical Capabilities */}
        <section className="lg:col-span-4 lg:border-r lg:border-rule lg:pr-6 space-y-7">
          {/* Cut-out Coupon Button linking directly to /Lucas_Scott_Resume.pdf */}
          <div className="relative pt-2">
            <span
              className="absolute -top-1 left-5 bg-paper px-1.5 text-ink z-10"
              aria-hidden="true"
            >
              <FontAwesomeIcon icon={faScissors} className="text-lg" />
            </span>

            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              download="Lucas_Scott_Resume.pdf"
              className="block border-2 border-dashed border-rule bg-paper-card hover:bg-paper-dark transition-colors p-5 text-center shadow-sm group"
            >
              <span className="block font-mono font-bold text-xl sm:text-2xl tracking-tight text-ink uppercase group-hover:underline">
                DOWNLOAD RESUME
              </span>
              <span className="block font-mono text-[11px] uppercase tracking-wider text-ink-muted mt-1.5">
                CLICK HERE TO DOWNLOAD COMPLETE CV (PDF)
              </span>
            </a>
          </div>

          {/* Survey of Technical Capabilities */}
          <div>
            <div className="border-t-[3px] border-b border-rule py-2 text-center mb-4">
              <h2 className="font-display font-bold text-base sm:text-lg uppercase tracking-wide text-ink">
                A SURVEY OF TECHNICAL
                <br />
                CAPABILITIES
              </h2>
            </div>

            <div className="space-y-4 font-serif text-sm">
              {skillsData.categories.map((cat) => (
                <div
                  key={cat.label}
                  className="border-b border-rule/35 pb-3 last:border-b-0 last:pb-0"
                >
                  <h3 className="font-display font-bold text-sm uppercase tracking-wide text-ink mb-1.5">
                    {cat.label}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="border border-rule/70 bg-paper-card/70 px-2 py-0.5 text-xs font-serif text-ink"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Column: Recognition & Dispatches */}
        <section className="lg:col-span-4 space-y-5">
          <div className="border-t-[3px] border-b border-rule py-2 text-center">
            <h2 className="font-display font-bold text-base sm:text-lg uppercase tracking-wide text-ink">
              RECOGNITION &amp; DISPATCHES
            </h2>
          </div>

          {/* Achievements */}
          <div className="space-y-2.5 font-serif">
            <h3 className="font-display font-bold text-lg text-ink">Achievements</h3>
            <ul className="space-y-3 list-none m-0 p-0 text-xs sm:text-[13.5px] leading-snug">
              <li className="grid grid-cols-12 gap-2">
                <span className="col-span-3 font-mono text-[11px] text-ink-muted">• May 2025</span>
                <span className="col-span-9 text-ink">
                  <strong>2nd Place at GDSC Hacks 2025</strong> (out of 20+ teams) for engineering{' '}
                  <em>MTG Advisor</em>, an AI-driven market intelligence tool integrating
                  congressional disclosures with Google Gemini analysis.
                </span>
              </li>
              <li className="grid grid-cols-12 gap-2">
                <span className="col-span-3 font-mono text-[11px] text-ink-muted">• 2026</span>
                <span className="col-span-9 text-ink">
                  <strong>1,695 Students Reached:</strong> Directed a 15-instructor STEM cohort at
                  Creative Encounters across Guelph and Ontario.
                </span>
              </li>
            </ul>
          </div>

          {/* Key Projects & Research */}
          <div className="space-y-2.5 font-serif pt-2 border-t border-rule/40">
            <h3 className="font-display font-bold text-lg text-ink">Research &amp; Systems</h3>
            <ul className="space-y-2.5 list-none m-0 p-0 text-xs sm:text-[13.5px] leading-snug">
              <li className="grid grid-cols-12 gap-2">
                <span className="col-span-3 font-mono text-[11px] text-ink-muted">• 2026</span>
                <span className="col-span-9 text-ink">
                  <strong>Statistics Canada Microservice:</strong> Spring Boot, Docker &amp; MariaDB
                  pipeline powering 4 interactive national infrastructure charts.
                </span>
              </li>
              <li className="grid grid-cols-12 gap-2">
                <span className="col-span-3 font-mono text-[11px] text-ink-muted">• 2024</span>
                <span className="col-span-9 text-ink">
                  <strong>McMaster Carbon Sink Forest:</strong> ArcGIS Drone2Map orthomosaics, DEMs,
                  and First Nations carbon data tracking.
                </span>
              </li>
            </ul>
          </div>

          {/* Extracurriculars & Community */}
          <div className="space-y-2.5 font-serif pt-2 border-t border-rule/40">
            <h3 className="font-display font-bold text-lg text-ink">Community &amp; Teaching</h3>
            <ul className="space-y-2.5 list-none m-0 p-0 text-xs sm:text-[13.5px] leading-snug">
              <li className="grid grid-cols-12 gap-2">
                <span className="col-span-3 font-mono text-[11px] text-ink-muted">• 2025–26</span>
                <span className="col-span-9 text-ink">
                  <strong>After-School Python Coding Club:</strong> Designed and led two 8-week
                  sessions plus a 40-hour custom Pygame curriculum for Grade 6–8 youth.
                </span>
              </li>
              <li className="grid grid-cols-12 gap-2">
                <span className="col-span-3 font-mono text-[11px] text-ink-muted">• 2025</span>
                <span className="col-span-9 text-ink">
                  <strong>Gryphtutor AI Mentor:</strong> Built safe LLM feedback loops to coach
                  middle-school students in Python.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume
