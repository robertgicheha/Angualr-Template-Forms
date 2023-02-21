import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  genders=['Male', 'Female']
  default="default"
  form!:FormGroup
  usernames=['JaneDoe', 'JohnDoe', 'Anonymous', 'Test']
  emails=['JaneDoe@gmail.com', 'JohnDoe.@gmail.com', 'Anonymous.@gmail.com', 'Test.@gmail.com']
  ngOnInit(): void {
    this.form= new FormGroup({
    personalDetails:new FormGroup({
      username:new FormControl(null,[Validators.required,this.unAllowedUsernames.bind(this)]),
      email:new FormControl(null,[Validators.required, Validators.email], [(this.checkExistingEmails.bind(this) as AsyncValidatorFn)]),
      phone:new FormControl(null,[Validators.required]),
    }),
    role:new FormControl('default',[Validators.required]),
    message:new FormControl(null,[Validators.required]),
    gender:new FormControl('Male',[Validators.required]),
    hobbies:new FormArray([])
    })
  }

  submitData(){
    console.log(this.form);
    
  }

  AddNewHobby(){
    let control =new FormControl(null, [Validators.required]);
    (this.form.get('hobbies') as FormArray).push(control)
  }

  getControls(){
    return (this.form.get('hobbies') as FormArray).controls
  }
  removeCOntrol(i:number){
    (this.form.get('hobbies') as FormArray).removeAt(i)
  }

  unAllowedUsernames(control:FormControl): {[s:string]:boolean} | null{
    if(this.usernames.indexOf(control.value)!== -1){
      return {forbiddenName:true}
    }
    return null
  }


  checkExistingEmails(control:FormControl):Promise<{[s:string]:boolean} |null> | 
  Observable<{[s:string]:boolean} |null>{
    
    const promise = new Promise<{[s:string]:boolean} |null>((resolve,reject)=>{
     setTimeout(()=>{
      if(this.emails.indexOf(control.value)!== -1){
        resolve({emailFound:true})
      }else{
        resolve(null)
      }
     },2000)
    })
    return promise
  }

}
