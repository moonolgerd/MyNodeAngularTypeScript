import { Observable } from 'rxjs/Rx';

export interface IGenericService<T> {
    get(): Promise<T[]>;
    edit(arg: T): Observable<T>;
    delete(id: number): Observable<T>;
}
