import { Body, Controller, Post, Get, Param, UsePipes, ValidationPipe, Query, Delete, Put } from '@nestjs/common';

// import { Jogador } from './interfaces/cliente.interface';

import { ClientesService } from './clientes.service';


import { CriarClienteDTO } from './dtos/criar-clientes.dto';
import { AlterarNomeClienteDTO } from './dtos/alterar-nome-cliente.dto';

import { Cliente } from './clientes.entity';
import { ValidacaoParametrosPipe } from 'src/common/pipes/validation-parameters.pipe';


@Controller('clientes')
export class ClientesController {

    constructor(private clientesService: ClientesService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async criarCliente(
        @Body() criarClienteDTO: CriarClienteDTO
    ): Promise<Cliente> {
        return await this.clientesService.criarCliente(criarClienteDTO);
    }

    @Get('/request/:_id')
    async consultarJogadorPeloId(
        @Param('_id', ValidacaoParametrosPipe)
        _id: string
    ): Promise<Cliente> {
        console.log(_id)
        return await this.clientesService.getClienteById(_id);
    }

    @Get('/')
    async requestCliente(
        @Query('idJogador')
        _id: string,

        @Query('nome_completo')
        nome_completo: string,

        @Query('sexo')
        sexo: string,

        @Query('email')
        email: string,

        @Query('data_nascimento')
        data_nascimento: Date,

        @Query('idade')
        idade: number,

        // @Query('cidade')
        // cidade: string,

        @Query('created_at')
        created_at: Date,

        @Query('updated_at')
        updated_at: Date,
    ): Promise<Cliente[]> {
        console.log('COntroller', nome_completo)
        return await this.clientesService.queryRequestCliente(
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


    @Delete('/:_id')
    async deleteCliente(
        @Param('_id', ValidacaoParametrosPipe)
        _id: string
    ): Promise<void> {
        return await this.clientesService.deleteCliente(_id);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateCliente(
        @Param('_id', ValidacaoParametrosPipe)
        _id: string,

        @Body()
        alterarNomeClienteDTO: AlterarNomeClienteDTO
    ): Promise<Cliente> {
        return await this.clientesService.updateCliente(_id, alterarNomeClienteDTO);
    }

}


