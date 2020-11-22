import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})

export class StorageService {
    constructor(public storage: Storage) {}
    async setObject(key: string, object: object) {
        try {
            await this.storage.set(key, JSON.stringify(object));
            return true;
        } catch (error) {
            return false;
        }
    }

    async getObject(key: string): Promise<any> {
        try {
            const result = await this.storage.get(key);
            if (result != null) {
                return JSON.parse(result);
            }
            return null;
        } catch (error) {
            return null;
        }
    }

}
