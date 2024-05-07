import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';
import { BlogService } from 'src/app/services/blog.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent {
  blogId = this.activatedRoute.snapshot.params['id'];
  blogData:any;
  comments:any;
  commentForm!: FormGroup;
  constructor(private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private fb:FormBuilder,
    private commentService: CommentService
  ){}
  
    ngOnInit(){
      console.log(this.blogId);
      this.getBlogById();
      this.commentForm = this.fb.group({
        postedBy: [null, Validators.required],
        content: [null, Validators.required]
      })
    }
    
    
    publishComment(){
      const postedBy= this.commentForm.get('postedBy')?.value;
      const content= this.commentForm.get('content')?.value;
      this.commentService.createComment(this.blogId, postedBy, content).subscribe(res=>{
        this.matSnackBar.open("Comment Published Successfully!!!", "Ok");
        this.getCommentByBlog();
      },error=>{
        this.matSnackBar.open("Something Went Wrong!!!", "Ok");
      })
    }
    getCommentByBlog() {
      this.commentService.getAllCommentsByBlog(this.blogId).subscribe(
        res => {
          this.comments = res; // Assign comments received from backend to the component property
        },
        error => {
          this.matSnackBar.open('Something Went Wrong!!!', 'Ok');
        }
      );
    }
    
    getBlogById(){
      this.blogService.getBlogById(this.blogId).subscribe(res=>{
        this.blogData = res;
        console.log(res);
        this.getCommentByBlog();
      }, error=>{
        this.matSnackBar.open("Something Went Wrong!!!", "Ok");
      
      
      })
    }
    likeBlog(){
      this.blogService.likeBlog(this.blogId).subscribe((response)=>{
        this.matSnackBar.open("Blog Liked Successfully!!!", "Ok");
        this.getBlogById();
      }, (error)=>{
        this.matSnackBar.open("Something Went Wrong!!!", "Ok");
      
      
      })
    }
}
