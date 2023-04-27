/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtcreateService } from 'src/jwtcreate/jwtcreate.service';

import { DATA } from 'src/models/datamodel.model';
import { PersonsService } from './persons.service';

@ApiTags('persons')
@Controller('persons')
export class PersonsController {
    constructor(private personsService: PersonsService, private jwtCreate: JwtcreateService) {

    }

    @Post('/add')
    addRecord(
        @Body() data: DATA
    ) {
        this.personsService.addData(data);
        return {
            status: 200,
            message: 'record inserted successfully'
        };
    }

    @Get('/get')
    getRecords() {
        const result = this.personsService.getRecords();
        return result;
    }
    @Get('/find')
    async findRecord(
        @Body() data: any,
        // @Body('password') password:any
    ) {
        try {
            const result = await this.personsService.findRec(data?.mail, data?.password);
            if (result) {
                const token = await this.jwtCreate.generateToken(result)
                // console.log(token);
                return token;
            }
            // return result;
        } catch (e) {
            console.log(e)
        }
    }

    // @Get('/verifyToken')
    // async verifyToken(@Headers("Authorization") authorization: any) {
    //     const token = authorization.split(' ')[1];
    //     // console.log({ token })
    //     const valid = await this.jwtCreate.verifyToken(token)
    //     return valid
    // }

    @Get('/get/:id')
    getRecord(
        @Param('id') uuid
    ) {
        const result = this.personsService.getRecord(uuid);
        return result;
    }

    @Delete('/delete')
    deleteRecord(
        @Body() data: any
    ) {
        const result = this.personsService.deleteData(data?.uuid);
        return {
            message: 'deleted successfully',
            result
        }
    }
}


