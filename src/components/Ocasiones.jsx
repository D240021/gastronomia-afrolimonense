import { ocasiones } from '../data'
import { Cita, Reveal, Section, SectionHeader } from './ui'

export default function Ocasiones() {
  return (
    <Section id="ocasiones">
      <SectionHeader numero="05" kicker="Gastronomía en ocasiones especiales" titulo="La mesa que reúne">
        La cocina afrolimonense aprovecha la caza, la pesca y la agricultura, con una técnica de origen antillano
        que se fundamenta en el uso de leche y aceite de coco.
      </SectionHeader>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {ocasiones.map((o, i) => (
          <Reveal
            key={o.id}
            delay={i * 90}
            className={`group relative overflow-hidden rounded-2xl p-5 text-coco transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
              ['bg-selva', 'bg-cacao', 'bg-selva-oscuro', 'bg-achiote', 'bg-hoja'][i]
            } ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
          >
            <span
              aria-hidden
              className="absolute -right-3 -top-3 text-7xl opacity-20 transition duration-500 group-hover:scale-125 group-hover:opacity-40"
            >
              {o.icono}
            </span>
            <p className="text-3xl">{o.icono}</p>
            <h3 className="mt-6 font-display text-2xl font-semibold">{o.nombre}</h3>
            <p className="text-sm text-coco/75">{o.descripcion}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        <Reveal className="rounded-2xl bg-mango/15 p-6 ring-1 ring-mango/40">
          <p className="text-xs font-semibold uppercase tracking-widest text-achiote">Domingos y festividades</p>
          <p className="mt-3 font-display text-xl leading-snug text-selva-oscuro">
            El <strong>rice and beans</strong> sigue siendo muy relevante, especialmente durante los domingos y
            las festividades.
          </p>
        </Reveal>

        <Reveal delay={100} className="rounded-2xl border border-achiote/25 bg-achiote/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-achiote">Platillos en riesgo</p>
          <p className="mt-3 leading-relaxed text-tinta/80">
            Es cada vez más difícil acceder a productos como la carne o el bacalao. La “modernización” y la
            llegada de migrantes ha sustituido patrones tradicionales por comidas extranjeras de menor valor
            nutritivo. Por eso estas preparaciones se preservan, sobre todo, en ocasiones especiales.
          </p>
        </Reveal>

        <Reveal delay={200} className="rounded-2xl bg-white/60 p-6 ring-1 ring-cacao/10">
          <p className="text-xs font-semibold uppercase tracking-widest text-achiote">Recetas sin medidas exactas</p>
          <p className="mt-3 leading-relaxed text-tinta/80">
            Las cantidades pocas veces se detallan como en un manual de cocina: así quien cocina tiene libertad para
            adaptar el platillo y mantener viva la tradición (Chang et al., 1984).
          </p>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-20 max-w-3xl px-2 text-center">
        <Cita autor="Quince Duncan, autor limonense (Meléndez y Duncan, 1978, citado en Chang et al., 1984)">
          La alimentación juega un papel destacado en la vida del negro. Una alimentación a base de dos cosas
          fundamentales: tubérculos y tés de yerbas.
        </Cita>
      </Reveal>
    </Section>
  )
}
