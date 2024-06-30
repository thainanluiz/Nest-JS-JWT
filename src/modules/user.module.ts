import { UserController } from 'src/controllers/user.controller';
import { Module } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
