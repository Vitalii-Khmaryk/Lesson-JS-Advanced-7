import { Component } from '@angular/core';
import { BlogService, IPostsResponse } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  public blogPosts:Array<IPostsResponse>=[];
constructor(private blogService:BlogService){}

ngOnInit(): void {
 this.getPosts();
}

getPosts():void{
  this.blogService.getAll().subscribe(data=>{
    this.blogPosts=data;
  });
}

}
