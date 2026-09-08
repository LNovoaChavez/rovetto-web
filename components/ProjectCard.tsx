"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";

import {
  FaEye,
  FaDownload,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import type { Project } from "@/utils/proyectos";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handlePreview = () => {
    const pdfUrl = `${window.location.origin}${project.pdf}`;

    const googleViewerUrl = `https://docs.google.com/gview?embedded=false&url=${encodeURIComponent(
      pdfUrl
    )}`;

    window.open(googleViewerUrl, "_blank");
  };

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid #e5e7eb",
        backgroundColor: "#ffffff",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 15px 35px rgba(7, 65, 115, 0.12)",
        },
      }}
    >
      {/* Imagen / Carrusel */}
      <div className="relative h-[250px] w-full overflow-hidden">
        <Image
          src={project.images[currentImage]}
          alt={project.title}
          fill
          className="object-cover transition-all duration-500"
        />

        {/* Flecha izquierda */}
        <IconButton
          onClick={previousImage}
          aria-label="Imagen anterior"
          sx={{
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.9)",
            width: 36,
            height: 36,
            "&:hover": {
              backgroundColor: "#ffffff",
            },
          }}
        >
          <FaChevronLeft size={13} />
        </IconButton>

        {/* Flecha derecha */}
        <IconButton
          onClick={nextImage}
          aria-label="Siguiente imagen"
          sx={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.9)",
            width: 36,
            height: 36,
            "&:hover": {
              backgroundColor: "#ffffff",
            },
          }}
        >
          <FaChevronRight size={13} />
        </IconButton>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              aria-label={`Ver imagen ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                index === currentImage
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Contenido */}
      <CardContent sx={{ padding: "24px" }}>
        <h2 className="font-sans text-xl font-semibold leading-tight text-primary">
          {project.title}
        </h2>

        <p className="mt-3 min-h-[72px] font-sans text-sm leading-6 text-gray-600">
          {project.description}
        </p>

        {/* Botones */}
        <div className="mt-5 flex gap-3">
          <button
            onClick={handlePreview}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white transition-all hover:bg-primary-dark"
          >
            <FaEye size={14} />
            Previsualizar
          </button>

          <a
            href={project.pdf}
            download
            className="flex items-center justify-center gap-2 rounded-lg border border-primary px-4 py-3 text-sm font-medium text-primary transition-all hover:bg-secondary"
          >
            <FaDownload size={14} />
            Descargar
          </a>
        </div>
      </CardContent>
    </Card>
  );
}