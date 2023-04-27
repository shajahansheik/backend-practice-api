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
exports.MiddlewareService = void 0;
const common_1 = require("@nestjs/common");
const jwtcreate_service_1 = require("./jwtcreate.service");
let MiddlewareService = class MiddlewareService {
    constructor(jwtCreate) {
        this.jwtCreate = jwtCreate;
    }
    async use(req, res, next) {
        if (req.get("authorization")) {
            const tokenSplit = req.get("authorization").split(" ");
            const authToken = tokenSplit[1];
            if (authToken) {
                let decodedToken;
                try {
                    decodedToken = await this.jwtCreate.verifyToken(authToken);
                    if (decodedToken) {
                        return next();
                    }
                    else {
                        throw new common_1.HttpException("Token Validation Failed", common_1.HttpStatus.FORBIDDEN);
                    }
                }
                catch (e) {
                    console.log("Token Error =>", e);
                    throw new common_1.HttpException("Error verifying Authorization Token", common_1.HttpStatus.FORBIDDEN);
                }
            }
            else {
                throw new common_1.HttpException("Token Validation Failed", common_1.HttpStatus.FORBIDDEN);
            }
        }
        else {
            throw new common_1.HttpException("Authorization Token Required", common_1.HttpStatus.FORBIDDEN);
        }
    }
};
MiddlewareService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwtcreate_service_1.JwtcreateService])
], MiddlewareService);
exports.MiddlewareService = MiddlewareService;
//# sourceMappingURL=middleware.service.js.map