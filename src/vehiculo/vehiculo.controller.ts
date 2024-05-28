import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { CreateVehiculoDto } from './dto/vehiculo.dto';

@Controller('vehiculo')
export class VehiculoController {
  constructor(private vehiculoService: VehiculoService) {}
  @Post('registrar-vehiculo')
  async registerUser(@Body() dto: CreateVehiculoDto) {
    return await this.vehiculoService.create(dto);
  }
  @Get(':id')
  async getVehiculoId(@Param('id') id: string) {
    return await this.vehiculoService.findById(id);
  }

  @Get()
  async getVehiculos() {
    return await this.vehiculoService.findAll();
  }
}
