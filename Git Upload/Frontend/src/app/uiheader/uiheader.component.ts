import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-uiheader',
  templateUrl: './uiheader.component.html',
  styleUrls: ['./uiheader.component.css']
})
export class UIHeaderComponent implements OnInit {
  @Input() itemscount: number = 0
  isVisible: boolean = false
  loginhide: boolean = false


  constructor() { }

  ngOnInit() {


  }

  disableAgent() {
    return this.isVisible = true
  }
  disableButtonlogin() {
    return this.loginhide = true
  }
  login() {
    alert("Coming soon")
  }

}
