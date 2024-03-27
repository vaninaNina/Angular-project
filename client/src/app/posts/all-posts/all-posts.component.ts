import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Post } from "src/app/types/post";

@Component({
  selector: "app-all-posts",
  templateUrl: "./all-posts.component.html",
  styleUrls: ["./all-posts.component.css"],
})
export class AllPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: (err) => {
        console.log("Error: ", err);
      },
    });
  }
}
