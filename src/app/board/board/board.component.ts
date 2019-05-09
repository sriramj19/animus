import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { List } from './board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor() { }

  public animusList: List[] = [];
  public touchedNewListState: boolean = false;
  @ViewChild('newListTitle') private newListTitle: ElementRef;

  ngOnInit() {
  }

  /**
   * @description set the focus on the new list title
   */
  private setFocusToNewListTitle() {
    this.newListTitle && this.newListTitle.nativeElement && this.newListTitle.nativeElement.focus();
  }

  /**
   * @description toggle states when new list is to be added
   */
  public onNewListAddTouched() {
    this.touchedNewListState = true;
    setTimeout(() => {
      this.setFocusToNewListTitle();
    });
  }

  /**
   * @description reset the new list that was to be added
   */
  public resetNewList() {
    this.touchedNewListState = false;
  }

  /**
   * @description add a new list
   * @param title the title of the list
   */
  public addNewList(title: string) {
    let newList: List = new List();
    newList.title = title;
    newList.state = 'active';
    this.animusList.push(newList);
    this.resetNewList();
  }

}
