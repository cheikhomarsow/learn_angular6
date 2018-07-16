import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      cpassword: ['', Validators.compose([Validators.required])]
    });
  }

  addUser() {
    if (this.myForm.invalid) {
      return;
    }
    const username = String(this.myForm.controls.username.value);
    const email = String(this.myForm.controls.email.value);
    const gender = String(this.myForm.controls.gender.value);
    const password = String(this.myForm.controls.password.value);

    this.userService.addUser(username, email, gender, password).subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}
