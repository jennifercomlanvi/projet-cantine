import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {path:'connexion', component:ConnexionComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'menu', component:MenuComponent},
  {path:'', redirectTo: 'connexion', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
