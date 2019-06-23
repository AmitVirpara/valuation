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
    current_page: 1,
    from: 1,
    last_page:1,
    first_page_url:'',
    last_page_url:'',
    next_page_url:'',
    path:'',
    per_page: 10,
    prev_page_url:'',
    to:1,
    total: 5,
    data: [],
    page: 1 // for send to api
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
    // this.datasrv.getUserList(this.tablelist).subscribe( xuser => {
    //   console.log(' subscribe ', JSON.stringify(xuser));
    //   if(xuser.result) {
    //     delete xuser.result;
    //     this.tablelist = xuser.data;
    //     console.log(' table list', this.tablelist)
    //   } else {
    //     console.log(' user list false ', xuser)
    //   }
    // },
    // error => {
    //   console.log(' subscribe error ', error );
    // }
  }
  
  getUsersPreviousData(){
    this.tablelist.page = ( ( this.tablelist.current_page - 1 ) <= 0 ) ? 1 : ( this.tablelist.current_page - 1 );
    this.getUserSrvData();
  }
  getUsersNextData(){
    this.tablelist.page = ( this.tablelist.current_page + 1 ) > this.tablelist.last_page ? this.tablelist.current_page : ( this.tablelist.current_page + 1 );
    this.getUserSrvData();
  }
  getUserSrvData(){
    this.loading = true;
    // this.tablelist = this.datasrv.UserList(this.tablelist);
    
    this.datasrv.getUserList(this.tablelist).subscribe( xuser => {
      console.log(' subscribe ', JSON.stringify(xuser));
      if(xuser.result) {
        delete xuser.result;
        this.tablelist = xuser.data;
        console.log(' table list', this.tablelist)
      } else {
        console.log(' user list false ', xuser)
      }
    },
    error => {
      console.log(' subscribe error ', error );
    }
  )
    console.log('ts ', this.tablelist);
    this.loading = false;
  }
}
