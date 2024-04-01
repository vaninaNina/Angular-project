import { Component } from "@angular/core";
// import { FormBuilder, Validators } from "@angular/forms";
// import { emailValidator } from "src/app/shared/utils/email-validator";
// import { ValidatorFn } from "@angular/forms";
// import { matchPasswordsValidator } from "src/app/shared/utils/password-validator";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router) {}

  regExp = new RegExp(`[A-Za-z0-9]+@abv\.bg`);

  register(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { username, email, password } = form.value;

    this.userService.register(username!, email!, password!).subscribe({
      next: () => {
        this.router.navigate(["/"]);
      },
      error: (err) => {
        console.log("Error:", err.error.message);
        alert(err.error.message);
      },
    });
  }
}
