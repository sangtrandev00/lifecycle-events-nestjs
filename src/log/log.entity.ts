import { Column, PrimaryGeneratedColumn } from "typeorm";


export class Log {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    message: string;
}