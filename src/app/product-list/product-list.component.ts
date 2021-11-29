import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,
    private dataservice:DataService) { }

  category_id_param:any;
  products:any;

  ngOnInit(): void {

    this.dataservice.getCat().subscribe(
      (data) => {this.products=(data);
           console.log(data)})

    this.activatedroute.params.subscribe(
      (para) => {this.category_id_param=para['id']}
    )

    console.log(this.products)

  }


}
