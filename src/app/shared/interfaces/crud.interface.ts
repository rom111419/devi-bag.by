export interface ICrud {
    create(storageSpace:any, entity:any, idx?:any): any;
    read(storageSpace:any, linkOnEntityInStorageSpace:any): any;
    update(storageSpace:any, linkOnEntityInStorageSpace:any, entity:any): any;
    delete(storageSpace:any, linkOnEntityInStorageSpace:any): any;
}
