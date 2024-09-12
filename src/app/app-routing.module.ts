import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './shared/full-layout/full-layout.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) }, 
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },     
  {
    path:'',
    component:FullLayoutComponent,
    data:{
      title:'Home',
    },
    children:[
      { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) }
    ],
    canActivate: [AuthGuard]
  }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
