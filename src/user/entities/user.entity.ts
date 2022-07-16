import { Book } from "../../book/entities/book.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    name: string;

    @Column({length: 255, unique: true})
    email: string;

    @Column({length: 255})
    password: string;

    @Column({length: 255, nullable: true})
    phone: string;

    @Column({length: 255, nullable: true})
    address: string;

    @ManyToMany(() => Book, (book) => book.users)
    @JoinTable({
        name: 'users_books',
        joinColumn: {
            name: 'user_id'
        },
        inverseJoinColumn: {
            name: 'book_id'
        }
    })
    books: Book[]

}