import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "./types/book";
import { Post } from "./types/post";
import { UserService } from "./user/user.service";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  api = "http://localhost:3030/data";

  constructor(private http: HttpClient, private userService: UserService) {}

  private getHttpOptions() {
    const accessToken = localStorage.getItem("accessToken") || "";
    return {
      headers: {
        "X-Authorization": accessToken,
        "Content-Type": "application/json",
      },
    };
  }

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

  createPost(
    title: string,
    text: string,
    imageUrl: string,
    author: string,
    ownerId: string
  ) {
    const httpOptions = this.getHttpOptions();
    return this.http.post<Post>(
      `${this.api}/reviews`,
      {
        title,
        text,
        imageUrl,
        author,
        ownerId,
      },
      httpOptions
    );
  }

  editPost(postId: string, postData: Post) {
    const httpOptions = this.getHttpOptions();
    return this.http.put<Post>(
      `${this.api}/reviews/${postId}`,
      postData,
      httpOptions
    );
  }

  deletePost(postId: string) {
    const httpOptions = this.getHttpOptions();
    return this.http.delete<Post>(`${this.api}/reviews/${postId}`, httpOptions);
  }
}
