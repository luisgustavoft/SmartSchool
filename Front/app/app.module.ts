import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { ListaComponent } from './lista/lista.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [		
    AppComponent,
    AlunosComponent,
      ProfessoresComponent,
      PerfilComponent,
      DashboardComponent,
      NavComponent,
      TituloComponent,
      DisciplinasComponent,
      ListaComponent,
      PrincipalComponent
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpClientModule
    ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
