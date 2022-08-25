import { Component } from '@angular/core';
import { Category } from './enums/category';
import { Player } from './interfaces/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exampleApp';

  counter:number = 0;

  names:string[] = [Category[Category.Dinner], 'jane', 'matthew', 'george'];

  price:number = 10.25;

  isValid:boolean = false;

  Category = Category;

  players:Player[] = [
    {name: 'blah', age: 10, enumType: Category.Breakfast},
    {name: 'Steve', age: 15, enumType: Category.Breakfast},
    {name: 'George', age :100, enumType: Category.Breakfast}
  ];
}
