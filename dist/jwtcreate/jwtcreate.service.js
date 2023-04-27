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
exports.JwtcreateService = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
let JwtcreateService = class JwtcreateService {
    constructor() {
        this.jwksClient = jwksClient({
            jwksUri: 'http://localhost:3002/.wellknown/json'
        });
    }
    async generateToken(result) {
        const load = {
            mail: result === null || result === void 0 ? void 0 : result.mail,
            fullName: (result === null || result === void 0 ? void 0 : result.firstName) + " " + (result === null || result === void 0 ? void 0 : result.lastName),
            phoneNumber: result === null || result === void 0 ? void 0 : result.phoneNumber
        };
        console.log(load);
        return await jwt.sign(load, process.env.PRIVATE_KEY, { algorithm: 'RS256', expiresIn: 86400, keyid: "zRTfv_gyGCQieCTWvZIpRrBRfj65NfB8DsXvi7WNyK8" });
    }
    getPublickey(kid) {
        return new Promise((resolve, reject) => {
            this.jwksClient.getSigningKey(kid, (err, key) => {
                if (err)
                    return reject(err);
                const publicKey = key['publicKey'] || key['rsaPublicKey'];
                console.log({ publicKey });
                resolve(publicKey);
            });
        });
    }
    async verifyToken(token) {
        const { header } = jwt.decode(token, { complete: true });
        const isValid = jwt.verify(token, await this.getPublickey(header.kid));
        return isValid;
    }
};
JwtcreateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtcreateService);
exports.JwtcreateService = JwtcreateService;
//# sourceMappingURL=jwtcreate.service.js.map