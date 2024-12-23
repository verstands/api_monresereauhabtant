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
import { ApplicationModule } from './application/application.module';
import { AccesapplicationModule } from './accesapplication/accesapplication.module';
import { VilleModule } from './ville/ville.module';
import { StatusModule } from './status/status.module';
import { InstallateurModule } from './installateur/installateur.module';
import { InvaliditeModule } from './invalidite/invalidite.module';
import { ArchivageModule } from './archivage/archivage.module';
import { PospectModule } from './pospect/pospect.module';
import { FonctionModule } from './fonction/fonction.module';
import { MailModule } from './mail/mail.module';
import { ModelmailModule } from './modelmail/modelmail.module';
import { PiecejointModule } from './piecejoint/piecejoint.module';
import { NotificationModule } from './notification/notification.module';
import { LoggingModule } from './logging/logging.module';
import { HistoriqueafficheModule } from './historiqueaffiche/historiqueaffiche.module';
import { FonctionmenuModule } from './fonctionmenu/fonctionmenu.module';
import { ModulesModule } from './modules/modules.module';
import { ModuleprivilegeModule } from './moduleprivilege/moduleprivilege.module';
import { EtapeworkflowModule } from './etapeworkflow/etapeworkflow.module';
import { CategorieworkflowModule } from './categorieworkflow/categorieworkflow.module';
import { WorkflowModule } from './workflow/workflow.module';
import { ModulepersoModule } from './moduleperso/moduleperso.module';
import { CategorieroleModule } from './categorierole/categorierole.module';
import { GroupeModule } from './groupe/groupe.module';
import { GroupeuserModule } from './groupeuser/groupeuser.module';


@Module({
  imports: [
    AgentModule,
    AuthModule,
    AgendaModule,
    AppelModule,
    CapamgneModule,
    CarteModule,
    CommentaireModule,
    ConclusionModule,
    ConfigurationModule,
    DossierModule,
    MenuModule,
    PresentationModule,
    ProvenanceModule,
    QuestionModule,
    RaisonModule,
    RoleModule,
    ScriptModule,
    SousmenuModule,
    TypechauffageModule,
    TypeproduitModule,
    TyperevenuModule,
    ApplicationModule,
    AccesapplicationModule,
    VilleModule,
    StatusModule,
    InstallateurModule,
    InvaliditeModule,
    ArchivageModule,
    PospectModule,
    FonctionModule,
    MailModule,
    ModelmailModule,
    PiecejointModule,
    NotificationModule,
    LoggingModule,
    HistoriqueafficheModule,
    FonctionmenuModule,
    ModulesModule,
    ModuleprivilegeModule,
    EtapeworkflowModule,
    CategorieworkflowModule,
    WorkflowModule,
    ModulepersoModule,
    CategorieroleModule,
    GroupeModule,
    GroupeuserModule,
  ],
})
export class AppModule {}
