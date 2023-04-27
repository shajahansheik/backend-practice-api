"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoService = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
let MongoService = class MongoService {
    constructor() {
        this.url = 'mongodb+srv://shajahanj2se:qKkaVE7fxPcDzEIW@cluster0.zzhturx.mongodb.net/test';
        this.client = new mongodb_1.MongoClient(this.url);
        this.dbName = 'projects';
    }
    async onModuleInit() {
        try {
            await this.client.connect();
            this.db = this.client.db(this.dbName);
            console.log('DB Connected!!!!!');
        }
        catch (error) {
            console.log('DB Not Connected!!!!!');
        }
    }
    getCollection() {
        return this.db.collection('user');
    }
};
MongoService = __decorate([
    (0, common_1.Injectable)()
], MongoService);
exports.MongoService = MongoService;
//# sourceMappingURL=mongo.service.js.map