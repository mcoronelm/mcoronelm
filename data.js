/* ════════════════ ARCHIVO: data.js ════════════════ */

const CONFIG = {
  profile: {
    name: "Moisés Coronel",
    title: "Software Developer",
    about: "Junior Software Developer with active technical training in PHP, Python, JavaScript, and MySQL. Focused on building functional web applications, database design, and backend and full-stack solution development. Combines analytical skills and proven communication abilities with rapid adaptation to new technologies. Available to contribute to agile teams and collaborative development environments. ",
    photo: "assets/perfil2.jpg",
    cv: "assets/MoisesCoronel_CV_EN_2026.pdf",
    email: "mcoronel.mpc@gmail.com",
    linkedin: "https://www.linkedin.com/in/m-coronel/",
    github: "https://github.com/mcoronelm",
    githubUsername: "mcoronelm"
  },

  stats: [
    // { value: "3+", label: "Años en Tech" },
    { value: "12", label: "Proyectos" },
    // { value: "5",  label: "Certificaciones" },
    { value: "8",  label: "Tecnologías" }
  ],

  formspree: {
    endpoint: "https://formspree.io/f/TU_ID"
  },

  education: [
    {
      title: "Bachelor's Degree in Audiovisual Arts",
      institution: "Universidad Nacional Experimental de las Artes",
      year: "2022",
      url: "https://unearte.edu.ve/"
    },
    {
      title: "Technical Labor Certificate by Competencies Software Development Assistant",
      institution: "Politécnico de Colombia",
      year: "2026",
      url: "https://politecnicodecolombia.edu.co/programa-tecnico-asistente-en-desarrollo-de-software/"
    },
  ],

  certifications: [
    {
      name: "Introducción a la Ciencia de Datos",
      platform: "Santander Open Academy",
      year: "2026",
      image: "assets/certificates/intro.png",
      url: "https://coursera.org/verify/xxxxx"
    },
    {
      name: "Power BI Intermediate: Data Analysis and Modeling",
      platform: "Santander Open Academy",
      year: "2024",
      image: "assets/certificates/powerbi.png",
      url: "https://coursera.org/verify/yyyyy"
    },
    {
      name: "Excel – de intermedio a avanzado",
      platform: "Santander Open Academy",
      year: "2023",
      image: "assets/certificates/excel.png",
      url: "https://coursera.org/verify/zzzzz"
    },
  //   {
  //     name: "Tableau Desktop Specialist",
  //     platform: "Tableau",
  //     year: "2024",
  //     image: "assets/certificates/tableau.jpg",
  //     url: "https://tableau.com/verify/xxxxx"
  //   },
  //   {
  //     name: "IBM Data Analyst Professional Certificate",
  //     platform: "Coursera / IBM",
  //     year: "2024",
  //     image: "assets/certificates/ibm.jpg",
  //     url: "https://coursera.org/verify/wwwww"
  //   }
   ],

  featuredProjects: [
    {
      screenshot: "assets/screenshots/sales-dashboard.png" ,
      repo: "sales-dashboard",
      customDescription: "Dashboard interactivo de ventas con Python y Tableau. Automatización de reportes semanales para equipo comercial.",
      demoUrl: "https://tu-usuario.github.io/sales-dashboard"
    },
    {
      screenshot: "assets/screenshots/sales-dashboard.png",
      repo: "nlp-sentiment-analysis",
      customDescription: "Análisis de sentimientos en reseñas de productos usando NLTK y Scikit-learn. Precisión del 87%.",
      demoUrl: ""
    },
    {
      screenshot: "assets/screenshots/sales-dashboard.png" ,
      repo: "sql-ecommerce-analysis",
      customDescription: "Análisis exploratorio de base de datos de e-commerce: funnel de conversión, LTV y segmentación RFM.",
      demoUrl: ""
    }
  ],

  hiddenRepos: ["repo-privado", "dotfiles", "config", "test-repo", ".github"]
};
