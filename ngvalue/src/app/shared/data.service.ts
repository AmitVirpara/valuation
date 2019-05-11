import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
// import { Observable } from 'rxjs';
// import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'api/heroes';
  constructor(
    // private http: HttpClient
    ) { }

  userLogin():any {
    return {displayname:'Amit V', name:'Amit', email: 'amtvirpara@gmail.com'}
  }

  UserCreate():any {    
    return [{name:'amit'}];
  }
  userDetails(id: Number):any {
    console.log('userDetails', id);
    return {id:1, displayname:'Amit 1', name:'Amit', password:'mypass', cpassword:'', email: 'amtvirpara@gmail.com'};
  }
  UserDelete():any {
    return true;
  }
  UserList():any {
    return {
        'total':100,
        'limit':2,
        'page':2,
        'data':[
          {id:1, displayname:'Amit 1', name:'Amit', email: 'amtvirpara@gmail.com'},
          {id:2, displayname:'Amit 2', name:'Amit', email: 'amtvirpara@gmail.com'},
          {id:2, displayname:'Amit 3', name:'Amit', email: 'amtvirpara@gmail.com'},
          {id:2, displayname:'Amit 4', name:'Amit', email: 'amtvirpara@gmail.com'},
          {id:2, displayname:'Amit 5', name:'Amit', email: 'amtvirpara@gmail.com'},
          {id:2, displayname:'Amit 6', name:'Amit', email: 'amtvirpara@gmail.com'},
          {id:2, displayname:'Amit 7', name:'Amit', email: 'amtvirpara@gmail.com'},
          {id:2, displayname:'Amit 8', name:'Amit', email: 'amtvirpara@gmail.com'},
          {id:2, displayname:'Amit 9', name:'Amit', email: 'amtvirpara@gmail.com'},
        ]
      };
  }
}
