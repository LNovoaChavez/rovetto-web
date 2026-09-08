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
    title: "Proyecto de desarrollo urbano",
    description:
      "Iniciativa orientada a mejorar el desarrollo y la planificación de distintos sectores de la ciudad.",
    images: [
      "/images/projects/proyecto-1-1.jpg",
      "/images/projects/proyecto-1-2.jpg",
    ],
    pdf: "/pdfs/proyecto-1.pdf",
  },
  {
    id: 2,
    title: "Mejoras para los barrios",
    description:
      "Propuesta para impulsar mejoras en infraestructura y servicios para los vecinos de Córdoba.",
    images: [
      "/images/projects/proyecto-2-1.jpg",
      "/images/projects/proyecto-2-2.jpg",
    ],
    pdf: "/pdfs/proyecto-2.pdf",
  },
  {
    id: 3,
    title: "Seguridad y prevención",
    description:
      "Proyecto destinado a fortalecer las herramientas de prevención y seguridad en la ciudad.",
    images: [
      "/images/projects/proyecto-3-1.jpg",
      "/images/projects/proyecto-3-2.jpg",
    ],
    pdf: "/pdfs/proyecto-3.pdf",
  },
  {
    id: 4,
    title: "Espacios públicos",
    description:
      "Iniciativa para recuperar, mejorar y poner en valor espacios públicos de Córdoba.",
    images: [
      "/images/projects/proyecto-4-1.jpg",
      "/images/projects/proyecto-4-2.jpg",
    ],
    pdf: "/pdfs/proyecto-4.pdf",
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
  {
    id: 6,
    title: "Educación y oportunidades",
    description:
      "Proyecto enfocado en generar nuevas oportunidades de formación y crecimiento para los jóvenes.",
    images: [
      "/images/projects/proyecto-6-1.jpg",
      "/images/projects/proyecto-6-2.jpg",
    ],
    pdf: "/pdfs/proyecto-6.pdf",
  },
];