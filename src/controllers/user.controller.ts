import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseDto } from 'src/dtos/response.dto';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { UserService } from 'src/services/user.service';

@ApiTags('user')
@Controller('v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'Users retrieved successfully',
    type: ResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllUsers(): Promise<ResponseDto> {
    try {
      const users = await this.userService.getAllUsers();

      return {
        timestamp: new Date().getTime(),
        status: HttpStatus.OK,
        message: 'Users retrieved successfully',
        data: users,
      };
    } catch (error) {
      console.error('Get all users error:', error);

      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: error.message,
      });
    }
  }
}
