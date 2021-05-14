import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { CidadesController } from './cidades.controller';
import { CidadesService } from './cidades.service';
import { CidadeRepository } from './cidades.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CidadeRepository]),
  ],
  controllers: [CidadesController],
  providers: [CidadesService],
  exports: [CidadesService]


})

export class CidadesModule { }




  //   imports: [
  //     TypeOrmModule.forFeature([ClienteRepository]),
  // ],
  // controllers: [ClientesController],
  // providers: [ClientesService],
  // exports: [ClientesService]
