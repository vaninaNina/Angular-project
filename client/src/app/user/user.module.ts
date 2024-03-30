import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { UserRoutingModule } from "./user-routing.module";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { AuthenticateComponent } from "./authenticate/authenticate.component";

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AuthenticateComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
  ],
})
export class UserModule {}
