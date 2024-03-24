import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { emailValidator } from "src/app/shared/utils/email-validator";
import { matchPasswordsValidator } from "src/app/shared/utils/password-validator";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  // form = this.fb.group({
  //   username: ["", Validators.required],
  //   email: ["", [Validators.required, emailValidator()]],
  //   passGroup: this.fb.group(
  //     {
  //       password: ["", [Validators.required]],
  //       rePassword: ["", [Validators.required]],
  //     },
  //     {
  //       validators: [matchPasswordsValidator("password", "rePassword")],
  //     }
  //   ),
  // });
  // get passGroup() {
  //   return this.form.get("passGroup");
  // }

  constructor(private userService: UserService, private router: Router) {}

  register(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { username, email, password, rePassword } = form.value;

    this.userService
      .register(username!, email!, password!, rePassword!)
      .subscribe(() => {
        this.router.navigate(["/"]);
      });
  }
}
