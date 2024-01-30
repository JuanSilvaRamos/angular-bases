
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: 'form.component.html'
})

export class FormComponent {

  @Output()
  public onNew: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    // console.log(this.character);

    // debugger; Debuggear en explorador

    if( this.character.name.length == 0 ) return;

    this.onNew.emit(this.character);

    this.character = { name: '', power: 0 };
    // this.character.name = '';
    // this.character.power = 0;
  }

}
