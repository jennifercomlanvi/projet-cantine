import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { UsersComponent } from './components/utilisateurs/users/users.component';

const routes: Routes = [
  {path:'accueil',component:AccueilComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'utilisateur', component:UsersComponent},
  {path:'', redirectTo: 'accueil', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
