import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { List } from './list';
import { ListService } from './list.service';
import { Card } from '../card/card';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { UtilService } from 'src/app/util/services/util.service';
import { CardService } from '../card/card.service';

@Component({
  selector: 'animus-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [CardService]
})
export class ListComponent implements OnInit {

  constructor(private listServ: ListService, private cardServ: CardService, private utilServ: UtilService) { }

  @Input('list') currentList: List;
  @Output('archiveList') private archiveList: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('listTitle') private listTitleInput: ElementRef;
  @ViewChild('newCardInput') private newCardInput: ElementRef;
  public editTitleState: boolean;
  public addCardState: boolean;

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
   * @description set the focus to the new card input
   */
  public setFocusToNewCardInput() {
    this.newCardInput && this.newCardInput.nativeElement && this.newCardInput.nativeElement.focus();
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

  public toggleAddCardState() {
    this.addCardState = !this.addCardState;

    if (this.addCardState) {
      setTimeout(() => {
        this.setFocusToNewCardInput();
      });
    }
  }

  public addNewCard(title: string) {
    if (title && title.trim()) {
      this.currentList.cardList.push(this.cardServ.formNewCard(title, this.currentList.cardList));
      this.toggleAddCardState();
    }
  }

  /**
   * @description archive a particular list
   * @param list the card to be archived
   */
  public archiveCard(card: Card) {
    card.state = 'archived';
  }

  /**
   * @description event triggered upon title edition
   * @param title the new title
   */
  public onTitleEdit(title: string) {
    if (title && title.trim()) {
      this.toggleEditTitleState();
    }
  }

  /**
   * @description on card drag drop
   * @param event the drag drop event triggered
   */
  onCardDrop(event: CdkDragDrop<Card[]>) {
    try {
      if (event.previousContainer === event.container) { // Same list
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else { // Different lists
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    } catch (error) {
      this.utilServ.raiseException('drag dropping a card', error);
    }
  }

  /**
   * @description fetch the updated tracking ids of the lists to track
   */
  get trackingIds(): string[] {
    return this.listServ.trackingIds;
  }

}
