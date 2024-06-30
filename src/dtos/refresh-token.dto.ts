import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
  @ApiProperty({ description: 'The old JWT token to refresh' })
  @IsString()
  @Length(1, 500)
  oldToken: string;
}
