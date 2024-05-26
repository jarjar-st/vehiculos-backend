import { Module } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { VehiculoController } from './vehiculo.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [VehiculoService, PrismaService],
  controllers: [VehiculoController],
})
export class VehiculoModule {}
