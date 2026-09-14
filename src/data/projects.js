export const PROJECTS = [
  {
    id: "01",
    title: "Notificador",
    category: "Mobile & Cloud Application",
    summary: "Aplicación móvil multiplataforma para gestión de diligencias y generación automatizada de informes en tiempo real.",
    stack: ["Flutter", "Firebase", "Firestore", "Google Maps SDK", "SQLite"],
    contribution: "Implementación de Clean Architecture desacoplada en Flutter, esquema híbrido de datos (persistencia local offline-first con SQLite y sincronización NoSQL con Firestore) e integración de Google Cloud APIs para cálculo de rutas.",
    impact: "Automatización completa del flujo de captura de datos y reportes fotográficos, reduciendo el tiempo de generación en un ~70%.",
    links: {
      github: "https://github.com/VicenteB2004",
      demo: null
    },
    gallery: [
      "/projects/Notificador-1.webp",
      "/projects/Notificador-2.webp",
      "/projects/Notificador-3.webp"
    ]
  },
  {
    id: "02",
    title: "Biblioteca Atarraya",
    category: "Web Platform & Digital Archive",
    summary: "Plataforma web oficial para espacio cultural y educativo, orientada a alta accesibilidad y visibilidad orgánica.",
    stack: ["HTML5", "CSS3", "JavaScript", "Figma", "GitHub Pages"],
    contribution: "Prototipado del sistema de diseño en Figma, maquetación frontend nativa con alta accesibilidad, despliegue en GitHub Pages con dominio personalizado e integración de monitoreo en Google Search Console.",
    impact: "Posicionamiento orgánico clave en motores de búsqueda (CTR promedio de 31.9% y posición media de 4.9) incrementando el alcance institucional.",
    links: {
      github: "https://github.com/VicenteB2004",
      demo: "https://www.atarrayasc.com/"
    },
    gallery: [
      "/projects/atarraya-1.webp",
      "/projects/atarraya-2.webp"
    ]
  },
  {
    id: "03",
    title: "Ecuador Expat Attorney",
    category: "Corporate Web Platform",
    summary: "Plataforma corporativa enfocada en captación y conversión para servicios jurídicos e inmobiliarios internacionales.",
    stack: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Hostinger"],
    contribution: "Diseño e implementación de interfaz responsiva con Grid System, maquetación semántica enfocada en conversión y configuración de entorno de producción, DNS y despliegue continuo.",
    impact: "Optimizaciones de rendimiento multidispositivo e infraestructura de entrega fluida para captación de clientes internacionales.",
    links: {
      github: "https://github.com/VicenteB2004",
      demo: "https://ecuadorexpatattorney.com"
    },
    gallery: [
      "/projects/Expat-1.webp"
    ]
  },
  {
    id: "04",
    title: "Sistema de Inventario / Cloud",
    category: "Systems & Infrastructure",
    summary: "Orquestación de infraestructura en la nube y automatización de pipelines de integración y entrega continuas.",
    stack: ["AWS EC2", "Docker", "Kubernetes (K3s)", "GitLab CI/CD", "Jenkins"],
    contribution: "Contenerización de microservicios, elaboración de manifiestos declarativos en Kubernetes (K3s) y automatización de pipelines CI/CD sobre instancias AWS EC2.",
    impact: "Despliegues 100% reproducibles, aislamiento total de entornos y ciclo de entrega automatizado con cero tiempo de indisponibilidad.",
    links: {
      github: "https://github.com/VicenteB2004",
      demo: null
    },
  }
];