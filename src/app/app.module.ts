import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/components/header/header.component';
 import { AssetFormComponent } from './asset-form/asset-form.component';
import { CompanyComponent } from './basic-configuration/company/company.component';
import { DepartmentComponent } from './basic-configuration/department/department.component';
import { AssetCategoryComponent } from './basic-configuration/asset-category/asset-category.component';
import { AddUserComponent } from './UserManagement/add-user/add-user.component';
import { SearchUserComponent } from './UserManagement/search-user/search-user.component';
import { EditUserComponent } from './UserManagement/edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule.forRoot(),
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
