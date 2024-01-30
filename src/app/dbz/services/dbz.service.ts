
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Gohan',
      power: 800,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 750,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 950
    }
  ];

  onNewCharacter( character: Character ):void{
    // console.log(character);

    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: '',
    //   power: 0,
    // }

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);

  }

  onDeleteId( index: any ){
    // console.log("Main");
    // console.log({index});

    this.characters.splice(index, 1);
  }

  deleteCharacterById(id: String){

    this.characters = this.characters.filter( character => character.id !== id );

  }

}
