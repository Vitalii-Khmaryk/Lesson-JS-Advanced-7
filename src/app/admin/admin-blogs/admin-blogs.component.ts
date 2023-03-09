import { Component } from '@angular/core';
import { BlogService, IPosts } from 'src/app/blog.service';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.scss']
})
export class AdminBlogsComponent {
  public inputTitle!:string;
  public inputarea!:string;
  public inputauthor!:string;
  public posts:IPosts[]=[];
  public hide=false;

  public styl='whit';
public editID!:number;

constructor(private blogService:BlogService){}

ngOnInit(){
  this.getPosts();
}

getPosts():void{
  this.blogService.getAll().subscribe(data=>{
    this.posts=data;
  });
}
addPost():void{
  if (!this.inputTitle && !this.inputarea && !this.inputauthor) {
    this.styl='styleRed';
  }else{
    this.styl='whit';
  const newPost={
    title:this.inputTitle,
    text:this.inputarea,
    author:this.inputauthor,
    imagePath:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg"
  }
  this.blogService.create(newPost).subscribe(()=>{
    this.getPosts();
    this.inputTitle='';
    this.inputarea='';
    this.inputauthor='';
  })
 }
}

deletePost(post:IPosts):void{
this.blogService.delete(post.id).subscribe(()=>{
  this.getPosts();
});
}

editPost(post:IPosts):void{
this.hide=true;
this.inputTitle=post.title;
this.inputarea=post.text;
this.inputauthor=post.author;
this.editID=post.id;
}

savePost():void{
 const updatePost={
    title:this.inputTitle,
    text:this.inputarea,
    author:this.inputauthor,
    imagePath:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg"
 }
 this.blogService.update(updatePost,this.editID).subscribe(()=>{
  this.getPosts();
    this.inputTitle='';
    this.inputarea='';
    this.inputauthor='';
    this.hide=false;
 });
}

}
