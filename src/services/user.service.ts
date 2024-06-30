import { Injectable, NotFoundException } from '@nestjs/common';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: '1234567',
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@mail.com',
      password: '1234567',
    },
  ];

  constructor() {}

  getAllUsers(): Omit<User, 'password'>[] {
    return this.users.map(({ id, firstName, lastName, email }) => ({
      id,
      firstName,
      lastName,
      email,
    }));
  }

  getUserByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return password === hash;
  }
}
