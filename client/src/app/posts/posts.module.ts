import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AllPostsComponent } from "./all-posts/all-posts.component";
import { PostComponent } from "./post/post.component";
import { PostsRoutingModule } from "./posts-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AllPostsComponent, PostComponent],
  imports: [CommonModule, PostsRoutingModule, RouterModule],
})
export class PostsModule {}
