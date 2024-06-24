import { Module } from '@nestjs/common';
import { AgentModule } from './agent/agent.module';
import { AuthModule } from './auth/auth.module';
import { AgendaModule } from './agenda/agenda.module';
import { AppelModule } from './appel/appel.module';
import { CapamgneModule } from './capamgne/capamgne.module';
import { CarteModule } from './carte/carte.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { ConclusionModule } from './conclusion/conclusion.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { DossierModule } from './dossier/dossier.module';
import { MenuModule } from './menu/menu.module';
import { PresentationModule } from './presentation/presentation.module';
import { ProvenanceModule } from './provenance/provenance.module';
import { QuestionModule } from './question/question.module';
import { RaisonModule } from './raison/raison.module';
import { RoleModule } from './role/role.module';
import { ScriptModule } from './script/script.module';
import { SousmenuModule } from './sousmenu/sousmenu.module';
import { TypechauffageModule } from './typechauffage/typechauffage.module';
import { TypeproduitModule } from './typeproduit/typeproduit.module';
import { TyperevenuModule } from './typerevenu/typerevenu.module';

@Module({
  imports: [AgentModule, AuthModule, AgendaModule, AppelModule, CapamgneModule, CarteModule, CommentaireModule, ConclusionModule, ConfigurationModule, DossierModule, MenuModule, PresentationModule, ProvenanceModule, QuestionModule, RaisonModule, RoleModule, ScriptModule, SousmenuModule, TypechauffageModule, TypeproduitModule, TyperevenuModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
