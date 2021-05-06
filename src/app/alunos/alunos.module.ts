import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosService } from './alunos.service';
import { AlunosComponent } from './alunos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    imports: [
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    exports: [],
    providers: [AlunosService],
})
export class AlunosModule {}