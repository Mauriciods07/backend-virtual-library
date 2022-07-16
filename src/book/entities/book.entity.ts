import { User } from "../../user/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255, nullable: false})
    title: string;

    @Column({length: 255, nullable: false})
    author: string

    @Column({nullable: true})
    year: number;

    @Column({length: 255, nullable: false})
    image: string;

    @ManyToMany(() => User, (user) => user.books)
    users: User[];

}