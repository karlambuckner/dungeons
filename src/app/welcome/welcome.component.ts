import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game} from '../game.model';
import { GameService } from '../game.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [GameService]
})
export class WelcomeComponent implements OnInit {
  games: FirebaseListObservable<any[]>;

  constructor(private router: Router, private gameService: GameService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }

  goToDetailPage(clickedGame: Game) {
      //  this.router.navigate(['games', clickedGame.id]);
     };
}
