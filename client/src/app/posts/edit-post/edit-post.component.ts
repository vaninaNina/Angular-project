import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
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
    private apiService: ApiService
  ) {}

  post = { title: "", text: "", imageUrl: "" } as Post;
  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data["postId"];

      this.apiService.getPost(id).subscribe((post) => {
        this.post = post;
      });
    });
  }
  onSubmit(form: NgForm): void {
    // if (form.invalid) {
    //   return;
    // }
    this.activeRoute.params.subscribe((data) => {
      const id = data["postId"];

      this.apiService.editPost(id, form.value).subscribe(() => {
        this.router.navigate([`/posts/${id}`]);
      });
    });
  }
}
