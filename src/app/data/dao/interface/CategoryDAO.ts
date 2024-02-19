import { Observable } from "rxjs";
import { CommonDAO } from "./CommonDAO";
import { Category } from "src/app/model/Category";

export interface CategoryDAO extends CommonDAO<Category> {
    search(title: string): Observable<Category[]>;
}



