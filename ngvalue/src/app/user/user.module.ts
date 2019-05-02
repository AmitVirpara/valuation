import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ListviewComponent } from './listview/listview.component';

@NgModule({
  declarations: [UserComponent, ListviewComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
