import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-df',
  templateUrl: './template-df.component.html',
  styleUrls: ['./template-df.component.css']
})
export class TemplateDFComponent {
  default='default'
  genders=['Male', 'Female']
  @ViewChild('form') form!:NgForm

  submitForm(){
    console.log(this.form);
    this.form.reset()
  }
  
  prePopulate(){
    this.form.setValue({
      gender:"Male",
      role:"FSJS",
      message:"Hello an a Js developer",
      personalDetails:{
        email: "test@gmail.com",
        phone:"072351690",
        username: "John Doe",
      }
    })
    // this.form.form.patchValue({
    //   personalDetails:{
    //         email: "test@gmail.com",
    //         phone:"072351690",
    //         username: "John Doe",
    //       }
    // })
  }
}
