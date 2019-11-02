import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.scss']
})
export class BattlefieldComponent implements OnInit {
  collsName: string[];
  rowsName: number[];

  constructor() { }

  ngOnInit() {
    this.collsName = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    this.rowsName = [1, 2, 3, 4, 5, 6, 7, 8];
  }

}
