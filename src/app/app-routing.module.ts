import { UserDetailComponent } from './components/utilisateurs/user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
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
  {path:'menuaccueil', component:MenuaccueilComponent},
  {path:'menudelasemaine', component:MenudelasemaineComponent},
  {path: 'utilisateur/:id', component :UserDetailComponent },
  {path:'', redirectTo: 'accueil', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
