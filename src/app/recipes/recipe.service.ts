import { Injectable } from '@angular/core';

import {
  Recipe
} from './recipe';
import {
  Ingredient
} from '../shared/Ingredient';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://kitchenproject.com/german/recipes/Schnitzel/Images/schnitzel/schnitzel.jpg', [
      new Ingredient('French Fried', 2), 
      new Ingredient("Pork Meat", 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://simply-delicious-food.com/wp-content/uploads/2010/11/MG_8935.jpg', [])
  ];

  constructor() { }

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
}
