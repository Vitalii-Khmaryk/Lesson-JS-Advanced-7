import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AdminBlogsComponent } from './admin/admin-blogs/admin-blogs.component';

const routes: Routes = [
  {path: '', redirectTo: 'admin/blogs', pathMatch: 'full'},
  {path: 'admin/blogs',component: AdminBlogsComponent},
  {path: 'blog',component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
