import { IsEmail, IsString, MaxLength, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TokenPayloadDto {
  @ApiProperty({ description: 'Email address associated with the token' })
  @IsEmail()
  @IsDefined()
  email: string;

  @ApiProperty({ description: 'Hash value associated with the token' })
  @IsString()
  @MaxLength(255)
  @IsDefined()
  hash: string;
}
