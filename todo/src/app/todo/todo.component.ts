import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private todoService: TodoDataService,
    private router: Router) { }

  id: number
  todo: Todo
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoService.retrieveTodo('atikash', this.id).subscribe(
        data => this.todo = data
      );
    }
  }
  saveTodo() {
    if (this.id == -1) { //=== to use when compairing object  == is better to use when using primitive
      this.todoService.createTodo('atikash', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        });

    }
    else {
      this.todoService.updateTodo('atikash', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        })
    }
  }


}
