export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  pdf: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Ordenanza NEGRITA",
    description:
      "Presenté la Ordenanza Negrita porque como sociedad no podemos tolerar más el maltrato ni la desidia: nuestros animales de compañía son seres sintientes y parte de nuestras familias, por lo que necesitan una protección integral y real en Córdoba. Con este proyecto buscamos regular el cuidado responsable y sancionar severamente la crueldad, el abandono y el maltrato animal.",
    images: [
      "https://res.cloudinary.com/g6rgllhp/image/upload/f_jpg/v1788967477/Copia_de_IMG_9171.heic",
      "https://res.cloudinary.com/g6rgllhp/image/upload/v1788967476/Copia_de_IMG_20240705_164955339_HDR.jpg",
      "https://res.cloudinary.com/g6rgllhp/image/upload/v1788967477/Copia_de_IMG_20240705_170042141_HDR_Original.jpg",
      "https://res.cloudinary.com/g6rgllhp/image/upload/v1788967477/Copia_de_IMG_20240701_095608758_HDR_AE.jpg",
    ],
    pdf: "/pdfs/Proyecto Ordenanza Negrita - Concejal Rovetto Yapur, Jessica.pdf",
  },
  {
    id: 2,
    title: "APPS DE TRANSPORTES",
    description:
      "Presenté un proyecto de ordenanza para regular y legalizar de forma definitiva las aplicaciones de transporte en Córdoba. Con esta iniciativa buscamos modernizar la movilidad urbana, terminar con la persecución a los choferes de las apps en las calles, respetar la libertad de trabajo y permitir que los cordobeses elijan libremente cómo viajar ",
    images: [
      "https://res.cloudinary.com/g6rgllhp/image/upload/v1788992497/IMG-20241106-WA0144.jpg",
      "https://res.cloudinary.com/g6rgllhp/image/upload/f_jpg,q_auto/v1788992497/IMG_0432.heic",
      "https://res.cloudinary.com/g6rgllhp/image/upload/f_jpg,q_auto/v1788992497/IMG_3819.heic",
    ],
    pdf: "/pdfs/Marco regulatorio STPP.docx CORDOBESES XL.pdf",
  },
  {
    id: 3,
    title: "Prohibición de Naranjitas",
    description:
    "Presenté el proyecto “Extorsión 0 en las calles” porque la calle es un espacio público libre, ningún vecino o turista de Córdoba puede seguir viviendo con el miedo de estacionar y ser extorsionado, amenazado de sufrir daños en su vehículo producto de los cobros “voluntarios” que realizan los populares “NARANJITAS”. ",
    images: [
      "https://res.cloudinary.com/g6rgllhp/image/upload/v1789087078/IMG_1511_Original.jpg",
      "https://res.cloudinary.com/g6rgllhp/image/upload/v1789087078/IMG_0563_Original.jpg",
      "https://res.cloudinary.com/g6rgllhp/image/upload/v1789087079/IMG_2717_Original.jpg",
      "https://res.cloudinary.com/g6rgllhp/image/upload/v1789087078/IMG_1698_Original.jpg",
    ],
    pdf: "/pdfs/ORDENANZA NARANJITAS.pdf",
  },
  {
    id: 4,
    title: "Educación Emocional",
    description:
      "Presenté este proyecto, “Educación Emocional”, para prevenir desde la raíz problemas graves como el bullying, el consumo y el suicidio adolescente en Córdoba. El Estado no debe actuar tarde: la clave es brindar herramientas formativas antes de que el daño suceda. Por eso, propongo incorporar la educación emocional obligatoria y transversal en todas las escuelas municipales. Capacitando a docentes y familias formaremos personas empáticas, seguras y listas para construir un proyecto sano de vida. ",
    images: [
      "https://res.cloudinary.com/g6rgllhp/image/upload/v1789087368/IMG_1186.heic",
      "https://res.cloudinary.com/g6rgllhp/image/upload/v1789087367/IMG_1173.heic",
    ],
    pdf: "/pdfs/RÉGIMEN DE ALFABETIZACIÓN EMOCIONAL EN LAS ESCUELAS FINAL.pdf",
  },
  {
    id: 5,
    title: "Participación ciudadana",
    description:
      "Propuesta para promover una mayor participación de los vecinos en las decisiones de la ciudad.",
    images: [
      "/images/projects/proyecto-5-1.jpg",
      "/images/projects/proyecto-5-2.jpg",
    ],
    pdf: "/pdfs/proyecto-5.pdf",
  },
  
];