import { useState } from 'react'
import { ingredientes } from '../data'
import { Reveal, Section, SectionHeader } from './ui'

export default function Ingredientes() {
  const [sel, setSel] = useState(0)
  const ing = ingredientes[sel]

  return (
    <Section id="ingredientes" className="bg-arena/60">
      <div aria-hidden className="grain absolute inset-0 opacity-60" />
      <div className="relative">
        <SectionHeader numero="02" kicker="Ingredientes incorporados" titulo="Lo que llegó en la maleta">
          Antes del siglo XIX la cocina costarricense se basaba en la herencia precolombina e hispana. Con los
          inmigrantes antillanos se integraron tubérculos y nuevas plantas que hoy forman parte de nuestra
          gastronomía (Chang et al., 1984).
        </SectionHeader>

        <div className="grid gap-6 lg:grid-cols-[18rem_1fr]">
          {/* Selector */}
          <Reveal className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0" role="tablist">
            {ingredientes.map((item, i) => (
              <button
                key={item.nombre}
                role="tab"
                aria-selected={sel === i}
                onClick={() => setSel(i)}
                className={`group flex min-w-[13rem] items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 lg:min-w-0 ${
                  sel === i
                    ? 'border-selva bg-selva text-coco shadow-xl shadow-selva/20'
                    : 'border-cacao/10 bg-coco hover:-translate-y-0.5 hover:border-selva/40'
                }`}
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-xl font-semibold text-coco transition-transform duration-300 group-hover:rotate-12 ${item.color}`}
                >
                  {item.nombre[0]}
                </span>
                <span>
                  <span className="block font-display text-lg font-semibold leading-tight">{item.nombre}</span>
                  <span className={`text-xs italic ${sel === i ? 'text-coco/70' : 'text-tinta/50'}`}>
                    {item.cientifico}
                  </span>
                </span>
              </button>
            ))}
          </Reveal>

          {/* Detalle */}
          <Reveal delay={100}>
            <article
              key={ing.nombre}
              className="grid animate-[fadeIn_.5s_ease-out] overflow-hidden rounded-3xl bg-coco shadow-xl shadow-cacao/10 ring-1 ring-cacao/10 md:grid-cols-[1fr_1.3fr]"
            >
              <div className={`relative flex min-h-56 items-center justify-center p-8 ${ing.color}`}>
                {ing.imagen ? (
                  <figure className="w-full max-w-xs">
                    <img
                      src={ing.imagen}
                      alt={`Ilustración de ${ing.nombre}`}
                      className="animate-float w-full rounded-xl bg-white p-2 shadow-2xl"
                    />
                    <figcaption className="mt-3 text-center text-xs text-coco/85">{ing.pie}</figcaption>
                  </figure>
                ) : (
                  <div className="text-center text-coco">
                    <p className="animate-float font-display text-[9rem] font-semibold leading-none opacity-90">
                      {ing.nombre[0]}
                    </p>
                    <p className="font-display text-xl italic">{ing.cientifico}</p>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-achiote">{ing.alias}</p>
                <h3 className="mt-1 font-display text-3xl font-semibold text-selva-oscuro md:text-4xl">{ing.nombre}</h3>
                <p className="mt-3 leading-relaxed text-tinta/75">{ing.resumen}</p>

                {ing.alerta && (
                  <div className="mt-5 flex gap-3 rounded-xl border border-achiote/30 bg-achiote/10 p-4 text-sm text-achiote">
                    <span aria-hidden className="text-lg leading-none">⚠</span>
                    <p className="leading-relaxed">
                      <strong>Precaución: </strong>
                      {ing.alerta}
                    </p>
                  </div>
                )}

                <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-selva">En la cocina</h4>
                <ul className="mt-2 space-y-2">
                  {ing.cocina.map((c) => (
                    <li key={c} className="flex gap-3 leading-relaxed text-tinta/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mango" />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {ing.platillos.map((p) => (
                    <span key={p} className="rounded-full bg-arena px-3 py-1 text-xs font-medium text-cacao">
                      {p}
                    </span>
                  ))}
                </div>

                {ing.medicina && (
                  <details className="group mt-6 rounded-xl bg-selva/5 p-4 open:bg-selva/10">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-selva">
                      🌿 Uso medicinal tradicional
                      <span className="transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-tinta/75">{ing.medicina}</p>
                  </details>
                )}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
