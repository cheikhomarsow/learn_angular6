import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private postsService: PostsService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', Validators.compose([ Validators.required ])],
      body: ['', Validators.compose([Validators.required])]
    });
  }

  onAddPost() {
    console.log(this.myForm);
    if (this.myForm.invalid) {
      return;
    }

    this.postsService.addPost(this.myForm.controls.title.value , this.myForm.controls.body.value);
    this.myForm.reset();
  }

}
