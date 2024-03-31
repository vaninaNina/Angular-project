import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./core/main/main.component";
import { ErrorComponent } from "./core/error/error.component";
import { CreatePostComponent } from "./posts/create-post/create-post.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  {
    path: "auth",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  {
    path: "books",
    loadChildren: () =>
      import("./books/books.module").then((m) => m.BooksModule),
  },
  {
    path: "posts",
    loadChildren: () =>
      import("./posts/posts.module").then((m) => m.PostsModule),
  },

  {
    path: "create",
    component: CreatePostComponent,
  },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
