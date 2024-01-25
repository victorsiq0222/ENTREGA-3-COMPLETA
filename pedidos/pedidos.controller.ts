import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}
// Rota para criar um novo pedido
// URL: POST /pedidos
  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidosService.create(createPedidoDto);
  }

// Rota para obter todos os pedidos
// URL: GET /pedidos
  @Get()
  findAll() {
    return this.pedidosService.findAll();
  }

// Rota para obter detalhes de um pedido específico
// URL: GET /pedidos/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidosService.findOne(+id);
  }

// Rota para atualizar um pedido específico
// URL: PATCH /pedidos/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidosService.update(+id, updatePedidoDto);
  }

// Rota para remover um pedido específico
// URL: DELETE /pedidos/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidosService.remove(+id);
  }
}
