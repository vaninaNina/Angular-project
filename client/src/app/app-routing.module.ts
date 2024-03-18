import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./user/register/register.component";
import { MainComponent } from "./core/main/main.component";
import { LoginComponent } from "./user/login/login.component";
import { AllBooksComponent } from "./books/all-books/all-books.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "books", component: AllBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
