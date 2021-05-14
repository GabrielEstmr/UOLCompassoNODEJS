import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CriarClienteDTO {

    @IsNotEmpty()
    @IsString()
    nome_completo: string;

    @IsNotEmpty()
    @IsString()
    sexo: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    data_nascimento: Date;

    @IsNotEmpty()
    idade: number;

    // @IsNotEmpty()
    // @IsString()
    // cidade: string;

}