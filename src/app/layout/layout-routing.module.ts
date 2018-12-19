import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            { path: 'role', loadChildren: '../role-management/role-management.module#RoleManagementModule' },
            // { path: '', loadChildren: '' },
            // { path: '', loadChildren: '' },
            // { path: '', loadChildren: '' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
