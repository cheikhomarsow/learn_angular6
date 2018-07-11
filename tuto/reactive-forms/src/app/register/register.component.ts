import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup
  passwordFormGroup: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.passwordFormGroup = this.formBuilder.group({
      password: '',
      cpassword: ''
    })

    this.myForm = this.formBuilder.group({
      username: '',
      email: '',
      gender: '',
      passwords: this.passwordFormGroup
    })
  }

}
