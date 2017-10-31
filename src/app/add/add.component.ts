import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { Game } from './../game.model';

@Component({
  selector: 'add-component',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() newGameSender = new EventEmitter();

  submitForm(location: string, date: string, time: string, player: number, email: string) {
    var newGameToAdd: Game = new Game(location, date, time, player, email);
    this.newGameSender.emit(newGameToAdd);
  }

  constructor() { }

  ngOnInit() {
  }

}
