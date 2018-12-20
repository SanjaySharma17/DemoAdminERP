import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetCategoryComponent } from './asset-category/asset-category.component';
import { CompanyComponent } from './company/company.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  {
    path: 'addassetcategory',
    component: AssetCategoryComponent
  },
  {
    path: 'addcompany',
    component: CompanyComponent
  },
  {
    path: 'adddepartment',
    component: DepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicConfigRoutingModule { }
