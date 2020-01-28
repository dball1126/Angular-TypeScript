import { Component } from '@angular/core';
import { FavorteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  post = {
    title: 'serve',
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavorteChangedEventArgs){
    console.log("Favorite changed", eventArgs);
  }
}