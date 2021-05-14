import { Controller, Post, Get, Query, Body, UsePipes, ValidationPipe, Inject } from '@nestjs/common';

import { Cidade } from './cidades.entity';

import { CidadesService } from './cidades.service';

import { CriarCidadeDTO } from './dtos/criar-cidade.dto';

@Controller('cidades')
export class CidadesController {

    constructor(
        private cidadesService: CidadesService
    ) { }

    @Post()
    @UsePipes(ValidationPipe)
    async criarCidade(

        @Body()
        criarCidadeDTO: CriarCidadeDTO

    ): Promise<Cidade> {
        return await this.cidadesService.criarCidade(criarCidadeDTO);
    }

    @Get()
    async requestCidade(

        @Query('estado')
        estado: string,

        @Query('nome')
        nome: string,

    ): Promise<Cidade[]> {

        return await this.cidadesService.queryRequestCidade(
            nome,
            estado,
        );

    }
}
