import { Priority } from "../model/Priotity";
import { Category } from "../model/Category"; 
import { Task } from "../model/Task";

export class TestData {
    static categories: Category[] = [
        {id: 1, title: 'tamangaan'},
        {id: 2, title: 'Crob crua'},
        {id: 3, title: 'rian'},
        {id: 4, title: 'len'}, 
        {id: 5, title: 'Fitnet'}, 
        {id: 6, title: 'ranahaan'}, 
        {id: 7, title: 'rot'},        
    ];

    static priorities: Priority[] = [
        {id: 1, title: 'san', color:'#e5e5e5'},
        {id: 2, title: 'cheliy', color:'#85e5e5'},
        {id: 3, title: 'sakhay', color:'#f1828d'},
        {id: 3, title: 'Duwn!!', color:'#f1128d'}
    ];

    static tasks: Task[] = [
       { 
        id: 1,
        title: 'Full tank',
        priority: TestData.priorities[2],
        completed: false,
        category: TestData.categories[0],
        date: new Date('2024-02-06')
    },


    { 
        id: 2,
        title: 'Report',
        priority: TestData.priorities[0],
        completed: false,
        category: TestData.categories[0],
        date: new Date('2024-09-06')
    },
   
    { 
        id: 3,
        title: 'clean room',
        priority: TestData.priorities[2],
        completed: true,
        category: TestData.categories[1],
        date: new Date('2024-02-11')
    },


    { 
        id: 4,
        title: 'relax',
        priority: TestData.priorities[2],
        completed: false,
        category: TestData.categories[3],
        date: new Date('2024-12-06')
    },
    { 
        id: 5,
        title: 'Gym',
        priority: TestData.priorities[2],
        completed: false,
        category: TestData.categories[4],
        date: new Date('2024-03-06')
    },


    { 
        id: 6,
        title: 'Bali',
        priority: TestData.priorities[2],
        completed: false,
        category: TestData.categories[3],
        date: new Date('2024-12-11')
    } 
    ];
}