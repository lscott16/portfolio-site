import { Link } from 'react-router-dom'
import { profileData } from '../../data/portfolioData'

const About = () => {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
      {/* Left Column: Halftone Portrait + Caption (matches about_page.jpg) */}
      <div className="lg:col-span-4">
        <figure className="m-0">
          <div className="newsprint-portrait border border-rule aspect-[3/4] w-full">
            <img
              src={profileData.headshotUrl}
              alt="Lucas Scott"
              className="w-full h-full object-cover object-[50%_20%]"
            />
          </div>
          <figcaption className="font-serif text-[11px] leading-snug text-ink-muted mt-2">
            Lucas Scott is a Computer Science &amp; Economics student at the University of Guelph,
            building full-stack software systems, applied AI tools, and community STEM initiatives.
          </figcaption>
        </figure>
      </div>

      {/* Right Column: Headline + Multi-Column Editorial + Opinions Box */}
      <div className="lg:col-span-8">
        <header className="mb-5">
          <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-[2.65rem] leading-[1.08] tracking-tight text-ink uppercase">
            THE MAN BEHIND THE WORDS:
            <br />
            AN INTERVIEW WITH LUCAS SCOTT
          </h1>
          <p className="font-serif text-base sm:text-xl text-ink/90 mt-2.5">
            From code to economics, a narrative of analytical curiosity and lifelong building.
          </p>
        </header>

        {/* 4-column desktop broadsheet grid (3 text columns + 1 Opinions & Data column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 pt-2">
          {/* Column 1 */}
          <div className="xl:border-r xl:border-rule/70 xl:pr-4 space-y-3.5 text-[14px] leading-[1.58] font-serif text-justify text-ink">
            <p className="drop-cap">
              Lucas Scott began his studies at the University of Guelph in September 2023, pursuing
              a Bachelor of Computing (Honours Co-op) with a major in Computer Science and a minor
              in Economics.
            </p>
            <p>
              Whether designing RESTful microservices in Java and Spring Boot or writing Python data
              pipelines, Scott focuses on turning messy real-world datasets into interactive tools that decision-makers and everyday users can immediately understand.
            </p>
            <p>
              In early 2026, he engineered an Infrastructure Visualization Tool backed by Docker,
              Spring Boot, and MariaDB that ingests and normalizes federal Statistics Canada
              datasets into heatmaps, stacked bar charts, line graphs, and scatter plots to evaluate
              public facility accessibility across Canada.
            </p>
          </div>

          {/* Column 2 */}
          <div className="xl:border-r xl:border-rule/70 xl:pr-4 space-y-3.5 text-[14px] leading-[1.58] font-serif text-justify text-ink">
            <p>
              His curiosity for applied machine learning and economic data converged at GDSC Hacks
              2025, where Scott and his team earned 2nd place out of more than 20 teams for MTG
              Advisor, an AI-driven market intelligence platform.
            </p>
            <p>
              By combining automated Selenium and BeautifulSoup scrapers with a context-augmented
              Google Gemini API pipeline, the system synthesizes real-time congressional trading
              disclosures and historical market records into structured JSON forecasts, estimating the future forecast of a stock.
            </p>
            <p>
              Previously, as a Field Research Assistant with the Gonsamo Group at McMaster
              University, he created drone orthomosaics and digital elevation models of the McMaster
              Carbon Sink Forest, partnered with the Chippewa of the Thames First Nations reserve for
              carbon tracking, and modernized legacy Python 2.x geospatial tools to Python 3.x.
            </p>
          </div>

          {/* Column 3 */}
          <div className="xl:border-r xl:border-rule/70 xl:pr-4 space-y-3.5 text-[14px] leading-[1.58] font-serif text-justify text-ink">
            <p>
              Beyond research labs and hackathons, Scott is deeply committed to making computer
              science approachable for the next generation of builders.
            </p>
            <p>
              He created Gryphtutor, a React, Django, and Supabase smart tutoring assistant for
              middle-school students that uses machine learning and carefully guarded generative AI
              feedback loops to offer age-appropriate Python hints in real time without giving away
              full solutions.
            </p>
            <p>
              At Creative Encounters in Guelph, he progressed from designing a 40-hour Python &amp;
              Pygame Game Design curriculum as a STEM Specialist to serving as Program
              Coordinator—directly mentoring 15 instructors and coordinating hands-on STEM
              programming that reached 1,695 students across Ontario.
            </p>
          </div>

          {/* Column 4: Opinions & Data Box + Continuation */}
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="border border-rule p-3.5 bg-paper-card/50">
                <h2 className="font-display font-bold text-base text-center border-b border-rule pb-1.5 mb-2.5 text-ink">
                  Opinions &amp; Data
                </h2>
                <p className="font-display font-bold text-sm text-center leading-tight text-ink mb-2">
                  Key Beliefs
                  <br />
                  Areas of Focus
                </p>
                <ul className="font-serif text-xs space-y-1.5 list-none m-0 p-0 text-ink">
                  <li>• Full-Stack &amp; Microservices</li>
                  <li>• Applied AI &amp; LLM Pipelines</li>
                  <li>• Economic &amp; Data Modeling</li>
                  <li>• Youth STEM Leadership</li>
                </ul>
              </div>

              <p className="font-serif text-[13.5px] leading-[1.55] text-justify text-ink">
                Scott believes the strongest software engineering pairs resilient backend systems
                with clear human communication—whether in an Agile sprint review, a research lab, or
                a classroom of eighty young coders.
              </p>
            </div>

            <div className="border-t border-rule pt-2 text-right">
              <Link
                to="/experience"
                className="font-serif text-xs uppercase tracking-wider font-semibold text-ink hover:underline"
              >
                CONTINUED ON PAGE A3
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default About
