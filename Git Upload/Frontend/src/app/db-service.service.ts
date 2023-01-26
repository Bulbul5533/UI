import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  readonly url: any = "http://127.0.0.1:3000"
  baseurl!: string
  card_Details: any
  constructor(private http: HttpClient) { }

  collectDbData() {
    this.baseurl = this.url + "/collect/allproduct";
    const body = "";
    console.log(this.baseurl)
    return this.http.post(this.baseurl, body);

  }
  findProduct(ID: number) {
    this.baseurl = this.url + "/collect/product/" + ID;
    const body = "";
    console.log(this.baseurl)
    return this.http.post(this.baseurl, body);
  }

  Storedata(card: any) {

    this.card_Details = card
    console.log('service',this.card_Details)

  }

  rtnData() {
    return this.card_Details
  }
}
