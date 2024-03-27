import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Profile } from "src/app/types/user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  profile: Profile = {
    username: "",
    email: "",
    savedBooks: [],
    posts: [],
  };
  constructor(private userService: UserService) {}
  get username(): string {
    return this.userService.user?.username || "";
  }
  get email(): string {
    return this.userService.user?.email || "";
  }
  ngOnInit(): void {}
}
