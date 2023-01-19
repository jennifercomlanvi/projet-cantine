import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
connexionForm= this.fb.group({
  email:['', [Validators.email,Validators.required]],
  password:['', [Validators.minLength(8),Validators.required]]
})
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
