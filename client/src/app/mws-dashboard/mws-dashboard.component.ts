import { Component } from '@angular/core';

@Component({
  selector: 'mws-dashboard',
  templateUrl: './mws-dashboard.component.html',
  styleUrls: ['./mws-dashboard.component.css']
})
export class MwsDashboardComponent {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
}
