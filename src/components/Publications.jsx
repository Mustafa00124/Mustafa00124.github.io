import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const papers = [
  {
    title: 'Scalable Ensemble Federated Learning with Enhanced Open-Set Recognition',
    venue: 'Transactions on Machine Learning Research · June 2026',
    paper: 'https://openreview.net/forum?id=QnnCYOfuUI',
    code: 'https://github.com/Mustafa00124/FedSOV',
  },
  {
    title: 'Multi-Algorithm Deep Unfolding With Application to Foreground Detection',
    venue: 'IEEE Signal Processing Letters · 2025',
    paper: 'https://ieeexplore.ieee.org/document/11194230',
    code: 'https://github.com/Mustafa00124/MultiAlgorithmDeepUnfolding',
  },
]

export default function Publications() {
  return (
    <section className="section-padding warm-section-bg-alt relative" aria-labelledby="publications-heading">
      <div className="container-max">
        <h2 id="publications-heading" className="mb-8 text-3xl font-light text-philosopher-orange dark:text-neon-orange md:text-4xl">Selected Publications</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {papers.map((paper) => (
            <article key={paper.title} className="flex flex-col rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-philosopher-charcoal/70">
              <h3 className="text-xl font-medium text-gray-800 dark:text-philosopher-gray">{paper.title}</h3>
              <p className="mb-6 mt-3 text-sm text-gray-600 dark:text-gray-400">{paper.venue}</p>
              <div className="mt-auto flex gap-5 text-sm font-medium text-gray-800 dark:text-philosopher-gray">
                <a href={paper.paper} target="_blank" rel="noopener noreferrer" aria-label={`Read ${paper.title}`} className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-orange-700 dark:hover:text-neon-orange">Paper <ExternalLink className="h-4 w-4" /></a>
                <a href={paper.code} target="_blank" rel="noopener noreferrer" aria-label={`Code for ${paper.title}`} className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-orange-700 dark:hover:text-neon-orange">Code <Github className="h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
