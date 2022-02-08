import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './registervalidation';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm=new FormGroup({
    fname:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
    uname:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$")]),
    uemail:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    upass:new FormControl("",[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]),
    cpass:new FormControl("",[Validators.required])
    },
    CustomValidators.mustMatch('upass','cpass'))
    get fname(){
      return this.regForm.get('fname')
    }
    get uname(){
      return this.regForm.get('uname')
    }
    get uemail(){
      return this.regForm.get('uemail')
    }
    get upass(){
      return this.regForm.get('upass')
    }
    get cpass(){
      return this.regForm.get('cpass')
    }
    signup(){
      console.log(this.regForm.value)
      localStorage.setItem('email',JSON.stringify(this.regForm.value.uemail))
      localStorage.setItem('Password',this.regForm.value.upass)
    }
  constructor() { }

  ngOnInit(): void {
  }

}
