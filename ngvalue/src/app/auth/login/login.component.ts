import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from './../../shared/data-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Ng Value';
  frmGrpLogin: FormGroup;
  userlogin:any = {
    name:'',
    email:'',
    password:''
  };

  get frmgrplogin() { return this.frmGrpLogin; }
  get name() { return this.frmGrpLogin.controls.name; }
  get email() { return this.userlogin.email; }
  get password() { return this.frmGrpLogin.controls.password; }

  constructor(private frmBuilder: FormBuilder, private route:Router, private datasrv: DataServiceService) { }

  ngOnInit() {

    this.frmGrpLogin = this.frmBuilder.group({
      name : ['', [ Validators.required, Validators.minLength(4) ] ],
      password : ['', [ Validators.required, Validators.minLength(4) ] ],
    }
    );
  }

  onSubmit(){
    console.log('form submit', this.frmGrpLogin)
    this.route.navigateByUrl('amt/work');
  }
}
