import { IsOptional, IsString } from 'class-validator';

export class CreateVehiculoDto {
  @IsString()
  marca: string;

  @IsString()
  modelo: string;

  @IsString()
  placa: string;

  @IsOptional()
  @IsString()
  imagen: string;
}
