import React, { useEffect, useState } from 'react'
import { ArrowLeft, Download, ExternalLink, FileText, Moon, Sun } from 'lucide-react'

const resumeUrl = '/MustafaSiddiqui_resume.pdf'

const education = [
  {
    school: 'University of South Florida (USF)',
    degree: 'Ph.D. in Computer Science',
    dates: 'Aug 2026 - Present',
    place: 'Tampa, FL, USA',
  },
  {
    school: 'Lahore University of Management Sciences (LUMS)',
    degree: 'B.S. in Electrical Engineering, Graduated with Distinction',
    dates: 'Aug 2019 - May 2023',
    place: 'Lahore, Pakistan',
  },
]

const experiences = [
  {
    heading: 'Research',
    roles: [
      {
        role: 'Graduate Research Assistant, USF',
        dates: 'Aug 2026 - Present',
        place: 'Tampa, FL',
        bullets: ['Developed a Description Logic-based benchmark for how large language models represent, retrieve, and modify factual knowledge, distinguishing assertions (ABox), concepts (TBox), and relations (RBox).'],
      },
      {
        role: 'Research Assistant, LUMS',
        dates: 'Jul 2023 - Jul 2026',
        place: 'Lahore, Pakistan',
        bullets: ['Conducted empirical and theoretical work on open-set recognition.', 'Developed FedSOV, a scalable ensemble-based federated learning framework for extreme data heterogeneity.', 'Investigated optimization dynamics, polysemantic representations, and domain generalization.', 'Proposed a multi-algorithm deep unfolding framework validated on foreground detection.', 'Developed CVRP heuristics integrated into a dashboard for the Lahore Waste Management Company.'],
      },
    ],
  },
  {
    heading: 'Teaching',
    roles: [
      {
        role: 'Graduate Teaching Assistant, USF',
        dates: 'Aug 2026 - Present',
        place: 'Tampa, FL',
        bullets: ['Supported Network Security and Firewalls, including Capture the Flag and network-protection labs.'],
      },
      {
        role: 'Teaching Assistant, LUMS',
        dates: 'Aug 2022 - May 2023',
        place: 'Lahore, Pakistan',
        bullets: ['Assisted with Electromagnetic Fields and Waves and Feedback Control Systems.'],
      },
    ],
  },
  {
    heading: 'AI Engineering',
    roles: [
      {
        role: 'Freelance, Independent',
        dates: 'Jan 2025 - Jul 2026',
        place: 'Remote',
        bullets: ['Developed real-time voice agents, multi-agent banking systems, and graph-based retrieval-augmented generation pipelines.'],
      },
    ],
  },
]

const CVPage = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const useDark = savedTheme === 'dark'
    setDarkMode(useDark)
    document.documentElement.classList.toggle('dark', useDark)
  }, [])

  const toggleDarkMode = () => {
    const useDark = !darkMode
    setDarkMode(useDark)
    document.documentElement.classList.toggle('dark', useDark)
    localStorage.setItem('theme', useDark ? 'dark' : 'light')
  }

  return (
    <main className="min-h-screen warm-section-bg text-gray-800 dark:text-philosopher-gray">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-philosopher-charcoal/80">
        <div className="container-max flex items-center justify-between px-6 py-4 md:px-12 lg:px-24">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-philosopher-orange dark:hover:text-neon-orange">
            <ArrowLeft className="h-4 w-4" /> Back to site
          </a>
          <div className="flex items-center gap-3">
            <a href={resumeUrl} download className="inline-flex items-center gap-2 rounded-full bg-philosopher-orange px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 dark:bg-neon-orange">
              <Download className="h-4 w-4" /> Download PDF
            </a>
            <button type="button" onClick={toggleDarkMode} aria-label="Toggle color theme" className="rounded-full p-2 text-gray-700 transition-colors hover:bg-black/5 dark:text-philosopher-gray dark:hover:bg-white/10">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <section className="section-padding philosopher-gradient relative overflow-hidden">
        <div className="container-max relative z-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-philosopher-orange dark:text-neon-orange">Curriculum Vitae</p>
          <h1 className="text-4xl font-light md:text-6xl">Mustafa Siddiqui</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-700 dark:text-philosopher-gray">AI researcher and engineer working at the intersection of knowledge editing, mechanistic interpretability, and reliable machine learning.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a href="mailto:msiddiqui146@usf.edu" className="rounded-full bg-white/80 px-4 py-2 shadow-sm transition-transform hover:scale-105 dark:bg-philosopher-charcoal/80">msiddiqui146@usf.edu</a>
            <a href="https://www.linkedin.com/in/mustafasid/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm transition-transform hover:scale-105 dark:bg-philosopher-charcoal/80">LinkedIn <ExternalLink className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-12 lg:grid-cols-[1fr_1.65fr]">
          <aside className="space-y-10">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-philosopher-orange dark:text-neon-orange">Research interests</h2>
              <p className="mt-4 leading-relaxed">Knowledge editing in large language models, mechanistic interpretability, neural knowledge representation, test-time adaptation, generalization theory, and foundations of deep learning.</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-philosopher-orange dark:text-neon-orange">Education</h2>
              <div className="mt-4 space-y-5">
                {education.map((item) => <div key={item.school}><h3 className="font-semibold">{item.school}</h3><p className="text-sm italic">{item.degree}</p><p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.dates}<br />{item.place}</p></div>)}
              </div>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-philosopher-orange dark:text-neon-orange">Publications</h2>
              <ol className="mt-4 space-y-4 text-sm leading-relaxed"><li><span className="font-semibold">Multi-Algorithm Deep Unfolding With Application to Foreground Detection.</span> <em>IEEE Signal Processing Letters</em>, 2025.</li><li><span className="font-semibold">Scalable Ensemble Federated Learning with Enhanced Open-Set Recognition.</span> <em>Transactions on Machine Learning Research</em>, June 2026.</li></ol>
            </div>
          </aside>

          <div>
            <h2 className="text-3xl font-light">Experience</h2>
            <div className="mt-8 space-y-10">
              {experiences.map((group) => <section key={group.heading}><h3 className="border-b border-philosopher-orange/40 pb-2 text-xl font-medium dark:border-neon-orange/40">{group.heading}</h3><div className="mt-5 space-y-7">{group.roles.map((item) => <article key={item.role}><div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline"><h4 className="font-semibold">{item.role}</h4><p className="text-sm text-gray-600 dark:text-gray-400">{item.dates} · {item.place}</p></div><ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div></section>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding warm-section-bg-alt">
        <div className="container-max"><div className="mb-6 flex flex-wrap items-center justify-between gap-4"><div><h2 className="text-3xl font-light">Original résumé</h2><p className="mt-2 text-gray-700 dark:text-philosopher-gray">View the complete one-page PDF below.</p></div><a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-philosopher-orange px-4 py-2 text-sm font-semibold transition-colors hover:bg-philosopher-orange hover:text-white dark:border-neon-orange dark:hover:bg-neon-orange"><FileText className="h-4 w-4" /> Open PDF</a></div><iframe title="Mustafa Siddiqui résumé" src={resumeUrl} className="h-[76vh] w-full rounded-xl border border-black/10 bg-white shadow-xl dark:border-white/10" /></div>
      </section>
    </main>
  )
}

export default CVPage
