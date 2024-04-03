import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-authenticate",
  templateUrl: "./authenticate.component.html",
  styleUrls: ["./authenticate.component.css"],
})
export class AuthenticateComponent implements OnInit {
  //are you authenticating now
  isAuthenticating = true;

  constructor(private userService: UserService) {}
  //once done
  ngOnInit(): void {
    this.userService.getMyProfile().subscribe({
      next: () => {
        this.isAuthenticating = false;
      },
      error: () => {
        this.isAuthenticating = false;
      },
      complete: () => {
        this.isAuthenticating = false;
      },
    });
  }
}
