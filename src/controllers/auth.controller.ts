import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiProperty,
} from '@nestjs/swagger';
import { ResponseDto } from 'src/dtos/response.dto';
import { LocalAuthGuard } from 'src/guards/local.guard';
import { AuthService } from 'src/services/auth.service';

class LoginDto {
  @ApiProperty({ type: String, example: 'johndoe@example.com' })
  email: string;

  @ApiProperty({ type: String, example: 'password123' })
  password: string;
}

@ApiTags('auth')
@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'User login' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 200,
    description: 'User login successful',
    type: ResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req): Promise<ResponseDto> {
    try {
      const { email, id } = req.user;
      const token = await this.authService.login(id, email);

      return {
        message: 'User login successful',
        data: { token },
        status: HttpStatus.OK,
        timestamp: new Date().getTime(),
      };
    } catch (error) {
      console.error('Login error:', error);

      const errorMessage =
        error instanceof HttpException
          ? error.message
          : 'Internal Server Error';

      throw new HttpException(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: new Error(errorMessage),
      });
    }
  }
}
