import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "./types/book";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  api = "http://localhost:3030/data";
  constructor(private http: HttpClient) {}

  getBooks() {
    const api = "http://localhost:3030/data";
    return this.http.get<Book[]>(`${api}/books`);
  }

  getBook(bookId: string) {
    const api = "http://localhost:3030/data";
    return this.http.get<Book>(`${api}/books/${bookId}`);
  }
}
