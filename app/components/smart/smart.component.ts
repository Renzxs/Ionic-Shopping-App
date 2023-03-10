import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss'],
})
export class SmartComponent  implements OnInit {

  items: any[] = [];

  constructor(public apiServices: ApiService) { }

  ngOnInit() {
    this.items = this.apiServices.getItems();
  }


}
