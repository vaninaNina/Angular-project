import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Book } from "src/app/types/book";

@Component({
  selector: "app-all-books",
  templateUrl: "./all-books.component.html",
  styleUrls: ["./all-books.component.css"],
})
export class AllBooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getBooks().subscribe({
      next: (books) => {
        this.books = books;
      },
      error: (err) => {
        console.log("Error: ", err);
      },
    });
  }
}
