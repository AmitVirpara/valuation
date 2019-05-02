import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { WorkboardComponent } from './workboard/workboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: LayoutComponent,
    children:[
      { path: 'work', component: WorkboardComponent},
      // { path: 'work', component: WorkboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
