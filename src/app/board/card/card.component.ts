import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input('card') public card: Card;
  @Output('archiveCard') private archiveCard: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('editCardInput') private editCardInput: ElementRef;
  public editTitleState: boolean;

  ngOnInit() {
  }

  /**
   * @description archive card
   * @param event the click event
   */
  public archiveCurrentCard(event: Event) {
    this.archiveCard.emit(true);
  }

  /**
  * @description toggle the state to edit the title
  */
  public toggleEditTitleState() {
    this.editTitleState = !this.editTitleState;

    if (this.editTitleState) {
      setTimeout(() => {
        this.setFocusToCardTitleInput();
      });
    }
  }

  /**
  * @description set the focus to the card title input
  */
  public setFocusToCardTitleInput() {
    this.editCardInput && this.editCardInput.nativeElement && this.editCardInput.nativeElement.focus();
  }

  /**
   * @description event triggered upon card title edition
   * @param title the edited card title
   */
  public onTitleEdit(title: string) {
    if (title && title.trim()) {
      this.toggleEditTitleState();
    }
  }

}
