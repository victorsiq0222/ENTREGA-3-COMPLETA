import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  //Rota para Criar um Novo Item no Estoque:
  // URL: POST /estoque
  @Post()
  create(@Body() createEstoqueDto: CreateEstoqueDto) {
    return this.estoqueService.create(createEstoqueDto);
  }
  
//Rota para Obter Todos os Itens do Estoque:
// URL: GET /estoque
  @Get()
  findAll() {
    return this.estoqueService.findAll();
  }
  
//Rota para Obter Detalhes de um Item Específico no Estoque:
// URL: GET /estoque/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estoqueService.findOne(+id);
  }

//Rota para Atualizar um Item Específico no Estoque:
// URL: PATCH /estoque/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstoqueDto: UpdateEstoqueDto) {
    return this.estoqueService.update(+id, updateEstoqueDto);
  }

//Rota para Remover um Item Específico do Estoque:
// URL: DELETE /estoque/:i
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estoqueService.remove(+id);
  }
}
