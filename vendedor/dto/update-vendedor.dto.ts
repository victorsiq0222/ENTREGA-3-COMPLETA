import { PartialType } from '@nestjs/mapped-types';
import { CreateVendedorDto } from './create-vendedor.dto';

export class UpdateVendedorDto extends PartialType(CreateVendedorDto) {
    nome:string;
    email:string;
    telefone:number;
    senha:string;

    

}
//não deixei a nota_vendedor justamente para o vendedor não poder alterar este quesito .