import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}
// Rota para criar um novo usuário
// URL: POST /usuarios

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

// Rota para obter todos os usuários
// URL: GET /usuarios

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

// Rota para obter detalhes de um usuário específico
// URL: GET /usuarios/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

// Rota para atualizar um usuário específico
// URL: PATCH /usuarios/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

// Rota para remover um usuário específico
// URL: DELETE /usuarios/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
