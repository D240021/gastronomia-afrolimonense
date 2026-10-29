import { useEffect, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { QUIZ_URL } from '../data'
import { Reveal, Section, SectionHeader } from './ui'

const preguntasEjemplo = [
  '¿Conocías sobre la gastronomía afrolimonense?',
  '¿Alguna vez has probado alguno de estos platillos? ¿Cómo fue tu experiencia?',
  '¿Qué te pareció esta página web?',
]

export default function Participa() {
  const [url, setUrl] = useState('')
  const [copiado, setCopiado] = useState(false)

  useEffect(() => {
    setUrl(window.location.href.split('#')[0])
  }, [])

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      /* el portapapeles puede no estar disponible */
    }
  }

  return (
    <Section id="participa" className="overflow-hidden bg-selva text-coco">
      <div aria-hidden className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-achiote/25 blur-3xl" />
      <div className="relative">
        <SectionHeader numero="08" kicker="Evaluación de la experiencia" titulo="Cuéntanos tu experiencia" light>
          No es un examen de memoria: queremos saber si conocías el tema, si has probado estos platillos y qué te
          pareció la página.
        </SectionHeader>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="rounded-3xl bg-coco p-6 text-tinta md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-achiote">Quiz corto</p>
            <h3 className="mt-1 font-display text-3xl font-semibold text-selva-oscuro">Algunas de las preguntas</h3>
            <ol className="mt-6 space-y-3">
              {preguntasEjemplo.map((p, i) => (
                <li key={p} className="flex gap-4 rounded-xl bg-arena/70 p-4">
                  <span className="font-display text-2xl font-semibold text-mango">{i + 1}</span>
                  <span className="pt-1 leading-relaxed">{p}</span>
                </li>
              ))}
            </ol>
            <a
              href={QUIZ_URL}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-achiote px-7 py-3.5 font-semibold text-coco shadow-lg shadow-achiote/25 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Responder el quiz
              <span className="transition group-hover:translate-x-1">↗</span>
            </a>
          </Reveal>

          <Reveal delay={150} className="flex flex-col items-center rounded-3xl border border-coco/15 bg-coco/5 p-6 text-center md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-mango">Escanea con tu celular</p>
            <div className="mt-5 rounded-2xl bg-coco p-4 shadow-2xl transition duration-500 hover:rotate-2 hover:scale-105">
              {url ? (
                <QRCodeSVG value={url} size={180} fgColor="#12301f" bgColor="#fbf5ea" level="M" />
              ) : (
                <div className="h-[180px] w-[180px]" />
              )}
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-coco/75">
              Abre esta página en tu teléfono.
            </p>
            <button
              type="button"
              onClick={copiar}
              className="mt-4 rounded-full border border-coco/25 px-4 py-2 text-sm font-medium transition hover:bg-coco/10"
            >
              {copiado ? '¡Enlace copiado!' : 'Copiar enlace'}
            </button>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
