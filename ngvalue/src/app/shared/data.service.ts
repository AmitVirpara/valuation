import { Injectable } from '@angular/core';
import { unusedValueExportToPlacateAjd } from '@angular/core/src/render3/interfaces/i18n';
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
  UserList(tablelist:any):any {
    console.log('data, ', tablelist);
    let userData = {
      'total':100,
      'limit': tablelist.limit,
      'page': tablelist.page,
      'pages': tablelist.pages,
      'data': [],
      'data1':[
        {id:1, displayname:'Amit 1', name:'Amit', email: 'amtvirpara@gmail.com'},
        {id:2, displayname:'Amit 2', name:'Amit', email: 'amtvirpara@gmail.com'},
        {id:3, displayname:'Amit 3', name:'Amit', email: 'amtvirpara@gmail.com'},
        {id:4, displayname:'Amit 4', name:'Amit', email: 'amtvirpara@gmail.com'},
        {id:5, displayname:'Amit 5', name:'Amit', email: 'amtvirpara@gmail.com'},
        {id:6, displayname:'Amit 6', name:'Amit', email: 'amtvirpara@gmail.com'},
        {id:7, displayname:'Amit 7', name:'Amit', email: 'amtvirpara@gmail.com'},
        {id:8, displayname:'Amit 8', name:'Amit', email: 'amtvirpara@gmail.com'},
        {id:9, displayname:'Amit 9', name:'Amit', email: 'amtvirpara@gmail.com'},
        {id:10, displayname:'Amit 10', name:'Amit', email: 'amtvirpara@gmail.com'},
      ]
    };
    userData.total = userData.data1.length;
    userData.limit = userData.limit;
    userData.page = userData.page;
    let index=0;
    let pages = userData.total/userData.limit;
    userData.pages = pages;
    console.log('pages', pages);
    userData.page < pages ? pages : userData.page;
    let start = (tablelist.page*tablelist.limit-tablelist.limit) <=0 ? 0 : (tablelist.page*tablelist.limit-tablelist.limit);
    for( let i= start; i< tablelist.limit*tablelist.page; i++ )
    {
      userData.data[index++] = userData.data1[i];
    }
    console.log('final', userData);
    return userData;
  }
}
