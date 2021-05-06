import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
//import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";
//import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const APP_ROUTES: Routes = [
   { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},
   { path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)},
  // { path: 'cursos', component: CursosComponent},
  //  { path: 'curso/:id', component: CursoDetalheComponent},
    { path: 'login', component: LoginComponent},
  //  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    { path: '', component: HomeComponent},
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}