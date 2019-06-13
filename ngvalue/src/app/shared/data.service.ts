import { Injectable } from '@angular/core';
import { unusedValueExportToPlacateAjd } from '@angular/core/src/render3/interfaces/i18n';
// import { HttpClient } from 'selenium-webdriver/http';
// import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import { Observer, Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })//"Access-Control-Allow-Origin": "*"
};
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost/laravalue/public/api/';
  

  constructor(
    private http: HttpClient
    ) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`DataService: ${message}`);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  userLogin( userdata ): Observable <any> {
    // this.http.
    return this.http.get<any>(this.apiUrl+'test')
    .pipe(
      catchError(this.handleError<any>('userLogin'))
    );
  } 
  // {
    // return {displayname:'Amit V', name:'Amit', email: 'amtvirpara@gmail.com'}
  // }

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
