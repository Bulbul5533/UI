import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../db-service.service';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent {
  productID: any
  var_produDetails: any
  constructor(public conservice: DbServiceService) { }
  ngOnInit() {
    this.productID = this.conservice.rtnData()
    this.conservice.findProduct(this.productID).subscribe((RtnProduct: any) => {

      this.var_produDetails = RtnProduct[0]
      console.log(this.var_produDetails)
    })
  }


}
