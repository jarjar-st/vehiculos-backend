import { IsDate, IsString } from 'class-validator';

export class CreateEntradaSalidaDto {
  @IsString()
  vehiculoId: string;

  @IsString()
  nombreConductor: string;

  @IsDate()
  fechaEntrada: Date;

  @IsDate()
  fechaSalida: Date;

  @IsString()
  hora: string;

  @IsString()
  kilometraje: string;
}
