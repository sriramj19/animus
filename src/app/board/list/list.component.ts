import { Component, OnInit, Input } from '@angular/core';
import { List } from '../board/board';

@Component({
  selector: 'animus-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  @Input('list') currentList: List;

  ngOnInit() {
  }

}
