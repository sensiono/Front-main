import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
blogForm!: FormGroup;
tags:string[] = [];
  constructor (private fb: FormBuilder,
     private router: Router,
     private snackBar: MatSnackBar,
     private blogService: BlogService,){}
   
     ngOnInit(){
      this.blogForm = this.fb.group({
        name: [null, Validators.required],
        content: [null, [Validators.required, Validators.maxLength(5000)]],
        img: [null, Validators.required ],
        postedBy: [null, Validators.required]
      })
      
    }

    add(event:any){
    const value = (event.value || '').trim();
    if (value){
      this.tags.push(value);
    }
    event.chipout!.clear();
  }
  remove(tag:any){
    const index = this.tags.indexOf(tag);
    if(index>=0){
      this.tags.splice(index,1);
    }
  }

  createBlog(){
    const data = this.blogForm.value;
    data.tags = this.tags;
    this.blogService.createNewBlog(data).subscribe(res=>{
      this.snackBar.open("Blog Created Successfully !!!", "OK");
      this.router.navigateByUrl("/");
    },error=>{
      this.snackBar.open("Something went wrong !!!", "OK");
    })
  }
}

