import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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
