import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'progress', component: ProgressComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]

})
export class DashboardRoutingModule { }
