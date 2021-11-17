import { ArrayType } from '@angular/compiler';
import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor( private activerouter:ActivatedRoute,
    private dataservice:DataService) { }

    catData:any;

    ngOnInit(): void {
    this.dataservice.getCat().subscribe(
      (data)=>{this.catData=data}
    )
    // this.activerouter.params
  }

}
