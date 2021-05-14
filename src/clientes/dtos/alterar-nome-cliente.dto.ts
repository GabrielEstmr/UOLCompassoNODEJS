import { IsNotEmpty, IsString } from 'class-validator';

export class AlterarNomeClienteDTO {

    @IsNotEmpty()
    @IsString()
    nome_completo: string;

}