import { useState } from 'react'
import { Cita, Foto, Reveal, Section, SectionHeader } from './ui'

const etapas = {
  antes: {
    etiqueta: 'Antes',
    titulo: 'En el hogar, después de la iglesia',
    puntos: [
      'El rice and beans se consumía tradicionalmente los domingos después de asistir a la iglesia.',
      'Se preparaba principalmente en los hogares afrolimonenses.',
      'Es una costumbre que todavía se mantiene en algunas familias de Limón.',
    ],
  },
  ahora: {
    etiqueta: 'Ahora',
    titulo: 'En restaurantes de todo el país',
    puntos: [
      'Se comercializa y se encuentra cualquier día de la semana.',
      'Su consumo se ha extendido fuera de la provincia de Limón.',
      'Las familias también incorporaron comidas nacionales como el arroz con pollo y los picadillos, sin dejar sus preparaciones tradicionales.',
    ],
  },
}

export default function Permanencia() {
  const [vista, setVista] = useState('antes')
  const e = etapas[vista]

  return (
    <Section id="permanencia" className="bg-arena/60">
      <div aria-hidden className="grain absolute inset-0 opacity-60" />
      <div className="relative">
        <SectionHeader numero="06" kicker="Permanencia cultural y cambios" titulo="Raíces que se adaptan">
          Muchos elementos de la gastronomía jamaicana se adaptaron al contexto costarricense: se mantuvieron y, al
          mismo tiempo, fueron conocidos y consumidos por otros grupos (Hutchinson Miller, 2020).
        </SectionHeader>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <Foto
              src="img/rice-and-beans.jpg"
              alt="Plato de rice and beans con pollo, ensalada y patacones en un restaurante"
              pie="Fotografía de Elsa Hutchinson Miller, restaurante en Puerto Viejo, 2019. Fuente: Hutchinson Miller (2020, p. 23)."
              imgClassName="aspect-[6/5]"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="inline-flex rounded-full bg-coco p-1 ring-1 ring-cacao/10" role="tablist">
              {Object.entries(etapas).map(([k, v]) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={vista === k}
                  onClick={() => setVista(k)}
                  className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
                    vista === k ? 'bg-selva text-coco shadow' : 'text-tinta/60 hover:text-selva-oscuro'
                  }`}
                >
                  {v.etiqueta}
                </button>
              ))}
            </div>

            <div key={vista} className="mt-6 animate-[fadeIn_.5s_ease-out]">
              <h3 className="font-display text-3xl font-semibold text-selva-oscuro">{e.titulo}</h3>
              <ul className="mt-5 space-y-4">
                {e.puntos.map((p) => (
                  <li key={p} className="flex gap-4 leading-relaxed text-tinta/80">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mango text-xs font-bold text-selva-oscuro">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <Cita className="mt-12" autor="Chaverri-Flores (2019, p. 141)">
              A pesar de esta tendencia a la estandarización aún persisten tradiciones en el parque como la venta de
              ‘patty’ y ‘plantinta’.
            </Cita>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
