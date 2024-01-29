import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: 'hero-component.html',
  styleUrl: 'hero-component.css'
})

export class HeroComponent {

  // constructor() { }

  public name: string = "Spiderman";

  public age: number = 42;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string { // por defecto: Public
    return `${ this.name } - ${ this.age }`;
  }

  metodoImplement(): void {
    //TODO
    throw 'método no implementado'
  }

  changeHero(): void {
    this.name = "Superman";
  }

  changeAge(): void {
    this.age = 35;
  }

  resetForm(): void {
    this.name = 'Spiderman';
    this.age = 42;

    // Angular no esta al pendiente del ciclo de código Javascript
    document.querySelectorAll('h1').forEach( element => {
      element.innerHTML = '<h1>Angular</h1>';
    });
  }

}
