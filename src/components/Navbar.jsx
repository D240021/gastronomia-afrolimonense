import { useEffect, useState } from 'react'
import { secciones } from '../data'

export default function Navbar() {
  const [activa, setActiva] = useState('inicio')
  const [scrolled, setScrolled] = useState(false)
  const [abierto, setAbierto] = useState(false)
  const [progreso, setProgreso] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgreso(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActiva(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    secciones.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const oscuro = !scrolled && !abierto

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || abierto ? 'bg-coco/90 shadow-sm shadow-cacao/5 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2" onClick={() => setAbierto(false)}>
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-selva">
            <span className="h-4 w-4 rounded-full bg-mango" />
            <span className="absolute h-1.5 w-1.5 rounded-full bg-achiote" />
          </span>
          <span
            className={`whitespace-nowrap font-display text-lg font-semibold transition-colors ${oscuro ? 'text-coco' : 'text-selva-oscuro'}`}
          >
            Sabores con historia
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {secciones.slice(1).map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  activa === s.id
                    ? oscuro
                      ? 'bg-coco/15 text-coco'
                      : 'bg-selva text-coco'
                    : oscuro
                      ? 'text-coco/80 hover:text-coco'
                      : 'text-tinta/70 hover:bg-arena hover:text-selva-oscuro'
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden ${
            oscuro ? 'text-coco' : 'text-selva-oscuro'
          }`}
        >
          <span className={`h-0.5 w-5 bg-current transition ${abierto ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 bg-current transition ${abierto ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-current transition ${abierto ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 lg:hidden ${
          abierto ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <ul className="min-h-0 px-4 sm:px-6">
          {secciones.slice(1).map((s, i) => (
            <li key={s.id} className="border-t border-cacao/10 last:mb-4">
              <a
                href={`#${s.id}`}
                onClick={() => setAbierto(false)}
                className={`flex items-center justify-between py-3 font-display text-xl ${
                  activa === s.id ? 'text-achiote' : 'text-selva-oscuro'
                }`}
              >
                {s.label}
                <span className="text-xs font-sans text-tinta/40">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-0.5 bg-transparent">
        <div className="h-full origin-left bg-achiote" style={{ transform: `scaleX(${progreso})` }} />
      </div>
    </header>
  )
}
