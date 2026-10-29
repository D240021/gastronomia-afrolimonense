import { useState } from 'react'
import { panBon, reposteria, reposteriaAlvarez } from '../data'
import { Foto, Reveal, Section, SectionHeader } from './ui'

function RecetaPanBon() {
  const [hechos, setHechos] = useState(() => new Set())
  const toggle = (i) =>
    setHechos((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  const pct = Math.round((hechos.size / panBon.pasos.length) * 100)

  return (
    <div className="rounded-3xl bg-cacao p-6 text-coco md:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-mango">Receta · 6 bollos</p>
          <h3 className="mt-1 font-display text-3xl font-semibold md:text-4xl">Pan bon casero</h3>
          <p className="mt-2 text-sm text-coco/60">
            Según <em>Remedios caseros y comidas tradicionales afrolimonenses</em> (Chang et al., 1984)
          </p>
        </div>
        <div className="w-full sm:w-48">
          <div className="flex justify-between text-xs text-coco/70">
            <span>Progreso</span>
            <span>{pct}%</span>
          </div>
          <div className="mt-1 h-2 overflow-hidden rounded-full bg-coco/15">
            <div className="h-full rounded-full bg-mango transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_2fr]">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-mango">Ingredientes</h4>
          <ul className="mt-3 flex flex-wrap gap-2 md:flex-col">
            {panBon.ingredientes.map((ing) => (
              <li key={ing} className="rounded-full border border-coco/20 px-3 py-1 text-sm md:border-0 md:px-0 md:py-0.5">
                <span className="mr-2 hidden text-mango md:inline">•</span>
                {ing}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-mango">Preparación</h4>
          <p className="mt-1 text-xs text-coco/50">Toca cada paso para marcarlo como hecho.</p>
          <ol className="mt-3 space-y-2">
            {panBon.pasos.map((paso, i) => {
              const hecho = hechos.has(i)
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-pressed={hecho}
                    className={`flex w-full items-start gap-4 rounded-xl p-3 text-left transition ${
                      hecho ? 'bg-coco/5 text-coco/50' : 'bg-coco/10 hover:bg-coco/15'
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition ${
                        hecho ? 'scale-90 bg-mango text-cacao' : 'border border-coco/30'
                      }`}
                    >
                      {hecho ? '✓' : i + 1}
                    </span>
                    <span className={`pt-0.5 leading-relaxed ${hecho ? 'line-through' : ''}`}>{paso}</span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default function Reposteria() {
  return (
    <Section id="reposteria">
      <SectionHeader numero="03" kicker="Repostería y panadería tradicional" titulo="Del horno a la mesa">
        Una combinación entre la repostería inglesa y la tradición de la gastronomía africana, con platillos que se
        siguen elaborando y consumiendo en el siglo XXI.
      </SectionHeader>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <Reveal>
          <Foto
            src="img/pan-bon.jpg"
            alt="Pan bon"
            pie="Pan bon. Fotografía recuperada de Hutchinson (2020)."
            imgClassName="aspect-[9/8]"
          />
          <div className="mt-6 rounded-2xl border border-mango/40 bg-mango/10 p-5">
            <p className="text-sm leading-relaxed text-tinta/80">
              En Limón se han encontrado, y aún se encuentran, panaderías de personajes como{' '}
              <strong className="text-selva-oscuro">Mr. Booth</strong> y{' '}
              <strong className="text-selva-oscuro">Mr. Patterson</strong>, este último conocido como{' '}
              <em>“mista patisin”</em> (Hutchinson, 2020).
            </p>
          </div>
        </Reveal>

        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reposteria.map((r, i) => (
              <Reveal
                key={r.nombre}
                delay={i * 70}
                className={`group rounded-2xl border border-cacao/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-mango hover:shadow-lg hover:shadow-mango/10 ${
                  i === 0 ? 'bg-selva text-coco sm:col-span-2' : 'bg-white/60'
                }`}
              >
                <h3 className={`font-display text-2xl font-semibold ${i === 0 ? 'text-mango' : 'text-selva-oscuro'}`}>
                  {r.nombre}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? 'text-coco/85' : 'text-tinta/70'}`}>{r.nota}</p>
                {i === 0 && (
                  <p className="mt-3 text-xs text-coco/55">Porras-Alfaro et al. (2020, p. 13)</p>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6 rounded-2xl bg-arena p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-achiote">
              También de Limón, según Álvarez (2014)
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {reposteriaAlvarez.map((r) => (
                <span
                  key={r}
                  className="rounded-full bg-coco px-3 py-1.5 text-sm text-cacao ring-1 ring-cacao/10 transition hover:bg-mango hover:text-selva-oscuro"
                >
                  {r}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-16">
        <RecetaPanBon />
      </Reveal>
    </Section>
  )
}
