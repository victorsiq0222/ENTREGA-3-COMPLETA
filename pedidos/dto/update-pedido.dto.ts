import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
    data_do_pedido:number;
    quantidade:number;
    total:number;
    status:string;
    experiencia_compra:number;
}

