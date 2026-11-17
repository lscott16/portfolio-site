import { Outlet, useLocation } from 'react-router-dom'
import Masthead from '../Masthead'

const pageNumberMap = {
  '/': 'PAGE A1',
  '/about': 'PAGE A2',
  '/experience': 'PAGE A3',
  '/resume': 'PAGE A4',
  '/contact': 'PAGE A5',
}

const Layout = () => {
  const { pathname } = useLocation()
  const pageLabel = pageNumberMap[pathname] || 'PAGE A1'

  return (
    <div className="min-h-screen flex flex-col max-w-[1160px] mx-auto px-4 sm:px-8 md:px-12 py-5 sm:py-8">
      <Masthead />

      <main className="flex-1 py-6 sm:py-8">
        <Outlet />
      </main>

      <footer className="double-rule-top pt-3 mt-8 flex items-center justify-between text-xs sm:text-sm font-serif tracking-wider uppercase text-ink">
        <span>ESTD. 2023 • GUELPH, ON</span>
        <span className="hidden sm:inline text-ink-muted">THE LUCAS SCOTT TIMES</span>
        <span>{pageLabel}</span>
      </footer>
    </div>
  )
}

export default Layout
