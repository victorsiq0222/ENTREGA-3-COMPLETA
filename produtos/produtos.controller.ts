import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}
// Rota para criar um novo produto
// URL: POST /produtos
  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

// Rota para obter todos os produtos
// URL: GET /produtos
  @Get()
  findAll() {
    return this.produtosService.findAll();
  }

// Rota para obter detalhes de um produto específico
// URL: GET /produtos/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(+id);
  }

// Rota para atualizar um produto específico
// URL: PATCH /produtos/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtosService.update(+id, updateProdutoDto);
  }

// Rota para remover um produto específico
// URL: DELETE /produtos/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosService.remove(+id);
  }
}
