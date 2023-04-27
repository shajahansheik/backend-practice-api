import { Body, Controller, Post } from '@nestjs/common';
import { JwtcreateService } from './jwtcreate.service';

@Controller('tokengen')
export class TokengenController {
    constructor(private jwtCreate: JwtcreateService) { }
    @Post('/token')
    async getToken(
        @Body('mail') mail: string,
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('phoneNumber') phoneNumber: number

    ) {
        let data = {
            mail, firstName, lastName, phoneNumber
        }
        const token = await this.jwtCreate.generateToken(data)
        return token;
    }
}
