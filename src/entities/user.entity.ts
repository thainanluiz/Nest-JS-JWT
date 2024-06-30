import { IsString, IsEmail, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ description: 'ID of the user' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'First name of the user' })
  @IsString()
  @Length(1, 50)
  firstName: string;

  @ApiProperty({ description: 'Last name of the user' })
  @IsString()
  @Length(1, 50)
  lastName: string;

  @ApiProperty({ description: 'Email address of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Password of the user' })
  @IsString()
  @Length(6, 255)
  password?: string;
}
