import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  toDoList: ToDo[] = [];
  lastId = 0;
  constructor() {}

  getAllToDo(): ToDo[] {
    return this.toDoList;
  }

  deleteToDo(toDo: ToDo) {
    const index = this.toDoList.indexOf(toDo, 0);
    this.toDoList.splice(index, 1);
  }

  addToDo(toDo: ToDo) {
    toDo.id = this.lastId;
    this.lastId++;
    this.toDoList.push(toDo);

  }
}
