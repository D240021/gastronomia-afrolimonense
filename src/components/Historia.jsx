import { lineaTiempo } from '../data'
import { Cita, Foto, Reveal, Section, SectionHeader } from './ui'

export default function Historia() {
  return (
    <>
      {/* Introducción */}
      <Section id="introduccion" className="pb-0 md:pb-0">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <Reveal>
            <p className="font-display text-3xl leading-snug text-selva-oscuro text-pretty md:text-4xl">
              La gastronomía es más que un grupo de recetas: es una{' '}
              <span className="bg-gradient-to-t from-mango/50 from-40% to-transparent to-40%">tradición cultural</span>{' '}
              que preserva recuerdos, se transmite de generación en generación y acompaña los momentos más
              significativos de la vida colectiva.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <Cita autor="Hutchinson (2020, p. 7)">
              Dentro de la sociedad costarricense existe una visión reducida de la cultura Afro-costarricense limitada
              a la culinaria del rice and beans, el patty, y la música del llamado calypso.
            </Cita>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ['1872', 'Llega a Limón la primera goleta desde Jamaica'],
            ['+100', 'trabajadores contratados en ese primer viaje'],
            ['Inglés y creole', 'idiomas que se recrearon en Limón'],
            ['Turrialba', 'puente entre Limón y Cartago por el ferrocarril'],
          ].map(([dato, texto], i) => (
            <Reveal
              key={dato}
              delay={i * 100}
              className="rounded-2xl border border-cacao/10 bg-white/60 p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-cacao/5"
            >
              <p className="font-display text-3xl font-semibold text-achiote md:text-4xl">{dato}</p>
              <p className="mt-2 text-sm leading-snug text-tinta/70">{texto}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Historia */}
      <Section id="historia">
        <SectionHeader numero="01" kicker="Antecedentes" titulo="Del ferrocarril a las bananeras">
          La presencia afroantillana en el Caribe costarricense comenzó formalmente en 1872. Junto con su trabajo,
          llegaron sus comidas, ingredientes y formas de cocinar.
        </SectionHeader>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Línea de tiempo */}
          <ol className="relative border-l-2 border-dashed border-selva/25 pl-8">
            {lineaTiempo.map((h, i) => (
              <Reveal as="li" key={h.titulo} delay={i * 120} className="relative mb-10 last:mb-0">
                <span className="absolute -left-[2.6rem] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-coco ring-2 ring-selva">
                  <span className="h-2 w-2 rounded-full bg-achiote" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-widest text-achiote">{h.fecha}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold text-selva-oscuro">{h.titulo}</h3>
                <p className="mt-2 leading-relaxed text-tinta/75">{h.texto}</p>
                <p className="mt-2 text-xs text-tinta/45">{h.fuente}</p>
              </Reveal>
            ))}
          </ol>

          {/* Fotos */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <Reveal className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <Foto
                src="img/ferrocarril.jpg"
                alt="Trabajadores jamaicanos en la línea del ferrocarril"
                pie="Trabajadores jamaicanos en la línea del ferrocarril, Limón (1901). Archivo Nacional de Costa Rica."
                className="foto-archivo"
                imgClassName="aspect-[4/3]"
              />
            </Reveal>
            <Reveal delay={150}>
              <Foto
                src="img/bananeras.jpg"
                alt="Trabajadores bananeros cargando el producto en los carros del ferrocarril"
                pie="Trabajadores bananeros en la finca Parismina Banana Company, Limón, 1922. Fotografía de Manuel Gómez Miralles. Archivo Nacional de Costa Rica."
                className="foto-archivo"
                imgClassName="aspect-[3/4]"
              />
            </Reveal>
            <Reveal delay={250} className="flex flex-col justify-center gap-4 rounded-2xl bg-selva p-6 text-coco">
              <p className="text-xs font-semibold uppercase tracking-widest text-mango">Más que trabajo</p>
              <p className="leading-relaxed text-coco/85">
                No todas las personas trabajaban en las bananeras. Poco a poco se formaron comunidades donde no solo
                se buscaba empleo: se establecieron vidas y familias, y algunas personas produjeron por cuenta propia.
              </p>
              <p className="leading-relaxed text-coco/85">
                Su cultura se recreó en el idioma, las iglesias protestantes, la vestimenta, la música y, por
                supuesto, la alimentación.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  )
}
