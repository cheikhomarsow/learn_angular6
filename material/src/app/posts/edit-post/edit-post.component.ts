import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../models/post.models';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  id: String;
  post: any = {};
  updateForm: FormGroup;

  constructor(private postService: PostService, private fb: FormBuilder,
    private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) {
      this.createForm();
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.postService.getPostById(this.id).subscribe(res => {
        this.post = res;
        this.updateForm.get('title').setValue(this.post.title);
        this.updateForm.get('body').setValue(this.post.body);
      });
    });
  }

  updatePost(title, body) {
    this.postService.updatePost(this.id, title, body).subscribe(() => {
      this.snackBar.open('Post updated successfully' , 'OK', {
        duration: 3000
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

}
