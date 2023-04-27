import { JwtcreateService } from './jwtcreate.service';
export declare class MiddlewareService {
    private jwtCreate;
    constructor(jwtCreate: JwtcreateService);
    use(req: any, res: any, next: () => void): unknown;
}
