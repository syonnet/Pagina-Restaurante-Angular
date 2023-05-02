import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './componentes/footer/footer.component';
import { NavInicioComponent } from './componentes/nav-inicio/nav-inicio.component';
import { E404Component } from './componentes/e404/e404.component';
import { PlatosComponent } from './componentes/platos/platos.component';
import { SaboresComponent } from './componentes/sabores/sabores.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';

@NgModule({
  declarations: [
    AppComponent,
    
    FooterComponent,
         NavInicioComponent,
         E404Component,
         PlatosComponent,
         SaboresComponent,
         BlogComponent,
         ContactoComponent,
         HomeComponent,
         AcercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
