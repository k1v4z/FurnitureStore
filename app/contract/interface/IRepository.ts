export interface IRepository<T>{
    getAll(): Promise<T[]>
    getById(id: string): Promise<T | null>
    create(item: T): Promise<T>
    updateById(id: string,item: T): Promise<T>
    delete(id: string): Promise<T>
}