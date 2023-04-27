import * as jwt from 'jsonwebtoken';
import * as jwksClient from 'jwks-rsa';
export declare class JwtcreateService {
    jwksClient: jwksClient.JwksClient;
    constructor();
    generateToken(result: any): Promise<string>;
    getPublickey(kid: any): Promise<string>;
    verifyToken(token: string): Promise<string | jwt.JwtPayload>;
}
