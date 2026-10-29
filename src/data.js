// Contenido tomado del informe "Seminario de Realidad Nacional I: Patrimonio Cultural".

// Enlace al quiz de evaluación de la experiencia (Microsoft Forms).
export const QUIZ_URL = 'https://forms.cloud.microsoft/r/XzxHjTzrBG'

export const secciones = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'historia', label: 'Historia' },
  { id: 'ingredientes', label: 'Ingredientes' },
  { id: 'reposteria', label: 'Repostería' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'ocasiones', label: 'Ocasiones' },
  { id: 'permanencia', label: 'Permanencia' },
  { id: 'conclusiones', label: 'Conclusiones' },
  { id: 'participa', label: 'Participa' },
]

export const lineaTiempo = [
  {
    fecha: 'Diciembre de 1872',
    titulo: 'Llega la primera goleta',
    texto:
      'Desde Jamaica llega al puerto de Limón una goleta con más de cien trabajadores contratados para construir el Ferrocarril al Atlántico.',
    fuente: 'Hutchinson, 2020',
  },
  {
    fecha: 'Últimas décadas del s. XIX',
    titulo: 'Miles de inmigrantes más',
    texto:
      'Costa Rica necesita muchísima mano de obra para unir el Valle Central con la costa del Caribe. Llegan miles de trabajadores, sobre todo jamaicanos.',
    fuente: 'Castañeda, 2012',
  },
  {
    fecha: 'Crisis del ferrocarril',
    titulo: 'Tierras a lo largo de la línea',
    texto:
      'Ante las crisis de la empresa ferroviaria se les ofrecen terrenos junto a la vía. Muchos deciden quedarse y forman comunidades estables en Limón.',
    fuente: 'Hutchinson, 2020',
  },
  {
    fecha: 'Hacia 1890',
    titulo: 'Nace la United Fruit Company',
    texto:
      'El contratista Cooper Keith inicia el cultivo de banano; la fusión de su consorcio con el de Andrew W. Preston forma la United Fruit Company y crece la necesidad de trabajadores en las plantaciones.',
    fuente: 'Castañeda, 2012',
  },
]

export const ingredientes = [
  {
    nombre: 'Seso vegetal',
    alias: 'Ackee',
    cientifico: 'Blighia sapida',
    imagen: 'img/ackee.jpg',
    pie: 'Ackee. Ilustración recuperada de Chang et al. (1984).',
    color: 'bg-achiote',
    resumen:
      'Introducido por los inmigrantes jamaiquinos, formaba parte de su alimentación diaria.',
    alerta:
      'Tiene una venita o telita roja venenosa: se debe limpiar y quitar antes de cocinar para evitar intoxicación.',
    cocina: [
      'Vigilarlo en la olla: se puede deshacer en una sartén caliente.',
      'Se suaviza en agua con sal, técnica usada en el arroz con sesos vegetales.',
    ],
    platillos: ['Seso vegetal con bacalao', 'Arroz con seso vegetal', 'Sesos vegetales con carne', 'Vinagreta de sesos vegetales'],
    medicina:
      'Tradicionalmente usado para problemas del corazón: se hierven sus hojas y se toman “por aguas”, tres veces al día durante varios días.',
  },
  {
    nombre: 'Calalú',
    alias: 'Hojas tiernas',
    cientifico: 'Phytolacca icosandra',
    color: 'bg-hoja',
    resumen: 'Arbusto cuyas hojas, sobre todo las tiernas, se usan en picadillos y recetas locales.',
    cocina: [
      'Sopa sosumba: se pican las hojas tiernas y se cocinan a fuego lento.',
      'Al final se agrega la carne, sal y un poco de chile.',
    ],
    platillos: ['Picadillos', 'Sopa sosumba'],
  },
  {
    nombre: 'Fruta de pan',
    alias: 'Crece silvestre',
    cientifico: 'Artocarpus altilis',
    color: 'bg-mango',
    resumen:
      'Crece de manera silvestre en la región. Se consume como desayuno ligero o como acompañamiento.',
    cocina: [
      'Acompaña platillos como el pescado “escobich”.',
      'Tortas de fruta de pan: se cocina en agua, se maja hasta hacer puré, se forman tortitas y se fríen.',
    ],
    platillos: ['Pescado “escobich”', 'Tortas de fruta de pan'],
    medicina:
      'Remedio para el reumatismo, tórsalos y la presión alta: se aplica un lienzo mojado en la zona afectada, o se prepara un té con sus hojas tiernas.',
  },
]

export const reposteria = [
  { nombre: 'Patí', nota: 'Pastel de harina, manteca, margarina, agua fría y sal, relleno de carne molida y pimiento picante.' },
  { nombre: 'Plantain tart', nota: 'Junto al patí, forma parte del imaginario nacional por su parecido a las empanadas.' },
  { nombre: 'Pan bon', nota: 'Se sigue preparando de forma casera y se comercializa en el Caribe.' },
  { nombre: 'Cocadas', nota: 'Parte de la repostería tradicional.' },
  { nombre: 'Pan de jengibre', nota: 'Parte de la repostería tradicional.' },
  { nombre: 'Pudín de pan', nota: 'Parte de la repostería tradicional.' },
]

export const reposteriaAlvarez = [
  'Bizcocho de maíz',
  'Empanadas de papaya',
  'Empanadas de plátano maduro',
  'Pan casero de coco salado',
  'Pan de piña',
  'Queque negro',
]

export const panBon = {
  ingredientes: ['Levadura', 'Tapa de dulce', 'Manteca', 'Vainilla', 'Frutas picadas', 'Pasas', 'Harina'],
  pasos: [
    'Revolver la levadura en una taza de agua.',
    'Derretir el dulce por aparte.',
    'Revolver la levadura con el dulce y la harina; dejar reposar 20 minutos.',
    'Revolver el resto de los ingredientes y agregar la masa preparada.',
    'Amasar bien y cortar en seis trozos de igual tamaño.',
    'Colocar en un molde engrasado y dejar reposar hasta que crezca.',
    'Hornear hasta que esté cocido. Opcional: pincelar clara de huevo batida para que brille.',
  ],
}

export const hierbas = [
  'Cerasee',
  'Diente de león',
  'Zacate de limón',
  'Hoja de aguacate',
  'Hoja de guayaba',
  'Menta',
  'Piel de naranja',
  'Hojas de limón',
  'Hojas de naranja',
  'Cow foot',
  'Sorosí',
  'Bay rum',
  'Yerbabuena',
  'Canela',
]

export const ocasiones = [
  {
    id: 'picnics',
    nombre: 'Picnics',
    descripcion: 'Almuerzos campestres colectivos',
    icono: '🧺',
  },
  {
    id: 'setups',
    nombre: 'Set-ups',
    descripcion: 'Velorios',
    icono: '🕯️',
  },
  {
    id: 'nine-nights',
    nombre: 'Nine-nights',
    descripcion: 'Novenarios',
    icono: '🌙',
  },
  {
    id: 'bodas',
    nombre: 'Bodas',
    descripcion: 'Matrimonios',
    icono: '💍',
  },
  {
    id: 'navidad',
    nombre: 'Navidad',
    descripcion: 'Celebraciones navideñas',
    icono: '🎄',
  },
]

export const equipo = [
  'Paola Vannesa Carpio Calderón',
  'Karla Adriana Martínez Carmona',
  'Verónica Rodríguez Matamoros',
  'Rosaura Sánchez García',
  'Daniel Barrantes Quirós',
  'Elkin Contreras Granados',
]
