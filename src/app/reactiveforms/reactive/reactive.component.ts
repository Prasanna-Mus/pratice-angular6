import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit{

// registrationForm = new FormGroup({
//  userName : new FormControl(''),
//  password: new FormControl(''),
//  conformpassword:new FormControl('')
// });

  constructor(private myfb:FormBuilder){
      var registrationForm = this.myfb.group({
      userName :[''],
      password: [''],
      conformpassword:['']
      });
  }
  ngOnInit(): void {
    
  }
  Submit(){
    alert('Data entire sccessfullly');
  }
}
