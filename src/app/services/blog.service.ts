import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const BASIC_URL = 'http://localhost:9090/'
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  createNewBlog(data:any): Observable<any>{
    return this.http.post(BASIC_URL + 'api/blogs', data);

  }
  getALLBlogs(): Observable<any>{
    return this.http.get(BASIC_URL + 'api/blogs');
    
  }
  getBlogById(blogId: number): Observable<any> {
    return this.http.get(`${BASIC_URL}api/blogs/${blogId}`);
  }

  likeBlog(blogId: number): Observable<any> {
    return this.http.put(`${BASIC_URL}api/blogs/${blogId}/like`, {});
  }
  searchByName(name: string): Observable<any> {
    return this.http.get(`${BASIC_URL}api/blogs/search/${name}`);
  }
  deleteBlog(blogId: number): Observable<any> {
    return this.http.delete(`${BASIC_URL}api/blogs/${blogId}`);
  }
  updateBlog(blogId: number, updatedBlog: any): Observable<any> {
    return this.http.put(`${BASIC_URL}api/blogs/${blogId}`, updatedBlog);
  }
  

}
