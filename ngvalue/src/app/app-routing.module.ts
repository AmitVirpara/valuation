import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { WorkboardComponent } from './workboard/workboard.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { SettingOptionsComponent } from './setting-options/setting-options.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'amt', component: LayoutComponent,
    children:[
      { path: 'work', component: WorkboardComponent},
      { path: 'user/create', component: UserCreateComponent},
      { path: 'user/edit/:id', component: UserCreateComponent},
      { path: 'user/delete/:id', component: UserDeleteComponent},
      { path: 'user/list', component: UserListComponent},
      { path: 'customer/create', component: CustomerCreateComponent},
      { path: 'settings', component: SettingOptionsComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
