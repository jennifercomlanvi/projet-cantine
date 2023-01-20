import { Router } from '@angular/router';
import { MenusemaineService } from './../menusemaine.service';
import { Component, OnInit } from '@angular/core';
import { ingrediends } from '../../menuduJ/ingredients';
import { meal } from '../../menuduJ/meal';
import { MenuDJ } from '../../menuduJ/menudj';

@Component({
  selector: 'app-menumardi',
  templateUrl: './menumardi.component.html',
  styleUrls: ['./menumardi.component.scss']
})
export class MenumardiComponent implements OnInit {
menudj!:MenuDJ[];
  menu: MenuDJ= new MenuDJ();
  mealdj!:meal[];
  meal: meal= new meal();
  ingredientdj!:ingrediends[];
  ingrediend : ingrediends = new ingrediends();
  constructor(private menuService:MenusemaineService, route:Router) { }

  ngOnInit(): void {
    this.menuService.getMenumardi().subscribe(data=>{
      console.log(data)
      if(data){
        this.menudj = data
        console.log(this.menudj)
        for(let i of this.menudj)
        {
          this.mealdj = i.meals
          for(let j of  this.mealdj)
          {
            this.ingredientdj = j.ingredients
          }
        }
        console.log(this.mealdj)
      }
    })
  }

}

