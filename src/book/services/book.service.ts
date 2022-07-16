import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity';

@Injectable()
export class BookService {

    constructor( @InjectRepository(Book) private bookRepository: Repository<Book>){
        
    }

    findAll(){
        return this.bookRepository.find();
    }

    findOne(id: number){
        return this.bookRepository.findOneBy({
            id: id
        });
    }

    create(body: any){
        const newBook = this.bookRepository.create(body);
        return this.bookRepository.save(newBook);
    }

    async update(id: number, body: any){
        const book = await this.bookRepository.findOneBy({
            id: id
        })
        this.bookRepository.merge(book, body);
        return this.bookRepository.save(book)
    }

    async delete( id:number){
        await this.bookRepository.delete(id);
        return true;
    }

}
