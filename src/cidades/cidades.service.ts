import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'

import { CidadeRepository } from './cidades.repository'

import { CriarCidadeDTO } from './dtos/criar-cidade.dto';

import { Cidade } from './cidades.entity';

@Injectable()
export class CidadesService {

    constructor(
        @InjectRepository(CidadeRepository)
        private cidadeRepository: CidadeRepository,
    ) { }


    async criarCidade(criarCidadeDTO: CriarCidadeDTO): Promise<Cidade> {
        const cidade = this.fromDTO(criarCidadeDTO);
        console.log(cidade)

        const { nome } = criarCidadeDTO;

        const cidadeEncontrado = await this.cidadeRepository.findOne({ nome });

        if (cidadeEncontrado) {
            throw new BadRequestException(`Jogador com nome: ${nome} já cadastrado`);
        }


        // await this.cidadeRepository.create(cidade);
        return await this.cidadeRepository.save(cidade);
    }

    async queryRequestCidade(
        name: string,
        estado: string,

    ): Promise<Cidade[]> {
        return await this.cidadeRepository.findByNameAndEstado(
            name,
            estado
        );
    }


    fromDTO(criarCidadeDTO: CriarCidadeDTO): Cidade {

        const { estado, nome } = criarCidadeDTO;

        const cidade = new Cidade();

        cidade.estado = estado;
        cidade.nome = nome;

        return cidade;

    }

}
