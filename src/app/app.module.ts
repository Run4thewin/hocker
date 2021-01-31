import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './views/register-form/register-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './views/inicio/inicio.component';
import { ServiciosComponent } from './views/servicios/servicios.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';

/*Importig httpclient to structure api request*/
import { HttpClientModule} from '@angular/common/http';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdministracionComponent } from './views/administracion/administracion/administracion.component';
import { MantenimientoComponent } from './views/mantenimiento/mantenimiento/mantenimiento.component';
import { LimpiezaComponent } from './views/limpieza/limpieza/limpieza.component';
import { ConserjeriaComponent } from './views/conserjeria/conserjeria/conserjeria.component';
import { VigilanciaComponent } from './views/vigilancia/vigilancia/vigilancia.component';
import { PersonalComponent } from './views/personal/personal/personal.component';
import { VentaComponent } from './views/venta/venta/venta.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    InicioComponent,
    ServiciosComponent,
    NosotrosComponent,
    AdministracionComponent,
    MantenimientoComponent,
    LimpiezaComponent,
    ConserjeriaComponent,
    VigilanciaComponent,
    PersonalComponent,
    VentaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
