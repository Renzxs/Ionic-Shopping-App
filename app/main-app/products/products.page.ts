import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  items: any[] = [];

  constructor(public apiServices: ApiService) { }

  ngOnInit() {
    this.items = this.apiServices.getItems();
  }

}
