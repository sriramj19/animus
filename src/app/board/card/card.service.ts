import { Injectable } from '@angular/core';
import { Comment } from './card';

@Injectable()
export class CardService {

  constructor() { }

  /**
   * @description form a comment from the body
   * @param body the body of the comment
   */
  public formCommentFromBody(body: string) {
    let comment: Comment = new Comment;
    comment.body = body;
    comment.createdDate = new Date().getTime();
    return comment;
  }
}
