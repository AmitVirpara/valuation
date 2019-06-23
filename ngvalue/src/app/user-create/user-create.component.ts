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

  title: String = 'Create';
  userId: Number;
  frmGrpUser: FormGroup;
  userlogin:any = {
    displayname:'',
    name:'',
    email:'',
    password:'',
    cpassword:''
  };

  get frmgrpuser() { return this.frmGrpUser; }
  get displayname() { return this.frmGrpUser.controls.displayname; }
  get name() { return this.frmGrpUser.controls.name; }
  get email() { return this.frmGrpUser.controls.email ; } //return this.userlogin.email; }
  get password() { return this.frmGrpUser.controls.password; }
  get cpassword() { return this.frmGrpUser.controls.cpassword; }
  constructor(private frmBuilder: FormBuilder, private route:Router, private activeRouter: ActivatedRoute, private dataservice: DataService) {

   }

  ngOnInit() {
    this.frmGrpUser = this.frmBuilder.group({
      displayname : ['', [ Validators.required, Validators.minLength(4) ] ],
      email : ['', [ Validators.required, Validators.minLength(4) ] ],
      password : ['', [ Validators.required, Validators.minLength(4), compairPassword ] ],
      cpassword : ['', Validators.compose([ Validators.required, Validators.minLength(4), compairPassword ]) ],
    }
    );

    this.frmGrpUser.controls.password.valueChanges.subscribe(
      x=>this.frmGrpUser.controls.cpassword.updateValueAndValidity()
    );
    this.activeRouter.queryParams.subscribe(params => {
      console.log('Subscribe params', params);
      this.userId = params['userId'];
      if(this.userId > 0 ){
        this.title = 'Edit';
        
        this.dataservice.userDetails(this.userId).subscribe( edituser => {
          console.log(' subscribe ', JSON.stringify(edituser));
          if(edituser.result) {
            this.userlogin = edituser.data;
            console.log('user ', this.userlogin);
            this.frmGrpUser.controls.displayname.setValue(this.userlogin.name);
            this.frmGrpUser.controls.email.setValue(this.userlogin.email);
            // this.frmGrpUser.controls.password.setValue(this.userlogin.password);
          } else {
            console.log(' user list false ', edituser)
          }
        },
        error => {
          console.log(' subscribe error ', error );
        });

      } 


      


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
    console.log((this.frmGrpUser.controls.cpassword.errors) )
  }
  onSubmit(){
    if(this.userId > 0 && this.userId != null ) {
      //update
      var reqData = this.frmGrpUser.value;
      reqData.id = this.userId;
      this.dataservice.userEdit(reqData).subscribe( udata => {
        console.log('update user data ', udata);
      })
    } else {
      //create
      this.dataservice.userCreate(this.frmGrpUser.value).subscribe( udata => {
        console.log('create user data ', udata);
      })
    }
    console.log('create user form submit', this.frmGrpUser)
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
