/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtcreateService } from './jwtcreate.service';

@Injectable()
export class MiddlewareService {
    constructor(private jwtCreate: JwtcreateService) { }

    async use(req: any, res: any, next: () => void) {
        if (req.get("authorization")) {
            const tokenSplit = req.get("authorization").split(" ");
            // const tokenType = tokenSplit[0];
            const authToken = tokenSplit[1];
            if (authToken) {
                let decodedToken: any;
                try {
                    decodedToken = await this.jwtCreate.verifyToken(authToken);
                    if (decodedToken) {
                        return next();
                    } else {
                        throw new HttpException("Token Validation Failed", HttpStatus.FORBIDDEN);
                    }
                } catch (e) {
                    console.log("Token Error =>", e)
                    throw new HttpException("Error verifying Authorization Token", HttpStatus.FORBIDDEN);
                }
            } else {
                throw new HttpException("Token Validation Failed", HttpStatus.FORBIDDEN);
            }
        } else {
            throw new HttpException("Authorization Token Required", HttpStatus.FORBIDDEN);
        }
    }
}
