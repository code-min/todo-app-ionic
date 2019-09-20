import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  editTodoForm: FormGroup;
  editTodo: Todo;

  constructor(private router: Router, private route: ActivatedRoute, private todosService: TodosService) { }

  ngOnInit() {
    this.editTodoForm = new FormGroup({
      name: new FormControl(null, Validators.required)
    });
    const id = this.route.snapshot.params.todoId;
    this.editTodo = this.todosService.getEditTodo(id);
  }

  onSubmit() {
    /* this.todosService.deleteFromUserTodos(this.editTodo.id);
    this.todosService.addToUserTodos(this.editTodoForm.value.name, this.editTodo.id); */
    this.todosService.editTodo(this.editTodoForm.value.name, this.editTodo.id);
    this.router.navigate(['home/todos/all']);
  }

}
