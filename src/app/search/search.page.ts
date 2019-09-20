import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../todos/todo';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html'
})
export class SearchPage implements OnInit {
  loadedCommonTodos: Todo[];

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.loadedCommonTodos = this.todosService.getCommonTodos();
  }

}
