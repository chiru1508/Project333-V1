import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  constructor() { }

  ngOnInit(): void 
  {
    throw new Error('Method not implemented.');
  }
  
  loginForm = new FormGroup(
  {
    email: new FormControl("",[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)]),
    pass:new FormControl("",[Validators.required,Validators.minLength(6)])
  })

  get email()
  {
    return this.loginForm.get('email')
  }

  get pass()
  {
    return this.loginForm.get('pass')
  }

  sign()
  {
    console.log(this.loginForm.value)
    localStorage.setItem("Email",this.loginForm.value.email)
    localStorage.setItem("Password",this.loginForm.value.pass)
  }

}