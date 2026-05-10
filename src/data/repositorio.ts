export type TipoEvidencia = "PDF" | "Imagen" | "Texto" | "Enlace";

export type CategoriaCompetencia =
  | "Cosmovisión"
  | "Generación y Aplicación"
  | "Integración"
  | "Extracurricular";

export interface Evidencia {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: TipoEvidencia;
  competencia: CategoriaCompetencia;
  semestre?: string;
  url?: string;
  imagen?: string;
  contenido?: string;
}

export const evidencias: Evidencia[] = [
  // TODO: Tirzah agrega sus evidencias aquí.
  {
    id: "ev-001",
    titulo: "Ejemplo — Informe APA",
    descripcion: "Descripción breve de qué es esta evidencia y de qué materia o actividad proviene.",
    tipo: "PDF",
    competencia: "Generación y Aplicación",
    semestre: "2do semestre",
    url: "/evidencias/ejemplo.pdf",
  },
  {
    id: "ev-002",
    titulo: "Ejemplo — Foto actividad comunitaria",
    descripcion: "Descripción de la actividad documentada en la imagen.",
    tipo: "Imagen",
    competencia: "Integración",
    semestre: "1er semestre",
    imagen: "/evidencias/ejemplo.jpg",
  },
  {
    id: "ev-003",
    titulo: "Ejemplo — Reflexión escrita",
    descripcion: "Extracto o reflexión completa en texto.",
    tipo: "Texto",
    competencia: "Cosmovisión",
    semestre: "4to semestre",
    contenido: "Texto completo de la reflexión aquí...",
  },
  {
    id: "ev-004",
    titulo: "Ejemplo — Portafolio en Canva",
    descripcion: "Enlace externo a un recurso o trabajo publicado.",
    tipo: "Enlace",
    competencia: "Extracurricular",
    url: "https://canva.link/cup5b5f8qw1yb7v",
  },
];
