import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  form = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
  });
  constructor(private fb: FormBuilder, private router: Router) {}

  login(): void {
    if (this.form.invalid) {
      return;
    }
    // this.userService.login();
    this.router.navigate(["/home"]);
    console.log(this.form.value);
  }
}
