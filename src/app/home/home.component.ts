import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../shared/services/to-do.service';
import { ToDo } from '../shared/models/to-do';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  toDoItems: ToDo[] = [];
  inputValue = '';
  constructor(private toDoService: ToDoService) {}

  ngOnInit() {
    this.toDoItems = this.toDoService.getAllToDo();
  }

  addToDo() {
    if (this.inputValue.length > 0) {
      const newToDo = new ToDo(0, this.inputValue, false);
      this.toDoService.addToDo(newToDo);
      this.inputValue = '';
    }
  }
}
