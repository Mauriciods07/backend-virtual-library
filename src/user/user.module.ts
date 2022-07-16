import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Book } from '../book/entities/book.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([User, Book])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
