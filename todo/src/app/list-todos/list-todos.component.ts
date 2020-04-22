import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[]
  todo : Todo
  message: string
  //  = [
  //   new Todo(1,'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become and expert in angular', false, new Date()),
  //   new Todo(3, 'Learn Full Stack', false, new Date()),

  // {id : 1, description: 'Learn to dance'},
  // {id : 2, description: 'Become and expert in angular'},
  // {id : 3, description: 'Learn Full Stack'}
  // ]
  // todo = {
  //   id : 1,
  //   description : 'Learn to Dance'
  // }
  constructor(private todoService: TodoDataService,
    private router: Router) { }

  ngOnInit(): void {
this.refreshTodos();
  }

refreshTodos(){
    this.todoService.retrieveAllTodos('atikash').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`delete ${id}`);
    this.todoService.deleteTodo('atikash', id).subscribe(
      response => {
        console.log(response);
        this.todo = response;
        this.message = `Deletion of todo ${id} Successful`;
        this.refreshTodos();
      }
    );
  }
  
  updateTodo(id) {
    console.log(`update ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo() {
    console.log(`add todo`);
    this.router.navigate(['todos',-1]);
   
  }

}
