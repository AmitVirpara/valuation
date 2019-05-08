import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  UserList:any;
  constructor(private datasrv: DataService, private router:Router) { }

  ngOnInit() {
    this.UserList = this.datasrv.UserList().data;
  }

  doubleclick(id){
    console.log('dblclick id', id)
    // this.router.navigateByUrl('/amt/user/edit/',id);
    this.router.navigate(['/amt/user/edit/:userId'], { queryParams: { userId: id } });
  }
}
