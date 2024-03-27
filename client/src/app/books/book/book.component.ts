import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { ActivatedRoute } from "@angular/router";
import { Book } from "src/app/types/book";
import { UserService } from "src/app/user/user.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
})
export class BookComponent implements OnInit {
  book = {} as Book;
  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data["booksId"];

      this.apiService.getBook(id).subscribe((book) => {
        this.book = book;
      });
    });
  }
}
