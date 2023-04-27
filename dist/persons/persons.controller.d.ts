import { JwtcreateService } from 'src/jwtcreate/jwtcreate.service';
import { DATA } from 'src/models/datamodel.model';
import { PersonsService } from './persons.service';
export declare class PersonsController {
    private personsService;
    private jwtCreate;
    constructor(personsService: PersonsService, jwtCreate: JwtcreateService);
    addRecord(data: DATA): {
        status: number;
        message: string;
    };
    getRecords(): unknown;
    findRecord(data: any): unknown;
    getRecord(uuid: any): unknown;
    deleteRecord(data: any): {
        message: string;
        result: unknown;
    };
}
