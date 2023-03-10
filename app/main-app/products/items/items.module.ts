import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsPageRoutingModule } from './items-routing.module';

import { ItemsPage } from './items.page';
import { DumbModule } from 'src/app/components/dumb/dumb.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsPageRoutingModule,
    DumbModule
  ],
  declarations: [ItemsPage]
})
export class ItemsPageModule {}
