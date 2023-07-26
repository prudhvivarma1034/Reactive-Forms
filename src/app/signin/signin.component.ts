import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup ;
  savedata: any;
  constructor(private router:Router) {
    this.myForm = new  FormGroup({
      email:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern("^[a-zA-Z]*$")]),
      password:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
   })
   }
   
  
  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if(localData !=null){
      this.savedata = JSON.parse(localData)
    }
    
  }

  onLogin(){
    const loginObj={
      email:this.myForm.value.email,
      password:this.myForm.value.password
    }
    const isUserExist =this.savedata.find((m:any) => m.email == loginObj.email && m.password == loginObj.password)
   if(isUserExist !=undefined){
    alert("User login Sucessfully");
    this.router.navigate(['/dashboard']);
   }else{
    alert("Wrong Credentials");
   }
  }


}
