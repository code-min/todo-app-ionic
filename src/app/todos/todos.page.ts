import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html'
})
export class TodosPage implements OnInit {
  loadedUserTodos: Todo[];

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadedUserTodos = this.todosService.getUserTodos();
  }

}
