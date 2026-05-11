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
│   ├── FilePreview.tsx   # preview inline de imagen/PDF (island reutilizable)
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
│   ├── portafolio-profesional.astro
│   ├── repositorio.astro
│   ├── portafolio-i/
│   │   ├── index.astro
│   │   ├── eclesiastico.astro
│   │   ├── artistico.astro
│   │   ├── personal.astro
│   │   └── competencias.astro
│   ├── portafolio-ii/
│   │   ├── index.astro
│   │   ├── eclesiastico.astro
│   │   ├── artistico.astro
│   │   ├── personal.astro
│   │   └── competencias.astro
│   ├── portafolio-iii/
│   │   ├── index.astro
│   │   ├── eclesiastico.astro
│   │   ├── artistico.astro
│   │   ├── personal.astro
│   │   └── competencias.astro
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
    ├── global.css        # design tokens + estilos globales
    └── fonts.css         # imports de @fontsource

public/
└── assets/
    ├── foto-perfil/
    ├── portafolio-i/
    ├── portafolio-ii/
    ├── portafolio-iii/
    ├── repositorio/
    └── README.md         # guía para subir assets y convención de nombres
```

## Rutas de portafolios

Cada portafolio tiene cinco secciones:
- `/portafolio-i`, `/portafolio-ii`, `/portafolio-iii` — Académico-profesional
- `/portafolio-i/eclesiastico`, `/portafolio-ii/eclesiastico`, `/portafolio-iii/eclesiastico`
- `/portafolio-i/artistico`, `/portafolio-ii/artistico`, `/portafolio-iii/artistico`
- `/portafolio-i/personal`, `/portafolio-ii/personal`, `/portafolio-iii/personal`
- `/portafolio-i/competencias`, `/portafolio-ii/competencias`, `/portafolio-iii/competencias`

## Repositorio de evidencias

- `/repositorio` — acervo general de evidencias con filtros por tipo y competencia
- El contenido del repositorio lo agrega Tirzah directamente en `src/data/repositorio.ts`

## Datos agregados

- `src/data/portafolios.ts` — trabajos académico-profesionales de Portafolio I, II y III
- `src/data/portfolioSubpages.ts` — trabajos eclesiásticos, artísticos y personales
- `src/data/competencias.ts` — marco institucional y competencias alcanzadas por portafolio
- `src/data/repositorio.ts` — evidencias generales agregadas manualmente por Tirzah

## Componentes agregados

- `PortfolioSubNav.astro` — navegación interna entre secciones de cada portafolio
- `SubpageWorkGrid.astro` — cards reutilizables para subpáginas eclesiásticas, artísticas y personales
- `CompetencyTable.astro` — tabla visual previa para competencias alcanzadas/en desarrollo
- `CompetenciasTable.tsx` — tabla React con porcentajes reales y barras de progreso para competencias
- `RepositorioGrid.tsx` — grid React filtrable por tipo de evidencia y competencia
- `FilePreview.tsx` — preview inline para imágenes y PDFs con placeholder cuando la ruta sigue en `PENDIENTE`

## Assets y nombres de archivo

- Todos los recursos públicos viven bajo `public/assets/`
- Convención obligatoria: `[portafolio]-[seccion]-[slug-del-titulo].[ext]`
- Extensiones válidas: `.jpg`, `.jpeg`, `.png`, `.webp`, `.pdf`
- Mientras el archivo no exista físicamente, en los datos se usa `ruta: "PENDIENTE"`
- Cuando Tirzah suba el archivo, debe cambiar `ruta` por la ruta real desde `/public`, por ejemplo:
  - `/assets/portafolio-i/academico/p1-academico-proyecto-integrador-1.pdf`
  - `/assets/foto-perfil/tirzah-kook.jpg`
- Referencia operativa: `public/assets/README.md`

## Componentes: estáticos vs islands

| Componente | Tipo | Directiva |
|---|---|---|
| Navbar | Island (menú mobile con estado) | `client:load` |
| Footer | Island (links dinámicos) | `client:load` |
| PageHeader | Island (simplicidad de uso) | `client:load` |
| Reveal | Island (IntersectionObserver) | `client:visible` |
| PortfolioGrid | Island (filtros interactivos) | `client:load` |
| PortfolioSubNav | Estático | — |
| SubpageWorkGrid | Estático + Reveal islands | — |
| CompetencyTable | Estático + Reveal islands | — |
| CompetenciasTable | Island con barras de progreso | `client:load` |
| RepositorioGrid | Island con filtros interactivos | `client:load` |
| ContactForm | Island (formulario con estado) | `client:load` |
| BizCard | Island (hover 3D via CSS) | `client:load` |

## TODOs pendientes para Tirzah

### Actualización de contenido real
El portafolio está completo con contenido real al 100%.

El contenido real de Tirzah Shiraldin Kook ya fue integrado en:
- Inicio, autobiografía, CV, tarjeta, declaración y datos actuales UM
- Cosmovisión y perfil de egreso
- Portafolios I, II y III
- Subpáginas eclesiásticas, artísticas y personales de los tres portafolios
- Tablas de competencias con porcentajes reales de los tres portafolios
- Línea de investigación
- Portafolio profesional y datos de contacto

### 1. Foto de Tirzah para el hero
Subir `/public/assets/foto-perfil/tirzah-kook.jpg` y reemplazar la ruta `PENDIENTE` o el placeholder cuando corresponda.

### 2. Fotos de actividades para los portafolios
Subir los archivos a `public/assets/...` con el nombre exacto que aparece en cada `FilePreview` y reemplazar `ruta: "PENDIENTE"` por la ruta real en los archivos de datos.

### 3. Formspree ID para el formulario de contacto
En `src/components/ContactForm.tsx` buscar:
```
action="https://formspree.io/f/REPLACE_WITH_ID"
```
Crear cuenta en formspree.io, crear un formulario y reemplazar `REPLACE_WITH_ID` con el ID real.

### 4. Hacer nuevo commit
Comando sugerido para esta actualización:
```bash
git add . && git commit -m "feat: add ecclesiastic/artistic/personal subpages + competency tables for all 3 portfolios"
```

## Notas para imágenes reales
Pasos recomendados:
1. Colocar imágenes o PDFs en `public/assets/` según la carpeta indicada
2. Importar y usar el componente `<Image>` de Astro:
   ```astro
   import { Image } from 'astro:assets';
   import retrato from '../../../public/assets/foto-perfil/tirzah-kook.jpg';
   <Image src={retrato} alt="Tirzah S. Kook" />
   ```

## Deploy
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
1. Foto de Tirzah para el hero (retrato)
2. Fotos de actividades para los portafolios
3. Formspree ID para el formulario de contacto
4. Hacer nuevo commit: `git add . && git commit -m "feat: add ecclesiastic/artistic/personal subpages + competency tables for all 3 portfolios"`
