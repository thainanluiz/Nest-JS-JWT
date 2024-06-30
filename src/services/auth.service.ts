import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/services/user.service';
import { User } from 'src/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    try {
      const user = await this.userService.getUserByEmail(email);

      if (!user) {
        throw new NotFoundException('User not found');
      }

      const passwordMatch = await this.userService.compare(
        password,
        user.password,
      );

      if (!passwordMatch) {
        throw new UnauthorizedException('Incorrect password');
      }

      const { password: _, ...result } = user;
      return result;
    } catch (error) {
      console.error('Authentication error:', error);
      return null;
    }
  }

  async login(id: string, email: string): Promise<string> {
    const token = this.jwtService.sign({ id, email });
    return token;
  }
}
