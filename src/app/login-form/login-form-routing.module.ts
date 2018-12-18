import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetFormComponent } from '../asset-form/asset-form.component';


const routes: Routes = [
    {
        path: '', component: AssetFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {
}
