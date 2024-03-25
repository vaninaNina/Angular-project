import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { ActivatedRoute } from "@angular/router";
import { Book } from "src/app/types/book";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
})
export class BookComponent implements OnInit {
  book = {} as Book;
  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data["booksId"];

      this.apiService.getBook(id).subscribe((book) => {
        this.book = book;
      });
    });
  }
}
