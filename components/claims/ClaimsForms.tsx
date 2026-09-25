"use client";

import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import {
  ClaimFormData,
  ClaimFormErrors,
  validateClaimForm,
  isClaimFormValid,
} from "@/utils/claimValidations";

import { FaPaperPlane } from "react-icons/fa";
import ClaimsMap from "@/components/claims/ClaimsMap";

const initialFormData: ClaimFormData = {
  nombre: "",
  apellido: "",
  celular: "",
  email: "",
  direccion: "",
  descripcion: "",
};

export default function ClaimsForm() {
  const [formData, setFormData] = useState<ClaimFormData>(initialFormData);

  const [addressSearchTrigger, setAddressSearchTrigger] = useState(0);

  const [errors, setErrors] = useState<ClaimFormErrors>({});

  const [touched, setTouched] = useState<Record<keyof ClaimFormData, boolean>>({
    nombre: false,
    apellido: false,
    celular: false,
    email: false,
    direccion: false,
    descripcion: false,
  });

  const handleChange = (field: keyof ClaimFormData, value: string) => {
    const updatedForm = {
      ...formData,
      [field]: value,
    };

    setFormData(updatedForm);

    if (touched[field]) {
      setErrors(validateClaimForm(updatedForm));
    }
  };

  const handleBlur = (field: keyof ClaimFormData) => {
    const updatedTouched = {
      ...touched,
      [field]: true,
    };

    setTouched(updatedTouched);
    setErrors(validateClaimForm(formData));
  };

  const formIsValid = isClaimFormValid(formData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Por ahora no hacemos ningún envío.
    // La conexión con el backend/email la agregaremos después.

    const validationErrors = validateClaimForm(formData);

    setErrors(validationErrors);

    setTouched({
      nombre: true,
      apellido: true,
      celular: true,
      email: true,
      direccion: true,
      descripcion: true,
    });

    if (!Object.values(validationErrors).some(Boolean)) {
      console.log("Formulario válido:", formData);
    }
  };

  return (
    <section className="bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            Participación ciudadana
          </p>

          <h1 className="font-sans text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            Reclamos
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-600">
            Queremos escucharte. Completá el formulario y contanos cuál es el
            problema que querés acercarnos.
          </p>
        </div>

        {/* Formulario + Mapa */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* FORMULARIO */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* Nombre */}
              <TextField
                label="Nombre"
                value={formData.nombre}
                onChange={(e) => handleChange("nombre", e.target.value)}
                onBlur={() => handleBlur("nombre")}
                error={touched.nombre && Boolean(errors.nombre)}
                helperText={touched.nombre ? errors.nombre : ""}
                required
                fullWidth
              />

              <TextField
                label="Apellido"
                value={formData.apellido}
                onChange={(e) => handleChange("apellido", e.target.value)}
                onBlur={() => handleBlur("apellido")}
                error={touched.apellido && Boolean(errors.apellido)}
                helperText={touched.apellido ? errors.apellido : ""}
                required
                fullWidth
              />

              <TextField
                label="Número de celular"
                type="tel"
                value={formData.celular}
                onChange={(e) => handleChange("celular", e.target.value)}
                onBlur={() => handleBlur("celular")}
                error={touched.celular && Boolean(errors.celular)}
                helperText={touched.celular ? errors.celular : ""}
                required
                fullWidth
                slotProps={{
                  htmlInput: {
                    inputMode: "numeric",
                  },
                }}
              />

              <TextField
                label="Correo electrónico"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email ? errors.email : ""}
                required
                fullWidth
              />

              <div className="md:col-span-2">
                <TextField
                  label="Dirección"
                  value={formData.direccion}
                  onChange={(e) => handleChange("direccion", e.target.value)}
                  onBlur={() => {
                    handleBlur("direccion");

                    if (formData.direccion.trim()) {
                      setAddressSearchTrigger((prev) => prev + 1);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();

                      if (formData.direccion.trim()) {
                        setAddressSearchTrigger((prev) => prev + 1);
                      }
                    }
                  }}
                  error={touched.direccion && Boolean(errors.direccion)}
                  helperText={
                    touched.direccion
                      ? errors.direccion
                      : "Escribí una dirección o seleccioná un punto en el mapa."
                  }
                  required
                  fullWidth
                  placeholder="Ej. Av. Colón 1500, Córdoba"
                />
              </div>

              <div className="md:col-span-2">
                <TextField
                  label="Descripción del reclamo"
                  value={formData.descripcion}
                  onChange={(e) => handleChange("descripcion", e.target.value)}
                  onBlur={() => handleBlur("descripcion")}
                  error={touched.descripcion && Boolean(errors.descripcion)}
                  helperText={touched.descripcion ? errors.descripcion : ""}
                  required
                  fullWidth
                  multiline
                  rows={6}
                  placeholder="Contanos qué está sucediendo..."
                />
              </div>
            </div>

            <div className="mt-7">
              <Button
                type="submit"
                variant="contained"
                disabled={!formIsValid}
                fullWidth
                startIcon={<FaPaperPlane size={14} />}
                sx={{
                  backgroundColor: "#074173",
                  borderRadius: "8px",
                  padding: "13px 24px",
                  textTransform: "none",
                  fontFamily: "var(--font-poppins)",
                  fontSize: "0.9rem",
                  fontWeight: 500,

                  "&:hover": {
                    backgroundColor: "#004173",
                  },

                  "&.Mui-disabled": {
                    backgroundColor: "#d1d5db",
                    color: "#ffffff",
                  },
                }}
              >
                Enviar reclamo
              </Button>
            </div>
          </form>

          {/* MAPA */}
          <div className="flex min-h-[450px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 lg:min-h-full">
            <div className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4">
              <div>
                <h2 className="font-sans text-base font-semibold text-primary">
                  Ubicación del reclamo
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Marcá en el mapa dónde se encuentra el problema.
                </p>
              </div>
            </div>

            <div className="relative flex-1">
              <ClaimsMap
                address={formData.direccion}
                searchTrigger={addressSearchTrigger}
                onAddressChange={(address) =>
                  setFormData((prev) => ({
                    ...prev,
                    direccion: address,
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
