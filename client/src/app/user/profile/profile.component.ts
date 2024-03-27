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

  ngOnInit(): void {
    const { email, username } = this.userService.user!;
    console.log(email, username);
    // this.profile = {
    //   username,
    //   email,
    // };
  }
}
