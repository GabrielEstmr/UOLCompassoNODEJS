import { IsNotEmpty, IsString } from 'class-validator';

export class CriarCidadeDTO {

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    estado: string;

}