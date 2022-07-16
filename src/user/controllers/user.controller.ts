import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('api/user')
export class UserController {

    constructor( private userService: UserService){

    }

    @Get('/all')
    getAll(){
        return this.userService.findAll()
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body() body:any) {
        return this.userService.create(body);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() body: any){
        return this.userService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.userService.delete(id);
    }
}
