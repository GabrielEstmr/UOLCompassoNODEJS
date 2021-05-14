import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteRepository } from './clientes.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([ClienteRepository]),
    ],
    controllers: [ClientesController],
    providers: [ClientesService],
    exports: [ClientesService]

})


export class ClientesModule { }
