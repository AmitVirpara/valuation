import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {

  @Input() menuWidth:Number = 0;
  constructor() { }

  ngOnInit() {
  }

}
