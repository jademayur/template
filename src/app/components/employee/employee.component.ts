import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  empForm:FormGroup = new FormGroup({
      name: new FormControl("",[Validators.required]),
      contactno: new FormControl("",[Validators.required]),
      email : new FormControl("",[Validators.required, Validators.email]),
      dept: new FormControl("", [Validators.required]),
      gender : new FormControl("",[Validators.required])
  })

  constructor(){
    
  }
  onSaveEmp(){

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
