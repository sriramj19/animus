import { Injectable } from '@angular/core';
import { Card } from '../card/card';
import { UtilService } from 'src/app/util/services/util.service';
import { List } from './list';

@Injectable()
export class ListService {

  constructor(private utilServ: UtilService) { }

  public trackingIds: string[] = [];

  /**
   * @description get the auto increment id for list
   * @param listOfList list of lists
   */
  public getAutoIncrementForList(listOfList: List[]) {
    try {
      if (listOfList && listOfList.length) {
        return this.utilServ.getLargestNumber(listOfList.map(list => list.id)) + 1;
      }
      return 1;
    } catch (error) {
      this.utilServ.raiseException('getting auto increment for list', error);
    }
  }

  /**
   * @description form the list body from the title
   * @param title the title of the list
   * @param existingList the existing list to fetch auto increment id
   */
  public formNewList(title: string, existingList: List[]) {
    let newList: List = new List();
    newList.id = this.getAutoIncrementForList(existingList);
    newList.order = newList.id;
    newList.title = title.trim();
    newList.state = 'active';
    newList.trackingId = 'animus-' + newList.id;
    newList.createdDate = new Date().getTime();
    return newList;
  }

  /**
   * @description remove a list by id
   * @param id the id of the list to be removed
   * @param listOfLists the list of lists
   */
  public removeListById(id: number, listOfLists: List[]) {
    return listOfLists.filter(list => list.id !== id);
  }

  /**
   * @description set the trackers for drag and drop
   * @param listOfList the list of lists in the board
   */
  public setTrackers(listOfList: List[]) {
    try {
      this.trackingIds = listOfList.filter(list => list.state === 'active').map(list => list.trackingId);
    } catch (error) {
      this.utilServ.raiseException('setting trackers', error);
    }
  }
}
