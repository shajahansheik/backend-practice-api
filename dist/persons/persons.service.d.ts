import { DATA } from '../models/datamodel.model';
import { MongoService } from '../mongo/mongo.service';
export declare class PersonsService {
    private mongoService;
    constructor(mongoService: MongoService);
    addData(rawdata: DATA): unknown;
    getRecords(): unknown;
    getRecord(uuid: any): unknown;
    findRec(mail: any, password: any): unknown;
    deleteData(uuid: any): unknown;
}
