import { useState } from 'react'
import { hierbas } from '../data'
import { Reveal, Section, SectionHeader } from './ui'

const historiaHiel = [
  'A los policías que no eran de la provincia se les llamaba “sapos”.',
  'En el puerto frecuentaban la soda de Mr. Rob, frente a la comisaría de Limón.',
  'Sin conocer el nombre de la bebida, la pedían como “esa agua”.',
  'Cuando otros llegaban a pedir lo mismo, Mr. Rob les decía que era “agua de sapo”.',
]

export default function Bebidas() {
  const [paso, setPaso] = useState(0)

  return (
    <Section id="bebidas" className="overflow-hidden bg-selva-oscuro text-coco">
      <div aria-hidden className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-mango/10 blur-3xl" />
      <div className="relative">
        <SectionHeader numero="04" kicker="Bebidas tradicionales y botánicas" titulo="La herencia del hiel" light>
          Las bebidas transmiten tradición y conocimiento. En Limón, los tés de hierbas son parte de la vida
          cotidiana; cuando tienen un propósito medicinal, este es preventivo.
        </SectionHeader>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal className="rounded-2xl bg-achiote/90 p-6 transition hover:-translate-y-1">
                <p className="text-3xl">☕</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">Calientes</h3>
                <p className="mt-2 text-sm leading-relaxed text-coco/85">
                  Té de todo tipo de yerbas y café.
                </p>
              </Reveal>
              <Reveal delay={100} className="rounded-2xl bg-hoja p-6 transition hover:-translate-y-1">
                <p className="text-3xl">🧊</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">Frías</h3>
                <p className="mt-2 text-sm leading-relaxed text-coco/85">El sorrel y el hiel.</p>
              </Reveal>
            </div>

            <Reveal delay={150} className="rounded-2xl border border-coco/15 bg-coco/5 p-6">
              <h3 className="font-display text-xl font-semibold text-mango">Hierbas para tés</h3>
              <p className="mt-1 text-sm text-coco/70">
                La más utilizada es el <strong className="text-coco">cerasee</strong>, una enredadera muy amarga y de
                uso medicinal.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {hierbas.map((h, i) => (
                  <li
                    key={h}
                    className={`cursor-default rounded-full px-3 py-1.5 text-sm transition duration-300 hover:-translate-y-0.5 hover:bg-mango hover:text-selva-oscuro ${
                      i === 0 ? 'bg-mango text-selva-oscuro font-semibold' : 'bg-coco/10 text-coco/90'
                    }`}
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-coco/50">Hutchinson (2020); Chang et al. (1984)</p>
            </Reveal>
          </div>

          <Reveal delay={100} className="overflow-hidden rounded-3xl bg-coco text-tinta">
            <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
              <figure className="relative bg-arena">
                <img
                  src="img/hiel.jpg"
                  alt="Vaso de hiel con un trozo de jengibre"
                  loading="lazy"
                  className="h-full min-h-64 w-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cacao/80 to-transparent p-3 pt-10 text-xs text-coco/90">
                  Hiel. Fotografía recuperada de Hutchinson (2020).
                </figcaption>
              </figure>
              <div className="flex flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-achiote">¿Por qué “agua de sapo”?</p>
                <h3 className="mt-1 font-display text-2xl font-semibold text-selva-oscuro">Una historia de Limón</h3>

                <div className="relative mt-4 min-h-32 flex-1">
                  {historiaHiel.map((t, i) => (
                    <p
                      key={i}
                      className={`absolute inset-0 font-display text-lg leading-snug text-tinta transition-all duration-500 ${
                        paso === i ? 'translate-x-0 opacity-100' : i < paso ? '-translate-x-6 opacity-0' : 'translate-x-6 opacity-0'
                      }`}
                      aria-hidden={paso !== i}
                    >
                      {t}
                    </p>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex gap-1.5">
                    {historiaHiel.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Parte ${i + 1}`}
                        onClick={() => setPaso(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          paso === i ? 'w-6 bg-achiote' : 'w-2 bg-cacao/20 hover:bg-cacao/40'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setPaso((p) => (p + 1) % historiaHiel.length)}
                    className="rounded-full bg-selva px-4 py-2 text-sm font-semibold text-coco transition hover:bg-hoja"
                  >
                    {paso === historiaHiel.length - 1 ? 'Volver a empezar' : 'Siguiente →'}
                  </button>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-tinta/55">
                  Así el hiel se cimentó en el imaginario nacional como el “agua de sapo” (Hutchinson, 2020, p. 28).
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
