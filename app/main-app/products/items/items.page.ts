import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  item: any;

  constructor(private route: ActivatedRoute, public apiservice: ApiService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.item = this.apiservice.getItemID(id);
  }

}
