import { Reveal, Section, SectionHeader } from './ui'

const conclusiones = [
  {
    titulo: 'Patrimonio cultural',
    texto:
      'La llegada de los inmigrantes afroantillanos no solo impulsó el ferrocarril y las bananeras: incorporó comidas, ingredientes y costumbres que hoy forman parte de nuestra cultura.',
  },
  {
    titulo: 'Más allá del rice and beans',
    texto:
      'La gastronomía afrolimonense incluye bebidas, ingredientes y preparaciones transmitidas entre generaciones, especialmente en actividades familiares y celebraciones.',
  },
  {
    titulo: 'Adaptarse sin perderse',
    texto:
      'La integración de culturas cambió algunas tradiciones, como el rice and beans que pasó del hogar a los restaurantes, sin perder su importancia cultural.',
  },
  {
    titulo: 'Compartir para conservar',
    texto:
      'Es importante conservar y compartir estas recetas con las nuevas generaciones para que sigan formando parte de nuestra identidad.',
  },
]

export default function Conclusiones() {
  return (
    <Section id="conclusiones">
      <SectionHeader numero="07" kicker="Resultados y conclusiones" titulo="Lo que aprendimos">
        La comida afrolimonense no se prepara solamente para alimentarse: reúne a las personas, mantiene las
        costumbres de las familias y le ha dado a Costa Rica una mayor variedad de platillos y sabores.
      </SectionHeader>

      <div className="grid gap-5 md:grid-cols-2">
        {conclusiones.map((c, i) => (
          <Reveal
            key={c.titulo}
            delay={i * 100}
            className="group relative overflow-hidden rounded-3xl border border-cacao/10 bg-white/60 p-7 transition duration-300 hover:border-selva/30 hover:shadow-xl hover:shadow-cacao/5"
          >
            <span className="font-display text-6xl font-semibold text-mango/60 transition duration-300 group-hover:text-achiote">
              0{i + 1}
            </span>
            <h3 className="mt-2 font-display text-2xl font-semibold text-selva-oscuro">{c.titulo}</h3>
            <p className="mt-3 leading-relaxed text-tinta/75">{c.texto}</p>
            <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-selva via-mango to-achiote transition-transform duration-500 group-hover:scale-x-100" />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
