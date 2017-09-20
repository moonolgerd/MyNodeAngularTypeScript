import { Observable } from 'rxjs/Rx';

export interface IGenericService<T> {
    add(arg: T): Promise<T>;
    get(): Promise<T[]>;
    edit(arg: T): Observable<T>;
    delete(id: number): Observable<T>;
}
