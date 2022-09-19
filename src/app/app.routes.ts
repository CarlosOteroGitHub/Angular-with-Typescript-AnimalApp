import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { AnimalesComponent } from './componentes/animales/animales.component';
import { AnimalComponent } from './componentes/animal/animal.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'animales', component: AnimalesComponent },
  { path: 'animal/:id', component: AnimalComponent },
  { path: 'buscador/:texto', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);