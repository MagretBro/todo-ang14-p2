import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { Task } from 'src/app/model/Task';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {


    // поля для таблицы (те, что отображают данные из задачи - должны совпадать с названиями переменных класса)
    public displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
    //public dataSource: MatTableDataSource<Task>; // контейнер - источник данных для таблицы
    public dataSource: MatTableDataSource<Task> = new MatTableDataSource<Task>();

    tasks: Task[]=[];

    constructor(private dataHandler: DataHandlerService) {
    }

    ngOnInit() {
        this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);


        // датасорс обязательно нужно создавать для таблицы, в него присваивается любой источник (БД, массивы, JSON и пр.)
        this.dataSource = new MatTableDataSource();

        this.refreshTable();
    }


    toggleTaskCompleted(task: Task) {
        task.completed = !task.completed;
    }

    // в зависимости от статуса задачи - вернуть цвет названия
    public getPriorityColor(task: Task) {

        // цвет завершенной задачи
        if (task.completed) {
            return '#F8F9FA'; // TODO вынести цвета в константы (magic strings, magic numbers)
        }

        if (task.priority && task.priority.color) {
            return task.priority.color;
        }

        return '#fff'; // TODO вынести цвета в константы (magic strings, magic numbers)

    }

    // показывает задачи с применением всех текущий условий (категория, поиск, фильтры и пр.)
    private refreshTable() {

        this.dataSource.data = this.tasks; // обновить источник данных (т.к. данные массива tasks обновились)


    }

}



//   tasks: Task[]=[];
//   constructor(private dataHandler: DataHandlerService) { }

//   ngOnInit(): void {
//     this.dataHandler.taskSubject.subscribe(tasks=>this.tasks=tasks); 
//   }

//   toggleCompleted(task: Task): void {
//     task.completed = !task.completed;
//   }

// }
