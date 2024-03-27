import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { Post } from "src/app/types/post";
import { UserService } from "src/app/user/user.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  post = {} as Post;
  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data["postId"];

      this.apiService.getPost(id).subscribe((post) => {
        this.post = post;
      });
    });
  }
}
