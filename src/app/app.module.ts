import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/components/header/header.component';
 import { AssetFormComponent } from './asset-form/asset-form.component';
import { CompanyComponent } from './basic-configuration/company/company.component';
import { DepartmentComponent } from './basic-configuration/department/department.component';
import { AssetCategoryComponent } from './basic-configuration/asset-category/asset-category.component';
import { AddUserComponent } from './UserManagement/add-user/add-user.component';
import { SearchUserComponent } from './UserManagement/search-user/search-user.component';
import { EditUserComponent } from './UserManagement/edit-user/edit-user.component';
import { AddRoleComponent } from './RoleManagement/add-role/add-role.component';
import { SearchRoleComponent } from './RoleManagement/search-role/search-role.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AssetFormComponent,
    CompanyComponent,
    DepartmentComponent,
    AssetCategoryComponent,
    AddUserComponent,
    SearchUserComponent,
    EditUserComponent,
    AddRoleComponent,
    SearchRoleComponent,
    LoginFormComponent,
    SidebarComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
