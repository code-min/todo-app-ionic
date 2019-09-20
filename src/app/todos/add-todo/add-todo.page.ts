import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodosService } from 'src/app/services/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {
  addTodoForm: FormGroup;

  constructor(private todosService: TodosService, private router: Router) { }

  ngOnInit() {
    this.addTodoForm = new FormGroup({
      name: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.todosService.addToUserTodos(this.addTodoForm.value.name, this.todosService.generateId());
    this.router.navigate(['home/todos/all']);
  }

}
