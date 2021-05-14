import { BaseEntity, Column, Entity, CreateDateColumn, UpdateDateColumn, ObjectIdColumn } from "typeorm";

import { Cidade } from '../cidades/cidades.entity';
//ObjectIdColumn

@Entity()
export class Cliente extends BaseEntity {

    @ObjectIdColumn()
    _id: string;

    @Column()
    nome_completo: string;

    @Column()
    sexo: string;

    @Column()
    email: string;

    @Column()
    data_nascimento: Date;

    @Column()
    idade: number;

    @Column(type => Cidade)
    cidade: Cidade;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}



