import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './componentes/blog/blog.component';
import { PlatosComponent } from './componentes/platos/platos.component';
import { SaboresComponent } from './componentes/sabores/sabores.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { E404Component } from './componentes/e404/e404.component';

const routes: Routes = [
  {path:'blog', component:BlogComponent},
  {path:'home', component:HomeComponent},
  {path:'platos', component:PlatosComponent},
  {path:'sabores',component:SaboresComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'**',component:E404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
