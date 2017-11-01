import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { GAMES } from './mock-games';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.games = database.list('games');
  }

  getGames() {
    return this.games;
  }

  getGameById(gameId: number){
    for (var i = 0; i <= GAMES.length - 1; i++) {
      if (GAMES[i].id === gameId) {
        return GAMES[i];
      }
    }
  }
}
