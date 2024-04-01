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
  username = this.userService.user?.username;
  postId: string = "";
  comment: string = "";
  postComments: CommentInterface[] = [];

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

  // post() {
  //   if (this.comment.trim() !== "") {
  //     this.commentService
  //       .addCommentToReview(this.postId, this.comment)
  //       .subscribe((this.comment) => {
  //         this.postComments.push();
  //         this.comment = "";
  //       });
  //   }
  // }
}
