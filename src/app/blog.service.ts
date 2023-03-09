import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
private url=environment.BACKEND_URL;
private api={
  posts:`${this.url}/posts`
}
  constructor(private http:HttpClient) { }

getAll():Observable<IPostsResponse[]>{
  return this.http.get<IPostsResponse[]>(this.api.posts);
}

create(post:IPostsRequest):Observable<IPostsResponse>{
return this.http.post<IPostsResponse>(this.api.posts,post);
}
delete(id:number):Observable<void>{
return this.http.delete<void>(`${this.api.posts}/${id}`);
}
update(post:IPostsRequest,id:number):Observable<IPostsResponse>{
return this.http.patch<IPostsResponse>(`${this.api.posts}/${id}`,post);
}

}
export interface IPosts{
  id:number;
  title: string;
  text:string; 
  author: string;
  imagePath:string;
}
export interface IPostsRequest{
  title: string;
  text:string; 
  author: string;
  imagePath:string;
}
export interface IPostsResponse extends IPostsRequest{
  id:number;
}