import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { List } from './board';
import { UtilService } from 'src/app/util/services/util.service';
import { BoardService } from './board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [BoardService]
})
export class BoardComponent implements OnInit {

  constructor(private utilServ: UtilService, private boardServ: BoardService) { }

  public animusBoard: List[] = [];
  public touchedNewListState: boolean = false;
  @ViewChild('newListTitle') private newListTitle: ElementRef;

  ngOnInit() {
    this.utilServ.setTitle('Animus - Board');
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
      this.animusBoard.push(this.boardServ.formListFromTitle(title, this.animusBoard));
      this.resetNewList();
    }
  }

  /**
   * @description archive a particular list
   * @param list the list to be archived
   */
  public archiveList(list: List) {
    this.animusBoard = this.boardServ.removeListById(list.id, this.animusBoard);
  }

}
