import { Component,OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  userModel =new User('prasanna','prasanna@gmail.com',1234412113,'female','default',true);
  // flagvariable
  public courseHadError =true;
  ImagePath:string;

   course = ['Angular','vue','bootstrap','javascript','MangoDB'];

  constructor(){
this.ImagePath='/assets/logo.png';
}

validateCourse(value:any){
  if(value === "default"){
    this.courseHadError =true;
  }
  else{
    this.courseHadError =false;
  }
}
onSubmit(myForm:any){
  console.log(this.userModel);
  console.log("submittedForm",myForm);
}
onSubmit1(){
  console.log(alert('sccess'));
}
}
