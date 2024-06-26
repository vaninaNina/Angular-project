import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AllPostsComponent } from "./all-posts/all-posts.component";
import { PostComponent } from "./post/post.component";
import { PostsRoutingModule } from "./posts-routing.module";
import { RouterModule } from "@angular/router";
import { CreatePostComponent } from "./create-post/create-post.component";
import { FormsModule } from "@angular/forms";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { CommentsComponent } from "./comments/comments.component";
import { CommentsService } from "./comments/comments.service";

@NgModule({
  declarations: [
    AllPostsComponent,
    PostComponent,
    CreatePostComponent,
    EditPostComponent,
    CommentsComponent,
  ],
  imports: [CommonModule, PostsRoutingModule, RouterModule, FormsModule],
  providers: [CommentsService],
})
export class PostsModule {}
