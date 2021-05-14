import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './clientes.entity';
import { ClienteRepository } from './clientes.repository';
import { CriarClienteDTO } from './dtos/criar-clientes.dto';
import { AlterarNomeClienteDTO } from './dtos/alterar-nome-cliente.dto';

@Injectable()
export class ClientesService {

    constructor(
        @InjectRepository(ClienteRepository)
        private clienteRepository: ClienteRepository,
    ) { }

    async getClienteById(_id: string): Promise<Cliente | null> {

        const data = await this.clienteRepository.findOne(_id);

        if (!data) {
            throw new NotFoundException(`Jogador com id ${_id} não encontrado`);
        }

        return data;
    }

    async criarCliente(criarClienteDTO: CriarClienteDTO): Promise<Cliente> {

        const cliente = this.fromDTO(criarClienteDTO);
        console.log(cliente)

        const { email } = criarClienteDTO;

        const clienteEncontrado = await this.clienteRepository.findOne({ email });

        if (clienteEncontrado) {
            throw new BadRequestException(`Jogador com email: ${email} já cadastrado`);
        }


        // await this.clienteRepository.create(cliente);
        return await this.clienteRepository.save(cliente);
    }




    async queryRequestCliente(
        _id: string,
        nome_completo: string,
        sexo: string,
        email: string,
        data_nascimento: Date,
        idade: number,
        // cidade: string,
        created_at: Date,
        updated_at: Date,

    ): Promise<Cliente[]> {
        return await this.clienteRepository.findByIdAndNameAndSexoAndEmailAndDataNascimentoAndIdadeAndCidadeAndCreatedAndUpdated(
            _id,
            nome_completo,
            sexo,
            email,
            data_nascimento,
            idade,
            // cidade,
            created_at,
            updated_at,
        );
    }


    async deleteCliente(_id: string): Promise<void> {
        this.clienteRepository.delete({ _id });
    }


    async updateCliente(_id: string, alterarNomeClienteDTO: AlterarNomeClienteDTO): Promise<Cliente> {
        const data = await this.clienteRepository.findOne(_id);

        if (!data) {
            throw new NotFoundException(`Jogador com id ${_id} não encontrado`);
        }

        this.clienteRepository.findOneAndUpdate({ _id }, { nome_completo: alterarNomeClienteDTO.nome_completo });

        return
    }

    fromDTO(criarClienteDTO: CriarClienteDTO): Cliente {

        const { cidade, data_nascimento, email, idade, nome_completo, sexo } = criarClienteDTO;

        const cliente = new Cliente();

        // cliente.cidade = cidade;
        cliente.data_nascimento = data_nascimento;
        cliente.email = email;
        cliente.idade = idade;
        cliente.nome_completo = nome_completo;
        cliente.sexo = sexo;

        return cliente;

    }

    fromDTOAlterarNomeCliente(alterarNomeClienteDTO: AlterarNomeClienteDTO): Cliente {

        const { nome_completo } = alterarNomeClienteDTO;

        const cliente = new Cliente();

        cliente.nome_completo = nome_completo;

        return cliente;

    }
}
