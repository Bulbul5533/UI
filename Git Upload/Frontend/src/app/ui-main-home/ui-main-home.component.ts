import { Component } from '@angular/core';
import { DbServiceService } from '../db-service.service';

@Component({
  selector: 'app-ui-main-home',
  templateUrl: './ui-main-home.component.html',
  styleUrls: ['./ui-main-home.component.css']
})
export class UiMainHomeComponent {
  var_product: any
  constructor(public conservice: DbServiceService) { }

  ngOnInit(): void {
    this.conservice.collectDbData().subscribe((Rtn_Product: any) => {

      this.var_product = Rtn_Product
      console.log(this.var_product);

    })
  }
}
