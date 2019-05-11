import { Component, Inject, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Card, Comment } from '../card';
import { CardService } from '../card.service';
import { UtilService } from 'src/app/util/services/util.service';

@Component({
    selector: 'card-detail',
    templateUrl: './card-detail-dialog.html',
    styleUrls: ['./card-detail-dialog.scss'],
    providers: [CardService]
})
export class CardDetailDialog implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public card: Card,
        public dialogRef: MatDialogRef<CardDetailDialog>, private cardServ: CardService, private utilServ: UtilService) {
    }

    @ViewChild('addCommentInput') private addCommentInput: ElementRef;

    ngOnInit() {

    }

    /**
     * @description validate and add comment
     * @param comment comment
     */
    public addNewComment(comment: string) {
        if (comment && comment.trim()) {
            this.addCommentToCard(this.cardServ.formCommentFromBody(comment));
            this.emptyCommentInputContent();
        }
    }

    /**
     * @description add the comment to the card
     * @param comment the comment obj
     */
    private addCommentToCard(comment: Comment) {
        try {
            if (this.card && this.card.comments) {
                this.card.comments.unshift(comment);
            } else {
                this.card.comments = [comment];
            }
        } catch (error) {
            this.utilServ.raiseException('adding comment to card', error);
        }
    }

    /**
     * @description clear the comment input
     */
    private emptyCommentInputContent() {
        this.addCommentInput && this.addCommentInput.nativeElement && (this.addCommentInput.nativeElement.value = '');
    }
}