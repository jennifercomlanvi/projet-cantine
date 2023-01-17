import { InscriptionService } from './inscription.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})

export class InscriptionComponent implements OnInit {

  submit = false; 
  inscriptionForm:FormGroup;
  name:FormControl;
  firstname: FormControl;
  phone: FormControl;
  email: FormControl; 
  address: FormControl;
  postalCode: FormControl;
  town: FormControl;
  password: FormControl; 
  sex: FormControl;

  user:any ;

  constructor(private router: Router, private builder: FormBuilder, private inscriptionService: InscriptionService) {

    this.name = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*')
    ]);
    this.firstname = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*')
    ]);
    this.phone = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10)
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.address = new FormControl('', [
      Validators.required
    ]);
    this.postalCode = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
      Validators.pattern('[0-9]*')
    ]);
    this.town = new FormControl('', [
      Validators.required
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.sex = new FormControl('', [
      Validators.required
    ]);
    //Création du formulaire de création de compte
    this.inscriptionForm = this.builder.group({
      name: this.name,
      firstname: this.firstname,
      phone: this.phone,
      email: this.email,
      address: this.address,
      postalCode: this.postalCode,
      password: this.password,
      sex: this.sex,
      town: this.town
    });
  }

  ngOnInit(): void {
    
  }
  async inscriptionUser(){
      this.submit = true;
    //Recupération des informations saisies dans le formulaire d'enregistrement
      this.user = {
        "address": this.inscriptionForm.value.address,
        "wallet": 0,
        "postalCode": this.inscriptionForm.value.postalCode,
        "email": this.inscriptionForm.value.email,
        "isLunchLady": false,
        "password": this.inscriptionForm.value.password,
        "name": this.inscriptionForm.value.name,
        "firstname": this.inscriptionForm.value.firstname,
        "phone": this.inscriptionForm.value.phone,
        "town": this.inscriptionForm.value.town,
        "sex": this.inscriptionForm.value.sex
      }
      try {
        //Requete au service des utilisateurs
        await this.inscriptionService.createUser(this.user);
        console.log(this.user);
          // this.router.navigate(['auth/login']);
        }
        catch (error: any) {
        }
    }
    

}

// export class SignupComponent implements OnInit {

//   submitted = false; 
//   createUserForm: FormGroup; //Formulaire de creation de compte
//   name: FormControl;
//   firstname: FormControl;
//   phone: FormControl;
//   email: FormControl; 
//   adress: FormControl;
//   postalCode: FormControl;
//   image: FormControl ;
//   town: FormControl;
//   password: FormControl; 
//   passwordVerif: FormControl;
//   sex: FormControl;

//   imagePath:string = "" ;
//   image64:any;
//   base64 : string = "data:image/png;base64,";

//   people:any ;
  
//   constructor( private router: Router, private builder: FormBuilder,private userService:UserService ) {

//      //Configuration des contraintes des validators
//      this.email = new FormControl('', [
//       Validators.required,
//       Validators.email
//     ]);

//     this.password = new FormControl('', [
//       Validators.required,
//       Validators.minLength(8)
//     ]);

//     this.name = new FormControl('', [
//       Validators.required,
//       Validators.pattern('[a-zA-Z]*')
//     ]);

//     this.firstname = new FormControl('', [
//       Validators.required,
//       Validators.pattern('[a-zA-Z]*')
//     ]);

//     this.phone = new FormControl('', [
//       Validators.required,
//       Validators.pattern('[0-9]*'),
//       Validators.minLength(10),
//       Validators.maxLength(10)
//     ]);

//     this.adress = new FormControl('', [
//       Validators.required
//     ]);

//     this.postalCode = new FormControl('', [
//       Validators.required,
//       Validators.minLength(5),
//       Validators.maxLength(5),
//       Validators.pattern('[0-9]*')
//     ]);

//     this.passwordVerif = new FormControl('', [
//       Validators.required,
//       Validators.minLength(8)
//     ]);

//     this.town = new FormControl('', [
//       Validators.required
//     ]);

//     this.sex = new FormControl('', [
//       Validators.required
//     ]);

//     this.image = new FormControl('', [
//       Validators.required
//     ]);

//     //Création du formulaire de création de compte
//     this.createUserForm = this.builder.group({
//       name: this.name,
//       firstname: this.firstname,
//       phone: this.phone,
//       email: this.email,
//       adress: this.adress,
//       postalCode: this.postalCode,
//       password: this.password,
//       passwordVerif: this.passwordVerif,
//       image: this.image,
//       sex: this.sex,
//       town: this.town
//     });
//   }

//   ngOnInit(): void {}
  
// //-------------------- Creation d'un compte utilisateur ----------------------------------------------
//   async createUser(){
//     //Gestion des validateurs
//     this.submitted = true;

//     //Recupération des informations saisies dans le formulaire d'enregistrement
//     this.people = {
//       "address": this.createUserForm.value.adress,
//       "wallet": 0,
//       "postalCode": this.createUserForm.value.postalCode,
//       "email": this.createUserForm.value.email,
//       "isLunchLady": false,
//       "password": this.createUserForm.value.password,
//       "name": this.createUserForm.value.name,
//       "firstname": this.createUserForm.value.firstname,
//       "phone": this.createUserForm.value.phone,
//       "town": this.createUserForm.value.town,
//       "sex": this.createUserForm.value.sex,
//       "image": {
//         "imagePath": this.imagePath,
//         "image64": this.image64
//       }
//     }
//      try {
//       //Requete au service des utilisateurs
//       await this.userService.createUser(this.people);

//       this.router.navigate(['auth/login']);
//     }
//     catch (error: any) {
      
//     }
//   }




