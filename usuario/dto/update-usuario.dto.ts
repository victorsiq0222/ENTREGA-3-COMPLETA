import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';


//dados que o usuário poderá atualizar .
export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    endereco:string;
    senha:string;
    email:string;
    telefone :number;
    data_nascimento: number;
    nome: string;
}

