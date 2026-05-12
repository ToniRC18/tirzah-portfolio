export type TipoArchivo = "imagen" | "pdf" | "video";
export type TipoEvidencia = "PDF" | "Imagen" | "Texto" | "Enlace";
export type CategoriaCompetencia =
  | "Cosmovisión"
  | "Generación y Aplicación"
  | "Integración"
  | "Extracurricular";

export interface ArchivoItem {
  nombre: string;
  tipo: TipoArchivo;
  ruta: string;
}

export interface Evidencia {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: TipoEvidencia;
  competencia: CategoriaCompetencia;
  archivos: ArchivoItem[];
}

export const evidencias: Evidencia[] = [
  {
    id: "ev-001",
    titulo: "Evaluación de pares y de docentes",
    descripcion: "Participación en el proceso de evaluación entre pares y docentes como parte de la formación académica.",
    tipo: "Imagen",
    competencia: "Generación y Aplicación",
    archivos: [
      { nombre: "evaluacion1.jpeg", tipo: "imagen", ruta: "/assets/repositorio/evaluacion1.jpeg" },
      { nombre: "evaluacion2.jpeg", tipo: "imagen", ruta: "/assets/repositorio/evaluacion2.jpeg" },
      { nombre: "evaluacion3.jpeg", tipo: "imagen", ruta: "/assets/repositorio/evaluacion3.jpeg" },
      { nombre: "evaluacion4.jpeg", tipo: "imagen", ruta: "/assets/repositorio/evaluacion4.jpeg" },
      { nombre: "evaluacion5.jpeg", tipo: "imagen", ruta: "/assets/repositorio/evaluacion5.jpeg" },
      { nombre: "evaluacion6.jpeg", tipo: "imagen", ruta: "/assets/repositorio/evaluacion6.jpeg" },
      { nombre: "evaluacion7.jpeg", tipo: "imagen", ruta: "/assets/repositorio/evaluacion7.jpeg" },
      { nombre: "evaluacion8.jpeg", tipo: "imagen", ruta: "/assets/repositorio/evaluacion8.jpeg" },
    ],
  },
  {
    id: "ev-002",
    titulo: "Prácticas en ABP Linares",
    descripcion: "Prácticas profesionales realizadas en ABP Linares.",
    tipo: "Imagen",
    competencia: "Generación y Aplicación",
    archivos: [
      { nombre: "practicas ABP linares.jpeg", tipo: "imagen", ruta: "/assets/repositorio/practicas ABP linares.jpeg" },
      { nombre: "practicas ABP linares2.jpeg", tipo: "imagen", ruta: "/assets/repositorio/practicas ABP linares2.jpeg" },
    ],
  },
  {
    id: "ev-003",
    titulo: "Encargada de la comisión de inscripciones — VI Congreso de Salud Mental",
    descripcion: "Responsable de la comisión de inscripciones en el VI Congreso de Salud Mental 'Habilidades y Herramientas Terapéuticas: Retos de la Psicología Contemporánea', Universidad de Montemorelos, octubre 2025.",
    tipo: "Imagen",
    competencia: "Integración",
    archivos: [
      { nombre: "inscripcion.jpeg", tipo: "imagen", ruta: "/assets/repositorio/inscripcion.jpeg" },
    ],
  },
  {
    id: "ev-004",
    titulo: "Maestra de ceremonia — VI Congreso de Salud Mental",
    descripcion: "Fungí como maestra de ceremonia en el VI Congreso de Salud Mental 'Habilidades y Herramientas Terapéuticas: Retos de la Psicología Contemporánea', Universidad de Montemorelos, octubre 2025.",
    tipo: "Imagen",
    competencia: "Integración",
    archivos: [
      { nombre: "Maestra de ceremonia.jpeg", tipo: "imagen", ruta: "/assets/repositorio/Maestra de ceremonia.jpeg" },
    ],
  },
  {
    id: "ev-005",
    titulo: "Prácticas en CAISMA Zona Sur",
    descripcion: "Prácticas profesionales realizadas en el Centro de Atención Integral en Salud Mental (CAISMA) Zona Sur, noviembre 2025.",
    tipo: "Imagen",
    competencia: "Generación y Aplicación",
    archivos: [
      { nombre: "Practicas Caisma Zona Sur.jpeg", tipo: "imagen", ruta: "/assets/repositorio/Practicas Caisma Zona Sur.jpeg" },
    ],
  },
  {
    id: "ev-006",
    titulo: "Ponente — Conferencia 'Habilidades Interpersonales y Atención al Ciudadano'",
    descripcion: "Impartí la conferencia 'Habilidades Interpersonales y Atención al Ciudadano'.",
    tipo: "Imagen",
    competencia: "Integración",
    archivos: [
      { nombre: "ponente.jpeg", tipo: "imagen", ruta: "/assets/repositorio/ponente.jpeg" },
    ],
  },
  {
    id: "ev-007",
    titulo: "Prácticas en CECOSAMA",
    descripcion: "Prácticas profesionales realizadas en CECOSAMA.",
    tipo: "Imagen",
    competencia: "Generación y Aplicación",
    archivos: [
      { nombre: "CECOSAMA.jpeg", tipo: "imagen", ruta: "/assets/repositorio/CECOSAMA.jpeg" },
    ],
  },
  {
    id: "ev-008",
    titulo: "Prácticas en el Hospital de Especialidades en Salud Mental",
    descripcion: "Prácticas profesionales realizadas en el Hospital de Especialidades en Salud Mental, abril-mayo 2026.",
    tipo: "Imagen",
    competencia: "Generación y Aplicación",
    archivos: [
      { nombre: "practicas hospital.jpeg", tipo: "imagen", ruta: "/assets/repositorio/practicas hospital.jpeg" },
      { nombre: "practicas hospital 2.jpeg", tipo: "imagen", ruta: "/assets/repositorio/practicas hospital 2.jpeg" },
    ],
  },
  {
    id: "ev-009",
    titulo: "Prácticas en el Colegio Militarizado 'Mariano Escobedo'",
    descripcion: "Prácticas profesionales realizadas en el Colegio Militarizado 'Mariano Escobedo' Plantel Montemorelos, enero-marzo 2026.",
    tipo: "Imagen",
    competencia: "Generación y Aplicación",
    archivos: [
      { nombre: "Colegio Militarizado.jpeg", tipo: "imagen", ruta: "/assets/repositorio/Colegio Militarizado.jpeg" },
      { nombre: "Colegio Militarizado 2.jpeg", tipo: "imagen", ruta: "/assets/repositorio/Colegio Militarizado 2.jpeg" },
      { nombre: "Colegio Militarizado 3.jpeg", tipo: "imagen", ruta: "/assets/repositorio/Colegio Militarizado 3.jpeg" },
    ],
  },
  {
    id: "ev-010",
    titulo: "Constancia — IV Encuentro Estudiantil CNEIP 2025",
    descripcion: "Constancia de asistencia al IV Encuentro Estudiantil de la Región Noreste del CNEIP 2025, 'Desafíos contemporáneos e Innovación en Psicología, es hora de movernos'. Realizado en el Centro de Congresos del Tecnológico de Monterrey, 22 y 23 de septiembre de 2025.",
    tipo: "PDF",
    competencia: "Extracurricular",
    archivos: [
      { nombre: "Tirzah Shiraldin Kook.pdf", tipo: "pdf", ruta: "/assets/repositorio/Tirzah Shiraldin Kook.pdf" },
    ],
  },
  {
    id: "ev-011",
    titulo: "Constancia — Investigadora en Feria de Investigación",
    descripcion: "Constancia por participación como investigadora en el proyecto 'Funcionamiento familiar y conductas disociales como predictores de la autoeficacia académica', presentado en la Feria de Investigación de la Facultad de Psicología de la Universidad de Montemorelos, 23 de octubre de 2025.",
    tipo: "PDF",
    competencia: "Generación y Aplicación",
    archivos: [
      { nombre: "Tirzah investigador.pdf", tipo: "pdf", ruta: "/assets/repositorio/Tirzah investigador.pdf" },
    ],
  },
  {
    id: "ev-012",
    titulo: "Constancia — VI Congreso de Salud Mental",
    descripcion: "Constancia de participación y asistencia al VI Congreso de Salud Mental 'Habilidades y Herramientas Terapéuticas: Retos de la Psicología Contemporánea', Universidad de Montemorelos, 22 y 23 de octubre de 2025, con duración de 13 horas.",
    tipo: "PDF",
    competencia: "Extracurricular",
    archivos: [
      { nombre: "83_Tirzah Shiraldin Kook.pdf", tipo: "pdf", ruta: "/assets/repositorio/83_Tirzah Shiraldin Kook.pdf" },
    ],
  },
];
