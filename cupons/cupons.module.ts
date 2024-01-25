import { Module } from '@nestjs/common';
import { CuponsService } from './cupons.service';
import { CuponsController } from './cupons.controller';

@Module({
  controllers: [CuponsController],
  providers: [CuponsService],
})
export class CuponsModule {}
