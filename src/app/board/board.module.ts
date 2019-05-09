import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board/board.component';

import {MatButtonModule, MatIconModule} from '@angular/material';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { UtilService } from '../util/services/util.service';

@NgModule({
  declarations: [BoardComponent, ListComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [UtilService]
})
export class BoardModule { }
