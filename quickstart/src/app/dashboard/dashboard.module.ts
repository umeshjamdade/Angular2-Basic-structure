import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeModule } from './home/home.module';
import { ProgressModule } from './progress/progress.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HomeModule,
    ProgressModule
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
