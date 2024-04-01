import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommentInterface } from "src/app/types/comment";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable()
export class CommentsService {
  constructor(private httpClient: HttpClient) {}

  getCommentsByReview(postId: string): Observable<CommentInterface[]> {
    return this.httpClient
      .get<CommentInterface[]>("http://localhost:3030/data/comments")
      .pipe(
        map((comments: CommentInterface[]) => {
          return comments.filter((comment) => comment.reviewId === postId);
        })
      );
  }

  addCommentToReview(postId: string, newComment: string) {}
}
