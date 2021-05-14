import { EntityRepository, MongoRepository } from "typeorm";

import { Cidade } from "./cidades.entity";


@EntityRepository(Cidade)
export class CidadeRepository extends MongoRepository<Cidade>{


    async findByNameAndEstado(

        nome: string,
        estado: string,

    ): Promise<Cidade[]> {

        let whereObj = {};
        if (nome) {
            whereObj["nome"] = nome;
        }
        if (estado) {
            whereObj["estado"] = estado;
        }

        // const queryMethod = this.createQueryBuilder('obj');//typeorm does not support this method for mongodb
        // queryMethod.andWhere('obj.email = :email', { email: `%${email}%` });
        // const data = await queryMethod.getMany();
        // return data

        return await this.find({
            where: whereObj
        })
    }

}