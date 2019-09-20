import { Injectable } from '@angular/core';
import { Todo } from '../todos/todo';
import uuidv1 from 'uuid/v1';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class TodosService {
  commonTodos: Todo[] = [
    new Todo('Reading',  uuidv1()),
    new Todo('Journaling', uuidv1()),
    new Todo('Coding', uuidv1())
  ];

  userTodos: Todo[] = [
    new Todo('Create Todos', uuidv1())
  ];

  getCommonTodos() {
    return [...this.commonTodos];
  }

  getUserTodos() {
    return [...this.userTodos];
  }

  generateId() {
    return uuidv1();
  }

  addToUserTodos(name: string, id: string) {
    this.userTodos.push(new Todo(name, id));
  }

  deleteFromUserTodos(id: string) {
    this.userTodos = this.userTodos.filter(todoItem => {
      return todoItem.id !== id;
    });
  }

  getEditTodo(id: string) {
    return [...this.userTodos].find(todo => {
      return todo.id === id;
    });
  }

  editTodo(name: string, id: string) {
    const index = [...this.userTodos].findIndex((todo) => {
      return todo.id === id;
    });
    this.userTodos[index].name = name;
  }

  constructor() { }
}
