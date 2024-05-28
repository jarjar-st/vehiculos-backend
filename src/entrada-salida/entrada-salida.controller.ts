import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateEntradaSalidaDto } from './dto/entrada-salida.dto';
import { EntradaSalidaService } from './entrada-salida.service';

@Controller('entrada-salida')
export class EntradaSalidaController {
  constructor(private entradaSalidaService: EntradaSalidaService) {}
  @Post('registrar-entrada-salida')
  async registerEntradaSalida(@Body() dto: CreateEntradaSalidaDto) {
    return await this.entradaSalidaService.create(dto);
  }
  @Get(':id')
  async getEntradaSalidaId(@Param('id') id: number) {
    return await this.entradaSalidaService.findById(id);
  }

  @Get()
  async getEntradaSalida() {
    return await this.entradaSalidaService.findAll();
  }

  @Put(':id')
  async updateEntradaSalida(
    @Param('id') id: number,
    @Body() data: CreateEntradaSalidaDto,
  ) {
    return await this.entradaSalidaService.update(id, data);
  }

  @Delete(':id')
  async deleteEntradaSalida(@Param('id') id: number) {
    return await this.entradaSalidaService.delete(id);
  }
}
