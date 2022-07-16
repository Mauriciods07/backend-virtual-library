import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from '../services/book.service';

@Controller('api/book')
export class BookController {


    constructor( private bookService: BookService){

    }

    @Get('/all')
    getAll(){
        return this.bookService.findAll()
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.bookService.findOne(id);
    }

    @Post()
    create(@Body() body:any) {
        return this.bookService.create(body);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() body: any){
        return this.bookService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.bookService.delete(id);
    }

}
