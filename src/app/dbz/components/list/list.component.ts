
import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Character } from  '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html'
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Goku',
      power: 1500
    }
  ];

  // onDeleteId = Index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter( index: number ):void {
  // onDeleteCharacter( index: String | undefined ):void {
  onDeleteCharacter( id?: string ):void {
    // TODO: Emitir el ID del personaje

    if(!id) return;

    this.onDelete.emit(id); // el nombre: onDelete, se envia a emitir

    // console.log({ index });
  }

}
