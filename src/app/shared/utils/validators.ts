import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { z } from 'zod';

/**
 * Convierte un esquema de Zod en un validador de Angular
 * y retorna errores más legibles.
 */
export function zodValidator(schema: z.ZodTypeAny): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === null || control.value === undefined || control.value === '') {
      return null;
    }

    const result = schema.safeParse(control.value);

    if (result.success) {
      return null;
    }

    const issues = result.error.issues;

    return {
      zod: issues.map((issue) => ({
        message: issue.message,
        path: issue.path.join('.'),
      })),
    };
  };
}
