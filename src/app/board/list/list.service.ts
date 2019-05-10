import { Injectable } from '@angular/core';
import { Card } from '../card/card';
import { UtilService } from 'src/app/util/services/util.service';

@Injectable()
export class ListService {

  constructor(private utilServ: UtilService) { }

  /**
   * @description get the auto increment id for card
   * @param cardList the current list of cards
   */
  public getAutoIncrementForCard(cardList: Card[]) {
    try {
      if (cardList && cardList.length) {
        return this.utilServ.getLargestNumber(cardList.map(card => card.id)) + 1;
      }
      return 1;
    } catch (error) {
      this.utilServ.raiseException('getting auto increment for card', error);
    }
  }

  /**
   * @description form the card body from the title
   * @param title the title of the card
   * @param cardList the card list to fetch auto increment id
   */
  public formNewCard(title: string, cardList: Card[]) {
    let newCard: Card = new Card();
    newCard.id = this.getAutoIncrementForCard(cardList);
    newCard.order = newCard.id;
    newCard.title = title.trim();
    newCard.state = 'active';
    return newCard;
  }

  /**
   * @description remove a card by id
   * @param id the id of the card to be removed
   * @param cardList the list of cards
   */
  public removeCardById(id: number, cardList: Card[]) {
    return cardList.filter(card => card.id !== id);
  }
}
