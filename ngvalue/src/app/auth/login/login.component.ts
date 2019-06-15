import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Ng Value';
  login_msg: string = null;
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

  constructor(private frmBuilder: FormBuilder, private route:Router, private datasrv: DataService) { }

  ngOnInit() {

    this.frmGrpLogin = this.frmBuilder.group({
      name : ['', [ Validators.required, Validators.minLength(4) ] ],
      password : ['', [ Validators.required, Validators.minLength(4) ] ],
    }
    );
  }

  onSubmit(){
    console.log('form submit', this.frmGrpLogin);
    let user = this.datasrv.userLogin( this.frmGrpLogin.value );
    console.log('user is ', user );
    user.subscribe( xuser => {
        console.log(' subscribe ', JSON.stringify(xuser));
        if(xuser.login) {
          this.route.navigateByUrl('amt/work');
        } else {
          console.log(' Login false ')
          this.login_msg = 'Please check your email / password.'
        }
      },
      error => {
        console.log(' subscribe error ', error );
      }
    )
  }
}
