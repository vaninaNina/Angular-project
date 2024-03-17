import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { emailValidator } from "src/app/shared/utils/email-validator";
import { matchPasswordsValidator } from "src/app/shared/utils/password-validator";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  form = this.fb.group({
    email: ["", [Validators.required, emailValidator()]],
    passGroup: this.fb.group(
      {
        password: ["", [Validators.required]],
        rePassword: ["", [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator("password", "rePassword")],
      }
    ),
  });
  get passGroup() {
    return this.form.get("passGroup");
  }

  constructor(private fb: FormBuilder) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }
  }
}
