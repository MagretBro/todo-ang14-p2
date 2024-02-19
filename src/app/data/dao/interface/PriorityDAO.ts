import { Observable } from "rxjs";
import { CommonDAO } from "./CommonDAO";
import { Priority } from "src/app/model/Priotity"; 

export interface PriorityDAO extends CommonDAO<Priority> {
}

