import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/user/user.service";
import { CommentsService } from "./comments.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { CommentInterface } from "src/app/types/comment";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"],
})
export class CommentsComponent implements OnInit {
  constructor(
    private userService: UserService,
    private commentService: CommentsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}
  ownerId = this.userService.user?._id;
  username = this.userService.user?.username;
  postId: string = "";
  comment: string = "";
  postComments: CommentInterface[] = [];
  comments: string[] = [];

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.postId = params["postId"];
      this.commentService
        .getCommentsByReview(this.postId)
        .subscribe((comments) => {
          this.postComments = comments;
        });
    });
  }
  post() {
    if (this.comment.trim() !== "") {
      const newComment: CommentInterface = {
        _ownerId: this.ownerId,
        username: this.username,
        content: this.comment,
        reviewId: this.postId,
      };

      this.commentService.addCommentToReview(this.postId, newComment).subscribe(
        (addedComment: CommentInterface) => {
          this.postComments.push(addedComment);
          this.comment = "";
        },
        (error) => {
          console.error("Error adding comment:", error);
        }
      );
    }
  }
}
