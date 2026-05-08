# Portafolio Tirzah S. Kook — CLAUDE.md

## Stack
- **Astro 4** (generador estático, `output: 'static'`)
- **React** para componentes interactivos (islands)
- **TypeScript** en todos los componentes
- **@fontsource/playfair-display** y **@fontsource/inter**
- Sin Tailwind — estilos propios en `src/styles/global.css`

## Comandos
```bash
npm run dev      # servidor local en http://localhost:4321
npm run build    # compilar a dist/
npm run preview  # previsualizar build
```

## Estructura de carpetas
```
src/
├── components/
│   ├── Icon.tsx          # iconos SVG inline (Lucide-style)
│   ├── Navbar.tsx        # navbar + menú mobile (island client:load)
│   ├── Footer.tsx        # footer (island client:load)
│   ├── PageHeader.tsx    # cabecera de página reutilizable (island client:load)
│   ├── Reveal.tsx        # animación scroll con IntersectionObserver (island client:visible)
│   ├── PortfolioGrid.tsx # grid filtrable de trabajos (island client:load)
│   ├── ContactForm.tsx   # formulario de contacto con validación (island client:load)
│   └── BizCard.tsx       # tarjeta de presentación con hover 3D (island client:load)
├── data/
│   └── portafolios.ts    # PORTFOLIO_DATA para los 3 portafolios
├── layouts/
│   └── Base.astro        # shell HTML + Navbar + Footer + estilos globales
├── pages/
│   ├── index.astro
│   ├── cosmovision.astro
│   ├── contacto.astro
│   ├── linea-investigacion.astro
│   ├── portafolio-i.astro
│   ├── portafolio-ii.astro
│   ├── portafolio-iii.astro
│   ├── portafolio-profesional.astro
│   ├── generales/
│   │   ├── index.astro       (redirect a /autobiografia)
│   │   ├── autobiografia.astro
│   │   ├── cv.astro
│   │   ├── tarjeta.astro
│   │   ├── declaracion.astro
│   │   └── datos.astro
│   └── perfil-egreso/
│       ├── index.astro
│       ├── cosmovision.astro
│       ├── generacion.astro
│       └── integracion.astro
└── styles/
    ├── global.css        # design tokens + todos los estilos (merge de los 3 CSS del diseño)
    └── fonts.css         # imports de @fontsource
```

## Componentes: estáticos vs islands

| Componente | Tipo | Directiva |
|---|---|---|
| Navbar | Island (menú mobile con estado) | `client:load` |
| Footer | Island (links dinámicos) | `client:load` |
| PageHeader | Island (simplicidad de uso) | `client:load` |
| Reveal | Island (IntersectionObserver) | `client:visible` |
| PortfolioGrid | Island (filtros interactivos) | `client:load` |
| ContactForm | Island (formulario con estado) | `client:load` |
| BizCard | Island (hover 3D via CSS) | `client:load` |

## TODOs pendientes para Tirzah

### 1. Formspree — formulario de contacto
En `src/components/ContactForm.tsx` buscar:
```
action="https://formspree.io/f/REPLACE_WITH_ID"
```
Crear cuenta en formspree.io, crear un formulario y reemplazar `REPLACE_WITH_ID` con el ID real.

### 2. Imágenes reales
Buscar `placeholder-photo` en las páginas. Cada uno tiene un comentario `TODO: reemplazar con <Image> real`.
Pasos:
1. Colocar imágenes en `public/images/`
2. Importar y usar el componente `<Image>` de Astro:
   ```astro
   import { Image } from 'astro:assets';
   import retrato from '../../../public/images/retrato.jpg';
   <Image src={retrato} alt="Tirzah S. Kook" />
   ```

### 3. Datos reales de Tirzah
Archivos a actualizar con información real:
- `src/pages/generales/autobiografia.astro` — texto de autobiografía y foto retrato
- `src/pages/generales/cv.astro` — datos académicos, experiencia, calificaciones
- `src/pages/generales/datos.astro` — matrícula, calificaciones por materia
- `src/data/portafolios.ts` — trabajos reales de cada semestre
- `src/pages/linea-investigacion.astro` — hitos actualizados, referencias
- `src/pages/portafolio-profesional.astro` — experiencias reales

### 4. Deploy
Opciones recomendadas:
- **Netlify**: conectar repo GitHub, comando `npm run build`, directorio `dist/`
- **Vercel**: `npx vercel` o conectar repo GitHub

## Paleta de colores
Los design tokens están en `src/styles/global.css` bajo `:root`. Paleta: perlado + acento lavanda.
- `--color-lavender: #AF9AC9` — acento principal
- `--color-bg: #F5F3F0` — fondo
- `--font-serif: "Playfair Display"` — headings
- `--font-sans: "Inter"` — texto corriente

## Deploy

- Plataforma: Vercel (static)
- Build command: `npm run build`
- Output dir: `dist/`
- Config: `vercel.json` en raíz
- Variable de entorno requerida en Vercel: `PUBLIC_FORMSPREE_ID`

## Pendientes antes de go-live
1. Crear cuenta en formspree.io, obtener form ID, setear var en Vercel dashboard
2. Reemplazar placeholder-photo con imágenes reales de Tirzah
3. Actualizar datos ficticios (matrícula, trabajos, CV, contacto real)
4. Cambiar `site` en astro.config.mjs con la URL final de Vercel
