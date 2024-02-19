import { Task } from "src/app/model/Task";
import { Observable } from "rxjs";
import { CommonDAO } from "./CommonDAO";
import { Category } from "src/app/model/Category";
import { Priority } from "src/app/model/Priotity"; 


export interface TodoDAO extends CommonDAO<Task> {
    search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task>;

    getCompleteCountCategory(category: Category):Observable<number>;
    getUncompletedCountInCategory(category: Category):Observable<number>;
    getTotalCountInCategory(category: Category):Observable<number>;
    getTotalCount(): Observable<number>;


}

