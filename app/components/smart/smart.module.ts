import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductsPageRoutingModule } from 'src/app/main-app/products/products-routing.module';
import { SmartComponent } from './smart.component';



@NgModule({
  declarations: [SmartComponent],
  imports: [
    CommonModule,
    IonicModule,
    ProductsPageRoutingModule
  ],
  exports: [SmartComponent]
})
export class SmartModule { }
