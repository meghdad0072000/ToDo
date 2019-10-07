import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../shared/models/to-do';
import { ToDoService } from '../shared/services/to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  @Input() data: ToDo;

  constructor(private toDoService: ToDoService) {}

  ngOnInit() {}

  deleteItem(item) {
    this.toDoService.deleteToDo(item);
  }
}
