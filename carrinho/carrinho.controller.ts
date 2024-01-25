import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}
// Rota para adicionar um novo item ao carrinho
// URL: POST /carrinho
  @Post()
  create(@Body() createCarrinhoDto: CreateCarrinhoDto) {
    return this.carrinhoService.create(createCarrinhoDto);
  }

// Rota para obter todos os itens no carrinho
// URL: GET /carrinho
  @Get()
  findAll() {
    return this.carrinhoService.findAll();
  }

// Rota para obter detalhes de um item específico no carrinho
// URL: GET /carrinho/:id

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carrinhoService.findOne(+id);
  }

// Rota para atualizar um item específico no carrinho
// URL: PATCH /carrinho/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarrinhoDto: UpdateCarrinhoDto) {
    return this.carrinhoService.update(+id, updateCarrinhoDto);
  }

// Rota para remover um item específico do carrinho
// URL: DELETE /carrinho/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carrinhoService.remove(+id);
  }
}
