import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommentInterface } from "src/app/types/comment";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable()
export class CommentsService {
  token = localStorage.getItem("accessToken") ?? "";
  retrievedToken: string = this.token;
  constructor(private httpClient: HttpClient) {}
  httpOptions = {
    headers: {
      "X-Authorization": this.retrievedToken,
      "Content-Type": "application/json",
    },
  };
  getCommentsByReview(postId: string): Observable<CommentInterface[]> {
    return this.httpClient
      .get<CommentInterface[]>("http://localhost:3030/data/comments")
      .pipe(
        map((comments: CommentInterface[]) => {
          return comments.filter((comment) => comment.reviewId === postId);
        })
      );
  }

  addCommentToReview(postId: string, newComment: CommentInterface) {
    return this.httpClient.post<CommentInterface>(
      `http://localhost:3030/data/comments`,
      newComment,
      this.httpOptions
    );
  }
}
