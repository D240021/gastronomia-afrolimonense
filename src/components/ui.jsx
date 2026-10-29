import { useEffect, useRef, useState } from 'react'

export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        obs.disconnect()
      }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, visible]
}

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useInView()
  return (
    <Tag
      ref={ref}
      style={{ '--delay': `${delay}ms` }}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`relative px-4 py-20 sm:px-6 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

export function SectionHeader({ numero, kicker, titulo, children, light = false }) {
  return (
    <Reveal className="mb-12 max-w-3xl md:mb-16">
      <p
        className={`mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
          light ? 'text-mango' : 'text-achiote'
        }`}
      >
        <span className={`font-display text-base italic ${light ? 'text-coco/60' : 'text-cacao/50'}`}>{numero}</span>
        <span className={`h-px w-8 ${light ? 'bg-mango' : 'bg-achiote'}`} />
        {kicker}
      </p>
      <h2
        className={`font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-6xl ${
          light ? 'text-coco' : 'text-selva-oscuro'
        }`}
      >
        {titulo}
      </h2>
      {children && (
        <p className={`mt-5 text-lg leading-relaxed text-pretty ${light ? 'text-coco/80' : 'text-tinta/75'}`}>
          {children}
        </p>
      )}
    </Reveal>
  )
}

export function Cita({ children, autor, className = '', light = false }) {
  return (
    <figure className={`relative ${className}`}>
      <span
        aria-hidden
        className={`absolute -top-6 -left-2 font-display text-8xl leading-none ${light ? 'text-mango/40' : 'text-mango'}`}
      >
        “
      </span>
      <blockquote
        className={`relative font-display text-xl italic leading-snug md:text-2xl ${
          light ? 'text-coco' : 'text-selva-oscuro'
        }`}
      >
        {children}
      </blockquote>
      {autor && (
        <figcaption className={`mt-4 text-sm font-medium ${light ? 'text-coco/70' : 'text-tinta/60'}`}>— {autor}</figcaption>
      )}
    </figure>
  )
}

export function Foto({ src, alt, pie, className = '', imgClassName = '' }) {
  return (
    <figure className={`group ${className}`}>
      <div className="overflow-hidden rounded-2xl bg-arena shadow-lg shadow-cacao/10 ring-1 ring-cacao/10">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 ${imgClassName}`}
        />
      </div>
      {pie && <figcaption className="mt-3 text-xs leading-relaxed text-tinta/60">{pie}</figcaption>}
    </figure>
  )
}
