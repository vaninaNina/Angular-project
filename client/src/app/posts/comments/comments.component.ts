import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "src/app/user/user.service";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"],
})
export class CommentsComponent implements OnInit {
  constructor(private userService: UserService) {}
  username = this.userService.user?.username;

  comment: string = "";
  postComments: string[] = [];

  post() {
    this.postComments.push(this.comment);
    // this.comment = "";
    console.log(this.postComments);
    console.log(this.comment);
  }
  ngOnInit(): void {
    console.log(this.username);
  }
}
