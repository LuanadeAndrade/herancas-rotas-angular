import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentPaiComponent } from './components/component-pai/component-pai.component';
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { QuadradoComponent } from './components/quadrado/quadrado.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TestesPipesComponent } from './components/testes-pipes/testes-pipes.component';
import { CodigoConvitePipe } from './pipe/codigo-convite.pipe';
import { CpfCnpjPipe } from './pipe/cpf-cnpj.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentPaiComponent,
    ComponenteFilhoComponent,
    ListaNumerosComponent,
    QuadradoComponent,
    CuboComponent,
    ConteudoComponent,
    TestesPipesComponent,
    CodigoConvitePipe,
    CpfCnpjPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
