import { Injectable, EventEmitter } from '@angular/core';
import {
  Observable
} from 'rxjs/Observable';
import {
  Subscription
} from 'rxjs/Subscription';
import {
  Headers,
  Http,
  Response
} from '@angular/http';

import {
  Recipe
} from './recipe';
import {
  Ingredient
} from '../shared/Ingredient';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://kitchenproject.com/german/recipes/Schnitzel/Images/schnitzel/schnitzel.jpg', [
      new Ingredient('French Fried', 2), 
      new Ingredient("Pork Meat", 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://simply-delicious-food.com/wp-content/uploads/2010/11/MG_8935.jpg', [])
  ];

  constructor(private http: Http) { }

  getRecipes() : Recipe[] {
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  } 

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeDate (){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put('https://ng2-recipebook-1b682.firebaseio.com/recipes.json', body, {
      headers: headers
    });
  }

  fetchData(){
    return this.http.get('https://ng2-recipebook-1b682.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        });
  }
}
