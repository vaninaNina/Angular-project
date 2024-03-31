import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "./types/book";
import { Post } from "./types/post";
import { UserService } from "./user/user.service";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  api = "http://localhost:3030/data";
  token = localStorage.getItem("accessToken") ?? "";
  retrievedToken: string = this.token;

  constructor(private http: HttpClient, private userService: UserService) {}

  httpOptions = {
    headers: {
      "X-Authorization": this.retrievedToken,
      "Content-Type": "application/json",
    },
  };

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

  createPost(title: string, text: string, imageUrl: string, author: string) {
    // console.log(this.token);
    return this.http.post<Post>(
      `${this.api}/reviews`,
      {
        title,
        text,
        imageUrl,
        author,
      },
      this.httpOptions
    );
  }

  editPost(postId: string, postData: Post) {
    return this.http.put<Post>(
      `${this.api}/reviews/${postId}`,
      postData,
      this.httpOptions
    );
  }

  deletePost(postId: string) {
    return this.http.delete<Post>(
      `${this.api}/reviews/${postId}`,
      this.httpOptions
    );
  }
}
