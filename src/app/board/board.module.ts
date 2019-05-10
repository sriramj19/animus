import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board/board.component';

import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { UtilService } from '../util/services/util.service';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [BoardComponent, ListComponent, CardComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [UtilService]
})
export class BoardModule { }
