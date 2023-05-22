import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const mustMatchValidator: ValidatorFn = (control: AbstractControl):
  ValidationErrors | null => {
  const firstControl = control.get('plainPassword');
  const secondControl = control.get('plainPasswordConfirm');

  return firstControl?.value !== secondControl?.value ? { isNotMatching:{value: true } } : null;
};



