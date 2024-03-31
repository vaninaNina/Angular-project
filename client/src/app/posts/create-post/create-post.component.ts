import { Component } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/user/user.service";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.css"],
})
export class CreatePostComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  addPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { title, text, imageUrl } = form.value;
    this.apiService.createPost(title, text, imageUrl).subscribe(() => {
      this.router.navigate(["/posts"]);
    });
  }
}
