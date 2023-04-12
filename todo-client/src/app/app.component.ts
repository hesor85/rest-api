import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'abp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTasks().subscribe((data) => {
      console.log('All tasks: ', data);
    });

    this.todoService.getTask('2').subscribe((data) => {
      console.log('Single task: ', data);
    });

    this.todoService.search('the').subscribe((data) => {
      console.log("Result from searching for 'the': ", data);
    });

    const newTask = {
      id: '3',
      description: 'My new task'
    }
    this.todoService.createTask(newTask).subscribe((data) => {
      console.log('New task created and tasks are now: ', data);
    });

    const updatedTask = {
      id: '0',
      description: 'Do the dishes clean the kitchen'
    }
    this.todoService.updateTask(updatedTask).subscribe((data) => {
      console.log('Task updated and the tasks are now: ', data);
    });

    this.todoService.deleteTask('1').subscribe((data) => {
      console.log('Task was deleted and the tasks are now: ', data);
    })
  }
}
