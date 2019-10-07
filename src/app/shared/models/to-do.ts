export class ToDo {
  constructor(id, title, isComplated) {
    this.id = id;
    this.title = title;
    this.isComplated = isComplated;
  }
  id: number;
  title: string;
  isComplated: boolean;
}
