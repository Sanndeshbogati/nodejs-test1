import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor( private dataservice : DataService,
      private activateroute:ActivatedRoute) { }

  updateProduct = new FormGroup({
    cat:new FormControl(""),
    catid:new FormControl(""),
    prid:new FormControl(""),
    product:new FormControl(""),
  })
  _id:any;
  ngOnInit(): void {
    this.activateroute.params.subscribe(
      (para) =>{this._id=para['id']})
    console.log(this._id)
  }
upProduct(){
console.log(this.updateProduct.value)
this.dataservice.updateProduct_md(this._id,this.updateProduct.value).
subscribe(
  (result)=>{console.log(result)})

}
}
