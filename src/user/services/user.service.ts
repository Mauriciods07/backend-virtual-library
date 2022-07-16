import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/book/entities/book.entity';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Book) private bookRepository: Repository<Book>
    ){

    }

    findAll(){
        return this.userRepository.find();
    }

    findOne(id: number){
        return this.userRepository.findOne({
            where: {
                id: id
            },
            relations: ['books']
        });
    }

    async create(body: any){
        //const newUser = this.userRepository.create(body);
        const newUser = new User();
        newUser.name = body.name;
        newUser.email = body.email;
        newUser.password = body.password;
        newUser.phone = body.phone;
        newUser.address = body.address;

        const booksIds = body.booksIds;
        const books = await this.bookRepository.findByIds(booksIds);
        
        newUser.books = books;

        return this.userRepository.save(newUser);
    }

    async update(id: number, body: any){
        const User = await this.userRepository.findOneBy({
            id: id
        })
        this.userRepository.merge(User, body);
        return this.userRepository.save(User)
    }

    async delete( id:number){
        await this.userRepository.delete(id);
        return true;
    }
}
