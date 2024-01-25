import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendedorService } from './vendedor.service';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';

@Controller('vendedor')
export class VendedorController {
  constructor(private readonly vendedorService: VendedorService) {}

// Rota para criar um novo vendedor
// URL: POST /vendedor
  @Post()
  create(@Body() createVendedorDto: CreateVendedorDto) {
    return this.vendedorService.create(createVendedorDto);
  }

// Rota para obter todos os vendedores
// URL: GET /vendedor
  @Get()
  findAll() {
    return this.vendedorService.findAll();
  }

// Rota para obter detalhes de um vendedor específico
// URL: GET /vendedor/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendedorService.findOne(+id);
  }

// Rota para atualizar um vendedor específico
// URL: PATCH /vendedor/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendedorDto: UpdateVendedorDto) {
    return this.vendedorService.update(+id, updateVendedorDto);
  }

// Rota para remover um vendedor específico
// URL: DELETE /vendedor/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendedorService.remove(+id);
  }
}
