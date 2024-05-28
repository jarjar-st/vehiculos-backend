import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateEntradaSalidaDto {
  @IsString()
  vehiculoId: string;

  @IsString()
  nombreConductor: string;

  @IsDate()
  fecha: Date;

  @IsString()
  hora: string;

  @IsNumber()
  kilometraje: number;
}
