import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board/board.component';

import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class BoardModule { }
