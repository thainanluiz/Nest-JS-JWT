import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_KEY,
    });
  }

  async validate(payload: any): Promise<{
    id: string;
    email: string;
  }> {
    try {
      const user = await this.userService.getUserByEmail(payload.email);

      if (!user) {
        throw new UnauthorizedException('Unauthorized');
      }

      return { id: payload.id, email: payload.email };
    } catch (error) {
      throw new UnauthorizedException('Unauthorized');
    }
  }
}
