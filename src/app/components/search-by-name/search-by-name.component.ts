import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent {
  result:any= [];
  name:any = "";
  constructor(private blogService: BlogService, 
    private snackBar: MatSnackBar ){}

    searchByName(){
      this.blogService.searchByName(this.name).subscribe(res=>{
        this.result = res;
        console.log(this.result);
      },error=>{
        this.snackBar.open("Something Went Wrong", "ok")
      })
    }

}
