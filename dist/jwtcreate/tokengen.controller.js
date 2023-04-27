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
exports.TokengenController = void 0;
const common_1 = require("@nestjs/common");
const jwtcreate_service_1 = require("./jwtcreate.service");
let TokengenController = class TokengenController {
    constructor(jwtCreate) {
        this.jwtCreate = jwtCreate;
    }
    async getToken(mail, firstName, lastName, phoneNumber) {
        let data = {
            mail, firstName, lastName, phoneNumber
        };
        const token = await this.jwtCreate.generateToken(data);
        return token;
    }
};
__decorate([
    (0, common_1.Post)('/token'),
    __param(0, (0, common_1.Body)('mail')),
    __param(1, (0, common_1.Body)('firstName')),
    __param(2, (0, common_1.Body)('lastName')),
    __param(3, (0, common_1.Body)('phoneNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", Promise)
], TokengenController.prototype, "getToken", null);
TokengenController = __decorate([
    (0, common_1.Controller)('tokengen'),
    __metadata("design:paramtypes", [jwtcreate_service_1.JwtcreateService])
], TokengenController);
exports.TokengenController = TokengenController;
//# sourceMappingURL=tokengen.controller.js.map