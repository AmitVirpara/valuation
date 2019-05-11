import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';
import { compairPassword } from '../shared/validator';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  userId: Number;
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
  constructor(private frmBuilder: FormBuilder, private route:Router, private activeRouter: ActivatedRoute, private dataservice: DataService) {

   }

  ngOnInit() {
    this.frmGrpLogin = this.frmBuilder.group({
      displayname : ['', [ Validators.required, Validators.minLength(4) ] ],
      name : ['', [ Validators.required, Validators.minLength(4) ] ],
      password : ['', [ Validators.required, Validators.minLength(4), compairPassword ] ],
      cpassword : ['', Validators.compose([ Validators.required, Validators.minLength(4), compairPassword ]) ],
    }
    );

    this.frmGrpLogin.controls.password.valueChanges.subscribe(
      x=>this.frmGrpLogin.controls.cpassword.updateValueAndValidity()
    );
    this.activeRouter.queryParams.subscribe(params => {
      console.log('Subscribe params', params);
      this.userId = params['userId'];
      this.userlogin = this.dataservice.userDetails(this.userId);
      console.log('user ', this.userlogin);
      this.frmGrpLogin.controls.displayname.setValue(this.userlogin.displayname);
      this.frmGrpLogin.controls.name.setValue(this.userlogin.email);
      this.frmGrpLogin.controls.password.setValue(this.userlogin.password);
    })
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.cpassword.value;
    group.controls.cpassword.errors.notSame = pass === confirmPass ? null : true;
    // return pass === confirmPass ? null : { notSame: true }     
    return true;
  }
  logs(){
    console.log((this.frmGrpLogin.controls.cpassword.errors) )
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
