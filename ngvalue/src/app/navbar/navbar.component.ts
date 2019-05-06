import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // toggleSideMenuWidth:number = 260;
  @Input() toggleSideMenuWidth: Number = 260;
  @Output() childEventSidemenu = new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout(){
    console.log("Logout");
    this.router.navigateByUrl('/login');
  }
  toggleSideMenu(){
    console.log('toggleSideMenu', this.toggleSideMenuWidth);
    if(this.toggleSideMenuWidth == 260)
      this.toggleSideMenuWidth = 40;
    else 
      this.toggleSideMenuWidth = 260;

    this.childEventSidemenu.emit(this.toggleSideMenuWidth);
  }
}
