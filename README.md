# Sabores con historia · Gastronomía afrolimonense

Página web del proyecto del Seminario de Realidad Nacional I: Patrimonio Cultural (UCR, Sede del Atlántico, II Ciclo 2026).

## Uso

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # genera /dist para publicar
```

## Antes de la exposición

1. El enlace del formulario está en `QUIZ_URL` dentro de `src/data.js`; cámbialo ahí si hace falta.
2. Publica la carpeta `dist/` (por ejemplo, en Netlify, Vercel o GitHub Pages). El código QR de la sección "Participa" se genera solo con la dirección donde esté publicada la página.

## Estructura

- `src/data.js`: textos y datos tomados del informe.
- `src/components/`: una sección por archivo (Historia, Ingredientes, Repostería, Bebidas, Ocasiones, Permanencia, Conclusiones, Participa).
- `public/img/`: imágenes extraídas del informe.
