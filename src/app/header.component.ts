import { Component } from '@angular/core';
import 'rxjs/Rx';

import {
  DropdownDirective
} from './dropdown.directive';
import {
  RecipeService
} from './recipes/recipe.service';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) { }

  onStore() {
    this.recipeService.storeDate()
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

  onFetch() {
    this.recipeService.fetchData();
  }
}
