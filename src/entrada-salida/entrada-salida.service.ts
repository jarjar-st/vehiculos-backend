import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateEntradaSalidaDto } from './dto/entrada-salida.dto';

@Injectable()
export class EntradaSalidaService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEntradaSalidaDto) {
    const newVehiculo = await this.prisma.entradaSalida.create({
      data: {
        ...dto,
      },
    });
    return newVehiculo;
  }

  async findById(id: number) {
    return await this.prisma.entradaSalida.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll() {
    return await this.prisma.entradaSalida.findMany();
  }

  async update(id: number, data: CreateEntradaSalidaDto) {
    return await this.prisma.entradaSalida.update({
      where: { id },
      data: {
        ...data,
      },
    });
  }

  async delete(id: number) {
    return await this.prisma.entradaSalida.delete({
      where: { id },
    });
  }
}
