import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { Task } from '../model/Task';
import { TestData } from '../data/TestData';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  taskSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() { 
    this.fillTasks();
   }

  getCategories(): Category[] {
    return TestData.categories;
  }

  fillTasks() {
    this.taskSubject.next(TestData.tasks);
  }
 
  fillTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter(task => task.category === category);
    // console.log(tasks);
    this.taskSubject.next(tasks);
  }

}
