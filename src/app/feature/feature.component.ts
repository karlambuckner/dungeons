import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game} from '../game.model';
import { GameService } from '../game.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
  providers: [GameService]
})
export class FeatureComponent implements OnInit {
  games: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private gameService: GameService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }

  goToDetailPage(clickedGame) {
    this.router.navigate(['games', clickedGame.$key]);
     };
}
