import { IsNotEmpty, MaxLength } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from "typeorm";

@Entity({name: 'tb_postagens'})
    export class Postagem{
        @PrimaryGeneratedColumn()
        id: number;

        @IsNotEmpty()
        @MaxLength(100)
        @Column({length: 100, nullable: false})
        titulo: string;
    
        @Column({length: 100, nullable: false})
        text: string;

        @UpdateDateColumn()
        data: Date;
    }