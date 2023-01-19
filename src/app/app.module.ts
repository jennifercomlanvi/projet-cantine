import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/utilisateurs/users/users.component';
import { MenuComponent } from './components/menu/menu.component';
import { CourseComponent } from './course/course.component';
import { BootsrappComponent } from './bootsrapp/bootsrapp.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { MenuComponent } from './components/menuduJ/menu.component';
import { MenuaccueilComponent } from './components/menuaccueil/menuaccueil.component';
import { MenudelasemaineComponent } from './components/menudelasemaine/menudelasemaine.component';
import { UserDetailComponent } from './components/utilisateurs/user-detail/user-detail.component';
import { MenuvendrediComponent } from './components/menudelasemaine/menuvendredi/menuvendredi.component';
import { MenulundiComponent } from './components/menudelasemaine/menulundi/menulundi.component';
import { MenumardiComponent } from './components/menudelasemaine/menumardi/menumardi.component';
import { MenumercrediComponent } from './components/menudelasemaine/menumercredi/menumercredi.component';
import { MenujeudiComponent } from './components/menudelasemaine/menujeudi/menujeudi.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    AccueilComponent,
    UsersComponent,
    MenuComponent,
    CourseComponent,
    BootsrappComponent,
    FooterComponent,
    MenuaccueilComponent,
    MenudelasemaineComponent,
    UserDetailComponent,
    MenuvendrediComponent,
    MenulundiComponent,
    MenumardiComponent,
    MenumercrediComponent,
    MenujeudiComponent,

  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
