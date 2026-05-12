export interface ArchivoRef {
  nombre: string;
  tipo: "imagen" | "pdf" | "video";
  ruta: string;
}

export interface Trabajo {
  title: string;
  subj: string;
  cat: string;
  periodo?: string;
  grade?: string;
  desc: string;
  competencias: string[];
  reflexion: string;
  archivo?: ArchivoRef;
  archivo2?: ArchivoRef;
  archivo3?: ArchivoRef;
}

export interface Portafolio {
  semester: string;
  period: string;
  desc: string;
  finalReflection: string;
  works: Trabajo[];
}

export const PORTFOLIO_DATA = {
  i: {
    semester: "Portafolio I",
    period: "1er y 2do semestre",
    desc: "Trabajos reales del primer año de la licenciatura, con evidencias de aprendizaje, competencias y reflexión personal.",
    finalReflection:
      "Coleccionando todas mis actividades que realicé durante mis 2 primeros semestres me hizo reflexionar cuánto avancé en mi carrera y cuántos conocimientos he adquirido a lo largo de estos semestres. Soy muy orgullosa de todo lo que hice y cómo me desarrollé como persona.",
    works: [
      {
        title: "Proyecto Integrador 1",
        subj: "Proyecto Integrador",
        cat: "Proyecto",
        periodo: "1er semestre",
        desc: "Tuvimos la oportunidad de dar pláticas a 7 preparatorias en Montemorelos, sobre cómo funciona nuestro cerebro y cómo mantenerlo saludable.",
        competencias: [
          "Al trabajar en equipos inter y multidisciplinarios, con apertura y respeto pero manteniendo sus convicciones personales.",
          "Concretar proyectos emprendedores de servicio, con una visión misionera, en distintos contextos para promover el bienestar integral.",
        ],
        reflexion:
          "En esta actividad mi debilidad fue tener miedo de hablar en español delante de un público desconocido. Solo leí las preguntas de una actividad que hicimos. Tenía 2 meses y medio en México y el español es mi cuarto idioma. Pienso que hubiera tomado responsabilidad de hablar para practicar. Mi fortaleza fue mi disposición de hacer todo lo que esperaban de mí.",
        archivo: {
          nombre: "p1-academico-proyecto-integrador1.jpg",
          tipo: "imagen",
          ruta: "/assets/portafolio-i/academico/p1-academico-proyecto-integrador1.jpg",
        },
        archivo2: {
          nombre: "proyecto-integrador2.jpg",
          tipo: "imagen",
          ruta: "/assets/portafolio-i/academico/proyecto-integrador2.jpg",
        },
      },
      {
        title: "Proyecto Integrador 2",
        subj: "Proyecto Integrador",
        cat: "Proyecto",
        periodo: "1er semestre",
        desc: "Este proyecto integrador nos tocó la parte de prevención. Hablamos sobre 4 temas importantes: la ansiedad, la depresión, la autoestima y las redes sociales.",
        competencias: [
          "Al trabajar en equipos inter y multidisciplinarios, con apertura y respeto pero manteniendo sus convicciones personales.",
          "Concretar proyectos emprendedores de servicio, con una visión misionera, en distintos contextos para promover el bienestar integral.",
        ],
        reflexion:
          "Mi debilidad fue no tener mucha paciencia, la actividad duró 3 horas pero teníamos que esperar para pasar a dar la plática. Mi fortaleza fue hablar en español por primera vez enfrente de un público desconocido.",
        archivo: {
          nombre: "proyecto-integrador2.jpg",
          tipo: "imagen",
          ruta: "/assets/portafolio-i/academico/proyecto-integrador2.jpg",
        },
        archivo2: {
          nombre: "proyecto-integrador2.2.jpg",
          tipo: "imagen",
          ruta: "/assets/portafolio-i/academico/proyecto-integrador2.2.jpg",
        },
      },
      {
        title: "Visita comedor para adultos mayores",
        subj: "Servicio Comunitario",
        cat: "Servicio",
        periodo: "1er semestre",
        desc: "Visitamos un comedor donde vienen adultos mayores todos los días y realizamos 3 tipos de actividades con ellos: actividades físicas, cognitivas y socio-afectivas.",
        competencias: [
          "Al identificar y atender las necesidades de los demás.",
          "Al trabajar de modo colaborativo con organizaciones gubernamentales u ONG para el bienestar integral individual y de la comunidad.",
          "Concretar proyectos emprendedores de servicio, con una visión misionera, en distintos contextos para promover el bienestar integral.",
        ],
        reflexion:
          "Mi debilidad fue tomar responsabilidades que no eran mías. Mi fortaleza fue presentar mi actividad de modo comprensible para que los adultos mayores pudieran realizarla.",
        archivo: {
          nombre: "visita-adultos.jpg",
          tipo: "imagen",
          ruta: "/assets/portafolio-i/academico/visita-adultos.jpg",
        },
        archivo2: {
          nombre: "visita-adultos2.jpg",
          tipo: "imagen",
          ruta: "/assets/portafolio-i/academico/visita-adultos2.jpg",
        },
      },
      {
        title: "Orígenes históricos de la psicología",
        subj: "Historia de la Psicología",
        cat: "Línea de tiempo",
        periodo: "1er semestre",
        desc: "Realizamos una línea de tiempo sobre los orígenes históricos de la psicología.",
        competencias: [
          "Al usar correctamente las tecnologías de la información y comunicación.",
          "Al comunicarse en forma oral y escrita en español.",
        ],
        reflexion:
          "Esta actividad te da la oportunidad de poner los orígenes históricos de la psicología en orden cronológico. Mi fortaleza fue compilar las informaciones de los teóricos. Mi debilidad fue no tener paciencia para poner todos los teóricos y sus aportaciones.",
        archivo: {
          nombre: "origenes-historicos.psicologia.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-i/academico/origenes-historicos.psicologia.pdf",
        },
      },
      {
        title: "Mapa Mental — Teóricos de la Psicología",
        subj: "Historia de la Psicología",
        cat: "Trabajo gráfico",
        periodo: "1er semestre",
        desc: "Realizamos un mapa mental sobre los teóricos de la psicología y sus aportaciones.",
        competencias: [
          "Al identificar, plantear y resolver problemas aplicando el pensamiento crítico.",
          "Al usar correctamente las tecnologías de la información y comunicación.",
          "Al comunicarse en forma oral y escrita en español.",
        ],
        reflexion:
          "Esta actividad da una panorama más amplia sobre los principales teóricos de la psicología. Mi fortaleza fue poner atención en clase. Mi debilidad fue estructurar el mapa.",
        archivo: {
          nombre: "mapa-mental.png",
          tipo: "imagen",
          ruta: "/assets/portafolio-i/academico/mapa-mental.png",
        },
      },
      {
        title: "Funciones corticales",
        subj: "Neuropsicología",
        cat: "Investigación",
        periodo: "1er semestre",
        desc: "Investigamos sobre las funciones corticales, especialmente sobre la lesión en la zona orbitofrontal del lóbulo prefrontal que produce ETC y Pseudopsicopatía.",
        competencias: [
          "Al usar correctamente las tecnologías de la información y comunicación.",
          "Al comunicarse en forma oral y escrita en español.",
        ],
        reflexion:
          "Esta actividad fue muy interesante porque nunca había escuchado que el fútbol americano puede causar lesión en el lóbulo prefrontal. Mi fortaleza fue aprender a investigar usando películas y artículos. Mi debilidad fue que no vi la película completa.",
        archivo: {
          nombre: "funciones-corticales.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-i/academico/funciones-corticales.pdf",
        },
      },
      {
        title: "Órganos de los sentidos — El oído",
        subj: "Biología",
        cat: "Informe y maqueta",
        periodo: "1er semestre",
        desc: "Realizamos un informe y una presentación sobre los órganos de los sentidos. Nos tocó el oído e hicimos una maqueta sobre la anatomía del oído.",
        competencias: [
          "Al comunicarse en forma oral y escrita en español.",
          "Al usar correctamente las tecnologías de la información y comunicación.",
        ],
        reflexion:
          "Me gustó esta actividad porque pudimos investigar sobre el oído y también hacer una maqueta. Mi fortaleza fue comunicarme bien con mi equipo. Mi debilidad fue sentirme un poco perdida y no pedir ayuda.",
        archivo: {
          nombre: "oido-imagen.jpg",
          tipo: "imagen",
          ruta: "/assets/portafolio-i/academico/oido-imagen.jpg",
        },
        archivo2: {
          nombre: "oido.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-i/academico/oido.pdf",
        },
        archivo3: {
          nombre: "organos-sentidos.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-i/academico/organos-sentidos.pdf",
        },
      },
      {
        title: "Cuadro sinóptico",
        subj: "Psicología General",
        cat: "Trabajo gráfico",
        periodo: "1er semestre",
        desc: "Realizamos un cuadro sinóptico sobre los conceptos de aprendizaje, percepción, memoria, pensamiento y lenguaje.",
        competencias: [
          "Al comunicarse en forma oral y escrita en español.",
          "Al usar correctamente las tecnologías de la información y comunicación.",
        ],
        reflexion:
          "Esta actividad era simple pero importante porque relacionas los conceptos que necesitas para tu trabajo. Mi fortaleza fue tener mi información bien organizada. Mi debilidad fue que no sabía cómo hacer el cuadro muy bien.",
        archivo: {
          nombre: "cuadro-sinoptico.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-i/academico/cuadro-sinoptico.pdf",
        },
      },
      {
        title: "Avances en la psicología",
        subj: "Historia de la Psicología",
        cat: "Investigación",
        periodo: "1er semestre",
        desc: "Investigamos sobre los últimos avances de la psicología.",
        competencias: [
          "Al comunicarse en forma oral y escrita en español.",
          "Al usar correctamente las tecnologías de la información y comunicación.",
        ],
        reflexion:
          "Como futura psicóloga es muy importante estar al tanto de todos los avances. Mi fortaleza fue saber realizar un informe en estilo APA. Mi debilidad fue encontrar artículos científicos confiables sobre el tema.",
        archivo: {
          nombre: "avances.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-i/academico/avances.pdf",
        },
      },
      {
        title: "Una metáfora neuronal",
        subj: "Neurociencias y Fe",
        cat: "Ensayo",
        periodo: "2do semestre",
        desc: "Realizamos un informe de los sinapsis eléctrica y química, y lo comparamos con nuestra relación con Dios.",
        competencias: [
          "Al comunicarse en forma oral y escrita en español.",
          "Al identificar, plantear y resolver problemas aplicando el pensamiento crítico.",
        ],
        reflexion:
          "Era uno de mis primeros trabajos. Mi debilidad fue que no investigué mucho sobre el tema. Mi fortaleza fue saber cómo realizar un informe en estilo APA.",
        archivo: {
          nombre: "Una metafora neuronal.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-i/academico/Una metafora neuronal.pdf",
        },
      },
      {
        title: "Métodos de estudio del cerebro",
        subj: "Neuropsicología",
        cat: "Investigación",
        periodo: "2do semestre",
        desc: "Investigamos sobre los métodos de estudio como TAC, Resonancia Magnética, entre otros.",
        competencias: [
          "Al comunicarse en forma oral y escrita en español.",
          "Al identificar, plantear y resolver problemas aplicando el pensamiento crítico.",
          "Al usar correctamente las tecnologías de la información y comunicación.",
        ],
        reflexion:
          "Es importante saber qué instrumentos te pueden servir para el bienestar de tus pacientes. Mi fortaleza fue poner atención en clase. Mi debilidad fue la falta de conocimiento de redacción en estilo APA.",
        archivo: {
          nombre: "metodos de estudio.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-i/academico/metodos de estudio.pdf",
        },
      },
      {
        title: "Congreso Salud Mental III",
        subj: "Actividad extracurricular",
        cat: "Congreso",
        periodo: "2do semestre",
        desc: "Asistí al tercer congreso de salud mental de la Facultad de Psicología de la UM, donde hablaron sobre diferentes temas como la nutrición en la psicología y las adicciones.",
        competencias: [
          "Al identificar, plantear y resolver problemas aplicando el pensamiento crítico.",
          "Al identificar y atender las necesidades de los demás.",
          "Al trabajar de modo colaborativo con organizaciones gubernamentales u ONG para el bienestar integral.",
        ],
        reflexion:
          "Mi fortaleza fue que hice anotaciones sobre algunos temas. Mi debilidad fue que los 2 días que asistí los temas eran muy largos y perdí la atención.",
        archivo: {
          nombre: "congreso salud mental.png",
          tipo: "imagen",
          ruta: "/assets/portafolio-i/academico/congreso salud mental.png",
        },
      },
      {
        title: "Informe 16FP, Estrés y Beck",
        subj: "Evaluación Psicológica",
        cat: "Reporte técnico",
        periodo: "2do semestre",
        desc: "Tuvimos la oportunidad de completar el cuestionario 16FP, el inventario de estrés y el inventario de depresión de Beck.",
        competencias: [
          "Elaborar diagnósticos y tratamientos de padecimientos psicológicos fundamentados en la evaluación oportuna, de manera ética y responsable.",
          "Al identificar, plantear y resolver problemas aplicando el pensamiento crítico.",
          "Al identificar y atender las necesidades de los demás.",
        ],
        reflexion:
          "Me gustó mucho porque fuimos introducidos a instrumentos que podemos utilizar para diagnosticar. Mi fortaleza fue pedir ayuda cuando andaba perdida. Mi debilidad fue no imprimir la lámina correcta para interpretar el 16FP.",
        archivo: {
          nombre: "informe 16fp.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-i/academico/informe 16fp.pdf",
        },
      },
      {
        title: "Catálogo de test",
        subj: "Evaluación Psicológica",
        cat: "Catálogo",
        periodo: "2do semestre",
        desc: "Realizamos un catálogo de tests psicológicos con sus descripciones, población, costos, etc.",
        competencias: [
          "Al identificar, plantear y resolver problemas aplicando el pensamiento crítico.",
          "Al usar correctamente las tecnologías de la información y comunicación.",
          "Al identificar y atender las necesidades de los demás.",
        ],
        reflexion:
          "Mi fortaleza fue usar los medios correctamente para llegar a la información. Mi debilidad fue entender los aspectos y características de cada test.",
        archivo: {
          nombre: "catalogo de test.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-i/academico/catalogo de test.pdf",
        },
      },
      {
        title: "Análisis sociométrico",
        subj: "Psicología Social",
        cat: "Investigación",
        periodo: "2do semestre",
        desc: "TODO: Tirzah agrega descripción",
        competencias: [],
        reflexion: "TODO: Tirzah agrega reflexión",
        archivo: {
          nombre: "analisis sociometrico.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-i/academico/analisis sociometrico.pdf",
        },
      },
      {
        title: "Manual de actividades estimulatorias",
        subj: "Psicología del Desarrollo",
        cat: "Manual",
        periodo: "2do semestre",
        desc: "TODO: Tirzah agrega descripción",
        competencias: [],
        reflexion: "TODO: Tirzah agrega reflexión",
        archivo: {
          nombre: "manual actividades estimulatorias.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-i/academico/manual actividades estimulatorias.pdf",
        },
      },
      {
        title: "10 tips para sobrevivir la adolescencia",
        subj: "Material audiovisual",
        cat: "Video",
        periodo: "2do semestre",
        desc: "Video recortado a 30 segundos como evidencia audiovisual del trabajo realizado.",
        competencias: [
          "Al comunicarse en forma oral y escrita en español.",
          "Al usar correctamente las tecnologías de la información y comunicación.",
        ],
        reflexion:
          "Este video resume una parte práctica de mi formación y me permite conservar la evidencia en un formato ligero y accesible.",
        archivo: {
          nombre: "p1-academico-10-tips-adolescencia.mp4",
          tipo: "video",
          ruta: "/assets/portafolio-i/academico/p1-academico-10-tips-adolescencia.mp4",
        },
      },
    ],
  },
  ii: {
    semester: "Portafolio II",
    period: "3er y 4to semestre",
    desc: "Trabajos reales del tercer y cuarto semestre, con prácticas, análisis clínicos y proyectos de servicio.",
    finalReflection:
      "Coleccionando todas mis actividades que realicé en el tercer y cuarto semestre, puedo notar un crecimiento remarcable. Me siento muy orgullosa de mi calidad de trabajo y cómo me he desarrollado en la carrera hasta ahorita.",
    works: [
      {
        title: "Proyecto Integrador 1",
        subj: "Proyecto Integrador",
        cat: "Proyecto",
        desc: "Aplicamos dos instrumentos a jóvenes de una preparatoria técnica: la escala BIEPS-J (bienestar psicológico) y la rúbrica de funciones psíquicas.",
        competencias: [
          "Al trabajar en equipos inter y multidisciplinarios.",
          "Concretar proyectos emprendedores de servicio con visión misionera.",
        ],
        reflexion:
          "Esta actividad nos dio la oportunidad de familiarizarnos con los instrumentos. Mi fortaleza fue que los teníamos bien organizados. Mi debilidad fue que podríamos haber organizado mejor la logística.",
        archivo: {
          nombre: "proyecto integrador 1.JPG",
          tipo: "imagen",
          ruta: "/assets/portafolio-ii/academico/proyecto integrador 1.JPG",
        },
      },
      {
        title: "Proyecto Integrador 2",
        subj: "Proyecto Integrador",
        cat: "Proyecto",
        desc: "Fuimos a aplicar una escala de calidad de vida y una de estilo de aprendizaje. En la segunda parte hicimos primeras entrevistas con los estudiantes para identificar si tienen problemas familiares, educativos o clínicos.",
        competencias: [
          "Realizar intervenciones psicológicas positivas.",
          "Al identificar y atender las necesidades de los demás.",
        ],
        reflexion:
          "Mi fortaleza fue aplicar todo lo que aprendí en Técnicas y estrategias para la entrevista clínica. Mi debilidad fue que en la primera entrevista terminé antes del tiempo y no sabía qué hacer.",
        archivo: {
          nombre: "proyecto integrador 2.JPG",
          tipo: "imagen",
          ruta: "/assets/portafolio-ii/academico/proyecto integrador 2.JPG",
        },
      },
      {
        title: "Cuarto Congreso de Salud Mental",
        subj: "Actividad extracurricular",
        cat: "Congreso",
        desc: "Asistí al cuarto congreso de salud mental de la Facultad de Psicología de la UM, donde hablaron sobre traumas de la infancia, neurobiología, entre otros.",
        competencias: [
          "Al identificar, plantear y resolver problemas aplicando el pensamiento crítico.",
          "Al trabajar de modo colaborativo.",
        ],
        reflexion:
          "Me gustaron mucho las ponencias, me hicieron reflexionar sobre cómo los traumas de la infancia dejan una huella marcada. Mi fortaleza fue que puse atención y gané un premio. Mi debilidad fue que tuve que trabajar y no pude escuchar todas las ponencias.",
        archivo: {
          nombre: "congreso de salud mental.PNG",
          tipo: "imagen",
          ruta: "/assets/portafolio-ii/academico/congreso de salud mental.PNG",
        },
      },
      {
        title: "Caso clínico 1",
        subj: "Psicopatología",
        cat: "Estudio de caso",
        desc: "Realizamos un caso clínico sobre un niño con depresión, incluyendo el caso, examen del estado mental y el diagnóstico.",
        competencias: [
          "Al comunicarse en forma oral y escrita en español.",
          "Al identificar, plantear y resolver problemas aplicando el pensamiento crítico.",
        ],
        reflexion:
          "Mi fortaleza fue utilizar mi conocimiento acerca de la enfermedad. Mi debilidad fue que me costó un poco porque debía tener en cuenta que era un caso de un niño y no de un adulto.",
        archivo: {
          nombre: "Caso Clinico 1 .pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-ii/academico/Caso Clinico 1 .pdf",
        },
      },
      {
        title: "Intervención — Plan TDAH",
        subj: "Intervención Psicológica",
        cat: "Plan de intervención",
        desc: "A partir de un caso de un niño con TDAH, tuvimos que armar un plan de intervención comenzando con el análisis funcional.",
        competencias: [
          "Modificar conductas y pensamientos disfuncionales.",
          "Diseñar e implementar programas que promuevan el bienestar psicológico.",
        ],
        reflexion:
          "Mi fortaleza fue que entendí qué era el análisis funcional. Mi debilidad fue que fue desafiante armar un plan de intervención porque era la primera vez.",
        archivo: {
          nombre: "intervencion primera parte.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-ii/academico/intervencion primera parte.pdf",
        },
      },
      {
        title: "Feria adultos mayores",
        subj: "Servicio Comunitario",
        cat: "Servicio",
        desc: "Organizamos una feria para adultos mayores con actividades físicas, cognitivas y socioemocionales.",
        competencias: [
          "Concretar proyectos emprendedores de servicio con visión misionera.",
          "Al identificar y atender las necesidades de los demás.",
        ],
        reflexion:
          "Siempre me gustan estas actividades porque nos dan la oportunidad de socializar con otra población. Mi fortaleza fue que estuve proactiva. Mi debilidad fue que no planeamos las actividades con mucha anticipación.",
        archivo: {
          nombre: "feria adultos mayores.JPG",
          tipo: "imagen",
          ruta: "/assets/portafolio-ii/academico/feria adultos mayores.JPG",
        },
      },
      {
        title: "Manual preventivo adulto",
        subj: "Psicología del Adulto",
        cat: "Manual",
        desc: "Armamos un manual preventivo con actividades para las áreas de sexualidad, duelo, abuso y abandono.",
        competencias: [
          "Al comunicarse en forma oral y escrita en español.",
          "Al usar correctamente las tecnologías de la información y comunicación.",
          "Al identificar y atender las necesidades de los demás.",
        ],
        reflexion:
          "Mi fortaleza fue que tuvimos suficientes fuentes para sacar información. Mi debilidad fue adaptar las actividades según la población de adultos mayores.",
        archivo: {
          nombre: "manual preventivo problemas .pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-ii/academico/manual preventivo problemas .pdf",
        },
      },
      {
        title: "Resolución de caso DSM-5",
        subj: "Psicodiagnóstico",
        cat: "Estudio de caso",
        desc: "Realizamos un estudio de caso para sacar un diagnóstico presuntivo según los criterios diagnósticos del DSM-5.",
        competencias: [
          "Elaborar diagnósticos de padecimientos psicológicos de manera ética y responsable.",
          "Al usar correctamente las tecnologías de la información y comunicación.",
        ],
        reflexion:
          "Mi fortaleza fue el apoyo de mis compañeros. Mi debilidad fue que no estaba segura de mi diagnóstico presuntivo.",
        archivo: {
          nombre: "resolucion de caso.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-ii/academico/resolucion de caso.pdf",
        },
      },
      {
        title: "Análisis crítico Patriarcas",
        subj: "Ciencia y Religión",
        cat: "Análisis crítico",
        desc: "Leímos cuatro capítulos del libro Patriarcas y Profetas de Elena G. de White y realizamos un análisis de lo que leímos.",
        competencias: [
          "Tomar decisiones sabias basadas en los principios de la Santa Biblia.",
          "Al comunicarse en forma oral y escrita en español.",
        ],
        reflexion:
          "Mi fortaleza fue que entendí lo que leí y lo pude redactar bien. Mi debilidad fue que me faltó hacer un listado de los conceptos que venían en los capítulos.",
        archivo: {
          nombre: "analisis critico 1.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-ii/academico/analisis critico 1.pdf",
        },
      },
      {
        title: "Glosario trastornos",
        subj: "Neuropsicología",
        cat: "Glosario",
        desc: "Realizamos un glosario sobre los trastornos neuropsicológicos con su etiología.",
        competencias: [
          "Tomar decisiones sabias basadas en los principios de la Santa Biblia.",
          "Al comunicarse en forma oral y escrita en español.",
        ],
        reflexion:
          "Mi fortaleza fue que tuve suficientes fuentes. Mi debilidad fue que me cansé de buscar todas las palabras una por una y ponerlas en una tabla.",
        archivo: {
          nombre: "glosario de los trastornos.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-ii/academico/glosario de los trastornos.pdf",
        },
      },
      {
        title: "Ensayo TDAH",
        subj: "Psicopatología",
        cat: "Ensayo",
        desc: "Realizamos un ensayo sobre uno de los trastornos del desarrollo. Elegí el TDAH.",
        competencias: [
          "Al usar correctamente las tecnologías de la información y comunicación.",
          "Al comunicarse en forma oral y escrita en español.",
        ],
        reflexion:
          "Mi fortaleza fue que me interesó mucho el tema e investigué bien. Mi debilidad fue que pude redactar mejor.",
        archivo: {
          nombre: "ensayo de los trastornos de desarrollo.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-ii/academico/ensayo de los trastornos de desarrollo.pdf",
        },
      },
      {
        title: "Foro Ciencia y Religión",
        subj: "Ciencia y Religión",
        cat: "Foro",
        desc: "Para la materia de Ciencia y Religión, vimos cuatro foros sobre la ciencia y su correlación con la religión y formulamos una pregunta para cada uno.",
        competencias: [
          "Tomar decisiones sabias basadas en los principios de la Santa Biblia.",
          "Al usar correctamente las tecnologías de la información y comunicación.",
        ],
        reflexion:
          "Mi fortaleza fue que me interesaban los temas del foro. Mi debilidad fue que a veces no los terminaba de ver por motivos de sueño.",
        archivo: {
          nombre: "foro ciencia y religion.png",
          tipo: "imagen",
          ruta: "/assets/portafolio-ii/academico/foro ciencia y religion.png",
        },
      },
      {
        title: "Primera entrevista clínica",
        subj: "Técnicas de Entrevista",
        cat: "Práctica",
        desc: "Tuvimos la oportunidad de practicar las técnicas y estrategias de la primera entrevista. Cada semana pasaba un compañero a entrevistar y los demás evaluaban.",
        competencias: [
          "Al identificar y atender las necesidades de los demás.",
          "Realizar intervenciones psicológicas positivas.",
          "Al practicar los aspectos éticos y legales de la psicología clínica.",
        ],
        reflexion:
          "Mi fortaleza fue tener control de la entrevista y hacer buenas preguntas. Mi debilidad fue que debí trabajar más en la empatía y el lenguaje no verbal.",
        archivo: {
          nombre: "primera entrevista.jpg",
          tipo: "imagen",
          ruta: "/assets/portafolio-ii/academico/primera entrevista.jpg",
        },
      },
      {
        title: "Análisis DOFA",
        subj: "Epistemología",
        cat: "Análisis",
        desc: "Realizamos un análisis DOFA sobre la epistemología posmoderna.",
        competencias: [
          "Al comunicarse en forma oral y escrita en español.",
          "Al usar correctamente las tecnologías de la información y comunicación.",
          "Al identificar, plantear y resolver problemas aplicando el pensamiento crítico.",
        ],
        reflexion:
          "Mi fortaleza fue que me gustó el tema y tuve interés en hacer el análisis. Mi debilidad fue que tuve que estimular mi pensamiento crítico y filosófico para este tema desafiante.",
        archivo: {
          nombre: "analisis dofa.png",
          tipo: "imagen",
          ruta: "/assets/portafolio-ii/academico/analisis dofa.png",
        },
      },
      {
        title: "Estadística Jamovi",
        subj: "Estadística",
        cat: "Investigación",
        desc: "Planteamos hipótesis y sacamos la correlación entre dos variables utilizando Excel y Jamovi.",
        competencias: [
          "Al comunicarse en forma oral y escrita en español.",
          "Al usar correctamente las tecnologías de la información y comunicación.",
          "Al identificar, plantear y resolver problemas aplicando el pensamiento crítico.",
        ],
        reflexion:
          "Mi fortaleza fue que me gusta mucho la estadística y la llevé en la prepa. Mi debilidad fue que era la primera vez que usé Jamovi.",
        archivo: {
          nombre: "estadistica.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-ii/academico/estadistica.pdf",
        },
      },
      {
        title: "Caso práctico TCS",
        subj: "Psicología Social Cognitiva",
        cat: "Plan de intervención",
        desc: "Realizamos un caso de cambio de comportamiento y armamos un plan de intervención según la Teoría Cognitivo Social.",
        competencias: [
          "Al identificar y atender las necesidades de los demás.",
          "Al usar correctamente las tecnologías de la información y comunicación.",
          "Realizar intervenciones psicológicas positivas.",
        ],
        reflexion:
          "Mi fortaleza fue que entendí los puntos clave de la teoría y pude armar el plan. Mi debilidad fue que era la primera vez realizando un plan según una teoría específica.",
        archivo: {
          nombre: "casi practico.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-ii/academico/casi practico.pdf",
        },
      },
      {
        title: "Compilación textos bíblicos",
        subj: "Ciencia y Religión",
        cat: "Compilación",
        desc: "Buscamos diez textos bíblicos y diez citas relacionadas con la psicología.",
        competencias: [
          "Tomar decisiones sabias basadas en los principios de la Santa Biblia.",
          "Al usar correctamente las tecnologías de la información y comunicación.",
        ],
        reflexion:
          "Este trabajo me permitió conectar la formación académica con la fe y organizar referencias relevantes para mi carrera.",
        archivo: {
          nombre: "compilacion textos biblicos.pdf",
          tipo: "pdf",
          ruta: "/assets/portafolio-ii/academico/compilacion textos biblicos.pdf",
        },
      },
    ],
  },
  iii: {
    semester: "Portafolio III",
    period: "5to semestre en adelante",
    desc: "Trabajos reales del quinto semestre en adelante, con énfasis en evaluación, intervención, servicio y análisis profesional.",
    finalReflection:
      "Mirar hacia atrás y ver todo lo que he aprendido a lo largo de mi formación académica me llena de orgullo, pero también de humildad. Cada tarea, cada proyecto y cada desafío fue una oportunidad para conocerme mejor como futura psicóloga. Aprendí a confiar más en mis capacidades, a ser paciente con mis errores y a seguir construyendo desde ahí. Aunque hubo momentos de cansancio y duda, reconozco que también hubo muchos de crecimiento y descubrimiento. Esta etapa me dio herramientas que no solo usaré en mi profesión, sino también en mi vida.",
    works: [
      {
        title: "Servicio comunitario Neruda",
        subj: "Servicio Comunitario",
        cat: "Servicio",
        desc: "Participé en actividades con el Jardín de Niños Pablo Neruda, donde hicimos talleres sobre hábitos saludables para los niños y ayudamos con el mantenimiento de las áreas verdes.",
        competencias: [
          "Al identificar y atender las necesidades de los demás.",
          "Al trabajar de modo colaborativo con organizaciones gubernamentales u ONG.",
        ],
        reflexion:
          "Mi fortaleza fue mi disposición para servir a la comunidad y aprender cosas nuevas. Mi debilidad fue la comunicación en contextos complejos.",
        archivo: {
          nombre: "servicio comunitario .jpg",
          tipo: "imagen",
          ruta: "/assets/portafolio-iii/academico/servicio comunitario .jpg",
        },
      },
      {
        title: "Caso forense Juana Barraza",
        subj: "Psicología Forense",
        cat: "Estudio de caso",
        desc: "Elaboramos un peritaje psicológico basado en el caso de Juana Barraza. Esta ha sido una de mis materias favoritas, ya que me permitió acercarme al lado legal de la psicología.",
        competencias: [
          "Al comunicarse en forma oral y escrita en español.",
          "Al usar correctamente las tecnologías de la información y comunicación.",
          "Al trabajar en equipos inter y multidisciplinarios.",
        ],
        reflexion:
          "Mi fortaleza fue mi interés por la materia y la tarea. Mi debilidad fue la organización para llegar al resultado final.",
        archivo: {
          nombre: "caso forense.png",
          tipo: "imagen",
          ruta: "/assets/portafolio-iii/academico/caso forense.png",
        },
      },
      {
        title: "Programa de intervención",
        subj: "Intervención Psicológica",
        cat: "Plan de intervención",
        desc: "Desarrollamos un programa completo de intervención psicológica desde la primera entrevista hasta la última sesión, incluyendo objetivos terapéuticos y metas de seguimiento post-terapia.",
        competencias: [
          "Modificar conductas y pensamientos disfuncionales.",
          "Diseñar e implementar programas que promuevan el bienestar psicológico.",
          "Al identificar y atender las necesidades de los demás.",
        ],
        reflexion:
          "Mis fortalezas fueron la empatía profesional y la aplicación teórica. Mi debilidad fue mi experiencia limitada a la práctica como profesional.",
        archivo: {
          nombre: "programa intervencion psicologica.png",
          tipo: "imagen",
          ruta: "/assets/portafolio-iii/academico/programa intervencion psicologica.png",
        },
        archivo2: {
          nombre: "programa intervencion psicologia 2.png",
          tipo: "imagen",
          ruta: "/assets/portafolio-iii/academico/programa intervencion psicologia 2.png",
        },
      },
      {
        title: "Proyecto Integrador",
        subj: "Proyecto Integrador",
        cat: "Proyecto",
        desc: "Realizamos primeras entrevistas a estudiantes de secundaria en Montemorelos, practicando habilidades terapéuticas básicas: escucha activa, empatía y formulación de preguntas.",
        competencias: [
          "Al identificar y atender las necesidades de los demás.",
          "Al identificar, plantear y resolver problemas aplicando el pensamiento crítico.",
        ],
        reflexion:
          "Mis fortalezas fueron la escucha activa y la alianza terapéutica que creé. Mi debilidad fue la dificultad para profundizar bien.",
        archivo: {
          nombre: "proyecto integrador.jpg",
          tipo: "imagen",
          ruta: "/assets/portafolio-iii/academico/proyecto integrador.jpg",
        },
      },
      {
        title: "Manual TSS",
        subj: "Psicología Clínica II",
        cat: "Manual",
        desc: "Elaboramos un manual sobre los trastornos somáticos con diferentes enfoques teóricos, síntomas y actividades prácticas para el manejo terapéutico.",
        competencias: [
          "Modificar conductas y pensamientos disfuncionales.",
          "Diseñar e implementar programas que promuevan el bienestar psicológico.",
          "Al comunicarse en forma oral y escrita en español.",
        ],
        reflexion:
          "Mi fortaleza fue el trabajo estructurado. Mi debilidad fue la dificultad para delimitar el contenido.",
        archivo: {
          nombre: "manual tss.png",
          tipo: "imagen",
          ruta: "/assets/portafolio-iii/academico/manual tss.png",
        },
        archivo2: {
          nombre: "manual tss 2.png",
          tipo: "imagen",
          ruta: "/assets/portafolio-iii/academico/manual tss 2.png",
        },
      },
      {
        title: "Psicodiagnóstico",
        subj: "Psicodiagnóstico",
        cat: "Evaluación",
        desc: "Llevamos a cabo un proceso completo de evaluación psicológica: desde la primera entrevista, pasando por la aplicación e interpretación de pruebas, hasta la elaboración del informe final.",
        competencias: [
          "Elaborar diagnósticos de padecimientos psicológicos de manera ética y responsable.",
          "Al comunicarse en forma oral y escrita en español.",
          "Al identificar, plantear y resolver problemas aplicando el pensamiento crítico.",
        ],
        reflexion:
          "Mis fortalezas fueron la responsabilidad, el compromiso ético y la capacidad de análisis. Mi debilidad fue la gestión del tiempo.",
        archivo: {
          nombre: "psicodiagnostico.jpg",
          tipo: "imagen",
          ruta: "/assets/portafolio-iii/academico/psicodiagnostico.jpg",
        },
      },
    ],
  },
};
