import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { Post } from "src/app/types/post";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"],
})
export class EditPostComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService // Inject your post service
  ) {}

  post = {} as Post;
  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data["postId"];

      this.apiService.getPost(id).subscribe((post) => {
        this.post = post;
      });
    });
  }
  onSubmit(): void {}
}
