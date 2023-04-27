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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getJwks() {
        return {
            "keys": [
                {
                    "p": "-IG_s_9IWDXkvc0mYrJsAvB4erAZelX-nxINV5Nw8K9Bg6x474Hu108Q4CQo9HJorNLm2EKFL8kvKvdEC5NLzdSUpDv1CYxaczzZBJYptmq9uxTG5Vyvzz7-Jljs9qtM1LYxwq7MQgfu6xyPCZM_M3qY2lvxPu6ocViJ1RIs5ds",
                    "kty": "RSA",
                    "q": "yOhONrvi-JqMAEvnb6F1oxeoThP2PgMzizvX5aO0-E5EsC_nSXdSuIIU7bivddCv0agYQGtECroUTLa1Gxh99-mqwDwm_ZxgATVwfo_-S_4pdaJ9hXBrPWHNHvArfhfd9Hwv35iMdejzmXCGCGQ7uePvo7FNmCsjAndmSKRQeuE",
                    "d": "ZrzMCkF3TLAkGeHPHcNAXqtzCnSFxG8b-BCCDlgo7ZL73Xq6-mYNOp8C_OmqBwQMR7JMG9zfvfxSMK2X0t4HLa-UKb8gRcOF1x_Us1-d1dN1zOXzxk4vPP4yEtW7PPG-bj2cq8Ozu5FQLUx1O143-6bCSwP3k6JuvW0lDCVgV1XQrBi-RMXNyIsziQSLJtRPD5fBSFXZ8wDCHb-JfshHGDcITbiYYWEMqLFLDb28EOV7UXTmenT37XKSy_LXOWBvHUHXSlShjXRUpL1aJtlGiTu_MBNAzb9l2BBXBkb9NgH9CFrkRqLp5Xd6Txm1YBh_TefAGsminOH7LN3WB0XdAQ",
                    "e": "AQAB",
                    "kid": "zRTfv_gyGCQieCTWvZIpRrBRfj65NfB8DsXvi7WNyK8",
                    "qi": "Tbnr40lh4FvA0pdDmhtyy27pQ7yZnePzlsRQgyccURnu14CzRsXdk8piTxjkNwhcfEa6eO-m2QjtW7xSfrjfd8oteilpQi8aDIGSXQagdHubNpruRthemm47xsJHLm4RHE05IUZwEeLadlgPpplgAL9yMpFeA9cybaFqKKRdrzs",
                    "dp": "hNj__Z6cMyPke57fRWXyngOltJjNlfvA2ZLR9R5KAzD9igG6yPciEpIfCGPsTPmYgcNhSv0MrEYV5Bc5liKRJKDfMYkn7onMlMxTi8Mm23DmqstppJXPGrCnNyLU0u0ybohTw6qkYSxSiffDc6_22nNQoXMDXcxB2g4l6PUFcX8",
                    "alg": "RS256",
                    "dq": "J5OLhMCyT2KyXYSWTKkzsTMB1o-cHE8pIi5hszzyc0-HvGVTXGeDBhGp6cJN3hmD6PsB-_6lYq-RPCNpvbKvbdy75C51R9Q8HUDXrjbTU0j4BdJCg7zHg0n2zDdneeldscGc9KDqWnfPNNSzsod8NHwwQsC0lls5BE1c-sZTjEE",
                    "n": "wwbfRwS6QSFfusG__UnuCjtGQBBBcC6_e3NdkgkC62o5mqtSlVGX5YPSxGMeHEgoqaXNB5Ia1ZX-nQVufSbIDuFf184B4A3ZOUHYVoWox3JtczMcLe3UXP8S15I95EZSCnhxfcsFx0RlMQD_YDb0xcRd-krStJaTDkunFlozhpAgSGZxA_yAK3nRvBk2Zcrah7gHngAit6e33Oav10TM9vwqlSrolB_SvnncNhHws_7AFOgUUGGF_K7AXde3rtc2WNhqSK6FO1bmaP0Ro8OtmWo7zr8wSdRlGfk1QjMWY9UPVOfaOtLk6L0GdCNPjitnJL9Zf8cU183xvgfOf3Bjew"
                }
            ]
        };
    }
};
__decorate([
    (0, common_1.Get)(".wellknown/json"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getJwks", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map