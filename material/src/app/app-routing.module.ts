import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { ListPostComponent } from './posts/list-post/list-post.component';

const routes: Routes = [
  { path: '', component: CreatePostComponent },
  { path: 'posts', component: ListPostComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
