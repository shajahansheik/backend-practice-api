"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonsService = void 0;
const common_1 = require("@nestjs/common");
const mongo_service_1 = require("../mongo/mongo.service");
const uuid_1 = require("uuid");
let PersonsService = class PersonsService {
    constructor(mongoService) {
        this.mongoService = mongoService;
    }
    async addData(rawdata) {
        const data = Object.assign({ uuid: (rawdata === null || rawdata === void 0 ? void 0 : rawdata.uuid) || (0, uuid_1.v4)() }, rawdata);
        return await this.mongoService.getCollection().updateOne({
            uuid: rawdata === null || rawdata === void 0 ? void 0 : rawdata.uuid
        }, {
            $set: Object.assign({}, data)
        }, {
            upsert: true
        });
    }
    async getRecords() {
        return await this.mongoService.getCollection().find({}).toArray();
    }
    async getRecord(uuid) {
        return await this.mongoService.getCollection().findOne({ uuid });
    }
    async findRec(mail, password) {
        return await this.mongoService.getCollection().findOne({ mail, password });
    }
    async deleteData(uuid) {
        return await this.mongoService.getCollection().deleteOne({ uuid });
    }
};
PersonsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mongo_service_1.MongoService])
], PersonsService);
exports.PersonsService = PersonsService;
//# sourceMappingURL=persons.service.js.map