import { Injectable } from '@angular/core';
import { Board } from './board';

@Injectable()
export class BoardService {

  constructor() { }

  /**
   * @description form a new board
   * @param boardName the name of the board
   */
  public formNewBoard(boardName: string = 'Animus') {
    let _board = new Board();
    _board.name = boardName;
    return _board;
  }

}
