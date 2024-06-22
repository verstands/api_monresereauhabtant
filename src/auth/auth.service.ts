import { Injectable } from '@nestjs/common';
import { AuthBody } from 'src/interface/auth-body.interface';
import { PrismaService } from 'src/prisma.service';
import { hash, compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly prismaservice: PrismaService) {}

  async login(authBody: AuthBody) {
    const existeEmail = await this.prismaservice.agents.findUnique({
      where: {
        email: authBody.email,
      },
    });

    if (!existeEmail) {
      throw new Error("Email n'existe pas");
    }
    console.log(this.comparePassword(authBody.password, existeEmail.mdp));

    const isPassword = await this.comparePassword(
      authBody.password,
      existeEmail.mdp,
    );

    if (!isPassword) {
      throw new Error("Le mot de passe n'est pas valide");
    }
    return existeEmail;
  }

  private async comparePassword(password: string, hashedPassword: string) {
    return await compare(password, hashedPassword);
  }
  private async hasPassword(password: string) {
    const hashePassword = await hash(password, 10);
    return hashePassword;
  }
}