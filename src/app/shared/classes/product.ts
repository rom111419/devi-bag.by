import { CrudFactory } from './crud.factory';
import { ICrud } from '../interfaces/crud.interface';
import { IImage } from './image.interface';

class ProductPuffi implements ICrud {

    create(storageSpace: any, entity: any, idx?: any): any {
    }
    read(storageSpace: any, linkOnEntityInStorageSpace: any): any {
    }
    update(storageSpace: any, linkOnEntityInStorageSpace: any, entity: any): any {
    }
    delete(storageSpace: any, linkOnEntityInStorageSpace: any): any {
    }
}

export class ProductPuffiCreator extends CrudFactory {
    public factoryMethod(): ICrud {
        return new ProductPuffi();
    }
}

export function crudFactoryCreate(creator: CrudFactory, storageSpace: any, entity: any, idx?: any) {
    return creator.create(storageSpace, entity, idx);
}
export function crudFactoryRead(creator: CrudFactory, storageSpace: any, linkOnEntityInStorageSpace: any) {
    return creator.read(storageSpace, linkOnEntityInStorageSpace);
}
