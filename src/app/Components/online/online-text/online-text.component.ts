import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-online-text',
  templateUrl: './online-text.component.html',
  styleUrls: ['./online-text.component.css']
})
export class OnlineTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() newTextEvent = new EventEmitter<string>();

  addNewTask(value: string, value1: string) {
    this.newTextEvent.emit(value1 + ' minute of the match - ' +  value);
    alert(value1 + value + " is added to your todo list!!!");

  }
}
