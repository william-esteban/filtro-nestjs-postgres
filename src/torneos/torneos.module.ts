import { Module } from '@nestjs/common';
import { TorneosService } from './torneos.service';

@Module({
  providers: [TorneosService]
})
export class TorneosModule {}
