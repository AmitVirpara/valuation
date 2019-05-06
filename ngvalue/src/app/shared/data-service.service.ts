import { Injectable } from '@angular/core';
import { User } from './user';
import { UserComponent } from '../user/user.component';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  
  userLogin():any {
    return {displayname:'Amit V', name:'Amit', email: 'amtvirpara@gmail.com'}
  }

  UserCreate():any {    
    return [{name:'amit'}];
  }
  UserDelete():any {
    return true;
  }
  UserList():any {
    return [];
  }

}
