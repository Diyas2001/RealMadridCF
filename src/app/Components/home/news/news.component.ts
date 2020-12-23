import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor() { }
  today: number = Date.now();
  Opened = new Date(1947, 12, 14);
  toggle = true;
  get format()   { return this.toggle ? 'mediumDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  ngOnInit(): void {
  }

}
