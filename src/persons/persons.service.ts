/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DATA } from '../models/datamodel.model';
import { MongoService } from '../mongo/mongo.service';
import { v4 as uuidv4 } from 'uuid'
@Injectable()
export class PersonsService {
    constructor(private mongoService: MongoService) { }
    async addData(rawdata: DATA) {
        const data = {
            uuid: rawdata?.uuid || uuidv4(),
            ...rawdata
        }
        return await this.mongoService.getCollection().updateOne({
            uuid: rawdata?.uuid
        }, {
            $set: {
                ...data
            }
        }, {
            upsert: true
        });
    }

    async getRecords() {
        return await this.mongoService.getCollection().find({}).toArray();
    }

    async getRecord(uuid:any){
        return await this.mongoService.getCollection().findOne({uuid})
    }
    async findRec(mail:any,password:any){
        return await this.mongoService.getCollection().findOne({mail,password})
    }
    async deleteData(uuid: any) {
        return await this.mongoService.getCollection().deleteOne({ uuid })
    }
}
