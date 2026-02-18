import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { z } from 'zod';

/**
 * Convierte un esquema de Zod en un Validador de Angular.
 * @param schema El esquema de Zod a evaluar (ej: z.string().email())
 */
export function zodValidator(schema: z.ZodTypeAny): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; // Dejamos que el validador 'required' de Angular maneje los vacíos si es necesario
    }

    const result = schema.safeParse(control.value);

    // Si falla Zod, retornamos el error formateado para que Angular lo entienda
    return result.success ? null : { zodError: result.error.format() };
  };
}
