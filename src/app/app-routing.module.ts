import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetFormComponent } from './asset-form/asset-form.component';

const routes: Routes = [  
  // {path: 'user', component : UserListComponent},
  // {path: 'login', component : LoginComponent},
  // {path: 'list', component : ListEmployeesComponent, resolve : { empList :  EmployeeListResolverService}},
  // {path : 'edit/:id' , component : CreateEmployeeComponent, canDeactivate: [CreateEmployeeCanDeactivateGaurdService]},
  // {path: 'employees/:id', component : EmployeeDetailComponent,
  //  canActivate : [EmployeeGuardService]},
  // {path : '', redirectTo: '/login', pathMatch: 'full'},
  // {path : 'notfound' , component: PageNotFoundComponent}
   { path: '', loadChildren: './layout/layout.module#LayoutModule' },
   { path: 'login', loadChildren: './login-form/login.module#LoginModule' },
   {path: 'AddAsset', component : AssetFormComponent},
   { path: '**', redirectTo: 'not-found' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
