import { Injectable } from '@angular/core';
import { List } from './board';
import { UtilService } from 'src/app/util/services/util.service';

@Injectable()
export class BoardService {

  constructor(private utilServ: UtilService) { }

  /**
   * @description get the auto increment id for list
   * @param currentBoard the current board of lists
   */
  public getAutoIncrementForList(currentBoard: List[]) {
    try {
      if (currentBoard && currentBoard.length) {
        return this.utilServ.getLargestNumber(currentBoard.map(list => list.id)) + 1;
      }
      return 1;
    } catch (error) {
      this.utilServ.raiseException('getting auto increment for list', error);
    }
  }

  /**
   * @description form the list body from the title
   * @param title the title of the list
   * @param board the board to fetch auto increment id
   */
  public formListFromTitle(title: string, board: List[]) {
    let newList: List = new List();
    newList.id = this.getAutoIncrementForList(board);
    newList.title = title.trim();
    newList.state = 'active';
    return newList;
  }

  /**
   * @description remove a list by id
   * @param id the id of the list to be removed
   * @param board the board of lists
   */
  public removeListById(id: number, board: List[]) {
    return board.filter(list => list.id !== id);
  }

}
