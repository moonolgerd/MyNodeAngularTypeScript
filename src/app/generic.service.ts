import { HttpClient, HttpHeaders } from '@angular/common/http'
export interface IGenericService<T> {
    add(arg: T): Promise<T>
    get(): Promise<T[]>
    edit(arg: T): Promise<T>
    delete(id: number): Promise<T>
}

export abstract class BaseService<T> implements IGenericService<T> {

    protected http: HttpClient
    protected headers = new HttpHeaders().set('Content-Type', 'application/json')

    abstract add(arg: T): Promise<T>
    abstract get(): Promise<T[]>
    abstract edit(arg: T): Promise<T>
    abstract delete(id: number): Promise<T>

    protected handleError(error: any): Promise<T> {
        console.error('An error occurred', error) // for demo purposes only
        return Promise.reject(error.message || error)
    }
}
