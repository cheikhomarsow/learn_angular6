import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.models';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService
      .getPosts()
      .subscribe((data: Post[]) => {
        this.posts = data;
      });
  }

  editPost(id) {
    this.router.navigate([`edit/${id}`]);
  }

  deletePost(id) {
    this.postService.deletePost(id).subscribe(() => {
      this.fetchPosts();
    });
  }

}
