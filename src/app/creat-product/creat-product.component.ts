import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-creat-product',
  templateUrl: './creat-product.component.html',
  styleUrls: ['./creat-product.component.css']
})
export class CreatProductComponent implements OnInit {

  constructor( private dataservic :DataService) { }
  addProduct = new FormGroup({
    category:new FormControl(""),
    catid:new FormControl(""),
    prid:new FormControl(""),
    product: new FormControl("")
  })

  ngOnInit(): void {
  }
  collectProduct(){
    console.log(this.addProduct.value)
    this.dataservic.saveProduct(this.addProduct.value).subscribe(
      (result)=>{console.log(result)})

  }
}
