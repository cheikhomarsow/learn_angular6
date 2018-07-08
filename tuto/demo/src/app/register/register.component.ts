import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators, AbstractControl} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  myForm: FormGroup
  passwordFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.passwordFormGroup = this.fb.group({
      password1: ["", Validators.compose([Validators.required])],
      password2: ["", Validators.compose([Validators.required])],
    }, {validator: this.passwordConfirming});

    this.myForm = this.fb.group({
      username: [ "" , Validators.compose([Validators.required, Validators.minLength(3)])],
      email: [ "", Validators.compose([Validators.required, this.emailValidator])],
      passwords: this.passwordFormGroup
    });
  }


  

  emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
    let res = null;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(control.value).toLowerCase())) {
      return { invalid: true }
    }
  }

  passwordConfirming(control: AbstractControl): { invalid: boolean } {
    
    if(control.get('password1').value.length < 6) {
      return Object({ 'short': true });
    }

    // does it contain at least one capital letter
     if ( !( (/[A-Z]/g).test(control.get('password1').value ) ) ) {
      return Object({ 'nocapital': true });
    }

    // does it contain at least one number
     if( ( !(/[0-9]/g).test(control.get('password1').value ) ) ) {
      return Object({ 'nodigit': true });
    }
    
    
    if (control.get('password1').value !== control.get('password2').value && control.get('password2').value.length > 0) {
        return Object({invalid: true});
    }
  
}



 

}
