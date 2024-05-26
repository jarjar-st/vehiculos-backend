import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { VehiculoModule } from './vehiculo/vehiculo.module';

@Module({
  imports: [ConfigModule.forRoot(), VehiculoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
