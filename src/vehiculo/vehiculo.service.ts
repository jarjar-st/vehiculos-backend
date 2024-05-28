import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateVehiculoDto } from './dto/vehiculo.dto';

@Injectable()
export class VehiculoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateVehiculoDto) {
    const newVehiculo = await this.prisma.vehiculo.create({
      data: {
        ...dto,
      },
    });
    return newVehiculo;
  }

  async findById(id: string) {
    return await this.prisma.vehiculo.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll() {
    return await this.prisma.vehiculo.findMany();
  }

  async update(id: string, data: CreateVehiculoDto) {
    return await this.prisma.vehiculo.update({
      where: { id },
      data: {
        ...data,
      },
    });
  }

  async delete(id: string) {
    return await this.prisma.vehiculo.delete({
      where: { id },
    });
  }
}
