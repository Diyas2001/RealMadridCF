import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {

  constructor() { }
  texts = [' Match is started'];


  addText(newText: string) {
    this.texts.push(newText);
  }

  ngOnInit(): void {
  }

}
