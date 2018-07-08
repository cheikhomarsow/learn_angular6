import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators, AbstractControl} from '@angular/forms'

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
      password: ['', Validators.required],
      cpassword: ['', Validators.required] 
    }, {validator: this.passwordConfirming})

    this.myForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, this.usernameValidator])],
      email: ['', Validators.compose([Validators.required, this.emailValidator])],
      gender: ['default', Validators.compose([Validators.required, this.genderValidator])],
      passwords: this.passwordFormGroup
    })

    console.log(this.myForm)

  }

  usernameValidator(control: AbstractControl): { invalid : boolean } | null {
    let username = control.value
    let regexp = RegExp('^[a-z0-9_-]{3,15}$')

    if(!regexp.test(username)){
      console.log(control.invalid)
      return { invalid : true }
    }
  }

  emailValidator(control: AbstractControl): { invalid : boolean } | null {
    let email = control.value
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regexp.test(String(email).toLowerCase())) {
      return { invalid: true }
    }
  }

  genderValidator(control: AbstractControl): { invalid : boolean } | null {
    let gender = control.value
    if(gender == 'default'){
      return { invalid : true }
    }else{
      if( gender != 'male' && gender != 'female'){
        return { invalid : true }
      }
    }
  }

  passwordConfirming(control: AbstractControl):  { [key: string]: boolean } | null {
    
    let password = control.get('password').value
    let cpassword = control.get('cpassword').value

    if(password.length < 6) {
      return { 'short': true };
    }

    // does it contain at least one capital letter
     if ( !( (/[A-Z]/g).test(password) ) ) {
      return { 'nocapital': true };
    }

    // does it contain at least one number
     if( ( !(/[0-9]/g).test(password) ) ) {
      return { 'nodigit': true };
    }
    
    
    if (password !== cpassword && cpassword.length > 0) {
      return { 'invalid' : true };
    }
  
  }

}
