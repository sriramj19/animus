import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board/board.component';

import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { UtilService } from '../util/services/util.service';
import { CardComponent } from './card/card.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { BoardService } from './board/board.service';


@NgModule({
  declarations: [BoardComponent, ListComponent, CardComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
    DragDropModule
  ],
  providers: [UtilService, BoardService]
})
export class BoardModule { }
