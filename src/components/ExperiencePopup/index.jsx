import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ExperiencePopup = ({ experience, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!experience) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-[1px] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-experience-title"
    >
      <div
        className="bg-paper border-2 border-rule max-w-2xl w-full max-h-[85vh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b-2 border-rule pb-3 mb-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              SPECIAL REPORT • {experience.date}
            </p>
            <h2
              id="modal-experience-title"
              className="font-display font-black text-2xl sm:text-3xl text-ink uppercase mt-0.5"
            >
              {experience.title} — {experience.company}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dispatch modal"
            className="border border-rule px-2.5 py-1 text-ink hover:bg-ink hover:text-paper transition-colors cursor-pointer shrink-0"
          >
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          </button>
        </div>

        {/* Organization Context */}
        {experience.companyDescription && (
          <p className="font-serif italic text-sm sm:text-base text-ink/90 border-b border-rule/40 pb-4 mb-5">
            <strong>{experience.company}</strong> — {experience.companyDescription}
          </p>
        )}

        {/* Learning Goals & Reflections */}
        <div className="space-y-5">
          <h3 className="font-display font-bold text-lg uppercase tracking-wide text-ink">
            Learning Goals &amp; Field Reflections
          </h3>

          {experience.learningGoals?.map((item, idx) => (
            <div key={idx} className="border border-rule/60 bg-paper-card/50 p-4 space-y-2">
              <p className="font-serif text-sm sm:text-[15px] text-ink m-0">
                <strong className="font-display uppercase tracking-wide text-xs block text-ink-muted mb-0.5">
                  Objective #{idx + 1}
                </strong>
                {item.goal}
              </p>
              <p className="font-serif text-sm sm:text-[15px] text-ink/90 m-0 pt-2 border-t border-rule/30">
                <strong className="font-display uppercase tracking-wide text-xs block text-ink-muted mb-0.5">
                  Outcome &amp; Reflection
                </strong>
                {item.achievement}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-3 border-t border-rule flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="border border-rule px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-ink hover:bg-ink hover:text-paper transition-colors cursor-pointer"
          >
            Close Dispatch
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExperiencePopup
