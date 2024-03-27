import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllPostsComponent } from "./all-posts/all-posts.component";
import { PostComponent } from "./post/post.component";

const routes: Routes = [
  { path: "", component: AllPostsComponent },
  { path: ":postId", component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
