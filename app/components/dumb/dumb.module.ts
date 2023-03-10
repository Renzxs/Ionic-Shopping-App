import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductsPageRoutingModule } from 'src/app/main-app/products/products-routing.module';
import { DumbComponent } from './dumb.component';



@NgModule({
  declarations: [DumbComponent],
  imports: [
    CommonModule,
    IonicModule,
    ProductsPageRoutingModule
  ],
  exports: [DumbComponent]
})
export class DumbModule { }
