import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbServiceService } from '../db-service.service';

@Component({
  selector: 'app-uihome',
  templateUrl: './uihome.component.html',
  styleUrls: ['./uihome.component.css']
})
export class UIHomeComponent implements OnInit {
  var_product: any
  SearchedTxt: string = ''
  filteredtxt: string = ''
  shoptocarditems: any = []
  productID!: number
  constructor(public conservice: DbServiceService, public router: Router) { }

  ngOnInit(): void {
    this.conservice.collectDbData().subscribe((Rtn_Product: any) => {
      this.var_product = Rtn_Product
      console.log(this.var_product);
    })
  }
  Notify(product: any) {
    var Customer_Mail_ID = prompt("Please enter your Mail id")

    const atpostion = Customer_Mail_ID?.indexOf("@")
    if (Customer_Mail_ID === null || Customer_Mail_ID === "") {
      alert("Please enter the Mail ID")
    }
    else {
      console.log(product)
      console.log(Customer_Mail_ID)

    }
  }
  Addtocart(data: any) {
    if (data === "" || data === null) {
      alert("Click on show details")
    }
    else {
      this.productID = data.ProductId
      console.log('pid', this.productID)
      this.conservice.Storedata(this.productID)
      this.router.navigate(['ShowProduct'])
    }
  }

  returnAllProductcount() {
    return this.var_product.length
  }

  returnMobileCount() {
    return this.var_product.filter((Mobile: any) => Mobile.SubCategory == 'Mobile').length

  }
  returnHeadPhoneCount() {
    return this.var_product.filter((Headphone: any) => Headphone.SubCategory == 'HeadPhone').length
  }
  returnPowerbankCount() {
    return this.var_product.filter((Bank: any) => Bank.SubCategory == 'Powerbank').length
  }

  SearchEvent(data1: string) {
    this.SearchedTxt = data1
  }

  filteredtextevent(data: string) {
    this.filteredtxt = data
  }
  watchingvalues() {
    return this.shoptocarditems.length
  }
  ShowProduct(product: any) {

  }

}
