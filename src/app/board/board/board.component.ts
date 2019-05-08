import { Component, OnInit } from '@angular/core';
import { List } from './board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor() { }

  public animusList: List[] = [];

  ngOnInit() {
  }

}
