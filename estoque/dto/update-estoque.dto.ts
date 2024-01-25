import { PartialType } from '@nestjs/mapped-types';
import { CreateEstoqueDto } from './create-estoque.dto';

export class UpdateEstoqueDto extends PartialType(CreateEstoqueDto) {
    nome_do_produto:string;
    quantidade_em_estoque:number;
    preco_unitario:number;
    data_de_validade:number
}
