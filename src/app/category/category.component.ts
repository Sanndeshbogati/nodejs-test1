import { ArrayType } from '@angular/compiler';
import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor( private activerouter:ActivatedRoute,
    private route:Router,
    private dataservice:DataService) { }

    catData:any;
    id_:any;

    ngOnInit(): void {
    this.dataservice.getCat().subscribe(
      (data)=>{this.catData=data}
    )
    // this.activerouter.params
  }
  onSelect(i:any)
{
  this.id_= i.catid
  this.route.navigate(['product-list/:id',i.cat])
}

}
