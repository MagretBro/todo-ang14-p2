import { Component, OnInit, ViewChild } from '@angular/core';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { Task } from 'src/app/model/Task';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


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

  // table component
  // @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
  // @ViewChild(MatSort, {static: false}) private sort: MatSort;

  @ViewChild(MatPaginator, {static: false}) private paginator!: MatPaginator; // Инициализатор для paginator
  @ViewChild(MatSort, {static: false}) private sort!: MatSort; // Инициализатор для sort


    tasks: Task[]=[];

    constructor(private dataHandler: DataHandlerService) {
    }

    ngOnInit() {
        this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);


        // датасорс обязательно нужно создавать для таблицы, в него присваивается любой источник (БД, массивы, JSON и пр.)
        this.dataSource = new MatTableDataSource();

        this.refreshTable();
    }

     // в этом методе уже все проинциализировано, поэтому можно присваивать объекты (иначе может быть ошибка undefined)
    ngAfterViewInit(): void {
      this.addTableObjects();
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
        this.addTableObjects();

        this.dataSource.sortingDataAccessor = (task, colName) => {
          switch (colName) {
            case 'priority': {
              return task.priority ? task.priority.id.toString() : ''; // Преобразуем в строку
          }
          case 'category': {
              return task.category ? task.category.title : ''; // Возвращаем строку или пустую строку
          }
          case 'date': {
              return task.date ? task.date.toString() : ''; // Преобразуем в строку
          }
          case 'title': {
              return task.title;
          }
          default: {
              return ''; // Обработка для всех остальных случаев
          }
          }
        }

    }

    private addTableObjects() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }

}

