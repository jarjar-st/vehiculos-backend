import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { EntradaSalidaService } from './entrada-salida.service';
import { EntradaSalidaController } from './entrada-salida.controller';

@Module({
  providers: [EntradaSalidaService, PrismaService],
  controllers: [EntradaSalidaController],
})
export class EntradaSalidaModule {}
