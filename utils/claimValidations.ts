export interface ClaimFormData {
  nombre: string;
  apellido: string;
  celular: string;
  email: string;
  direccion: string;
  descripcion: string;
}

export interface ClaimFormErrors {
  nombre?: string;
  apellido?: string;
  celular?: string;
  email?: string;
  direccion?: string;
  descripcion?: string;
}

export const validateNombre = (value: string): string => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "El nombre es obligatorio";
  }

  if (trimmedValue.length < 3) {
    return "El nombre debe tener al menos 3 letras";
  }

  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(trimmedValue)) {
    return "El nombre solo puede contener letras";
  }

  return "";
};

export const validateApellido = (value: string): string => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "El apellido es obligatorio";
  }

  if (trimmedValue.length < 3) {
    return "El apellido debe tener al menos 3 letras";
  }

  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(trimmedValue)) {
    return "El apellido solo puede contener letras";
  }

  return "";
};

export const validateCelular = (value: string): string => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "El número de celular es obligatorio";
  }

  // Permite solamente números.
  if (!/^\d+$/.test(trimmedValue)) {
    return "El celular solo puede contener números";
  }

  // Argentina: dejamos entre 10 y 15 dígitos
  if (trimmedValue.length < 10 || trimmedValue.length > 15) {
    return "Ingresá un número de celular válido";
  }

  return "";
};

export const validateEmail = (value: string): string => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "El correo electrónico es obligatorio";
  }

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(trimmedValue)) {
    return "Ingresá un correo electrónico válido";
  }

  return "";
};

export const validateDireccion = (value: string): string => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "La dirección es obligatoria";
  }

  if (trimmedValue.length < 5) {
    return "Ingresá una dirección válida";
  }

  return "";
};

export const validateDescripcion = (value: string): string => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "La descripción del reclamo es obligatoria";
  }

  if (trimmedValue.length < 10) {
    return "La descripción debe tener al menos 10 caracteres";
  }

  return "";
};

export const validateClaimForm = (
  formData: ClaimFormData
): ClaimFormErrors => {
  return {
    nombre: validateNombre(formData.nombre),
    apellido: validateApellido(formData.apellido),
    celular: validateCelular(formData.celular),
    email: validateEmail(formData.email),
    direccion: validateDireccion(formData.direccion),
    descripcion: validateDescripcion(formData.descripcion),
  };
};

export const isClaimFormValid = (
  formData: ClaimFormData
): boolean => {
  const errors = validateClaimForm(formData);

  return Object.values(errors).every((error) => !error);
};