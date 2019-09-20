import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { TodoItemComponent } from './todo-item.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TodoItemComponent],
  declarations: [TodoItemComponent]
})
export class TodoItemModule {}