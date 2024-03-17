import { ValidatorFn } from "@angular/forms";
export function emailValidator(): ValidatorFn {
  const regExp = new RegExp(`[A-Za-z0-9]+@abv\.bg`);

  return (control) => {
    const isEmailInvalid = control.value === "" || regExp.test(control.value);
    return isEmailInvalid ? null : { emailValidator: true };
  };
}
