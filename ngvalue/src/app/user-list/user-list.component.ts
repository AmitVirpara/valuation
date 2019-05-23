import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  loading:boolean = false;
  UserList:any;
  tablelist: any = {
    page: 1,
    pages: 1,
    limit: 2,
    total: 5,
    data: []
  }

  constructor(private datasrv: DataService, private router:Router) { }

  ngOnInit() {
    this.getUserSrvData();
    // this.UserList = this.datasrv.UserList(this.tablelist.page, this.tablelist.limit).data;
  }

  doubleclick(id:number ){
    console.log('dblclick id', id)
    // this.router.navigateByUrl('/amt/user/edit/',id);
    // this.router.navigate(['/amt/user/edit/:userId'], { queryParams: { userId: id } });
    this.router.navigate(['/amt/user/edit'], { queryParams: { userId: id } });
  }
  
  getUsersPreviousData(){
    this.tablelist.page = ( ( this.tablelist.page - 1 ) <= 0 ) ? 1 : ( this.tablelist.page - 1 );
    this.getUserSrvData();
  }
  getUsersNextData(){
    this.tablelist.page = ( this.tablelist.page + 1 ) > this.tablelist.pages ? this.tablelist.page : ( this.tablelist.page + 1 );
    this.getUserSrvData();
  }
  getUserSrvData(){
    this.loading = true;
    this.tablelist = this.datasrv.UserList(this.tablelist);
    console.log('ts ', this.tablelist);
    this.loading = false;
  }
}
