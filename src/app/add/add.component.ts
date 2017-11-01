import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { Game } from './../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'add-component',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [GameService]
})
export class AddComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  submitForm(location: string, date: string, time: string, player: number, email: string, details: string, id: number) {
    var newGame: Game = new Game(location, date, time, player, email, details, id);
    this.gameService.addGame(newGame);
  }
}
