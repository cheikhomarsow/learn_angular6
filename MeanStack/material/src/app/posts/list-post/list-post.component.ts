import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.models';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  posts: Post[] = [
    {
      title: 'Title 1',
      body: 'Content 1'
    },
    {
      title: 'Title 1',
      body: 'Content 1'
    },
    {
      title: 'Title 1',
      body: 'Content 1'
    },
    {
      title: 'Title 1',
      body: 'Content 1'
    },
    {
      title: 'Title 1',
      body: 'Content 1'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
