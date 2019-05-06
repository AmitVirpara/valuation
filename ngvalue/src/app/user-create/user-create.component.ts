import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  frmGrpLogin: FormGroup;
  userlogin:any = {
    displayname:'',
    name:'',
    email:'',
    password:'',
    cpassword:''
  };

  get frmgrplogin() { return this.frmGrpLogin; }
  get displayname() { return this.frmGrpLogin.controls.displayname; }
  get name() { return this.frmGrpLogin.controls.name; }
  get email() { return this.userlogin.email; }
  get password() { return this.frmGrpLogin.controls.password; }
  get cpassword() { return this.frmGrpLogin.controls.cpassword; }
  constructor(private frmBuilder: FormBuilder, private route:Router) { }

  ngOnInit() {
    this.frmGrpLogin = this.frmBuilder.group({
      displayname : ['', [ Validators.required, Validators.minLength(4) ] ],
      name : ['', [ Validators.required, Validators.minLength(4) ] ],
      password : ['', [ Validators.required, Validators.minLength(4) ] ],
      cpassword : ['', [ Validators.required, Validators.minLength(4) ] ],
    }
    );
  }

  onSubmit(){
    console.log('create user form submit', this.frmGrpLogin)
   // this.route.navigateByUrl('amt/work');
  }
  
  txttypepassword = 'password';
  passwordToggle() {
    if ( this.txttypepassword == 'password' )
    {
      this.txttypepassword = 'text';
    } else {
      this.txttypepassword = 'password';
    }
  }
  txttypecpassword = 'password';
  cpasswordToggle() {
    if ( this.txttypecpassword == 'password' )
    {
      this.txttypecpassword = 'text';
    } else {
      this.txttypecpassword = 'password';
    }
  }

}
