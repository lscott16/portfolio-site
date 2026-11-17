import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
]

const Masthead = () => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date())

  return (
    <header className="w-full select-none">
      {/* Masthead Title Row */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 pb-3 sm:pb-4">
        <div className="hidden md:block flex-1 masthead-bars" aria-hidden="true" />
        <Link
          to="/"
          className="font-display font-black tracking-tight text-3xl sm:text-5xl lg:text-[3.65rem] leading-none text-ink uppercase text-center hover:opacity-90 transition-opacity"
        >
          THE LUCAS SCOTT TIMES
        </Link>
        <div className="hidden md:block flex-1 masthead-bars" aria-hidden="true" />
      </div>

      {/* Dateline Bar */}
      <div className="border-t border-rule double-rule-bottom py-1.5 px-1 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs font-serif tracking-wider uppercase text-ink">
        <span>VOL. I NO. 1</span>
        <span className="hidden sm:inline text-center font-medium">
          GUELPH, ONTARIO / ONLINE EDITION
        </span>
        <span>{formattedDate.toUpperCase()}</span>
      </div>

      {/* Sections Navigation Bar */}
      <nav
        aria-label="Newspaper sections"
        className="border-b border-rule py-2.5 px-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2.5"
      >
        <div className="flex items-center justify-between md:justify-start">
          <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-ink">
            Sections
          </span>

          {/* Mobile Social Icons */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="https://github.com/lscott16"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="text-ink hover:opacity-70 transition-opacity text-xl"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-scott16/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="text-ink hover:opacity-70 transition-opacity text-xl"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Section Links */}
        <ul className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-1.5 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `font-serif text-base sm:text-xl tracking-tight transition-all pb-0.5 ${
                    isActive
                      ? 'font-bold text-ink border-b-2 border-ink'
                      : 'font-normal text-ink/85 hover:text-ink hover:border-b hover:border-ink/50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center justify-end gap-3.5">
          <a
            href="https://github.com/lscott16"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="text-ink hover:opacity-70 transition-opacity text-2xl"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-scott16/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="text-ink hover:opacity-70 transition-opacity text-2xl"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Masthead
