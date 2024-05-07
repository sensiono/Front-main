import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:9090/';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {}

  createComment(blogId: number, postedBy: string, content: string): Observable<any> {
    const params = {
    blogId: blogId,
    postedBy: postedBy
    }
    return this.http.post<any>(BASIC_URL + 'api/comments/create', content, { params });
  }
  getAllCommentsByBlog(blogId:number): Observable<any>{
    return this.http.get(`${BASIC_URL}api/comments/${blogId}`);
  }
  
}
