import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { Post } from "src/app/types/post";
import { UserService } from "src/app/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  post = {} as Post;
  owner = "";
  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  loggedUser = this.userService.user?._id ?? "";

  ngOnInit(): void {
    this.activeRoute.params.subscribe({
      next: (data) => {
        const id = data["postId"];

        this.apiService.getPost(id).subscribe((post) => {
          this.post = post;
          this.owner = this.post._ownerId;
        });
        console.log(this.owner);
      },
      error: (err) => {
        console.error("Error: ", err);
      },
    });
  }

  get isOwner(): boolean {
    if (this.owner == this.loggedUser) {
      return true;
    } else {
      return false;
    }
  }
  onDelete(): void {
    this.activeRoute.params.subscribe({
      next: (data) => {
        const id = data["postId"];

        this.apiService.deletePost(id).subscribe(() => {
          this.router.navigate(["/posts"]);
        });
      },
      error: (err) => {
        console.log("Error: ", err);
        this.router.navigate(["/error"]);
      },
    });
  }
}
