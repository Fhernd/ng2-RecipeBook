import { Component, OnInit } from '@angular/core';

import {
  Ingredient
} from '../shared/Ingredient';
import {
  ShoppingListService
} from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  selectedItem: Ingredient = null;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.items = this.shoppingListService.getItems();
    console.log(this.items);
  }

  onSelectItem(item: Ingredient){
    this.selectedItem = item;
  }

  onCleared() {
    this.selectedItem = null;
  }
}
