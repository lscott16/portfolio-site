import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { profileData } from '../../data/portfolioData'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: 'idle', text: '' })
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        text: 'Please provide both your name and message before sending a dispatch.',
      })
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (serviceId && templateId && publicKey) {
      try {
        setStatus({ type: 'loading', text: 'Transmitting dispatch via telegraph wire...' })
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
          },
          publicKey
        )
        setStatus({
          type: 'success',
          text: 'Dispatch received! Thank you for writing to the Editor.',
        })
        setFormData({ name: '', email: '', message: '' })
      } catch {
        setStatus({
          type: 'error',
          text: `Telegraph transmission error. Please email ${profileData.email} directly.`,
        })
      }
    } else {
      const subject = encodeURIComponent(
        `The Lucas Scott Times — Dispatch from ${formData.name}`
      )
      const body = encodeURIComponent(
        `From: ${formData.name}${formData.email ? ` (${formData.email})` : ''}\n\n${formData.message}`
      )
      window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`
      setStatus({
        type: 'success',
        text: `Opening your mail client addressed to ${profileData.email}.`,
      })
    }
  }

  return (
    <div className="space-y-8">
      {/* Page Header (matches contact_page.jpg) */}
      <header className="text-center">
        <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-[2.95rem] leading-tight tracking-tight text-ink uppercase">
          PUBLIC NOTICES &amp; CORRESPONDENCE
        </h1>
        <p className="font-serif text-base sm:text-xl text-ink/90 mt-2">
          Inquiries &amp; dispatch: How to get in touch with Lucas Scott.
        </p>
        <div className="w-44 mx-auto border-b border-rule mt-3" aria-hidden="true" />
      </header>

      {/* Two-Column Correspondence Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
        {/* Left Column: Write to the Editor */}
        <section className="lg:col-span-6 lg:border-r lg:border-rule lg:pr-8">
          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-center text-ink mb-4">
            WRITE TO THE EDITOR
          </h2>

          {/* Postcard-bordered Form Container */}
          <div className="border border-rule bg-paper-card p-2.5 shadow-md">
            <form
              onSubmit={handleSubmit}
              className="border border-dashed border-rule/80 p-4 sm:p-6 space-y-4 bg-paper/75"
              noValidate
            >
              <div>
                <label
                  htmlFor="dispatch-name"
                  className="block font-serif text-sm sm:text-base text-ink mb-1"
                >
                  Name
                </label>
                <input
                  id="dispatch-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name or Organization"
                  className="w-full bg-transparent border-0 border-b border-rule py-1.5 px-1 font-serif text-base text-ink placeholder:text-ink-subtle/70 focus:outline-none focus:border-b-2"
                />
              </div>

              <div>
                <label
                  htmlFor="dispatch-email"
                  className="block font-serif text-sm sm:text-base text-ink mb-1"
                >
                  Return Address (Email)
                </label>
                <input
                  id="dispatch-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-0 border-b border-rule py-1.5 px-1 font-serif text-base text-ink placeholder:text-ink-subtle/70 focus:outline-none focus:border-b-2"
                />
              </div>

              <div>
                <label
                  htmlFor="dispatch-message"
                  className="block font-serif text-sm sm:text-base text-ink mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="dispatch-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your inquiry or correspondence..."
                  className="w-full bg-paper/90 border border-rule p-2.5 font-serif text-base text-ink placeholder:text-ink-subtle/70 focus:outline-none focus:ring-1 focus:ring-ink resize-y"
                />
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="border-2 border-rule px-6 py-2 bg-paper-card hover:bg-ink hover:text-paper transition-colors cursor-pointer shadow-xs"
                >
                  <span className="font-script text-2xl sm:text-3xl leading-none block">
                    Send Dispatch
                  </span>
                </button>
              </div>

              {status.text && (
                <p
                  role="status"
                  className={`font-serif text-xs sm:text-sm pt-2 border-t border-rule/40 m-0 ${
                    status.type === 'error' ? 'font-bold text-ink' : 'text-ink-muted'
                  }`}
                >
                  {status.text}
                </p>
              )}
            </form>
          </div>

          <p className="font-serif text-sm text-center text-ink-muted mt-3">
            Connected via digital submit form • Direct to {profileData.email}
          </p>
        </section>

        {/* Right Column: Classified Directories & Contact Info */}
        <section className="lg:col-span-6 space-y-4">
          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-center text-ink leading-tight mb-4">
            CLASSIFIED DIRECTORIES
            <br />
            &amp; CONTACT INFO
          </h2>

          <div className="space-y-4">
            {/* Classified Card 1: GitHub */}
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-stretch border border-rule bg-paper-card/75 hover:bg-paper-dark transition-colors group"
            >
              <span className="border-r border-rule px-1.5 py-2 flex items-center justify-center font-mono text-[10px] uppercase tracking-wider text-ink-muted [writing-mode:vertical-rl] rotate-180">
                classifieds
              </span>
              <div className="flex-1 py-4 px-4 text-center">
                <div className="font-display font-bold text-xl sm:text-2xl text-ink group-hover:underline">
                  The GitHub Record
                </div>
                <div className="font-serif text-sm sm:text-base text-ink/90 mt-0.5">
                  {profileData.githubHandle}
                </div>
              </div>
            </a>

            {/* Classified Card 2: LinkedIn */}
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-stretch border border-rule bg-paper-card/75 hover:bg-paper-dark transition-colors group"
            >
              <span className="border-r border-rule px-1.5 py-2 flex items-center justify-center font-mono text-[10px] uppercase tracking-wider text-ink-muted [writing-mode:vertical-rl] rotate-180">
                classifieds
              </span>
              <div className="flex-1 py-4 px-4 text-center">
                <div className="font-display font-bold text-xl sm:text-2xl text-ink group-hover:underline">
                  The LinkedIn Connection
                </div>
                <div className="font-serif text-sm sm:text-base text-ink/90 mt-0.5">
                  {profileData.linkedinHandle}
                </div>
              </div>
            </a>

            {/* Classified Card 3: Direct Wire (Copy Email) */}
            <div className="flex items-stretch border border-rule bg-paper-card/75">
              <span className="border-r border-rule px-1.5 py-2 flex items-center justify-center font-mono text-[10px] uppercase tracking-wider text-ink-muted [writing-mode:vertical-rl] rotate-180">
                classifieds
              </span>
              <div className="flex-1 py-4 px-4 text-center">
                <div className="font-display font-bold text-xl sm:text-2xl text-ink">
                  Direct Wire
                </div>
                <div className="font-serif text-sm sm:text-base text-ink/90 mt-0.5 flex flex-wrap items-center justify-center gap-2">
                  <span>copy email:</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="font-semibold underline underline-offset-4 hover:opacity-75 cursor-pointer bg-transparent border-0 p-0 text-ink"
                  >
                    {profileData.email}
                  </button>
                  {copied && (
                    <span className="font-mono text-[11px] uppercase border border-rule px-1.5 py-0.5 bg-paper">
                      Copied!
                    </span>
                  )}
                </div>
                <div className="font-mono text-xs text-ink-muted mt-1">
                  Tel: {profileData.phone} • {profileData.location}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 text-right">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="font-serif text-xs uppercase tracking-wider font-semibold text-ink hover:underline"
            >
              DOWNLOAD FULL CV LEDGER (PDF) →
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
