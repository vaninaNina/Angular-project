import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { ApiService } from "src/app/api.service";
import { Post } from "src/app/types/post";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  filteredPosts: Post[] = [];
  constructor(
    private userService: UserService,
    private apiService: ApiService
  ) {}
  get username(): string {
    return this.userService.user?.username || "";
  }
  get email(): string {
    return this.userService.user?.email || "";
  }

  ngOnInit() {
    this.apiService.getPosts().subscribe((posts) => {
      this.filteredPosts = posts.filter(
        (post) => post._ownerId === this.userService.user?._id
      );
      // console.log("Filtered Posts:", this.filteredPosts);
    });
  }
}
