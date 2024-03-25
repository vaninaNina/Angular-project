import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./core/main/main.component";
import { AllBooksComponent } from "./books/all-books/all-books.component";
import { BookComponent } from "./books/book/book.component";
import { AllPostsComponent } from "./posts/all-posts/all-posts.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  // { path: "register", component: RegisterComponent },
  // { path: "login", component: LoginComponent },
  {
    path: "auth",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  { path: "books", component: AllBooksComponent },
  { path: "books/:booksId", component: BookComponent },
  { path: "posts", component: AllPostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
