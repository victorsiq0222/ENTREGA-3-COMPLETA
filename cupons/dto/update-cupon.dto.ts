import { PartialType } from '@nestjs/mapped-types';
import { CreateCuponDto } from './create-cupon.dto';

export class UpdateCuponDto extends PartialType(CreateCuponDto) {
    codigo:string;
    desconto_percentual:number;
    data_de_validade:number;
}
