import { JwtcreateService } from './jwtcreate.service';
export declare class TokengenController {
    private jwtCreate;
    constructor(jwtCreate: JwtcreateService);
    getToken(mail: string, firstName: string, lastName: string, phoneNumber: number): unknown;
}
