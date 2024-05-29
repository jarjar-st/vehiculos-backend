import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateEntradaSalidaDto } from './dto/entrada-salida.dto';

@Injectable()
export class EntradaSalidaService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEntradaSalidaDto) {
    const newEntradaSalida = await this.prisma.entradaSalida.create({
      data: {
        ...dto,
      },
    });
    return newEntradaSalida;
  }

  async findById(id: number) {
    return await this.prisma.entradaSalida.findUnique({
      where: {
        id,
      },
    });
  }

  async getAll() {
    return this.prisma.entradaSalida.findMany({
      include: {
        Vehiculo: true,
      },
    });
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
