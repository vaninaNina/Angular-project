import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "./types/book";
import { Post } from "./types/post";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  api = "http://localhost:3030/data";
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<Book[]>(`${this.api}/books`);
  }

  getBook(bookId: string) {
    return this.http.get<Book>(`${this.api}/books/${bookId}`);
  }

  getPosts() {
    return this.http.get<Post[]>(`${this.api}/reviews`);
  }

  getPost(postId: string) {
    return this.http.get<Post>(`${this.api}/reviews/${postId}`);
  }
}
