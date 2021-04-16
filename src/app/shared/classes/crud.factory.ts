import { ICrud } from '../interfaces/crud.interface';
import { environment } from '../../../environments/environment.prod';

export abstract class CrudFactory {
    public abstract factoryMethod(): ICrud;

    create(storageSpaceValue: any, entityValue: any, idxValue?: any): any {
        let storageSpace = storageSpaceValue;
        let entity = entityValue;
        let idx = idxValue;
        switch (typeof storageSpace) {
            case 'object':
                if(storageSpace.length) {
                    if(idx){
                        storageSpace[idx] = entity
                    } else {
                        storageSpace.push(entity)
                    }
                } else {
                    let storageSpaceObject = {...storageSpaceValue};
                    if(idx){
                        entity.idx = idx;
                        storageSpace = Object.assign(storageSpaceObject, entity);
                    } else {
                        storageSpace = Object.assign(storageSpaceObject, entity);
                    }
                }

        }
        return {...storageSpace}
    }

    read(storageSpaceValue:any, linkOnEntityInStorageSpaceValue:any): any {
        let storageSpace = storageSpaceValue;
        let linkOnEntityInStorageSpace = linkOnEntityInStorageSpaceValue;

        return {...storageSpace}
    }

    update(storageSpace:any, linkOnEntityInStorageSpace:any, entity:any): any {
        console.log('update');
        return this.factoryMethod().update(storageSpace, linkOnEntityInStorageSpace, entity)
    }

    delete(storageSpace:any, linkOnEntityInStorageSpace:any): any {
        console.log('delete');
        return this.factoryMethod().delete(storageSpace, linkOnEntityInStorageSpace)
    }
}
