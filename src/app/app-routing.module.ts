import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { RegisterFormComponent } from './views/register-form/register-form.component';
import { ServiciosComponent } from './views/servicios/servicios.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'register', component: RegisterFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
