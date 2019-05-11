import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Card } from './card';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CardDetailDialog } from './card-detail-dialog/card-detail.dialog';
import { UtilService } from 'src/app/util/services/util.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private dialog: MatDialog, private utilServ: UtilService) { }

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

  /**
   * @description the resulting callback upon selection of card options
   * @param event the click event triggered
   */
  public onCardOptionsTriggered(event: Event) {
    if (event) {
      event.stopPropagation();
    }
  }

  /**
   * @description open the card detail popup
   */
  public openCardDetail() {
    try {
      let dialogRef: MatDialogRef<CardDetailDialog> = this.dialog.open(CardDetailDialog, {
        data: this.card,
        width: this.utilServ.isMobile ? '80vw' : '50vw',
        maxHeight: 'auto',
        panelClass: 'animus-dialog-container',
        position: { top: '4rem' }
      });
      let beforeCloseSub = dialogRef.beforeClose().subscribe((data: Card) => {
        if (data) {
          this.card = data;
        }
        beforeCloseSub.unsubscribe();
      })
    } catch (error) {
      this.utilServ.raiseException('opening card detail', error);
    }
  }

}
