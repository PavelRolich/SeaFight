import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-battlefield',
  templateUrl: './comp-battlefield.component.html',
  styleUrls: ['./comp-battlefield.component.scss']
})
export class CompBattlefieldComponent implements OnInit {
  collsName: string[];
  rowsName: number[];

  constructor() { }

  ngOnInit() {
    this.collsName = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    this.rowsName = [1, 2, 3, 4, 5, 6, 7, 8];
  }

}
