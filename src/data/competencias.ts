export const competenciasCosmovision = [
  "Tomar decisiones sabias basadas en los principios de la Santa Biblia.",
  "Al proyectar una vida profesional, personal y familiar en el marco de un compromiso moral y misional.",
  "Al vivir una vida equilibrada teniendo especial cuidado en el uso del tiempo, las finanzas, las habilidades y la salud.",
  "Al desarrollar un gusto sano por la recreación, las manifestaciones artísticas y culturales y los medios.",
  "Al practicar los aspectos éticos, morales y legales del ejercicio profesional de la psicología clínica, sustentados en una cosmovisión bíblica.",
];

export const competenciasGeneracion = [
  "Elaborar diagnósticos y tratamientos de padecimientos psicológicos fundamentados en la evaluación oportuna, de manera ética y responsable.",
  "Modificar conductas y pensamientos disfuncionales de los pacientes utilizando tratamientos psicológicos que alivien el sufrimiento físico, psíquico y espiritual.",
  "Diseñar e implementar programas y proyectos que promuevan el bienestar psicológico de la comunidad.",
  "Realizar intervenciones psicológicas positivas potenciando las fortalezas y virtudes de los pacientes.",
  "Generar aportes significativos relacionados con su profesión a partir de proyectos de investigación.",
  "Al comunicarse en forma oral y escrita en español.",
  "Al identificar, plantear y resolver problemas aplicando el pensamiento crítico.",
  "Al usar correctamente las tecnologías de la información y comunicación.",
  "Al trabajar en equipos inter y multidisciplinarios, con apertura y respeto pero manteniendo sus convicciones personales.",
];

export const competenciasIntegracion = [
  "Concretar proyectos emprendedores de servicio, con una visión misionera, en distintos contextos para promover el bienestar integral.",
  "Al identificar y atender las necesidades de los demás.",
  "Al comunicarse en un segundo idioma.",
  "Al autofinanciar el proyecto educativo.",
  "Al valorar y respetar la diversidad y multiculturalidad.",
  "Al mantener buenas relaciones interpersonales.",
  "Al tomar iniciativas para el servicio abnegado.",
  "Al tomar iniciativas para la preservación del medio ambiente y la sustentabilidad.",
  "Al trabajar de modo colaborativo con organizaciones gubernamentales u ONG para el bienestar integral.",
  "Al promover el desarrollo integral y el bienestar de las comunidades con liderazgo de servicio cristiano.",
];

export const competencyGroups = [
  { key: "cosmovision", title: "Cosmovisión", items: competenciasCosmovision },
  { key: "generacion", title: "Generación y Aplicación", items: competenciasGeneracion },
  { key: "integracion", title: "Integración", items: competenciasIntegracion },
] as const;

export const achievedByPortfolio = {
  i: {
    cosmovision: competenciasCosmovision,
    generacion: [
      competenciasGeneracion[5],
      competenciasGeneracion[6],
      competenciasGeneracion[7],
      competenciasGeneracion[8],
    ],
    integracion: [
      competenciasIntegracion[0],
      competenciasIntegracion[1],
      competenciasIntegracion[2],
      competenciasIntegracion[4],
      competenciasIntegracion[5],
    ],
  },
  ii: {
    cosmovision: competenciasCosmovision,
    generacion: [
      competenciasGeneracion[0],
      competenciasGeneracion[2],
      competenciasGeneracion[3],
      competenciasGeneracion[5],
      competenciasGeneracion[6],
      competenciasGeneracion[7],
      competenciasGeneracion[8],
    ],
    integracion: [
      competenciasIntegracion[0],
      competenciasIntegracion[1],
      competenciasIntegracion[2],
      competenciasIntegracion[3],
      competenciasIntegracion[4],
      competenciasIntegracion[5],
      competenciasIntegracion[6],
      competenciasIntegracion[8],
    ],
  },
  iii: {
    cosmovision: competenciasCosmovision,
    generacion: competenciasGeneracion,
    integracion: competenciasIntegracion,
  },
} as const;
