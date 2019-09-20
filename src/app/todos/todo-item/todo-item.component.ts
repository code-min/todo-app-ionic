import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from 'src/app/services/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent implements OnInit {
  @Input() todos: Todo[];
  @Input() color: string;
  @Input() showIcon: string;

  constructor(private todosService: TodosService, private router: Router) { }

  ngOnInit() {}

  onAddTodo(slidingItem, title: string, id: string) {
    this.todosService.addToUserTodos(title, id);
    this.router.navigateByUrl('home/todos/all');
    slidingItem.close();
  }

  onDeleteTodo(slidingItem, id: string) {
    this.todosService.deleteFromUserTodos(id);
    slidingItem.close();
    this.todos = this.todosService.getUserTodos();
  }

  onEditTodo(title: string, id: string) {
    this.router.navigate(['home/todos/all/edit', id]);
    console.log(title, id);
  }

}
