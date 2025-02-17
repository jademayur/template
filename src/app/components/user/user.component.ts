import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

   userForm:FormGroup = new FormGroup({
        name: new FormControl("",[Validators.required]),
        mobile: new FormControl("",[Validators.required]),
        email : new FormControl("",[Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required]),
        role: new FormControl("", [Validators.required]),
        gender : new FormControl("",[Validators.required])
    })

    onSaveUser(){

    }

    openModel()
    {
      const model = document.getElementById("myModal");
      if(model != null)
      {
        model.style.display = "block"
      }
    }

    closeModel()
    {
      const model = document.getElementById("myModal");
      if(model != null)
      {
        model.style.display = "none"
      }
    }
}
