const ExperienceCard = ({ experience, onSelect }) => {
  const {
    category,
    headline,
    title,
    company,
    location,
    date,
    shortDate,
    lead,
    columns,
    metricsType,
    metricsTitle,
    metrics,
    chartLabel,
    chartValue,
    chartSub,
  } = experience

  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 pb-7 border-b border-rule last:border-b-0">
      {/* Left Timeline Rail */}
      <div className="md:col-span-2 md:pr-5 md:border-r md:border-rule flex md:flex-col items-center md:items-end justify-between md:justify-start gap-2 relative">
        <span className="inline-block border border-rule/70 rounded px-2.5 py-0.5 text-xs font-serif bg-paper-card text-ink">
          {category}
        </span>
        <div className="md:mt-5 flex items-center gap-2">
          <span className="font-serif text-base sm:text-lg text-ink font-medium">{shortDate}</span>
          <span
            className="hidden md:block w-3 border-t border-rule absolute -right-1.5 top-[4.1rem]"
            aria-hidden="true"
          />
        </div>
        <span className="hidden md:block text-[11px] font-mono text-ink-muted text-right mt-1">
          {company}
          <br />
          {location}
        </span>
      </div>

      {/* Right Article Content + Metrics Box */}
      <div className="md:col-span-10 md:pl-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Article Copy */}
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                {title} • {company} ({date})
              </span>
            </div>

            <h2 className="font-display font-black text-xl sm:text-2xl lg:text-[1.7rem] leading-tight text-ink uppercase">
              {headline}
            </h2>

            <p className="font-serif text-base sm:text-[17px] leading-snug text-ink mt-2">
              {lead}
            </p>

            {/* 3-Column Broadsheet Snippet */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3.5 text-[13.5px] leading-relaxed font-serif text-ink/95">
              {columns.map((colText, idx) => (
                <p key={idx} className="m-0 text-justify">
                  {colText}
                </p>
              ))}
            </div>
          </div>

          {/* Right Callout Metrics Box */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-3">
            {metricsType === 'grid' ? (
              <div className="border border-rule bg-paper-card/70">
                <div className="border-b border-rule px-3 py-1.5 text-center font-serif text-[11px] uppercase tracking-wider font-semibold text-ink bg-paper-dark/60">
                  {metricsTitle}
                </div>
                <div className="grid grid-cols-2 gap-3 p-3.5 text-center">
                  {metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="font-display font-black text-xl sm:text-2xl text-ink leading-none">
                        {m.value}
                      </div>
                      <div className="font-serif text-[11px] leading-tight text-ink-muted mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="border border-rule bg-paper-card/70 p-3.5 relative overflow-hidden">
                <div className="text-center relative z-10">
                  <div className="font-serif text-xs uppercase tracking-wider text-ink-muted">
                    {metricsTitle}
                  </div>
                  <div className="font-serif text-sm font-medium text-ink mt-0.5">{chartLabel}</div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-ink mt-0.5">
                    {chartValue}
                  </div>
                  <div className="font-serif text-[11px] text-ink-muted mt-1">{chartSub}</div>
                </div>
                {/* Editorial Line Graph Background */}
                <svg
                  viewBox="0 0 200 60"
                  className="w-full h-12 mt-2 stroke-ink/70 fill-ink/10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0,52 L35,48 L70,36 L110,38 L145,22 L180,14 L200,4 L200,60 L0,60 Z"
                    strokeWidth="0"
                  />
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    points="0,52 35,48 70,36 110,38 145,22 180,14 200,4"
                  />
                </svg>
              </div>
            )}

            <div className="border-t border-rule/60 pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => onSelect(experience)}
                className="w-full text-right font-serif text-xs uppercase tracking-wider font-bold text-ink hover:underline cursor-pointer bg-transparent border-0 p-0"
              >
                READ GOALS &amp; DISPATCH →
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard
