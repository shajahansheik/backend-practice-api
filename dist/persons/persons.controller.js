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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwtcreate_service_1 = require("../jwtcreate/jwtcreate.service");
const datamodel_model_1 = require("../models/datamodel.model");
const persons_service_1 = require("./persons.service");
let PersonsController = class PersonsController {
    constructor(personsService, jwtCreate) {
        this.personsService = personsService;
        this.jwtCreate = jwtCreate;
    }
    addRecord(data) {
        this.personsService.addData(data);
        return {
            status: 200,
            message: 'record inserted successfully'
        };
    }
    getRecords() {
        const result = this.personsService.getRecords();
        return result;
    }
    async findRecord(data) {
        try {
            const result = await this.personsService.findRec(data === null || data === void 0 ? void 0 : data.mail, data === null || data === void 0 ? void 0 : data.password);
            if (result) {
                const token = await this.jwtCreate.generateToken(result);
                return token;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    getRecord(uuid) {
        const result = this.personsService.getRecord(uuid);
        return result;
    }
    deleteRecord(data) {
        const result = this.personsService.deleteData(data === null || data === void 0 ? void 0 : data.uuid);
        return {
            message: 'deleted successfully',
            result
        };
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [datamodel_model_1.DATA]),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "addRecord", null);
__decorate([
    (0, common_1.Get)('/get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "getRecords", null);
__decorate([
    (0, common_1.Get)('/find'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PersonsController.prototype, "findRecord", null);
__decorate([
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "getRecord", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "deleteRecord", null);
PersonsController = __decorate([
    (0, swagger_1.ApiTags)('persons'),
    (0, common_1.Controller)('persons'),
    __metadata("design:paramtypes", [persons_service_1.PersonsService, jwtcreate_service_1.JwtcreateService])
], PersonsController);
exports.PersonsController = PersonsController;
//# sourceMappingURL=persons.controller.js.map