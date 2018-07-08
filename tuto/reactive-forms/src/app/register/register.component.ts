import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordFormGroup: FormGroup
  myForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.passwordFormGroup = this.fb.group({
      password: '',
      cpassword: ''
    })

    this.myForm = this.fb.group({
      username: '',
      email: '',
      passwords: this.passwordFormGroup
    })
  }

}

