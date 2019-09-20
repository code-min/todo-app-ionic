import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchPage } from './search.page';
import { TodoItemComponent } from '../todos/todo-item/todo-item.component';
import { TodoItemModule } from '../todos/todo-item/todo-item.module';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoItemModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
