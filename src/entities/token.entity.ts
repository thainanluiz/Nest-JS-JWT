import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class Token {
  @ApiProperty({ description: 'ID associated with the token' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Hash value associated with the token' })
  @IsString()
  hash: string;

  @ApiProperty({ description: 'Email address associated with the token' })
  @IsEmail()
  email: string;
}
