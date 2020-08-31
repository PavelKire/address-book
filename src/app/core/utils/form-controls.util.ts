import { ValidationErrors } from '@angular/forms';

export function getErrorMessage(errors: ValidationErrors): string {
  if (errors.required) {
    return 'Обязательное поле';
  }
  if (errors.invalidPhone) {
    return 'Неправильный номер телефона';
  }
}
