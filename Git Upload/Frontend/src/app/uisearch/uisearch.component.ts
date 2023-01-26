import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-uisearch',
  templateUrl: './uisearch.component.html',
  styleUrls: ['./uisearch.component.css']
})
export class UISearchComponent {
  txtSearched: string = ''

  @Output()
  emitSearchedTxt: EventEmitter<string> = new EventEmitter<string>()

  Autochange() {
    // console.log('from search', this.txtSearched)
    return this.emitSearchedTxt.emit(this.txtSearched)
  }
}
