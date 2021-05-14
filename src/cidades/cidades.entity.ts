import { BaseEntity, Column, Entity, CreateDateColumn, UpdateDateColumn, ObjectIdColumn } from "typeorm";
//ObjectIdColumn

@Entity()
export class Cidade extends BaseEntity {

    @ObjectIdColumn()
    _id: string;

    @Column()
    nome: string;

    @Column()
    estado: string;


    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
