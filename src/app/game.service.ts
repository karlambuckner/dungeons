import { Injectable } from '@angular/core';
import { Game } from './game.model';
// import { GAMES } from './mock-games';
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

  addGame(newGame: Game) {
   this.games.push(newGame);
 }

  getGameById(gameId: string){
    return this.database.object('/games/' + gameId);
  }

updateGame(localUpdatedGame){
  var gameEntryInFirebase = this.getGameById(localUpdatedGame.$key);
  gameEntryInFirebase.update({location: localUpdatedGame.location,
                             date: localUpdatedGame.date,
                             time: localUpdatedGame.time,
                             player: localUpdatedGame.player,
                             email: localUpdatedGame.email,
                             details: localUpdatedGame.details});
}

deleteGame(localGameToDelete){
   var gameEntryInFirebase = this.getGameById(localGameToDelete.$key);
   gameEntryInFirebase.remove();
 }
}
