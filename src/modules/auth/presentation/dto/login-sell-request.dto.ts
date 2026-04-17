import { IsOptional, IsString, MaxLength } from 'class-validator';
import { LoginRequestDto } from './login-request.dto';

/** Login desde punto de venta: mismas credenciales; campos extra opcionales para evolución. */
export class LoginSellRequestDto extends LoginRequestDto {
  @IsOptional()
  @IsString()
  @MaxLength(128)
  posId?: string;
}
