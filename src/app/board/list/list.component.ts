import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { List } from '../board/board';

@Component({
  selector: 'animus-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  @Input('list') currentList: List;
  @Output('archiveList') private archiveList: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('listTitle') private listTitleInput: ElementRef;
  public editTitleState: boolean;

  ngOnInit() {
  }

  /**
   * @description toggle the state to edit the title
   */
  public toggleEditTitleState() {
    this.editTitleState = !this.editTitleState;

    if (this.editTitleState) {
      setTimeout(() => {
        this.setFocusToListTitleInput();
      });
    }
  }

  /**
   * @description set the focus to the list title input
   */
  public setFocusToListTitleInput() {
    this.listTitleInput && this.listTitleInput.nativeElement && this.listTitleInput.nativeElement.focus();
  }

  /**
   * @description archive list
   * @param event the click event
   */
  public archiveCurrentList(event: Event) {
    if (event) {
      event.stopPropagation();
    }

    this.archiveList.emit(true);
  }

}
