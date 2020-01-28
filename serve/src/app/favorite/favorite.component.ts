import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  styles: [ 
    `
      .glyphicon {
        color: green
      }
    `
  ]
})
export class FavoriteComponent{
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter;

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected});
  }
}

export interface FavorteChangedEventArgs {
  newValue: boolean;
}