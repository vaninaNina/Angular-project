import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllPostsComponent } from "./all-posts/all-posts.component";
import { PostComponent } from "./post/post.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { AuthGuard } from "../guards/auth.guard";
import { EditPostComponent } from "./edit-post/edit-post.component";

const routes: Routes = [
  { path: "", component: AllPostsComponent },
  { path: ":postId", component: PostComponent },
  {
    path: "create",
    component: CreatePostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ":postId/edit",
    component: EditPostComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
