import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'todos',
    component: HomePage,
    children: [
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: '../search/search.module#SearchPageModule'
          }
        ]
      },
      {
        path: 'all',
        children: [
          {
            path: '',
            loadChildren: '../todos/todos.module#TodosPageModule'
          },
          { path: 'add', loadChildren: '../todos/add-todo/add-todo.module#AddTodoPageModule' },
          {
            path: 'edit/:todoId',
            loadChildren: '../todos/edit/edit.module#EditPageModule',
          },
        ]
      },
      {
        path: '',
        redirectTo: '/home/todos/all',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/todos/all',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
