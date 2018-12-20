import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRoutingModule } from './assets-routing.module';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { AssetListComponent } from './asset-list/asset-list.component';

@NgModule({
  declarations: [AddAssetComponent, AssetListComponent],
  imports: [
    CommonModule,
    AssetsRoutingModule
  ]
})
export class AssetsModule { }