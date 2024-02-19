import { Observable, of } from "rxjs";
import { CategoryDAO } from "../interface/CategoryDAO";
import { Category } from "src/app/model/Category";


export class CategoryDAOArray implements CategoryDAO{
    add(T: any): Observable<Category> {
        return of(null); // возвращаем пустое значение в виде Observable
    }

    delete(id: number): Observable<Category> {
        return undefined;
    }

    get(id: number): Observable<Category> {
        return undefined;
    }

    getAll(): Observable<Category[]> {
        return undefined;
    }


    search(title: string): Observable<Category[]> {
        // Ваша реализация поиска категории по заголовку
        return undefined;
    }

    update(T: any): Observable<Category> {
        return undefined;
    }
}


