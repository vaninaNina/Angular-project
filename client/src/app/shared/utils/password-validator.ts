import { ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(
  passwordString: string,
  rePasswordString: string
): ValidatorFn {
  return (control) => {
    const passwordFormControl = control.get(passwordString);
    const rePasswordFormControl = control.get(rePasswordString);
    const areMatching =
      passwordFormControl?.value === rePasswordFormControl?.value;
    return areMatching ? null : { matchPasswordsValidator: true };
  };
}
