import { MenumercrediComponent } from './components/menudelasemaine/menumercredi/menumercredi.component';
import { MenujeudiComponent } from './components/menudelasemaine/menujeudi/menujeudi.component';
import { MenuvendrediComponent } from './components/menudelasemaine/menuvendredi/menuvendredi.component';
import { MenumardiComponent } from './components/menudelasemaine/menumardi/menumardi.component';
import { MenulundiComponent } from './components/menudelasemaine/menulundi/menulundi.component';
import { UserDetailComponent } from './components/utilisateurs/user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { MenuComponent } from './components/menuduJ/menu.component';
import { UsersComponent } from './components/utilisateurs/users/users.component';
import { MenuaccueilComponent } from './components/menuaccueil/menuaccueil.component';
import { MenudelasemaineComponent } from './components/menudelasemaine/menudelasemaine.component';

const routes: Routes = [
  {path:'accueil',component:AccueilComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'utilisateur', component:UsersComponent},
  {path:'menu', component:MenuComponent},
  {path:'footers', component:FooterComponent},
  {path:'menuaccueil', component:MenuaccueilComponent},
  {path:'menudelasemaine', component:MenudelasemaineComponent},
  {path:'menulundi', component:MenulundiComponent},
  {path:'menumardi', component:MenumardiComponent},
  {path:'menumercredi', component:MenumercrediComponent},
  {path:'menujeudi', component:MenujeudiComponent},
  {path:'menuvendredi', component:MenuvendrediComponent},
  {path: 'utilisateur/:id', component :UserDetailComponent },
  {path:'', redirectTo: 'accueil', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
