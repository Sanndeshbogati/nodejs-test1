import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  id_!:number
  catData:any;

  constructor( private dataservice:DataService,
    private router:Router) { }

  ngOnInit(): void {
    this.dataservice.getCat().subscribe(
      (data) => {this.catData=data}
    )
  }
onSelect(i:any){
  this.id_= i.id
  this.router.navigate(['products',i.id])
}
}
