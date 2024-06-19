export const headerContent = {
  logo: "/assets/logo/svg/Logo_Negro_Sin_Fondo.svg",
  logoAlt: "Kilafy",
  logoSizing: {
    width: 140,
    height: 70,
  },
  navigation: [
    {
      id: "0",
      title: "Nosotros",
      url: "#nosotros",
    },
    {
      id: "1",
      title: "Servicios",
      url: "#servicios",
    },
    {
      id: "2",
      title: "Clientes",
      url: "#clientes",
    },
    {
      id: "3",
      title: "Contacto",
      url: "#contacto",
    },
  ],
};

export const heroContent = {
  title: "Impulsamos tu visión con tecnología de vanguardia.",
  background: "/assets/images/backgrounds/IMG_20.webp",
  backgroundAlt: "Desk with a computer, glasses and cup of coffee",
};

export const aboutUsContent = {
  title: "Nosotros",
  sideImgSrc: "/assets/images/backgrounds/IMG_5.webp",
  sideImgAlt: "Man programming",
  description:
    "En Kilafy, buscamos crear soluciones digitales que transforman la manera en que las empresas interactúan \
    con el mundo. Especializados en desarrollo web y móvil, combinamos creatividad, innovación y tecnología de \
    vanguardia para ofrecer productos que no solo cumplen, sino que superan las expectativas de nuestros clientes. \
    Nuestra misión es convertir tus ideas en realidades digitales que impulsen tu negocio hacia el éxito.",
  team: [
    {
      id: "0",
      name: "Andrés Caro",
      role: "Ingeniero de sistemas",
      photo: "/assets/images/team/Andres_Caro.webp",
    },
    {
      id: "1",
      name: "Felipe Arredondo",
      role: "Ingeniero de sistemas",
      photo: "/assets/images/team/Andres_Caro.webp",
    },
    {
      id: "2",
      name: "Miguel Calvache",
      role: "Ingeniero de sistemas",
      photo: "/assets/images/team/Miguel_Calvache.webp",
    },
    {
      id: "3",
      name: "Camilo Álvarez",
      role: "Ingeniero de sistemas",
      photo: "/assets/images/team/Andres_Caro.webp",
    },
  ],
  teamPhotoSize: {
    width: "324px",
    height: "324px",
  },
  teamDescription:
    "Contamos con un equipo de profesionales de la universidad EAFIT apasionados y eficientes, \
    cada uno con habilidades únicas que abarcan todo el espectro del desarrollo de software. Trabajamos en \
    conjunto para ofrecer soluciones integrales y personalizadas a cada uno de nuestros clientes.",
};

export const servicesContent = {
  banner: {
    src: "/assets/images/backgrounds/IMG_19.webp",
    width: "1024px",
    height: "600px",
    frameRounded: "rounded-lg",
    frameColor: "bg-color-4",
    framePosition: "bottomLeft",
    childrenTitle: "¡Conoce nuestros servicios!",
  },
  title: "Nuestros paquetes",
  services: [
    {
      id: "0",
      name: "Página web básica",
      description:
        "Este paquete ofrece una página web tipo landing page dando una solución completa \
        y profesional para cualquier empresa que necesite una presencia en línea efectiva para \
        darse a conoceren internet.",
    },
    {
      id: "1",
      name: "Aplicación Web",
      description:
        "En Kilafy, ofrecemos un paquete integral de desarrollo de aplicativos web diseñado \
        para transformar tus ideas en aplicaciones funcionales y robustas. Algunos ejemplos son \
        tiendas en línea, gestores de contenido o cualquier sistema personalizado que usted requiera.",
    },
    {
      id: "2",
      name: "Aplicación Móvil",
      description:
        "En Kilafy, transformamos tus ideas en aplicaciones móviles innovadoras y eficientes \
        en realidad para que puedas llevar tu negocio al alcance de tus clientes en cualquier \
        momento y lugar.",
    },
  ],
  moreInfo: {
    text: "Más información",
    url: "#contacto",
  },
};

export const metodologyContent = [
  {
    id: "0",
    phaseName: "1. Planear",
    description:
      "Antes de embarcarnos en cualquier desarrollo, en Kilafy buscamos conocer a profundidad las \
      necesidades de nuestros clientes para garantizar el éxito del proyecto.",
  },
  {
    id: "1",
    phaseName: "2. Desarrollar",
    description:
      "De la mano del equipo profesional de Kilafy, tu idea se convierte en una realidad digital. \
      Creamos productos con las mejores prácticas de desarrollo y tecnología de vanguardia.",
  },
  {
    id: "2",
    phaseName: "3. Entregar",
    description:
      "La retroalimentación del cliente es esencial para un buen desarrollo de software, es por eso que \
      en Kilafy entregamos productos de manera continua, iterativa e incremental para cumplir con las \
      necesidades y expectativas de nuestros clientes.",
  },
];

export const pastProjectsContent = {
  titleFirstText: "Algunos de nuestros",
  titleSecondText: "trabajos pasados!",
  projects: [
    {
      id: "0",
      photo: "/assets/images/backgrounds/IMG_1.webp",
      metadata: {
        name: "headphones-store",
      }
    },
    {
      id: "1",
      photo: "/assets/images/backgrounds/IMG_1.webp",
      metadata: {
        name: "medusa-earth",
      }
    },
    {
      id: "2",
      photo: "/assets/images/backgrounds/IMG_1.webp",
      metadata: {
        name: "freemove-training",
      }
    },
  ],
  sliderSize: 3,
  slideTimeout: 1, //Seconds
};
