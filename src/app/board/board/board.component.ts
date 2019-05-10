import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Board } from './board';
import { UtilService } from 'src/app/util/services/util.service';
import { BoardService } from './board.service';
import { List } from '../list/list';
import { ANIMUSSAMPLEBOARD } from 'src/app/util/mock/animus.data';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private utilServ: UtilService, private boardServ: BoardService) { }

  public board: Board;
  public touchedNewListState: boolean;
  @ViewChild('newListTitle') private newListTitle: ElementRef;

  ngOnInit() {
    this.utilServ.setTitle('Animus - Board');
    this.initiateDefaults();
  }

  private initiateDefaults() {
    this.board = this.fetchStub();
    this.boardServ.setTrackers(this.board.listOfList)
  }

  private fetchStub() {
    return ANIMUSSAMPLEBOARD;
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
    if (title && title.trim()) {
      this.board.listOfList.push(this.boardServ.formNewList(title, this.board.listOfList));
      this.boardServ.setTrackers(this.board.listOfList)
      this.resetNewList();
    }
  }

  /**
   * @description archive a particular list
   * @param list the list to be archived
   */
  public archiveList(list: List) {
    list.state = 'archived';
    this.boardServ.setTrackers(this.board.listOfList)
  }

}
