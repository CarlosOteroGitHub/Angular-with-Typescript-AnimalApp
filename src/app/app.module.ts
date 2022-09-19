import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//RUTAS
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { AnimalesService } from './servicios/animales.service';

//COMPONENTES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { AnimalesComponent } from './componentes/animales/animales.component';
import { AnimalComponent } from './componentes/animal/animal.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AnimalesComponent,
    AnimalComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    AnimalesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
