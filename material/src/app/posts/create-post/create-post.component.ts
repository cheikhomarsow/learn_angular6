import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      body: ['', Validators.compose([Validators.required])]
    });
  }

  addPost() {
    if (this.myForm.invalid) {
      return;
    }
    const title = String(this.myForm.controls.title.value);
    const body = String(this.myForm.controls.body.value);

    console.log(title, body);

    this.postService.addPost(title, body).subscribe(() => {
      this.router.navigate(['/posts']);
    });
  }

}
