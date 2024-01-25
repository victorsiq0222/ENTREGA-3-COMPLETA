import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CuponsService } from './cupons.service';
import { CreateCuponDto } from './dto/create-cupon.dto';
import { UpdateCuponDto } from './dto/update-cupon.dto';

@Controller('cupons')
export class CuponsController {
  constructor(private readonly cuponsService: CuponsService) {}
// Rota para criar um novo cupom
// URL: POST /cupons
  @Post()
  create(@Body() createCuponDto: CreateCuponDto) {
    return this.cuponsService.create(createCuponDto);
  }

// Rota para obter todos os cupons
// URL: GET /cupons
  @Get()
  findAll() {
    return this.cuponsService.findAll();
  }

// Rota para obter detalhes de um cupom específico
// URL: GET /cupons/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuponsService.findOne(+id);
  }

// Rota para atualizar um cupom específico
// URL: PATCH /cupons/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCuponDto: UpdateCuponDto) {
    return this.cuponsService.update(+id, updateCuponDto);
  }

// Rota para remover um cupom específico
// URL: DELETE /cupons/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuponsService.remove(+id);
  }
}
