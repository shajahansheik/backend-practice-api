/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Collection, Db, MongoClient } from 'mongodb';

@Injectable()
export class MongoService {
    url = 'mongodb+srv://shajahanj2se:qKkaVE7fxPcDzEIW@cluster0.zzhturx.mongodb.net/test';
    client = new MongoClient(this.url);
    dbName = 'projects';
    db: Db;
    async onModuleInit(): Promise<void> {
        try {
            await this.client.connect();
            this.db = this.client.db(this.dbName);
            console.log('DB Connected!!!!!')
        } catch (error) {
            console.log('DB Not Connected!!!!!')
        }
    }
    getCollection(): Collection {
        return this.db.collection('user');
    }
}
