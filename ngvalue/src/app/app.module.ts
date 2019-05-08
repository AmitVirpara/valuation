import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
// import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkboardComponent } from './workboard/workboard.component';
import { LayoutComponent } from './layout/layout.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { ListviewComponent } from './user/listview/listview.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SettingOptionsComponent } from './setting-options/setting-options.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    WorkboardComponent,
    LayoutComponent,
    ListviewComponent,
    SidenavbarComponent,
    UserCreateComponent,
    UserListComponent,
    CustomerCreateComponent,
    CustomerListComponent,
    SettingOptionsComponent,
    UserDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
