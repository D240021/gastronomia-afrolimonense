import { equipo } from '../data'

export default function Footer() {
  return (
    <footer className="bg-selva-oscuro px-4 pb-10 pt-20 text-coco sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-4">
              <img src="img/ucr.jpg" alt="Escudo de la Universidad de Costa Rica" className="h-16 w-16 rounded-full bg-white object-contain p-1" />
              <div>
                <p className="font-display text-lg font-semibold">Universidad de Costa Rica</p>
                <p className="text-sm text-coco/60">Sede del Atlántico · Turrialba</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-coco/70">
              Seminario de Realidad Nacional I: Patrimonio Cultural
              <br />
              Profesor: Kenneth Carvajal Maykall
              <br />
              II Ciclo, 2026
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-mango">Equipo</h3>
            <ul className="mt-3 grid gap-x-6 gap-y-1.5 text-sm text-coco/80 sm:grid-cols-2">
              {equipo.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-coco/10 pt-6 text-xs text-coco/50 sm:flex-row sm:items-center">
          <p>Sabores con historia · Gastronomía afrolimonense</p>
          <a href="#inicio" className="rounded-full border border-coco/20 px-4 py-2 transition hover:bg-coco/10 hover:text-coco">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
