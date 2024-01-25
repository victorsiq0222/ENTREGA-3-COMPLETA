import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { CuponsModule } from './cupons/cupons.module';
import { ProdutosModule } from './produtos/produtos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { EstoqueModule } from './estoque/estoque.module';

@Module({
  imports: [UsuarioModule, VendedorModule, CuponsModule, ProdutosModule, PedidosModule, CarrinhoModule, EstoqueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
