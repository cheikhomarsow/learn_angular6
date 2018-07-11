import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      title: 'First Post',
      content: 'Content of the First Post'
    },
    {
      title: 'Second Post',
      content: 'Content of the Second Post'
    },
    {
      title: 'Third Post',
      content: 'Content of the Third Post'
    },
    {
      title: 'Fourth Post',
      content: 'Content of the Fourth Post'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
