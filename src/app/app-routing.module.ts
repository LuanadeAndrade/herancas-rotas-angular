import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { QuadradoComponent } from './components/quadrado/quadrado.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { TestesPipesComponent } from './components/testes-pipes/testes-pipes.component';

const routes: Routes = [ 
  
{path: 'lista', component: ListaNumerosComponent},
{path: 'quadrado', component: QuadradoComponent},
{path: 'conteudo', component: ConteudoComponent},
{path: 'pipe', component: TestesPipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
