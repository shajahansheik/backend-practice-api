"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongo_service_1 = require("./mongo/mongo.service");
const persons_controller_1 = require("./persons/persons.controller");
const persons_service_1 = require("./persons/persons.service");
const jwtcreate_service_1 = require("./jwtcreate/jwtcreate.service");
const middleware_service_1 = require("./jwtcreate/middleware.service");
const tokengen_controller_1 = require("./jwtcreate/tokengen.controller");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(middleware_service_1.MiddlewareService).forRoutes(persons_controller_1.PersonsController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController, persons_controller_1.PersonsController, tokengen_controller_1.TokengenController],
        providers: [app_service_1.AppService, mongo_service_1.MongoService, persons_service_1.PersonsService, jwtcreate_service_1.JwtcreateService, middleware_service_1.MiddlewareService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map