import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TodosPage } from './todos.page';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItemModule } from './todo-item/todo-item.module';

const routes: Routes = [
  {
    path: '',
    component: TodosPage
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
  declarations: [TodosPage]
})
export class TodosPageModule {}
