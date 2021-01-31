import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './views/administracion/administracion/administracion.component';
import { ConserjeriaComponent } from './views/conserjeria/conserjeria/conserjeria.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { LimpiezaComponent } from './views/limpieza/limpieza/limpieza.component';
import { MantenimientoComponent } from './views/mantenimiento/mantenimiento/mantenimiento.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { PersonalComponent } from './views/personal/personal/personal.component';
import { RegisterFormComponent } from './views/register-form/register-form.component';
import { ServiciosComponent } from './views/servicios/servicios.component';
import { VentaComponent } from './views/venta/venta/venta.component';
import { VigilanciaComponent } from './views/vigilancia/vigilancia/vigilancia.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent, 
    children: [
      { path: 'administracion', component: AdministracionComponent },
      { path: 'limpieza', component: LimpiezaComponent },
      { path: 'conserjeria', component: ConserjeriaComponent },
      { path: 'vigilancia', component: VigilanciaComponent },
      { path: 'personal', component: PersonalComponent },
      { path: 'mantenimiento', component: MantenimientoComponent },
      { path: 'venta', component: VentaComponent },
    ],
},
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'register', component: RegisterFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
