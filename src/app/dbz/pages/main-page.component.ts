
import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  // constructor( public dbzService: DbzService ){ // Injecta el Servicio: clases, métodos

  //  Buenas prácticas
  constructor( private dbzService: DbzService ){

  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  deleteCharacterById( id: string ): void {
    this.dbzService.deleteCharacterById( id );
  }

  addCharacter( character: Character ): void {
    this.dbzService.onNewCharacter( character );
  }

}
