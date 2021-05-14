import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './clientes/clientes.module';
import { CidadesModule } from './cidades/cidades.module';
import * as typeOrmConfig from './config/typeorm.config';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ClientesModule,
    CidadesModule
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule { }
