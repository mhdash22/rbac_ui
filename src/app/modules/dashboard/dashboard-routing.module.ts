import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BaseDashboardComponent } from './base-dashboard/base-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  { 
    path: '', component: DashboardComponent,
    children:[
      {
        path:'',component:BaseDashboardComponent
      },
      { 
        path: 'base',component:BaseDashboardComponent  
      },
      {
        path:'admin', component:AdminDashboardComponent
      }
    ],canActivate: [AuthGuard]

  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
