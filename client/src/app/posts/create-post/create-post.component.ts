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
  constructor(
    private apiService: ApiService,
    private router: Router,
    private userService: UserService
  ) {}

  addPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const author = this.userService.user?.username ?? "";
    // const ownerId = this.userService.user?._id ?? "";

    const { title, text, imageUrl, ownerId } = form.value;
    this.apiService
      .createPost(title, text, imageUrl, author, ownerId)
      .subscribe(() => {
        this.router.navigate(["/posts"]);
      });
  }
}
