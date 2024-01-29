import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Superman','Hulk','Spiderman','Thor'];

  public deleteHero: string | undefined = "";

  removeLastHeroe(): void {
    this.deleteHero = this.heroNames.pop();

  }

}
