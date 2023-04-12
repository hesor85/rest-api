import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get('tasks');
  }

  getTask(id) {
    return this.http.get('tasks/' + id);
  }

  search(searchText) {
    return this.http.get('tasks/search', {
      params: {
        searchText: searchText
      }
    });
  }

  createTask(newTask) {
    return this.http.post('tasks', newTask);
  }

  updateTask(updatedTask) {
    return this.http.put('tasks/' + updatedTask.id, updatedTask);
  }

  deleteTask(id) {
    return this.http.delete('tasks/' + id);
  }


}
