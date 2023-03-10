import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainAppPage } from './main-app.page';

const routes: Routes = [
  {
    path: '',
    component: MainAppPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainAppPageRoutingModule {}
