import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { UserRoutingModule } from "./user-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
  ],
})
export class UserModule {}
