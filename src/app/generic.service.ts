export interface IGenericService<T> {
    add(arg: T): Promise<T>
    get(): Promise<T[]>
    edit(arg: T): Promise<T>
    delete(id: number): Promise<T>
}
