import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent {
  @Input() All: number = 0
  @Input() Mobile: number = 0
  @Input() HeadPhone: number = 0
  @Input() Powerbank: number = 0
  
  ngOnInit(): void {
  }

  btnRadioChosen: string = 'All'


  filtertext: string = 'All'
  @Output()
  filtertxt: EventEmitter<string> = new EventEmitter<string>()
  //
  RaisingEvent()
  {
    return this.filtertxt.emit(this.filtertext)
  }
}
