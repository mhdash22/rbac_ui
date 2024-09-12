import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BaseDashboardComponent } from './base-dashboard/base-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddLabelComponent } from './admin-dashboard/add-label/add-label.component';
import { AssignLabelComponent } from './base-dashboard/assign-label/assign-label.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BaseDashboardComponent,
    AdminDashboardComponent,
    AddLabelComponent,
    AssignLabelComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
