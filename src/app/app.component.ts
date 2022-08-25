import { Component } from '@angular/core';
import { Player } from './interfaces/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exampleApp';

  counter:number = 0;

  names:string[] = ['bob', 'jane', 'matthew', 'george'];

  price:number = 10.25;

  isValid:boolean = false;

  players:Player[] = [
    {name: 'Bob', age: 10},
    {name: 'Steve', age: 15},
    {name: 'George', age :100}
  ];
}
