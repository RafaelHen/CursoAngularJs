import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CursosService } from './cursos/cursos.service';
//import { routing } from './app.routing'
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    //CursosComponent,
    HomeComponent,
    LoginComponent,
   //CursoDetalheComponent,
   // CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CursosModule
    //routing
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
