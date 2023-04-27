import { Collection, Db, MongoClient } from 'mongodb';
export declare class MongoService {
    url: string;
    client: MongoClient;
    dbName: string;
    db: Db;
    onModuleInit(): Promise<void>;
    getCollection(): Collection;
}
