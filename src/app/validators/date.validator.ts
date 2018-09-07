import { AbstractControl } from '@angular/forms';

export function ValidateDate(control: AbstractControl) {
    if (control.value != '') {
      if (control.value._i.year > "2000") {
        return { validDate: true };
      }
    }
  return null;
}