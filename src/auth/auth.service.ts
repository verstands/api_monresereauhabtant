import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthBody } from 'src/dto/auth-body.dto';
import { PrismaService } from 'src/prisma.service';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from 'src/interface/userperload';
import { AgentInterface } from 'src/dto/agent.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaservice: PrismaService,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
  ) {}

  async login(authBody: AuthBody) {
    const hashePassword = await this.hasPassword(authBody.password);
    console.log(hashePassword, authBody.password);  
    const existeEmail = await this.prismaservice.agents.findUnique({
      where: {
        email: authBody.email,
      },
      include : {
        fonction : true,
        
      }
    });

    if (!existeEmail) {
      throw new HttpException("Email n'existe pas", HttpStatus.CONFLICT);
    }
    const isPasswordValide = await this.isPasswordValide(
      authBody.password,
      existeEmail.mdp,
    );

    if (!isPasswordValide) {
      throw new HttpException(
        "Le mot de passe n'est pas valide",
        HttpStatus.CONFLICT,
      );
    }

    const application = await this.prismaservice.accesapplications.findMany({
      where: {
        id_user: existeEmail.id_fonction,
      },
      include: {
        application: true,
        Accesapplications: true,
      },
    });  

    /*const menu = await this.prismaservice.fonctionMenu.findMany({
      where : {
        idfonction : existeEmail.id_fonction
      },
      include : {
        fonction : true
      }
    })

    const module = await this.prismaservice.modules.findMany({
        where : {
          id_menu : menu[0].idmenu,
        },
        include : {
          
        }
    }) */

    const payload: UserPayload = { userid: existeEmail.id };
    const accessToken = await this.jwtService.sign(payload);

    return {
      access_token: accessToken,
      application: application,
      agent: existeEmail,
    };
  }

  private async hasPassword(password: string) {
    const hashePassword = await hash(password, 10);
    return hashePassword;
  }

  private async isPasswordValide(password: string, hashPassword: string) {
    const isPasswordValide = await compare(password, hashPassword);
    return isPasswordValide;
  }

  private async authenticateUser(userid: string) {
    const payload: UserPayload = { userid };
    return {
      access_token: await this.jwtService.sign(payload),
    };
  }

  async create(agentinfrface: AgentInterface) {
    const hashePassword = await this.hasPassword(agentinfrface.mdp);
    const existeEmail = await this.prismaservice.agents.findUnique({
      where: {
        email: agentinfrface.email,
      },
    });

    if (existeEmail) {
      throw new HttpException(
        'Un compte existe déjà a cet adresse email',
        HttpStatus.CONFLICT,
      );
    }

    const createAgent = await this.prismaservice.agents.create({
      data: {
        email: agentinfrface.email,
        mdp: hashePassword,
        nom: agentinfrface.nom,
        prenom: agentinfrface.prenom,
        statut: agentinfrface.statut,
        id_fonction: agentinfrface.id_fonction,
      },
    });

    await this.mailerService.sendMail({
      to: agentinfrface.email,
      subject:
        'Bienvenue chez Mon Réseau Habitat -- Votre compte a été créé avec succès',
      html: `
        <h1>Bienvenue chez Mon Réseau Habitat!</h1>
        <p>Bonjour ${agentinfrface.prenom},</p>
        <p>Nous sommes ravis de vous accueillir au sein de Mon Réseau Habitat, votre partenaire de confiance pour la gestion de la relation client.</p>
        <p>Votre compte a été créé avec succès. Vous pouvez maintenant accéder à notre plateforme en utilisant l'adresse email que vous avez fournie lors de l'inscription. Pour des raisons de sécurité, nous vous recommandons de modifier votre mot de passe dès que possible en cliquant sur le lien ci-dessous :</p>
        <p><a href="http://localhost:5173/resetpassword/${agentinfrface.email}"><i></i>localhost:5173/resetpassword/${agentinfrface.email}</a></p>
        <p>Ce lien vous permettra de définir un nouveau mot de passe pour sécuriser votre compte.</p>
        <p>Si vous avez des questions ou besoin d'assistance, notre équipe est à votre disposition pour vous aider.</p>
        <p>Merci de votre confiance, et bienvenue à bord !</p>
        <p>Cordialement,</p>
        <p>L'équipe Mon Réseau Habitat</p> 
      `,
    });
    return createAgent;
  }

  async resetAgent({email, newPassword }: { email: string; newPassword: string; }): Promise<AgentInterface> {
    const existingAgent = await this.prismaservice.agents.findFirst({
      where: {
        email,
      },
    });
  
    if (!existingAgent) {
      throw new HttpException(
        'Aucun compte trouvé avec cet ID et cet email',
        HttpStatus.NOT_FOUND,
      );
    }
    const hashePassword = await this.hasPassword(newPassword);
    const updatedAgent = await this.prismaservice.agents.update({
      where: {
        email,
      },
      data: {
        mdp: hashePassword,
      },
    });
  
    return updatedAgent;
  }
  
}
