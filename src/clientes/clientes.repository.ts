import { EntityRepository, MongoRepository } from "typeorm";
import { Cliente } from "./clientes.entity";


@EntityRepository(Cliente)
export class ClienteRepository extends MongoRepository<Cliente>{


    async findByIdAndNameAndSexoAndEmailAndDataNascimentoAndIdadeAndCidadeAndCreatedAndUpdated(
        _id: string,
        nome_completo: string,
        sexo: string,
        email: string,
        data_nascimento: Date,
        idade: number,
        cidade: string,
        created_at: Date,
        updated_at: Date,
    ): Promise<Cliente[]> {

        let whereObj = {};
        if (_id) {
            whereObj["_id"] = _id;
        }
        if (nome_completo) {
            whereObj["nome_completo"] = nome_completo;
        }
        if (sexo) {
            whereObj["sexo"] = sexo;
        }
        if (email) {
            whereObj["email"] = email;
        }
        if (data_nascimento) {
            whereObj["data_nascimento"] = Number(data_nascimento);
        }
        if (idade) {
            whereObj["idade"] = Number(idade);
        }
        if (cidade) {
            whereObj["cidade"] = cidade;
        }
        if (created_at) {
            whereObj["created_at"] = created_at;
        }
        if (updated_at) {
            whereObj["updated_at"] = updated_at;
        }
        if (cidade) {
            whereObj["cidade"] = cidade;
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