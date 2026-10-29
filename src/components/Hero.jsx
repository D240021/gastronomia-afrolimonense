import { Reveal } from './ui'

const platillos = [
  'Rice and beans',
  'Patí',
  'Pan bon',
  'Plantain tart',
  'Hiel',
  'Seso vegetal',
  'Calalú',
  'Fruta de pan',
  'Sopa sosumba',
  'Cocadas',
  'Pudín de pan',
  'Sorrel',
  'Pan de jengibre',
  'Queque negro',
]

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-selva-oscuro text-coco">
      {/* Decoración: círculos concéntricos tipo plato */}
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 -z-10 md:-right-20">
        <div className="animate-spin-slow relative h-[38rem] w-[38rem] rounded-full border-[3px] border-dashed border-mango/25">
          <div className="absolute inset-12 rounded-full border border-coco/10" />
          <div className="absolute inset-28 rounded-full bg-hoja/30 blur-2xl" />
        </div>
      </div>
      <div
        aria-hidden
        className="absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-achiote/30 blur-3xl"
      />
      <div aria-hidden className="grain absolute inset-0 -z-10 opacity-30" />

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-32 pt-28 sm:px-6">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-coco/20 bg-coco/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-coco/80">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mango" />
            Patrimonio cultural de Costa Rica
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-8xl">
            Sabores con <em className="font-normal text-mango">historia</em>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-coco/80 md:text-xl">
            La gastronomía afrolimonense: una historia de migración, trabajo y resistencia cultural contada a
            través de la cocina.
          </p>
        </Reveal>

        <Reveal delay={300} className="mt-12 max-w-xl border-l-2 border-mango pl-5">
          <p className="font-display text-2xl italic leading-snug md:text-3xl">
            “Limón no es solo patty y rice and beans”.
          </p>
          <p className="mt-2 text-sm text-coco/60">
            Jorge Edwards Nicholson, administrador de la Casa de la Cultura de Limón (2018)
          </p>
        </Reveal>

        <Reveal delay={400} className="mt-12 flex flex-wrap gap-3">
          <a
            href="#historia"
            className="group inline-flex items-center gap-2 rounded-full bg-mango px-6 py-3 font-semibold text-selva-oscuro shadow-lg shadow-mango/20 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Comenzar el recorrido
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#participa"
            className="inline-flex items-center gap-2 rounded-full border border-coco/30 px-6 py-3 font-semibold text-coco transition hover:bg-coco/10"
          >
            Responder el quiz
          </a>
        </Reveal>
      </div>

      {/* Cinta de platillos */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-coco/10 bg-selva py-4">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
          {[...platillos, ...platillos].map((p, i) => (
            <span key={i} className="flex items-center gap-8 font-display text-lg italic text-coco/80">
              {p}
              <span className="h-1.5 w-1.5 rounded-full bg-mango" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
