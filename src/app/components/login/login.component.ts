import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    email : new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",[Validators.required])

  })



  onLogin() {
    
    const formValue= this.loginForm.value
    debugger
  }

}
