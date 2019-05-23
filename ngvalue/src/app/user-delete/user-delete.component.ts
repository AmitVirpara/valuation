import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  userId: Number;
  userdata: any;
  constructor(private router: Router, private activeRouter: ActivatedRoute, private dataservice: DataService) { }

  ngOnInit() {
    this.activeRouter.queryParams.subscribe(params => {
      console.log('Subscribe params', params);
      this.userId = params['userId'];
      this.userdata = this.dataservice.userDetails(this.userId);
    })
  }

  yesUsersDelete(){
    this.router.navigate(['/amt/user/list'], { queryParams: { } });
  }

  cancelDelete(){
    this.router.navigate(['/amt/user/list'], { queryParams: { } });
  }

}
