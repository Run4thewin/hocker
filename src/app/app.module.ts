import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './views/register-form/register-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './views/inicio/inicio.component';
import { ServiciosComponent } from './views/servicios/servicios.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ContactenosComponent } from './views/contactenos/contactenos.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    InicioComponent,
    ServiciosComponent,
    NosotrosComponent,
    ContactenosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
